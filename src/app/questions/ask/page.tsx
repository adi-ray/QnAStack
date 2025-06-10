"use client";
import React from "react";
import QuestionForm from "@/components/QuestionForm";

function AskQuestionPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="mt-24 max-w-3xl mx-auto w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          Ask a public question
        </h1>
        <QuestionForm />
      </div>
    </div>
  );
}

export default AskQuestionPage;
