"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="section">
      <div className="shell grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 55 }}>
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="display" style={{ fontSize: "clamp(52px,7vw,80px)", lineHeight: .96, margin: "10px 0" }}>Let’s talk<br /><i>tennis.</i></h1>
          <p style={{ maxWidth: 350, lineHeight: 1.7, color: "#536477" }}>Story ideas, club events, partnerships, or a particularly beautiful backhand — we would love to hear from you.</p>
          <p style={{ fontWeight: 700 }}>hello@courtreport.example</p>
        </div>
        <form onSubmit={submit} className="card" style={{ padding: 28, display: "grid", gap: 14, alignSelf: "start" }}>
          {["Name", "Email address", "Subject"].map((label) => <label key={label} style={{ fontSize: 13, fontWeight: 700 }}>{label}<input required type={label === "Email address" ? "email" : "text"} style={{ width: "100%", display: "block", marginTop: 7, padding: 13, border: "1px solid #cbd0c3" }} /></label>)}
          <label style={{ fontSize: 13, fontWeight: 700 }}>Message<textarea required rows={5} style={{ width: "100%", display: "block", marginTop: 7, padding: 13, border: "1px solid #cbd0c3", resize: "vertical" }} /></label>
          <button className="button">Send message</button>
          {sent && <p role="status" style={{ margin: 0, color: "#4b6b24" }}>Thanks — your note is ready to send. Connect this form to your preferred inbox before production.</p>}
        </form>
      </div>
    </section>
  );
}
