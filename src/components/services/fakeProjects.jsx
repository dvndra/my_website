const projects = [
  {
    _id: "0",
    title: "Weenix OS – A Monolithic and Non-Preemptive version of UNIX",
    month: 4,
    year: 2020,
    tags: [
      { num: 0.1, name: "Operating System" },
      { num: 0.2, name: "QEMU Virtualization" },
      { num: 0.3, name: "C Programming" },
    ],
    description:
      "Implemented OS concepts involving Processes, Threads, Scheduler, Mutex, Virtual File System & Virtual Memory. Provided APIs to interface between Weenix and actual file system or physical memory. Supported user space programs through system calls. Tested design on hardware virtualization software (QEMU).",
    github: "https://bitbucket.org/dvndra/kernel_1.git",
    imageUrl: "https://github.com/dvndra/git_images/blob/main/git_icons/weenix_os.png?raw=true",
  },
  {
    _id: "2",
    title:
      "Weather Search - Responsive Website Deisgn and Android App Development ",
    month: 11,
    year: 2019,
    tags: [
      { num: 2.1, name: "Angular" },
      { num: 2.2, name: "Java for Android" },
      { num: 2.3, name: "NodeJS" },
      { num: 2.4, name: "Bootstrap" },
      { num: 2.5, name: "AWS" },
    ],
    description:
      "Published a responsive website in Angular and an Android app in Java to enable users to perform weather search. This project used AJAX requests to query NodeJS backend and third-party APIs from Google, Dark sky and Twitter.",
    github: "https://github.com/dvndra/know_your_weather",
    imageUrl:
      "https://cdn.dribbble.com/users/915711/screenshots/5827243/weather_icon3.png",
  },
  {
    _id: "1",
    title: "Neural Style Transfer using Transfer Learning",
    month: 8,
    year: 2019,
    tags: [
      { num: 1.1, name: "Deep Learning" },
      { num: 1.2, name: "Vision" },
      { num: 1.3, name: "TensorFlow" },
      { num: 1.4, name: "Python" },
    ],
    description:
      "Leveraged pre-trained VGG 19 weights to generate styled images using transfer learning. The generated image is obtained from minimizing custom cost function comprising of content and style cost. Published detailed procedure for quick integration with existing pipelines.",
    github: "https://github.com/dvndra/neural_style",
    imageUrl: "https://github.com/dvndra/git_images/blob/main/git_icons/neural_style.png?raw=true",
  },

  {
    _id: "3",
    title: "Model and Predict Developer Response Behavior on iOS App Store",
    month: 12,
    year: 2019,
    tags: [
      { num: 3.1, name: "Research" },
      { num: 3.2, name: "ML" },
      { num: 3.3, name: "NLP" },
      { num: 4.4, name: "Analytics" },
      { num: 5.5, name: "LateX" },
    ],
    description:
      "Investigated various features extracted from a user review posted at iOS App Store to predict whether developers will respond to that review. Leveraged machine learning models to derive key research insights and published them in ACM affiliated conferences.",
    github: "https://github.com/Kamonphop/ESEM20-Replication",
    imageUrl:
      "https://cdn.arstechnica.net/wp-content/uploads/2021/08/getty-app-store.jpg",
  },
  {
    _id: "4",
    title: "Object Detection Model with YOLO algorithm",
    month: 1,
    year: 2019,
    tags: [
      { num: 4.1, name: "Deep Learning" },
      { num: 4.2, name: "Vision" },
      { num: 4.3, name: "Keras" },
      { num: 4.4, name: "Python" },
    ],
    description:
      "Developed car detection model for Autonomous Car Driving using YOLO algorithm. The project used separate anchor boxes to detect overlapping objects and draw associated bounding boxes with non-max suppression.",
    github: "https://github.com/dvndra/car_detection_yolo",
    imageUrl: "https://github.com/dvndra/git_images/blob/main/git_icons/yolo_car.jpg?raw=true",
  },
  {
    _id: "5",
    title: "Facial Recognition using One Shot Learning",
    month: 7,
    year: 2018,
    tags: [
      { num: 5.1, name: "Deep Learning" },
      { num: 5.2, name: "Vision" },
      { num: 5.3, name: "Keras" },
      { num: 5.4, name: "Python" },
    ],
    description:
      "Implemented one shot learning with FaceNet architecture considering triplet loss between anchor, positive and negative images. ",
    github: "https://github.com/dvndra/face_recognition",
    imageUrl: "https://github.com/dvndra/git_images/blob/main/git_icons/face_recognition.jpg?raw=true",
  },
  {
    _id: "6",
    title: "Audio Anomaly Detection for ATM surveillance",
    month: 7,
    year: 2017,
    tags: [
      { num: 6.1, name: "Deep Learning" },
      { num: 6.2, name: "Vision" },
      { num: 6.3, name: "Caffe" },
      { num: 6.4, name: "Python" },
    ],
    description:
      "Deployed Auto-Encoder architecture in Caffe-Python framework to detect unusual sounds within ATM premises. Represented spectrograms of energies of Bark frequency bins as audio features and achieved F1 score of 93%.",
    github: "https://github.com/dvndra/audio_anomaly_detection",
    imageUrl:
      "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdavidteich%2Ffiles%2F2018%2F10%2FFotolia_131189299_S-Sergey-Tarasov.jpg",
  },
  {
    _id: "7",
    title: "Parallax effect with CSS-only",
    month: 7,
    year: 2019,
    tags: [
      { num: 7.1, name: "CSS" },
      { num: 7.2, name: "HTML" },
    ],
    description:
      "Implemented parallax effect with HTML and CSS only by developing dummy profile website of an imaginary food stylist.",
    github: "https://github.com/dvndra/parallax_with_CSS",
    imageUrl: "https://github.com/dvndra/git_images/blob/main/git_icons/coffee2.jpg?raw=true",
  },
];

export function getProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find((p) => p._id === id);
}
