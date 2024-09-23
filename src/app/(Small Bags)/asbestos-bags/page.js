import React from "react";

export default function page() {
  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="section-title-wrap without-tab mb-5">
          <h2 className="section-title mb-3">Asbestos Bags</h2>
        </div>
        <div className="row bg-light p-4 rounded-4 row-gap-4">
          <div className="col-lg-8 col-md-7 col-12">
            <p>
              <strong>Asbestos bags</strong> are specialized containers designed to safely store, transport, and handle asbestos materials. Given the health risks associated with asbestos exposure, these bags are manufactured with specific features to ensure safety and compliance with regulations.
            </p>

            <h4>Materials:</h4>
            <ol>
              <li>
                <strong>Durable and Heavy-Duty Fabrics</strong>: Asbestos bags are typically made from robust materials like woven polypropylene or heavy-duty plastic that can withstand tearing and puncturing.
              </li>
              <li>
                <strong>Leak-Proof Design</strong>: Many bags are designed to be leak-proof to prevent any potential release of asbestos fibers.
              </li>
            </ol>

            <h4>Design Features:</h4>
            <ol>
              <li>
                <strong>Secure Closures</strong>: These bags often feature strong closures such as heat seals, zippers, or drawstrings to ensure that asbestos materials are contained and cannot escape.
              </li>
              <li>
                <strong>Warning Labels</strong>: Asbestos bags are usually marked with clear warning labels indicating the hazardous nature of the contents, alerting handlers to take necessary precautions.
              </li>
            </ol>

            <h4>Uses:</h4>
            <ol>
              <li>
                <strong>Handling and Disposal</strong>: Asbestos bags are primarily used for the safe handling, storage, and disposal of asbestos-containing materials (ACMs). This is crucial in renovation, demolition, or abatement projects.
              </li>
              <li>
                <strong>Transportation</strong>: They are used to transport asbestos materials to licensed disposal facilities, ensuring safe containment throughout the process.
              </li>
            </ol>

            <h4>Compliance and Regulations:</h4>
            <p>
              Asbestos bags must comply with specific safety regulations and guidelines set by occupational health and safety agencies, ensuring that they meet the necessary standards for handling hazardous materials.
            </p>

            <h4>Safety Precautions:</h4>
            <p>
              Proper use of asbestos bags is essential to prevent the release of asbestos fibers, which can pose serious health risks, including lung diseases and cancer. Workers handling these bags should use personal protective equipment (PPE) and follow safe handling protocols.
            </p>

            <p>
              Overall, asbestos bags play a critical role in managing asbestos safely, protecting both workers and the environment from the dangers associated with asbestos exposure.
            </p>
          </div>
          <div className="col-lg-4 col-md-5 col-12">
            <img
              src="/assets/images/small/asbestos-bag.jpg"
              alt="Asbestos Bag"
              className="rounded-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
