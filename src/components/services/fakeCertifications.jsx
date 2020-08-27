const certificates = [
  {
    _id: "1",
    title: "Mastering React",
    month: 12,
    year: 2019,
    tags: [{ num: 1, name: "Web" }],
    url: "https://dswami.freevar.com/cloud_docs/certifications/react_mosh.png",
  },
  {
    _id: "2",
    title: "Angular 4 Crash Course for Busy Developers",
    month: 12,
    year: 2019,
    tags: [{ num: 1, name: "Web" }],
    url:
      "https://dswami.freevar.com/cloud_docs/certifications/angular_mosh.png",
  },
  {
    _id: "3",
    title: "The Complete Node.js Course",
    month: 12,
    year: 2019,
    tags: [{ num: 1, name: "Web" }],
    url: "https://dswami.freevar.com/cloud_docs/certifications/node_mosh.png",
  },
  {
    _id: "4",
    title: "Introduction to Web Development",
    month: 10,
    year: 2019,
    tags: [{ num: 1, name: "Web" }],
    url:
      "https://dswami.freevar.com/cloud_docs/certifications/web_coursera.png",
  },
  {
    _id: "5",
    title: "The Deep Learning Specialization",
    month: 8,
    year: 2019,
    tags: [
      { num: 1, name: "Deep Learning" },
      { num: 2, name: "AI" },
    ],
    url:
      "https://dswami.freevar.com/cloud_docs/certifications/dl_specialization_coursera.png",
  },
  {
    _id: "6",
    title: "Sequence Models",
    month: 8,
    year: 2019,
    tags: [
      { num: 1, name: "Deep Learning" },
      { num: 2, name: "AI" },
      { num: 3, name: "NLP" },
    ],
    url:
      "https://dswami.freevar.com/cloud_docs/certifications/sequence_models_coursera.png",
  },
  {
    _id: "7",
    title: "Convolutional Neural Networks",
    month: 8,
    year: 2019,
    tags: [
      { num: 1, name: "Deep Learning" },
      { num: 2, name: "AI" },
      { num: 3, name: "Vision" },
    ],
    url:
      "https://dswami.freevar.com/cloud_docs/certifications/cnn_coursera.png",
  },
  {
    _id: "8",
    title: "Improving Deep Neural Networks",
    month: 8,
    year: 2019,
    tags: [
      { num: 1, name: "Deep Learning" },
      { num: 2, name: "AI" },
    ],
    url:
      "https://dswami.freevar.com/cloud_docs/certifications/hyperparameters_coursera.png",
  },
  {
    _id: "9",
    title: "Neural Networks and Deep Learning",
    month: 8,
    year: 2019,
    tags: [
      { num: 1, name: "Deep Learning" },
      { num: 2, name: "AI" },
    ],
    url:
      "https://dswami.freevar.com/cloud_docs/certifications/ann_coursera.png",
  },
  {
    _id: "10",
    title: "Structuring Machine Learning Projects",
    month: 7,
    year: 2019,
    tags: [
      { num: 1, name: "Deep Learning" },
      { num: 2, name: "AI" },
      { num: 3, name: "ML" },
    ],
    url:
      "https://dswami.freevar.com/cloud_docs/certifications/structure_ml_coursera.png",
  },
  {
    _id: "11",
    title: "Machine Learning",
    month: 11,
    year: 2017,
    tags: [
      { num: 1, name: "ML" },
      { num: 2, name: "AI" },
    ],
    url: "https://dswami.freevar.com/cloud_docs/certifications/ml_coursera.png",
  },
  {
    _id: "12",
    title: "Introduction to Data Science in Python",
    month: 3,
    year: 2018,
    tags: [{ num: 1, name: "Analytics" }],
    url:
      "https://dswami.freevar.com/cloud_docs/certifications/intro_ds_coursera.png",
  },
  {
    _id: "13",
    title: "Work Smarter Not Harder",
    month: 3,
    year: 2018,
    tags: [{ num: 1, name: "Personal Skills" }],
    url:
      "https://dswami.freevar.com/cloud_docs/certifications/time_management.png",
  },
];

export function getCertificates() {
  return certificates;
}

export function getCertificate(id) {
  return certificates.find((c) => c._id === id);
}
