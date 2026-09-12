import gemastikImg from "../assets/projects/gemastik.png";
import biologyImg from "../assets/projects/biology.png";
import etlImg from "../assets/projects/etl.png";
import gataImg from "../assets/projects/gata.png";
import biologyTeamImg from "../assets/projects/biology2.jpg";
import etlArchImg from "../assets/projects/etl2.png";

export const projectImages: Record<string, typeof gemastikImg> = {
  "multimodal-ai-generated-content-detection": gemastikImg,
  "ai-powered-biology-assistant": biologyImg,
  "automated-idx-etl-pipeline": etlImg,
  "mpasi-rag-recommender": gataImg,
};

export type StoryExtra = {
  image: typeof biologyTeamImg;
  caption: string;
  portrait: boolean;
};

export const projectStoryImages: Record<string, StoryExtra> = {
  "ai-powered-biology-assistant": {
    image: biologyTeamImg,
    caption: "My team testing the anatomy scan mode with a torso model.",
    portrait: true,
  },
  "automated-idx-etl-pipeline": {
    image: etlArchImg,
    caption: "My Airflow ETL architecture, from scheduled fetch to API and UI.",
    portrait: false,
  },
};
