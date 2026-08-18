import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Mail, Building, User, Send, Atom } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CtaSection({ onRequestDemo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: 'CRISPR 3.0 Therapeutics',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 sm:py-36 px-6 sm:px-8 lg:px-12 bio-grid-bg relative border-t border-[#0B1B3D]/10">
      <div className="max-w-7xl mx-auto">
        <div className="bio-card-glass rounded-3xl p-8 sm:p-14 lg:p-16 border border-[#0B1B3D]/15 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center shadow-xl relative overflow-hidden bg-[#FFFFFF]">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00A896]/10 rounded-full blur-[140px] pointer-events-none" />
          
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-6 space-y-8 z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#F8F9FA] border border-[#0B1B3D]/15 text-[#00A896] text-xs font-mono tracking-wider font-bold shadow-sm">
              <Sparkles size={15} className="text-[#00A896]" />
              <span>START YOUR RESEARCH COLLABORATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
              Ready to Synthesize <br />
              <span className="text-gradient-cyan">The Future of Medicine?</span>
            </h2>

            <p className="text-[#0B1B3D]/80 text-base sm:text-xl leading-relaxed font-normal">
              Partner with AURA GENOMICS to accelerate your drug discovery pipeline. Access our automated bio-foundry, quantum protein folding suite, and custom mRNA synthesis engines.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4 text-base text-[#0B1B3D]">
                <CheckCircle2 size={22} className="text-[#00A896] shrink-0" />
                <span className="font-semibold">Dedicated computational scientist assigned to your team</span>
              </div>
              <div className="flex items-center space-x-4 text-base text-[#0B1B3D]">
                <CheckCircle2 size={22} className="text-[#00A896] shrink-0" />
                <span className="font-semibold">Full IP ownership of generated sequences & molecular assets</span>
              </div>
              <div className="flex items-center space-x-4 text-base text-[#0B1B3D]">
                <CheckCircle2 size={22} className="text-[#00A896] shrink-0" />
                <span className="font-semibold">HIPAA, SOC-2 Type II, and FDA 21 CFR Part 11 compliant security</span>
              </div>
            </div>
          </div>

          {/* Right Column: Crystal-Clear Form - 60-30-10 Theme */}
          <div className="lg:col-span-6 z-10">
            {submitted ? (
              <div className="bg-[#F8F9FA] rounded-3xl p-10 border border-[#00A896]/40 text-center space-y-6 animate-fadeIn shadow-lg">
                <div className="w-20 h-20 rounded-full bg-[#00A896]/15 text-[#00A896] border border-[#00A896]/30 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 size={42} />
                </div>
                <h3 className="text-3xl font-extrabold text-[#0B1B3D] font-heading">Partnership Request Received!</h3>
                <p className="text-[#0B1B3D]/80 text-base leading-relaxed">
                  Thank you, <span className="text-[#00A896] font-bold">{formData.name}</span>. Our lead computational genomics team will reach out to <span className="text-[#00A896] font-bold">{formData.email}</span> within 4 business hours to set up your lab access sandbox.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3.5 rounded-2xl bg-[#0B1B3D] text-[#FFFFFF] text-xs font-mono hover:bg-[#00A896] transition-all cursor-pointer font-bold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F8F9FA] rounded-3xl p-8 sm:p-10 border border-[#0B1B3D]/15 space-y-6 shadow-md">
                <div className="flex items-center justify-between border-b border-[#0B1B3D]/15 pb-4">
                  <h3 className="font-heading font-bold text-2xl text-[#0B1B3D]">
                    Inquire / Request BioLab Access
                  </h3>
                  <Atom size={22} className="text-[#00A896]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="bio-form-label">Full Name *</label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B1B3D]/50" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. Elena Vance"
                        className="bio-form-input pl-11"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="bio-form-label">Work Email *</label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B1B3D]/50" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@biotech.org"
                        className="bio-form-input pl-11"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="bio-form-label">Organization / Institution *</label>
                    <div className="relative">
                      <Building size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0B1B3D]/50" />
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Apex Therapeutics"
                        className="bio-form-input pl-11"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="bio-form-label">Research Focus Area *</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="bio-form-input cursor-pointer"
                    >
                      <option value="CRISPR 3.0 Therapeutics">CRISPR 3.0 Therapeutics</option>
                      <option value="Custom mRNA & LNP Delivery">Custom mRNA & LNP Delivery</option>
                      <option value="De-Novo Protein Folding">De-Novo Protein Folding</option>
                      <option value="Robotic Bio-Foundry Access">Robotic Bio-Foundry Access</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="bio-form-label">Project / Target Description</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief details about target sequence, therapeutic objective, or synthesis timeline..."
                    className="bio-form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4.5 rounded-2xl glow-btn-cyan text-[#FFFFFF] font-heading font-extrabold text-sm sm:text-base flex items-center justify-center space-x-3 shadow-xl cursor-pointer mt-2"
                >
                  {loading ? (
                    <span>Encrypting & Sending...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Submit Partnership Application</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
