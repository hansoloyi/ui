import React, { Component } from 'react';
import { colors } from '../shared/styles';
import Layer from './comps/Layer';
import Download from './icons/Download';

const styles = {
  layer1Text:{
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'inline-block'
  },
  layer1Container: {
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'center'
  },
  layer1: {
    letterSpacing: '2px',
    backgroundColor: colors.lightGray
  },
  layer2: {
    backgroundColor: colors.white,
  },
  item: {
    paddingTop: '80px',
    paddingBottom: '80px',
    width: '49%',
    display: 'inline-block',
    textAlign: 'center',
  },
  iconText: {
    color: colors.darkGray,
    marginTop: '20px',
  },
  layer2Text: {
    colors: colors.darkGray,
    lineHeight: '30px'
  },
  resumeTitle: {
    letterSpacing: '2px',
    color: colors.black,
    fontSize: '21px',
  },
  resumeSection: {
    paddingTop: '40px',
    paddingBottom: '20px',
    borderBottom: `1px solid ${colors.lightGray}`
  },
  educationSubText: {
    letterSpacing: '1px',
    borderRight: `1px solid ${colors.darkGray}`,
    color: colors.darkGray,
    display: 'inline-block',
    paddingRight: '20px'
  },
  educationSubText2: {
    letterSpacing: '1px',
    color: colors.darkGray,
    display: 'inline-block',
    paddingLeft: '20px'
  },
  skillsSection: {
    marginTop: '10px'
  },
  skillsPart: {
    width: '49%',
    display: 'inline-block',
    verticalAlign: 'top'
  },
  skillsTitle: {
    letterSpacing: '1px',
    fontSize: '16px',
    color: colors.darkGray
  },
  ul: {
    marginTop: '5px'
  },
  li: {
    letterSpacing: '1px',
    color: colors.darkGray
  },
  projectsTitle: {
    letterSpacing: '1px',
    fontSize: '16px',
    color: colors.darkGray,
    marginTop: '20px',
    textDecoration: 'underLine'
  }
};

const programmingLanguages = [ 'SCALA', 'JAVASCRIPT', 'PYTHON', 'JAVA', 'PHP' ];
const frontEndTechnologies = [ 'REACT / REDUX', 'REACT NATIVE', 'HTML', 'CSS', 'JQUERY', 'REACTIVE-X' ];
const backEndTechnologies = [ 'FLINK', 'KAFKA', 'NODE', 'DOCKER', 'HTTP4S', 'REST', 'GRAPHQL' ];
const testingTechnologies = [ 'UNIT TESTING', 'MOCKITO', 'PROPERTY TESTING', 'JUNIT', 'CUCUMBER' ];
const databasesTechnologies = [ 'ELASTICSEARCH', 'MYSQL', 'STARDOG' ];
const otherTechnologies = [ 'GIT', 'NPM', 'SBT', 'KUBERNETES', 'JENKINS', 'AGILE', 'LINUX' ];

const financialDashboards = [
  'Used React, ReactiveX, Node, ES6, and Javascript for Web Development',
  'Created reusable components in React for the Application',
  'Wrote logic in Javscript to make RESTful calls and manipulate data for Application to use',
  'Generated ElasticSearch Queries that powered the data',
  'PHP development to integrate the new dashboards within legacy Applications',
  'Tested using Jasmine / Jest',
  'Created Cucumber / Selenium integration tests'
];

const mobile = [
  'Used React-Native to help build a mobile application in a time crunch',
  'Wrote logic in Javscript to make RESTful calls to APIs and manipulate data for Application to use'
]

const platform = [
  'Helped implement a Stream Processing platform using Scala, Flink, and Kafka',
  'Help make analysis on what data the team needed to supply the projects',
  'Performance analysis of databases to decide what to use on projects (Couch vs ES)',
  'Extract data from MySQL/MsSQL into Kafka using Flink to transform and load into StarDog',
  'API Development /Document so people can interact with our platform',
  'Apollo GraphQL to query the database for clients',
  'Deployments using YAML, Docker, and Jenkins',
  'Taking care of services (looking at logs in Kuburnetes, builds in Jenkins, deployments)'
]

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  renderDownload() {
    const { layer1, item, iconText, layer1Text, layer1Container } = styles;
    return (
      <Layer style={layer1}>
        <div style={layer1Container}>
          <div style={layer1Text}>
            DOWNLOAD
          </div>
          <div style={layer1Text}>
            <Download height={32} width={32} color={colors.darkGray}/>
          </div>
        </div>
      </Layer>
    );
  }

  education() {
    const { resumeTitle, resumeSection, educationSubText, educationSubText2 } = styles;
    return (
      <div style={resumeSection}>
        <div style={resumeTitle}> EDUCATION </div>
        <div>
          <div style={educationSubText}> UC BERKELEY 2014 </div>
          <div style={educationSubText2}> B.A. COGNITIVE SCIENCE </div>
        </div>
      </div>
    );
  }

  skills() {
    const { resumeTitle, resumeSection, skillsSection, skillsPart, skillsTitle, ul, li, educationSubText, educationSubText2 } = styles;
    return (
      <div style={resumeSection}>
        <div style={resumeTitle}> SKILLS & TECHNOLOGIES </div>
        <div>
          <div style={educationSubText}> OVERVIEW </div>
          <div style={educationSubText2}> WHAT I HAVE BEEN DOING </div>
        </div>
        <div style={skillsSection}>
          <div style={skillsPart}>
            <div style={skillsTitle}> PROGRAMMING LANGUAGES </div>
            <ul style={ul}>
              {programmingLanguages.map((language) => {
                return (<li style={li}> {language} </li>);
              })}
            </ul>
            <div style={skillsTitle}> FRONT END </div>
            <ul style={ul}>
              {frontEndTechnologies.map((fe) => {
                return (<li style={li}> {fe} </li>);
              })}
            </ul>
            <div style={skillsTitle}> BACK END </div>
            <ul style={ul}>
              {backEndTechnologies.map((be) => {
                return (<li style={li}> {be} </li>);
              })}
            </ul>
          </div>
          <div style={skillsPart}>
            <div style={skillsTitle}> TESTING </div>
            <ul style={ul}>
              {testingTechnologies.map((t) => {
                return (<li style={li}> {t} </li>);
              })}
            </ul>
            <div style={skillsTitle}> DATABASES </div>
            <ul style={ul}>
              {databasesTechnologies.map((db) => {
                return (<li style={li}> {db} </li>);
              })}
            </ul>
            <div style={skillsTitle}> OTHER </div>
            <ul style={ul}>
              {otherTechnologies.map((skill) => {
                return (<li style={li}> {skill} </li>);
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  experience() {
    const { resumeTitle, resumeSection, educationSubText, educationSubText2, projectsTitle, li, ul } = styles;
    return (
      <div style={resumeSection}>
        <div style={resumeTitle}> EXPERIENCE </div>
        <div>
          <div style={educationSubText}> ATHLINKS </div>
          <div style={educationSubText2}> JULY 17 - PRESENT </div>
        </div>
        <div style={projectsTitle}> FINANCIAL DASHBOARDS </div>
        <ul style={ul}>
          {financialDashboards.map((aspect) => {
            return (<li style={li}> {aspect} </li>);
          })}
        </ul>
        <div style={projectsTitle}> MOBILE DEVELOPMENT </div>
        <ul style={ul}>
          {mobile.map((aspect) => {
            return (<li style={li}> {aspect} </li>);
          })}
        </ul>
        <div style={projectsTitle}> PLATFORM </div>
        <ul style={ul}>
          {platform.map((aspect) => {
            return (<li style={li}> {aspect} </li>);
          })}
        </ul>
      </div>
    );
  }

  renderResume() {
    const { layer2 } = styles;
    return (
      <Layer style={layer2}>
        <div>
          {this.education()}
          {this.skills()}
          {this.experience()}
        </div>
      </Layer>
    );
  }

  render() {
    const layerOne = this.renderDownload();
    const layerTwo = this.renderResume();
    return (
      <div>
        {layerOne}
        {layerTwo}
      </div>
    )
  }
}
