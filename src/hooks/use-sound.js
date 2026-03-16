import {useCallback, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getUiState, toggleSound} from "../features/ui/ui-slice";

const useSounds = () => {
    const audioCtxRef = useRef(null);
    const {soundEnabled} = useSelector(getUiState);
    const dispatch = useDispatch();

    const getCtx = useCallback(() => {
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        // Resume if suspended (browsers require user gesture)
        if (audioCtxRef.current.state === "suspended") {
            audioCtxRef.current.resume();
        }
        return audioCtxRef.current;
    }, []);

    const guard = useCallback((fn) => {
        if (!soundEnabled) return;
        fn();
    }, [soundEnabled]);

    // Metallic "tink" — two spoons / menu select
    const playTick = useCallback(() => guard(() => {
        try {
            const ctx = getCtx(); const t = ctx.currentTime;
            // Sharp metallic ping — high sine that decays fast
            const ping = ctx.createOscillator(); const pg = ctx.createGain();
            ping.connect(pg); pg.connect(ctx.destination);
            ping.type = "sine";
            ping.frequency.setValueAtTime(4200, t);
            ping.frequency.exponentialRampToValueAtTime(2800, t + 0.04);
            pg.gain.setValueAtTime(0.12, t);
            pg.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
            ping.start(t); ping.stop(t + 0.08);
            // Metallic body — triangle wave for the "ring"
            const ring = ctx.createOscillator(); const rg = ctx.createGain();
            ring.connect(rg); rg.connect(ctx.destination);
            ring.type = "triangle";
            ring.frequency.setValueAtTime(1800, t);
            ring.frequency.exponentialRampToValueAtTime(1200, t + 0.06);
            rg.gain.setValueAtTime(0.08, t);
            rg.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
            ring.start(t); ring.stop(t + 0.1);
            // Tiny noise transient for the "click" attack
            const nLen = ctx.sampleRate * 0.01;
            const nBuf = ctx.createBuffer(1, nLen, ctx.sampleRate);
            const nd = nBuf.getChannelData(0);
            for (let i = 0; i < nLen; i++) nd[i] = (Math.random() * 2 - 1) * Math.exp(-i / (nLen * 0.3));
            const ns = ctx.createBufferSource(); ns.buffer = nBuf;
            const hpf = ctx.createBiquadFilter(); hpf.type = "highpass"; hpf.frequency.setValueAtTime(6000, t);
            const ng = ctx.createGain(); ng.gain.setValueAtTime(0.15, t); ng.gain.exponentialRampToValueAtTime(0.001, t + 0.015);
            ns.connect(hpf); hpf.connect(ng); ng.connect(ctx.destination);
            ns.start(t); ns.stop(t + 0.015);
        } catch (e) {}
    }), [guard, getCtx]);

    // Lightning crack on click
    const playClick = useCallback(() => guard(() => {
        try {
            const ctx = getCtx(); const t = ctx.currentTime;
            // White noise crack
            const len = ctx.sampleRate * 0.08;
            const buf = ctx.createBuffer(1, len, ctx.sampleRate);
            const d = buf.getChannelData(0);
            for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.12));
            const noise = ctx.createBufferSource(); noise.buffer = buf;
            const filter = ctx.createBiquadFilter(); filter.type = "bandpass"; filter.frequency.setValueAtTime(3500, t); filter.Q.setValueAtTime(0.8, t);
            const gain = ctx.createGain(); gain.gain.setValueAtTime(0.25, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
            noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
            noise.start(t); noise.stop(t + 0.1);
            // Sub thud
            const osc = ctx.createOscillator(); const og = ctx.createGain();
            osc.connect(og); og.connect(ctx.destination); osc.type = "sine";
            osc.frequency.setValueAtTime(120, t); osc.frequency.exponentialRampToValueAtTime(30, t + 0.15);
            og.gain.setValueAtTime(0.12, t); og.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
            osc.start(t); osc.stop(t + 0.18);
        } catch (e) {}
    }), [guard, getCtx]);

    // Rolling thunder success
    const playSuccess = useCallback(() => guard(() => {
        try {
            const ctx = getCtx(); const t = ctx.currentTime;
            const len = ctx.sampleRate * 0.12; const buf = ctx.createBuffer(1, len, ctx.sampleRate);
            const d = buf.getChannelData(0);
            for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.06));
            const noise = ctx.createBufferSource(); noise.buffer = buf;
            const ng = ctx.createGain(); ng.gain.setValueAtTime(0.2, t); ng.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
            noise.connect(ng); ng.connect(ctx.destination); noise.start(t); noise.stop(t + 0.15);
            [100, 70, 45].forEach((freq, i) => {
                const osc = ctx.createOscillator(); const gain = ctx.createGain();
                osc.connect(gain); gain.connect(ctx.destination); osc.type = "sawtooth";
                osc.frequency.setValueAtTime(freq, t + i * 0.12);
                osc.frequency.exponentialRampToValueAtTime(freq * 0.3, t + i * 0.12 + 0.3);
                gain.gain.setValueAtTime(0.08, t + i * 0.12);
                gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.12 + 0.35);
                osc.start(t + i * 0.12); osc.stop(t + i * 0.12 + 0.35);
            });
        } catch (e) {}
    }), [guard, getCtx]);

    // Epic thunderbolt — 404 page
    const playThunderbolt = useCallback(() => guard(() => {
        try {
            const ctx = getCtx(); const t = ctx.currentTime;
            // LOUD crack
            const len = ctx.sampleRate * 0.2; const buf = ctx.createBuffer(1, len, ctx.sampleRate);
            const d = buf.getChannelData(0);
            for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.04));
            const crack = ctx.createBufferSource(); crack.buffer = buf;
            const hpf = ctx.createBiquadFilter(); hpf.type = "highpass"; hpf.frequency.setValueAtTime(1500, t);
            const cg = ctx.createGain(); cg.gain.setValueAtTime(0.35, t); cg.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
            crack.connect(hpf); hpf.connect(cg); cg.connect(ctx.destination); crack.start(t); crack.stop(t + 0.2);
            // Deep BOOM
            const boom = ctx.createOscillator(); const bg = ctx.createGain();
            boom.connect(bg); bg.connect(ctx.destination); boom.type = "sine";
            boom.frequency.setValueAtTime(90, t + 0.03); boom.frequency.exponentialRampToValueAtTime(18, t + 1);
            bg.gain.setValueAtTime(0.3, t + 0.03); bg.gain.exponentialRampToValueAtTime(0.001, t + 1.1);
            boom.start(t + 0.03); boom.stop(t + 1.1);
            // Sizzle
            const sLen = ctx.sampleRate * 0.5; const sBuf = ctx.createBuffer(1, sLen, ctx.sampleRate);
            const sd = sBuf.getChannelData(0);
            for (let i = 0; i < sLen; i++) sd[i] = (Math.random() * 2 - 1) * Math.exp(-i / (sLen * 0.15)) * (Math.random() > 0.6 ? 1 : 0.05);
            const sizzle = ctx.createBufferSource(); sizzle.buffer = sBuf;
            const sf = ctx.createBiquadFilter(); sf.type = "bandpass"; sf.frequency.setValueAtTime(5000, t + 0.06); sf.frequency.exponentialRampToValueAtTime(600, t + 0.6); sf.Q.setValueAtTime(3, t);
            const sg = ctx.createGain(); sg.gain.setValueAtTime(0.12, t + 0.06); sg.gain.exponentialRampToValueAtTime(0.001, t + 0.6);
            sizzle.connect(sf); sf.connect(sg); sg.connect(ctx.destination); sizzle.start(t + 0.06); sizzle.stop(t + 0.6);
            // Distant rumble
            [50, 35, 22].forEach((freq, i) => {
                const r = ctx.createOscillator(); const rg = ctx.createGain();
                r.connect(rg); rg.connect(ctx.destination); r.type = "sawtooth";
                r.frequency.setValueAtTime(freq, t + 0.4 + i * 0.2);
                r.frequency.exponentialRampToValueAtTime(freq * 0.2, t + 0.4 + i * 0.2 + 0.5);
                rg.gain.setValueAtTime(0.06, t + 0.4 + i * 0.2);
                rg.gain.exponentialRampToValueAtTime(0.001, t + 0.4 + i * 0.2 + 0.55);
                r.start(t + 0.4 + i * 0.2); r.stop(t + 0.4 + i * 0.2 + 0.55);
            });
        } catch (e) {}
    }), [guard, getCtx]);

    // "EXCELLENT!" — MK ascending power chord (LOUD)
    const playExcellent = useCallback(() => guard(() => {
        try {
            const ctx = getCtx(); const t = ctx.currentTime;
            // Ascending power notes
            [330, 440, 550, 660, 880].forEach((freq, i) => {
                const osc = ctx.createOscillator(); const gain = ctx.createGain();
                osc.connect(gain); gain.connect(ctx.destination);
                osc.type = i < 3 ? "square" : "sawtooth";
                osc.frequency.setValueAtTime(freq, t + i * 0.09);
                gain.gain.setValueAtTime(0.15, t + i * 0.09);
                gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.09 + 0.3);
                osc.start(t + i * 0.09); osc.stop(t + i * 0.09 + 0.3);
            });
            // Impact hit on beat 1
            const hit = ctx.createOscillator(); const hg = ctx.createGain();
            hit.connect(hg); hg.connect(ctx.destination); hit.type = "sine";
            hit.frequency.setValueAtTime(100, t); hit.frequency.exponentialRampToValueAtTime(30, t + 0.2);
            hg.gain.setValueAtTime(0.2, t); hg.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
            hit.start(t); hit.stop(t + 0.25);
            // Sustain shimmer
            const sh = ctx.createOscillator(); const shg = ctx.createGain();
            sh.connect(shg); shg.connect(ctx.destination); sh.type = "sine";
            sh.frequency.setValueAtTime(880, t + 0.45);
            shg.gain.setValueAtTime(0.1, t + 0.45); shg.gain.exponentialRampToValueAtTime(0.001, t + 1.5);
            sh.start(t + 0.45); sh.stop(t + 1.5);
        } catch (e) {}
    }), [guard, getCtx]);

    // Shao Khan laugh — deep evil descending "HA HA HA"
    const playLaugh = useCallback(() => guard(() => {
        try {
            const ctx = getCtx(); const t = ctx.currentTime;
            // Three staccato "HA" notes descending
            [200, 160, 120].forEach((freq, i) => {
                // Main tone
                const osc = ctx.createOscillator(); const gain = ctx.createGain();
                osc.connect(gain); gain.connect(ctx.destination);
                osc.type = "sawtooth";
                osc.frequency.setValueAtTime(freq, t + i * 0.22);
                osc.frequency.exponentialRampToValueAtTime(freq * 0.5, t + i * 0.22 + 0.15);
                gain.gain.setValueAtTime(0.15, t + i * 0.22);
                gain.gain.setValueAtTime(0.15, t + i * 0.22 + 0.05);
                gain.gain.exponentialRampToValueAtTime(0.001, t + i * 0.22 + 0.18);
                osc.start(t + i * 0.22); osc.stop(t + i * 0.22 + 0.18);
                // Harmonic layer
                const h = ctx.createOscillator(); const hg = ctx.createGain();
                h.connect(hg); hg.connect(ctx.destination); h.type = "square";
                h.frequency.setValueAtTime(freq * 0.5, t + i * 0.22);
                h.frequency.exponentialRampToValueAtTime(freq * 0.25, t + i * 0.22 + 0.15);
                hg.gain.setValueAtTime(0.06, t + i * 0.22);
                hg.gain.exponentialRampToValueAtTime(0.001, t + i * 0.22 + 0.18);
                h.start(t + i * 0.22); h.stop(t + i * 0.22 + 0.18);
            });
            // Deep sub presence
            const sub = ctx.createOscillator(); const sg = ctx.createGain();
            sub.connect(sg); sg.connect(ctx.destination); sub.type = "sine";
            sub.frequency.setValueAtTime(70, t); sub.frequency.exponentialRampToValueAtTime(25, t + 0.8);
            sg.gain.setValueAtTime(0.12, t); sg.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
            sub.start(t); sub.stop(t + 0.9);
        } catch (e) {}
    }), [guard, getCtx]);

    // "ROUND COMPLETE" — two-note power stab
    const playRoundComplete = useCallback(() => guard(() => {
        try {
            const ctx = getCtx(); const t = ctx.currentTime;
            [[440, 0], [660, 0.14]].forEach(([freq, delay]) => {
                const osc = ctx.createOscillator(); const gain = ctx.createGain();
                osc.connect(gain); gain.connect(ctx.destination); osc.type = "square";
                osc.frequency.setValueAtTime(freq, t + delay);
                gain.gain.setValueAtTime(0.18, t + delay);
                gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.2);
                osc.start(t + delay); osc.stop(t + delay + 0.2);
            });
            // Sub punch
            const sub = ctx.createOscillator(); const sg = ctx.createGain();
            sub.connect(sg); sg.connect(ctx.destination); sub.type = "sine";
            sub.frequency.setValueAtTime(90, t); sub.frequency.exponentialRampToValueAtTime(25, t + 0.25);
            sg.gain.setValueAtTime(0.2, t); sg.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
            sub.start(t); sub.stop(t + 0.3);
        } catch (e) {}
    }), [guard, getCtx]);

    const toggle = useCallback(() => dispatch(toggleSound()), [dispatch]);

    return {playTick, playClick, playSuccess, playThunderbolt, playExcellent, playLaugh, playRoundComplete, soundEnabled, toggle};
};

export default useSounds;
