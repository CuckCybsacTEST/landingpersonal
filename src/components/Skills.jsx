import React, { useState, useEffect } from "react";
import Section from "./Section";

function Skills() {
  const skills = [
    { name: "Operación B2B", level: 9 },
    { name: "Alta Demanda", level: 9 },
    { name: "Infraestructura", level: 8 },
    { name: "Estrategia Monetaria", level: 9 },
    { name: "Escalabilidad", level: 9 },
    { name: "Medición Crítica", level: 8 },
    { name: "Cultura Digital", level: 9 },
    { name: "Control Multisede", level: 8 },
    { name: "Partner Strategy", level: 9 },
    { name: "Rentabilidad", level: 10 }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 2) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [skills.length]);

  const visibleSkills = skills.slice(current, current + 2);

  return (
    <Section id="habilidades">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
        <div className="flex justify-center md:hidden">
          <div className="flex space-x-4" key={current}>
            {visibleSkills.map((skill) => (
              <div key={skill.name} className="space-y-2 w-40">
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">{skill.name}</span>
                  <span className="text-white/60">{skill.level}/10</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-5 md:gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/80">{skill.name}</span>
                <span className="text-white/60">{skill.level}/10</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level * 10}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Skills;