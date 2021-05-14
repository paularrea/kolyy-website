import React from "react";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";
import Form from "../components/questionsComponents/formComponent";
import Faqs from "../components/questionsComponents/faqsComponent";
import {
  container,
  bg_img,
  content,
} from "../styles/questions.module.scss";
import MediaFixed from "../components/questionsComponents/mediaFixed";

const Questions = () => {
  return (
    <Layout>
      <Seo title="Questions" />
      <MediaFixed/>
      <div className={bg_img}>
        <div className={content}>
          <h2>Estamos conectados</h2>
          <p>
            No dudes en ponerte en contacto con nosotros para cualquier duda.
          </p>
        </div>
      </div>
      <Form />
      <Faqs />
      <div className={container}></div>
    </Layout>
  );
};

export default Questions;
