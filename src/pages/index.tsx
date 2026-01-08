import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useToast } from "d9-toast";
import styles from "./index.module.css";

export default function Home() {
  const { showToast } = useToast();

  return (
    <Layout
      title="D9 Toast"
      description="A lightweight toast notification library for React"
    >
      {/* HERO */}
      <header className={styles.hero}>

        <div className={styles.title}>
          <h1>D9 TOAST </h1>
          <img src="/img/logo.png" alt=" D9 Toast Logo" height={60} width={60} />
        </div>

        <p>A lightweight, fully typed toast notification library for React.js / next.js</p>

        <div className={styles.buttons}>
          <Link
            className={`button button--primary ${styles.cta}`}
            to="/docs/intro"
          >
            Get Started
          </Link>

          <Link
            className={`button button--secondary ${styles.ctaOutline}`}
            href="https://github.com/psathul073/d9-toast"
          >
            GitHub
          </Link>
        </div>

        <pre className={styles.install}>
          <code>npm install d9-toast</code>
        </pre>
      </header>

      {/* FEATURES */}
      <section className={styles.features}>
        <div>
          <h2>⚡ Lightweight</h2>
          <p>Minimal bundle size with no external dependencies.</p>
        </div>

        <div>
          <h2>🔒 Type Safe</h2>
          <p>100% TypeScript support with strict typings.</p>
        </div>

        <div>
          <h2>🔔 Audio Support</h2>
          <p>Custom toast sounds with cooldown control.</p>
        </div>

        <div>
          <h2>🎨 Customizable</h2>
          <p>Themes, positions, actions, and styling flexibility.</p>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className={styles.example}>
        <h2>Quick Example</h2>
        <pre>
          <code>{`showToast({
  message: "Saved successfully!",
  type: "success",
});`}</code>
        </pre>
        <button
          className={styles.toast_button}
          onClick={() =>
            showToast({
              message: "D9 Toast is working!",
              type: "success",
            })
          }
        >
          Test Toast
        </button>
      </section>
    </Layout>
  );
}
