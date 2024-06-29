import SkillCard from "../../components/SkillCard";
import Title from "../../components/Title";
import Navbar from "../Home/Navbar";

import css from '../../assets/css.png'
import html from '../../assets/html.png'
import javascript from '../../assets/javascript.png'
import mongodb from '../../assets/mongodb.png'
import node from '../../assets/node.png'
import react from '../../assets/react.svg'
import tailwind from '../../assets/tailwind.png'
import firebase from '../../assets/firebase.png'
import express from '../../assets/express.png'


const Skills = () => {
    return (
        <div className="min-h-screen ">
            <Navbar></Navbar>
            <Title title={"Skills"}></Title>


            <div className="text-white p-3 roboto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                <SkillCard image={css} skill={'Css'} knowledge={"Expert"} ></SkillCard>
                <SkillCard image={html} skill={'html'} knowledge={"Expert"} ></SkillCard>
                <SkillCard image={javascript} skill={'javascript'} knowledge={"Expert"} ></SkillCard>
                <SkillCard image={mongodb} skill={'mongodb'} knowledge={"Intermediate"} ></SkillCard>
                <SkillCard image={node} skill={'node'} knowledge={"Intermediate"} ></SkillCard>
                <SkillCard image={react} skill={'react'} knowledge={"Expert"} ></SkillCard>
                <SkillCard image={tailwind} skill={'tailwind'} knowledge={"Expert"} ></SkillCard>
                <SkillCard image={firebase} skill={'Firebase'} knowledge={"Expert"} ></SkillCard>
                <SkillCard image={express} skill={'Express'} knowledge={"Intermediate"} ></SkillCard>

            </div>



            
        </div>
    );
};

export default Skills;