const colorBar = "grey";
var skillLevels = {
  0: "N/A",
  1: "Novice",
  2: "Beginner",
  3: "Competent",
  4: "Proficient",
  5: "Expert"
};
const skills = [
  {
    title: {
      text: "Languages",
      padding: 20,
      fontSize: 25
    },
    animationEnabled: true,
    toolTip: {
      enabled: false
    },
    axisX: { title: "Skill", gridThickness: 0, labelAngle: 0, margin: 20 },
    axisY: {
      includeZero: true,
      title: "Proficiency Level",
      gridThickness: 0,
      interval: 1,
      margin: 20,
      minimum: 0,
      maximum: 5,
      labelFormatter: function(e) {
        return skillLevels[e.value];
      }
    },
    dataPointWidth: 20,
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Python", y: 4, color: colorBar },
          { label: "Java", y: 3, color: colorBar },
          { label: "C++", y: 3, color: colorBar },
          { label: "C", y: 3, color: colorBar }
        ]
      }
    ]
  },
  {
    title: {
      text: "Machine Learning",
      padding: 20,
      fontSize: 25
    },
    animationEnabled: true,
    toolTip: {
      enabled: false
    },
    axisX: { title: "Skill", gridThickness: 0, labelAngle: 0, margin: 20 },
    axisY: {
      includeZero: true,
      title: "Proficiency Level",
      gridThickness: 0,
      interval: 1,
      margin: 20,
      minimum: 0,
      maximum: 5,
      labelFormatter: function(e) {
        return skillLevels[e.value];
      }
    },
    dataPointWidth: 20,
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Sklearn", y: 4, color: colorBar },
          { label: "Keras", y: 3, color: colorBar },
          { label: "Tensorflow", y: 3, color: colorBar },
          { label: "CV", y: 4, color: colorBar },
          { label: "NLP", y: 3, color: colorBar }
        ]
      }
    ]
  },
  {
    title: {
      text: "Web Development",
      padding: 20,
      fontSize: 25
    },
    animationEnabled: true,
    toolTip: {
      enabled: false
    },
    axisX: { title: "Skill", gridThickness: 0, labelAngle: 0, margin: 20 },
    axisY: {
      includeZero: true,
      title: "Proficiency Level",
      gridThickness: 0,
      interval: 1,
      margin: 20,
      minimum: 0,
      maximum: 5,
      labelFormatter: function(e) {
        return skillLevels[e.value];
      }
    },
    dataPointWidth: 20,
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "HTML", y: 4, color: colorBar },
          { label: "CSS", y: 4, color: colorBar },
          { label: "JavaScript", y: 4, color: colorBar },
          { label: "Django", y: 3, color: colorBar },
          { label: "PHP", y: 3, color: colorBar }
          
        ]
      }
    ]
  },
  {
    title: {
      text: "DevOps",
      padding: 20,
      fontSize: 25
    },
    animationEnabled: true,
    toolTip: {
      enabled: false
    },
    axisX: { title: "Skill", gridThickness: 0, labelAngle: 0, margin: 20 },
    axisY: {
      includeZero: true,
      title: "Proficiency Level",
      gridThickness: 0,
      interval: 1,
      margin: 20,
      minimum: 0,
      maximum: 5,
      labelFormatter: function(e) {
        return skillLevels[e.value];
      }
    },
    dataPointWidth: 20,
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Ansible", y: 4, color: colorBar },
          { label: "Docker", y: 3, color: colorBar },
          { label: "Jenkins", y: 2, color: colorBar },
          { label: "Git", y: 3, color: colorBar },
          { label: "Splunk", y: 3, color: colorBar }
        ]
      }
    ]
  }
];
export function getSkills() {
  return skills;
}

export function getSkill(id) {
  return skills.find(s => s._id === id);
}
