import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <section id="article" className="container bg-success mt-3 pt-3 pb-3">
      <article>
        <h1 className="text-center text-uppercase font-monospace mt-5 fw-bold">
          1.Difference between Authorization and Authentication
        </h1>
        <p className="w-75 ms-auto me-auto font-monospace text-white fs-5">
          Simply expressed, authentication is the process of confirming a
          person's identity, whereas authorization is the process of confirming
          a user's access to specific application, files, and data. The scenario
          is similar to that of an airline deciding which passengers are allowed
          to board.
          <br />
        </p>
      </article>
      <article>
        <h1 className="text-center text-uppercase font-monospace mt-5 fw-bold">
          2.Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p className="w-75 ms-auto me-auto font-monospace text-white fs-5">
          Firebase can be thought of as a server-less backend for your mobile
          apps, web apps, and so on. <br /> Google provides this service. As a
          web developer, I should make use of Firebase. It has numerous features
          such as a real-time database, cloud functions, analytics, crashlytics,
          cloud firestore, and so on. Firebase can also be used if you do not
          want to spend much time creating your own backend. It has the
          potential to be used for fast development. I can put it to good use in
          my development. You won't have to worry about servers or anything else
          because Google will take care of it for you. <br /> If you don't need
          to build your own backend, Firebase is one of your best options.{" "}
          <br />
          <br />
          <span className="fst-italic">Equivalent of firebase:</span> <br />
          <span className="fst-italic"> 1. Back4App</span>
          <br /> <span className="fst-italic">2. Parse</span> <br />
          <span className="fst-italic">3. AWS Amplify</span> <br />
          <span className="fst-italic">5. Kuzzle</span> <br />
          <span className="fst-italic">6. Supabase</span> <br />
          <span className="fst-italic">7. appwrite</span>
        </p>
      </article>
      <article>
        <h1 className="text-center text-uppercase font-monospace mt-5 fw-bold">
          3.What other services does firebase provide other than authentication.
        </h1>
        <p className="w-75 ms-auto me-auto font-monospace text-white fs-5">
          <strong>Firebase Services:</strong>
          <br />
          <ul>
            <li>Cloud Firestore</li>
            <li>Cloud Functions</li>
            <li>Authentication</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
            <li>Google Analytics</li>
            <li>Predictions </li>
            <li>Cloud Messaging </li>
            <li>Dynamic Links </li>
            <li>Remote Config, etc.</li>
          </ul>
        </p>
      </article>
    </section>
  );
};

export default Blogs;
