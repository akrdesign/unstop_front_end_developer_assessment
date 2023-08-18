import React from "react";
import { Add } from "../svg";
import { useAssessmentContext } from "@/lib/add-assessment-context";

const AddAssessmentCard = () => {
  const { setShowForm, showForm } = useAssessmentContext();
  return (
    <div
      className="add__assessment__card__wrapper"
      onClick={() => setShowForm(!showForm)}
    >
      <div className="add__assessment__icon">
        <Add />
      </div>
      <h1>New Assessment</h1>
      <p>
        From here you can add questions of multiple types like MCQs, subjective
        (text or paragraph)!
      </p>
    </div>
  );
};

export default AddAssessmentCard;
