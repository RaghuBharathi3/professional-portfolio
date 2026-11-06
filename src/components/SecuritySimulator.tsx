import React, { useState } from 'react';
import { TELEMETRY_SAMPLES, TelemetrySample } from '../data/portfolioData';
import { 
  Terminal, 
  ShieldCheck, 
  Layers, 
  FileCode, 
  ExternalLink 
} from 'lucide-react';

export const SecuritySimulator: React.FC = () => {
  const [selectedSample, setSelectedSample] = useState<TelemetrySample>(TELEMETRY_SAMPLES[0]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'raw' | 'normalized' | 'compliance'>('raw');

  const handleSelectSample = (sample: TelemetrySample) => {
    setIsProcessing(true);
    setSelectedSample(sample);
    setTimeout(() => {
      setIsProcessing(false);
    }, 280);
  };

  const getRiskColor = (score: number) => {
    if (score >= 90) return 'text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-950/60 border-red-200 dark:border-red-900';
    if (score >= 70) return 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900';
    return 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900';
  };

  return (
    <section id="simulator" className="py-20 border-b border-stone-200/80 dark:border-stone-800/80 bg-surface-100/60 dark:bg-surface-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-brand-700 dark:text-brand-400 mb-2">
            <span>04 / Interactive Technical Demonstration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 font-sans">
            Multi-Cloud Telemetry & Risk Scoring Engine
          </h2>
          <p className="mt-2 text-stone-600 dark:text-stone-400 text-sm sm:text-base">
            Live interactive preview of my normalized multi-cloud ingestion pipeline, Random Forest anomaly model, and compliance correlation logic.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm overflow-hidden text-left">
          
          {/* Cloud Sample Selector Tabs */}
          <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 bg-surface-50 dark:bg-stone-950/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-brand-600 dark:text-brand-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                Select Telemetry Event:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {TELEMETRY_SAMPLES.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all flex items-center space-x-1.5 ${
                    selectedSample.id === sample.id
                      ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-2xs font-semibold'
                      : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700'
                  }`}
                >
                  <span className="font-bold">{sample.cloud}</span>
                  <span className="text-[10px] opacity-75">• {sample.severity}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Event Overview Bar */}
          <div className="p-4 sm:p-6 border-b border-stone-100 dark:border-stone-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-stone-50/50 dark:bg-stone-950/20">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200">
                  {selectedSample.cloud} Provider
                </span>
                <span className="text-xs font-mono text-stone-400">
                  ID: {selectedSample.normalizedEvent.event_id}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 font-sans mt-1">
                {selectedSample.eventTitle}
              </h3>
            </div>

            {/* Evaluated Risk Metric Pill */}
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-[10px] font-mono uppercase text-stone-400">
                  Composite Risk Score
                </div>
                <div className="text-xs font-mono text-stone-600 dark:text-stone-300">
                  Range: 0 – 100
                </div>
              </div>
              <div className={`px-4 py-2 rounded-xl border text-center ${getRiskColor(selectedSample.evaluation.final_risk_score)}`}>
                <span className="text-2xl font-bold font-mono">
                  {isProcessing ? '...' : selectedSample.evaluation.final_risk_score}
                </span>
                <span className="text-[10px] font-mono uppercase block font-semibold">
                  {selectedSample.evaluation.risk_level}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Inspection Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-stone-200 dark:divide-stone-800">
            
            {/* Left Column: Code / Schema Inspector */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Tab navigation */}
              <div className="flex items-center space-x-1 p-2 border-b border-stone-200 dark:border-stone-800 bg-surface-50 dark:bg-stone-950/40 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('raw')}
                  className={`px-3 py-1.5 rounded-md flex items-center space-x-1.5 ${
                    activeTab === 'raw'
                      ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-semibold shadow-2xs'
                      : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Raw Ingested JSON</span>
                </button>

                <button
                  onClick={() => setActiveTab('normalized')}
                  className={`px-3 py-1.5 rounded-md flex items-center space-x-1.5 ${
                    activeTab === 'normalized'
                      ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-semibold shadow-2xs'
                      : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Pydantic Canonical Schema</span>
                </button>

                <button
                  onClick={() => setActiveTab('compliance')}
                  className={`px-3 py-1.5 rounded-md flex items-center space-x-1.5 ${
                    activeTab === 'compliance'
                      ? 'bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-semibold shadow-2xs'
                      : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-300'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Compliance Mapping</span>
                </button>
              </div>

              {/* Code Panel Body */}
              <div className="p-4 sm:p-5 bg-stone-950 text-stone-200 font-mono text-xs overflow-x-auto min-h-[300px]">
                {activeTab === 'raw' && (
                  <pre className="text-emerald-400/90 leading-relaxed">
                    {JSON.stringify(selectedSample.rawEvent, null, 2)}
                  </pre>
                )}

                {activeTab === 'normalized' && (
                  <div className="space-y-4">
                    <div className="text-stone-400 text-[11px] pb-2 border-b border-stone-800">
                      // Validated with Pydantic BaseModel (Enforced Datatypes & ARN Normalization)
                    </div>
                    <pre className="text-brand-300 leading-relaxed">
                      {JSON.stringify(selectedSample.normalizedEvent, null, 2)}
                    </pre>
                  </div>
                )}

                {activeTab === 'compliance' && (
                  <div className="space-y-4 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-1">
                      <div className="text-brand-400 font-bold uppercase text-[10px]">
                        NIST CSF 2.0 Mapping
                      </div>
                      <div className="text-stone-200">
                        {selectedSample.evaluation.mapped_controls.nist}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-1">
                      <div className="text-brand-400 font-bold uppercase text-[10px]">
                        CIS Controls v8
                      </div>
                      <div className="text-stone-200">
                        {selectedSample.evaluation.mapped_controls.cis}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-1">
                      <div className="text-brand-400 font-bold uppercase text-[10px]">
                        ISO/IEC 27001:2022
                      </div>
                      <div className="text-stone-200">
                        {selectedSample.evaluation.mapped_controls.iso}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Model Pipeline & Evaluation Breakdown */}
            <div className="lg:col-span-5 p-5 sm:p-6 space-y-5 bg-white dark:bg-stone-900">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold">
                  Inference Diagnostics
                </span>
                <h4 className="text-base font-bold text-stone-900 dark:text-stone-100 font-sans">
                  Risk Computation Pipeline
                </h4>
              </div>

              {/* Model Confidence Gauges */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-stone-600 dark:text-stone-400">Random Forest Anomaly Prob:</span>
                    <span className="font-bold text-stone-900 dark:text-stone-100">
                      {(selectedSample.evaluation.rf_anomaly_probability * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
                    <div 
                      className="h-full bg-brand-600 dark:bg-brand-500 rounded-full transition-all duration-500"
                      style={{ width: `${selectedSample.evaluation.rf_anomaly_probability * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-stone-600 dark:text-stone-400">Heuristic Severity Weight:</span>
                    <span className="font-bold text-stone-900 dark:text-stone-100">
                      {(selectedSample.evaluation.heuristic_weight * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-stone-100 dark:bg-stone-800 overflow-hidden">
                    <div 
                      className="h-full bg-amber-600 dark:bg-amber-500 rounded-full transition-all duration-500"
                      style={{ width: `${selectedSample.evaluation.heuristic_weight * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Recommended Remediation Action */}
              <div className="p-4 rounded-xl bg-surface-50 dark:bg-stone-950/60 border border-stone-200/80 dark:border-stone-800/80 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider text-brand-800 dark:text-brand-300 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Deterministic Remediation</span>
                </div>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                  {selectedSample.evaluation.remediation}
                </p>
              </div>

              {/* Link to actual source code */}
              <div className="pt-2">
                <a
                  href="https://github.com/RaghuBharathi3/real-time-cloud-threat-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full p-3 rounded-lg bg-stone-100 hover:bg-stone-200/80 dark:bg-stone-800 dark:hover:bg-stone-700 text-xs font-mono text-stone-800 dark:text-stone-200 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-brand-600" />
                    <span>Inspect Python FastAPI Source Code</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
