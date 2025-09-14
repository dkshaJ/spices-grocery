import React from "react";
import logo from "../../assets/logo.png";
import Header from "../General/Header";
import Footer from "../General/Footer";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center align-center w-full h-full gap-5">
      <Header />
      <div className="flex flex-col justify-center items-center align-center bg-[#C1440E] text-[#FFF8F0] p-10 gap-5 w-[90%]">
        <div className="flex flex-col justify-center items-center align-center w-30 h-30">
          <img className="w-30 h-30 rounded-full" src={logo} />
        </div>
        <h1 className="text-5xl font-bold tracking-wider">Spice - Groceries</h1>
        <h2 className="text-3xl font-bold tracking-wider">Spice Up Your Day</h2>
        <p className="text-xl font-bold tracking-wider w-[75%]">
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is half a page long, etc. In reality, though,
          the unity and coherence of ideas among sentences is what constitutes a
          paragraph. A paragraph is defined as “a group of sentences or a single
          sentence that forms a unit” (Lunsford and Connors 116). Length and
          appearance do not determine whether a section in a paper is a
          paragraph. For instance, in some styles of writing, particularly
          journalistic styles, a paragraph can be just one sentence long.
          Ultimately, a paragraph is a sentence or group of sentences that
          support one main idea. In this handout, we will refer to this as the
          “controlling idea,” because it controls what happens in the rest of
          the paragraph.
        </p>
      </div>
      <Footer />
    </div>
  );
}
