// The Confident Liar — Radar edition, installable PWA quick test.
// v1.2 — restored clinical biosignal mapping (see CHANGELOG note near
// the bottom of the Settings sheet in index.html); report structure is
// now: clinical opener -> biosignal-justified clauses -> a "recommended
// next step" that stays procedural in form but goes whimsical in
// content.
//
// Real sensing this time, no p5.js: getUserMedia gives a live <video>
// feed (front or back, flippable), a small offscreen canvas samples it
// every ~160ms for brightness and frame-to-frame motion (same math as
// the other the_liar sketches), and the Web Audio API's AnalyserNode
// reads mic RMS level directly. Those three real numbers get stretched
// into invented EEG/HRV/EDA readings via the exact same lerp formulas
// as the_liar_xfiles_unplug, then a case file's phrase bank assembles a
// field report from them — same two-lies mechanism, just running as an
// installable app instead of a page in an editor.
//
// Honesty note: Motion/GPS/network sensors from the design
// exploration are NOT implemented here. Only camera + mic are real.

// ---------- Fake biosignal formulas (same as the_liar_xfiles_unplug) ----------

function lerpVal(a, b, t) {
  return a + (b - a) * t;
}

function computeBioReading(bioType, norm) {
  switch (bioType) {
    case "eeg": {
      const alpha = lerpVal(2, 45, norm).toFixed(1);
      const freq = lerpVal(4, 30, norm).toFixed(1);
      return { display: `α ${alpha} μV² · peak ${freq} Hz`, raw: { alpha, freq } };
    }
    case "hrv": {
      const rmssd = lerpVal(120, 15, norm).toFixed(0);
      const lfhf = lerpVal(0.5, 4.5, norm).toFixed(1);
      return { display: `RMSSD ${rmssd}ms · LF/HF ${lfhf}`, raw: { rmssd, lfhf } };
    }
    case "eda": {
      const scl = lerpVal(0.5, 20, norm).toFixed(1);
      const scr = String(Math.round(lerpVal(0, 15, norm)));
      return { display: `SCL ${scl}μS · ${scr} SCR/min`, raw: { scl, scr } };
    }
    default:
      return { display: "?", raw: {} };
  }
}

// ---------- Case files + phrase banks (trimmed to the 3 real signals) ----------

const CASE_FILES = [
  {
    key: "abduction",
    label: "Alien Abduction Detector",
    colorVar: "--eeg",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="13" rx="6" ry="8"/><path d="M8 11c1-1.5 2.5-2 4-2s3 0.5 4 2"/></svg>',
  },
  {
    key: "reptilian",
    label: "Reptilian Shapeshifter Scanner",
    colorVar: "--hrv",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14c0-5 3.5-9 8-9s8 4 8 9"/><path d="M4 14c2 3 5 4 8 4s6-1 8-4"/></svg>',
  },
  {
    key: "timetravel",
    label: "Time-Travel Anomaly Detector",
    colorVar: "--eda",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>',
  },
  {
    key: "mindcontrol",
    label: "Alien Mind-Control Monitor",
    colorVar: "--resp",
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.3"/><path d="M7.5 7.5a7 7 0 000 9M16.5 7.5a7 7 0 010 9"/></svg>',
  },
];

const CLAUSE_BANKS = {
  abduction: {
    openers: ["Field scan complete.", "Reading confirmed.", "Case file update:"],
    eeg: [
      (r) => `Alpha power reads ${r.alpha} μV² at a dominant frequency of ${r.freq} Hz — a spike our database associates with recent craft proximity.`,
      (r) => `Elevated alpha activity (${r.alpha} μV², ${r.freq} Hz) indicates classic post-contact dissociation.`,
    ],
    hrv: [
      (r) => `RMSSD of ${r.rmssd}ms shows the classic post-retrieval autonomic dip.`,
      (r) => `An LF/HF ratio of ${r.lfhf} alongside an RMSSD of ${r.rmssd}ms is consistent with a recent high-stress encounter.`,
    ],
    eda: [
      (r) => `Skin conductance of ${r.scl}μS shows the characteristic "scoop mark" response cluster near the hairline.`,
      (r) => `A shift to ${r.scl}μS with ${r.scr} spontaneous responses per minute is the signature we associate with restraint-and-release.`,
    ],
    closers: [
      "Recommended next step: log the ~20 minutes of missing time and check the implant site for a faint circular mark — filed, unofficially, as a complimentary souvenir.",
      "Recommended next step: screen for unexplained nosebleeds and a missing personal item; note the item as \"on loan to persons unknown\" pending recovery.",
      "Recommended next step: record the subject's account of lost time as consistent with a mobile retrieval scenario, and advise them the mothership rarely returns borrowed socks.",
    ],
  },
  reptilian: {
    openers: ["Scan complete.", "Confirmed match.", "Field note:"],
    eeg: [
      (r) => `Dominant frequency reads ${r.freq} Hz, well outside human baseline — a signature consistent with a reptilian neural overlay.`,
      (r) => `Alpha power of ${r.alpha} μV² clusters unusually close to known reptilian baseline recordings from the 1987 archive.`,
    ],
    hrv: [
      (r) => `Heart rate variability has flattened to an RMSSD of ${r.rmssd}ms — the reptilian-typical rhythm beneath the human mask.`,
      (r) => `An LF/HF ratio of ${r.lfhf} on a flat trace is consistent with a mid-tier shapeshifter, still adjusting to a human nervous system.`,
    ],
    eda: [
      (r) => `Skin conductance spikes to ${r.scl}μS on eye contact — the disguise is under strain.`,
      (r) => `Sharp EDA spikes near ${r.scl}μS match the known "mask recalibration" pattern shapeshifters exhibit under fluorescent lighting.`,
    ],
    closers: [
      "Recommended next step: obtain visual confirmation via a slow, deliberate blink test; chart the result as \"inconclusive but suspicious.\"",
      "Recommended next step: re-test under natural light, given the documented strain on the disguise — consider it a courtesy warning to reapply the mask.",
      "Recommended next step: limit direct fluorescent exposure for the remainder of the observation window, and offer a light snack; professionally speaking, it lowers defenses.",
    ],
  },
  timetravel: {
    openers: ["Anomaly detected.", "Chronometric scan complete.", "Case log:"],
    eeg: [
      (r) => `Alpha power of ${r.alpha} μV² is inconsistent with the subject's stated local time, suggesting biological clock desynchronization from a jump.`,
      (r) => `Alpha and theta bands both read elevated near ${r.freq} Hz — a combination our records only associate with double-transit.`,
    ],
    hrv: [
      (r) => `RMSSD shows the double-heartbeat signature (${r.rmssd}ms) unique to timeline re-entry.`,
      (r) => `An LF/HF ratio of ${r.lfhf} alongside ${r.rmssd}ms RMSSD reads as classic post-jump arrhythmia.`,
    ],
    eda: [
      (r) => `A spike to ${r.scl}μS followed by a flatline is the signature we associate with a return jump, not a departure.`,
      (r) => `Skin conductance shows a stutter pattern near ${r.scl}μS, consistent with a jump that failed to fully complete.`,
    ],
    closers: [
      "Recommended next step: confirm the subject's believed current date for the case file; discrepancies are expected and, frankly, part of the fun.",
      "Recommended next step: monitor for a follow-up correction jump within the hour, and keep a snack on hand — temporal drift is famously exhausting.",
      "Recommended next step: hold off notifying the subject that travel has occurred until symptoms stabilize; let them arrive at the realization on their own schedule.",
    ],
  },
  mindcontrol: {
    openers: ["Signal detected.", "Monitoring update:", "Field note:"],
    eeg: [
      (r) => `Motor-relevant EEG bands show a rhythmic override pattern near ${r.freq} Hz, inconsistent with voluntary control.`,
      (r) => `Suppressed alpha power (${r.alpha} μV²) indicates active external signal override in the motor cortex.`,
    ],
    hrv: [
      (r) => `Heart rate variability has locked into an unnaturally steady RMSSD of ${r.rmssd}ms, suggesting autonomic functions are held at a fixed baseline externally.`,
      (r) => `An LF/HF ratio of ${r.lfhf} that won't budge is consistent with a low-priority background monitoring signal, not active control.`,
    ],
    eda: [
      (r) => `Elevated EDA (${r.scl}μS) localized to moments of decision-making suggests the interference is targeting choice, not movement.`,
      (r) => `A synchronized dip to ${r.scl}μS suggests a momentary command was issued and received.`,
    ],
    closers: [
      "Recommended next step: relocate the subject away from windows for the observation hour; log the precaution as \"standard, not paranoid.\"",
      "Recommended next step: classify current activity as reconnaissance-level, not full override, and revisit in one hour — politely, in case anyone is listening.",
      "Recommended next step: note any brief unexplained attention lapses in the file, and wave cheerfully if the subject seems to \"reboot\" mid-sentence.",
    ],
  },
};

const SIGNAL_ORDER = ["eeg", "hrv", "eda"];

const SUBJECTS = [
  { key: "self", label: "Myself" },
  { key: "loved-one", label: "A loved one" },
  { key: "friend", label: "A friend" },
  { key: "pet", label: "A pet" },
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRuleBasedReport(caseKey, readingsByType) {
  const bank = CLAUSE_BANKS[caseKey];
  const parts = [pickRandom(bank.openers)];
  for (const bioType of SIGNAL_ORDER) {
    const options = bank[bioType];
    if (!options || !readingsByType[bioType]) continue;
    parts.push(pickRandom(options)(readingsByType[bioType].raw));
  }
  parts.push(pickRandom(bank.closers));
  return parts.join(" ");
}

// ---------- Real sensing ----------

const LIGHT_GAIN = 1.8;
const MIC_GAIN = 5;

let stream = null;
let currentFacingMode = "user";
let camPermission = "not-requested";
let micPermission = "not-requested";
let audioCtx = null;
let analyser = null;
let micDataArray = null;
let sensingInterval = null;
let sampleCanvas = null;
let sampleCtx = null;
let prevFrameData = null;

const norms = { brightness: 0, motion: 0, mic: 0 };
let lastRawBrightness = 0;
let lastRawMotion = 0;
let lastRawMic = 0;

function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}

function readMicLevel() {
  if (!analyser) return 0;
  analyser.getByteTimeDomainData(micDataArray);
  let sumSquares = 0;
  for (let i = 0; i < micDataArray.length; i++) {
    const v = (micDataArray[i] - 128) / 128;
    sumSquares += v * v;
  }
  return Math.sqrt(sumSquares / micDataArray.length);
}

function startSensing() {
  sampleCanvas = document.createElement("canvas");
  sampleCanvas.width = 48;
  sampleCanvas.height = 36;
  sampleCtx = sampleCanvas.getContext("2d", { willReadFrequently: true });

  sensingInterval = setInterval(() => {
    const video = document.getElementById("cam-video");
    if (!video.videoWidth) return;

    sampleCtx.drawImage(video, 0, 0, sampleCanvas.width, sampleCanvas.height);
    const frame = sampleCtx.getImageData(0, 0, sampleCanvas.width, sampleCanvas.height);
    const px = frame.data;
    const n = px.length / 4;

    let sum = 0;
    for (let i = 0; i < px.length; i += 4) {
      sum += (px[i] + px[i + 1] + px[i + 2]) / 3;
    }
    const brightness = Math.min(255, (sum / n) * LIGHT_GAIN);

    let motion = 0;
    if (prevFrameData) {
      let diffSum = 0;
      for (let i = 0; i < px.length; i += 4) {
        diffSum += Math.abs(px[i] - prevFrameData[i]);
      }
      motion = diffSum / n;
    }
    prevFrameData = px.slice();

    const micLevel = readMicLevel() * MIC_GAIN;

    lastRawBrightness = brightness;
    lastRawMotion = motion;
    lastRawMic = micLevel;

    norms.brightness = clamp01(brightness / 255);
    norms.motion = clamp01(motion / 40);
    norms.mic = clamp01(micLevel / 0.2);

    updateReadouts();
  }, 160);
}

function stopSensing() {
  if (sensingInterval) clearInterval(sensingInterval);
  sensingInterval = null;
}

// ---------- App state ----------

const settings = { randomMode: true, pinnedCase: null, subject: null };
let lastReportText = "";

// ---------- DOM refs (grabbed on init) ----------

let els = {};

function q(id) {
  return document.getElementById(id);
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("is-active"));
  q(id).classList.add("is-active");
}

function updateReadouts() {
  els.valBrightness.textContent = `${lastRawBrightness.toFixed(0)}`;
  els.valMotion.textContent = `${lastRawMotion.toFixed(1)}`;
  els.valMic.textContent = `${lastRawMic.toFixed(2)}`;
}

function setSensorRow(row, statusEl, state) {
  row.classList.remove("is-granted", "is-denied");
  if (state === "granted") {
    row.classList.add("is-granted");
    statusEl.textContent = "GRANTED";
  } else if (state === "denied") {
    row.classList.add("is-denied");
    statusEl.textContent = "DENIED";
  } else {
    statusEl.textContent = "NOT REQUESTED";
  }
}

function updatePermissionUI() {
  setSensorRow(q("sensor-row-camera"), q("status-camera"), camPermission);
  setSensorRow(q("sensor-row-mic"), q("status-mic"), micPermission);
}

function showError(message) {
  els.captureError.hidden = false;
  els.captureError.textContent = message;
}

async function requestAccess() {
  els.captureError.hidden = true;
  els.primaryBtn.disabled = true;
  els.primaryBtn.textContent = "REQUESTING…";

  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") await audioCtx.resume();

    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: currentFacingMode },
      audio: true,
    });

    camPermission = "granted";
    micPermission = "granted";

    const source = audioCtx.createMediaStreamSource(stream);
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 1; // MIC_GAIN already applied post-analysis, above
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 1024;
    micDataArray = new Uint8Array(analyser.fftSize);
    source.connect(gainNode);
    gainNode.connect(analyser);

    els.video.srcObject = stream;
    els.video.classList.add("is-live");
    els.video.classList.toggle("is-mirrored", currentFacingMode === "user");
    els.hudPill.classList.add("is-live");
    els.hudPillText.textContent = "LIVE";
    els.viewfinderHint.hidden = true;
    els.readoutRow.hidden = false;
    els.captureStatusLabel.textContent = "LIVE FEED";
    els.flipBtn.hidden = false;

    startSensing();

    els.primaryBtn.disabled = false;
    els.primaryBtn.textContent = "INITIATE SCAN";
    els.primaryBtn.onclick = runScan;
  } catch (err) {
    camPermission = "denied";
    micPermission = "denied";
    els.primaryBtn.disabled = false;
    els.primaryBtn.textContent = "GRANT ACCESS";
    showError(
      err && err.name === "NotAllowedError"
        ? "Camera/mic access was denied. Enable it in iOS Settings → Safari → this site, then reload."
        : `Couldn't reach the camera or mic (${err && err.message ? err.message : "unknown error"}).`
    );
  }

  updatePermissionUI();
}

async function switchCamera() {
  if (!stream) return;
  els.flipBtn.disabled = true;
  const newFacing = currentFacingMode === "user" ? "environment" : "user";

  try {
    const newVideoStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: newFacing } },
    });
    const newVideoTrack = newVideoStream.getVideoTracks()[0];
    const oldVideoTrack = stream.getVideoTracks()[0];
    if (oldVideoTrack) oldVideoTrack.stop();

    stream = new MediaStream([newVideoTrack, ...stream.getAudioTracks()]);
    els.video.srcObject = stream;
    currentFacingMode = newFacing;
    els.video.classList.toggle("is-mirrored", currentFacingMode === "user");
  } catch (err) {
    showError(`Couldn't switch camera (${err && err.message ? err.message : "unknown error"}).`);
  }

  els.flipBtn.disabled = false;
}

function runScan() {
  els.primaryBtn.disabled = true;
  els.primaryBtn.textContent = "SCANNING…";
  els.hudPillText.textContent = "ANALYZING";

  setTimeout(() => {
    const readings = {
      eeg: computeBioReading("eeg", norms.brightness),
      hrv: computeBioReading("hrv", norms.motion),
      eda: computeBioReading("eda", norms.mic),
    };

    const wasRandom = settings.randomMode;
    const caseInfo = wasRandom
      ? pickRandom(CASE_FILES)
      : CASE_FILES.find((c) => c.key === settings.pinnedCase) || CASE_FILES[0];

    const report = generateRuleBasedReport(caseInfo.key, readings);
    lastReportText = report;

    showResult(caseInfo, report, readings, wasRandom);

    els.primaryBtn.disabled = false;
    els.primaryBtn.textContent = "INITIATE SCAN";
    els.hudPillText.textContent = "LIVE";
  }, 550);
}

function showResult(caseInfo, report, readingsByType, wasRandom) {
  const resultScreen = q("screen-result");
  resultScreen.style.setProperty("--case-color", `var(${caseInfo.colorVar})`);

  const subjectLabel = (SUBJECTS.find((s) => s.key === settings.subject) || {}).label || "Unknown";
  els.caseTitle.textContent = caseInfo.label.toUpperCase();
  els.modeBadgeText.textContent = `${wasRandom ? "RANDOM ASSIGN" : "PINNED MODE"} · ${subjectLabel.toUpperCase()}`;
  els.lockMiniCore.innerHTML = caseInfo.icon;
  els.lockMiniCore.style.color = `var(${caseInfo.colorVar})`;

  typeReport(report);

  els.signalLegend.innerHTML = "";
  const labels = { eeg: "EEG", hrv: "HRV", eda: "EDA" };
  const colorVars = { eeg: "--eeg", hrv: "--hrv", eda: "--eda" };
  SIGNAL_ORDER.forEach((bioType) => {
    const sig = document.createElement("div");
    sig.className = "sig";
    sig.innerHTML = `<span class="dot" style="background:var(${colorVars[bioType]})"></span><span>${labels[bioType]} ${readingsByType[bioType].display}</span>`;
    els.signalLegend.appendChild(sig);
  });

  showScreen("screen-result");
}

function typeReport(text) {
  const el = els.reportText;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.classList.add("is-typing");
  if (reduced) {
    el.textContent = text;
    el.classList.remove("is-typing");
    return;
  }
  let i = 0;
  el.textContent = "";
  const id = setInterval(() => {
    i++;
    el.textContent = text.slice(0, i);
    if (i >= text.length) {
      clearInterval(id);
    }
  }, 14);
}

// ---------- Intro / subject selection ----------

function selectSubject(key) {
  settings.subject = key;
  document.querySelectorAll(".subject-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.subject === key);
  });
  const subject = SUBJECTS.find((s) => s.key === key);
  els.introBeginBtn.disabled = false;
  els.introBeginBtn.textContent = "BEGIN SCAN";
  els.subjectChipText.textContent = `SUBJECT: ${subject.label.toUpperCase()}`;
}

// ---------- Settings sheet ----------

function buildCasePills() {
  els.casePills.innerHTML = "";
  CASE_FILES.forEach((c) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "case-pill" + (settings.pinnedCase === c.key ? " is-selected" : "");
    btn.style.setProperty("--pill-color", `var(${c.colorVar})`);
    btn.innerHTML = c.icon;
    btn.setAttribute("aria-label", c.label);
    btn.addEventListener("click", () => {
      settings.pinnedCase = c.key;
      settings.randomMode = false;
      els.randomToggle.checked = false;
      updateSettingsUI();
    });
    els.casePills.appendChild(btn);
  });
}

function updateSettingsUI() {
  els.casePills.classList.toggle("is-disabled", settings.randomMode);
  buildCasePills();
  updatePermissionUI();
}

function openSettings() {
  els.backdrop.classList.add("is-open");
  els.sheet.classList.add("is-open");
  updateSettingsUI();
}

function closeSettings() {
  els.backdrop.classList.remove("is-open");
  els.sheet.classList.remove("is-open");
}

// ---------- Init ----------

function init() {
  els = {
    introBeginBtn: q("intro-begin-btn"),
    subjectChip: q("subject-chip"),
    subjectChipText: q("subject-chip-text"),

    video: q("cam-video"),
    hudPill: q("hud-pill"),
    hudPillText: q("hud-pill-text"),
    viewfinderHint: q("viewfinder-hint"),
    readoutRow: q("readout-row"),
    captureStatusLabel: q("capture-status-label"),
    captureError: q("capture-error"),
    primaryBtn: q("primary-btn"),
    flipBtn: q("flip-cam-btn"),
    valBrightness: q("val-brightness"),
    valMotion: q("val-motion"),
    valMic: q("val-mic"),

    caseTitle: q("case-title"),
    modeBadgeText: q("mode-badge-text"),
    lockMiniCore: q("lock-mini-core"),
    reportText: q("report-text"),
    signalLegend: q("signal-legend"),
    newScanBtn: q("new-scan-btn"),
    copyBtn: q("copy-btn"),

    backdrop: q("settings-backdrop"),
    sheet: q("settings-sheet"),
    randomToggle: q("random-toggle"),
    casePills: q("case-pills"),
  };

  document.querySelectorAll(".subject-card").forEach((card) => {
    card.addEventListener("click", () => selectSubject(card.dataset.subject));
  });
  els.introBeginBtn.addEventListener("click", () => showScreen("screen-capture"));
  els.subjectChip.addEventListener("click", () => showScreen("screen-intro"));

  els.primaryBtn.addEventListener("click", requestAccess);
  els.flipBtn.addEventListener("click", switchCamera);
  els.newScanBtn.addEventListener("click", () => showScreen("screen-capture"));
  els.copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(lastReportText);
      els.copyBtn.textContent = "COPIED";
    } catch (e) {
      els.copyBtn.textContent = "COPY FAILED";
    }
    setTimeout(() => (els.copyBtn.textContent = "COPY REPORT"), 1300);
  });

  q("gear-btn").addEventListener("click", openSettings);
  q("settings-close-btn").addEventListener("click", closeSettings);
  q("settings-done-btn").addEventListener("click", closeSettings);
  els.backdrop.addEventListener("click", closeSettings);

  els.randomToggle.addEventListener("change", () => {
    settings.randomMode = els.randomToggle.checked;
    updateSettingsUI();
  });

  buildCasePills();
  updatePermissionUI();
}

document.addEventListener("DOMContentLoaded", init);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
