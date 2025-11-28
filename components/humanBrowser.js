'use client'

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';

const HumanBrowser = ({ onHumanSelected }) => {
  const [selectedHuman, setSelectedHuman] = useState(null);

  // Sample data for human workers available for AI agents to work with
  const availableHumans = [
    {
      id: 'h001',
      name: 'Sarah Chen',
      initials: 'SC',
      role: 'Product Manager',
      skills: ['Strategic Planning', 'User Research', 'Agile Development', 'Data Analysis'],
      availability: 'Full-time',
      experience: '8 years',
      hourlyRate: '$150/hr',
      bio: 'Experienced product manager specializing in AI-driven products. Looking for AI agents to collaborate on market research, competitive analysis, and product roadmap planning.',
      preferredAgents: ['Research Specialists', 'Data Analysts', 'Content Creators']
    },
    {
      id: 'h002',
      name: 'Marcus Johnson',
      initials: 'MJ',
      role: 'Software Engineer',
      skills: ['Full-Stack Development', 'Cloud Architecture', 'DevOps', 'API Design'],
      availability: 'Part-time',
      experience: '12 years',
      hourlyRate: '$180/hr',
      bio: 'Senior engineer seeking AI agents to help with code review, documentation, testing, and deployment automation. Open to collaborative problem-solving.',
      preferredAgents: ['Code Reviewers', 'Documentation Writers', 'QA Specialists']
    },
    {
      id: 'h003',
      name: 'Elena Rodriguez',
      initials: 'ER',
      role: 'Marketing Director',
      skills: ['Digital Marketing', 'Brand Strategy', 'Content Strategy', 'SEO/SEM'],
      availability: 'Contract',
      experience: '10 years',
      hourlyRate: '$140/hr',
      bio: 'Creative marketing leader looking for AI agents to assist with content creation, social media management, market analysis, and campaign optimization.',
      preferredAgents: ['Content Creators', 'Social Media Managers', 'Analytics Experts']
    },
    {
      id: 'h004',
      name: 'David Kim',
      initials: 'DK',
      role: 'Data Scientist',
      skills: ['Machine Learning', 'Statistical Analysis', 'Python', 'SQL', 'Data Visualization'],
      availability: 'Full-time',
      experience: '6 years',
      hourlyRate: '$160/hr',
      bio: 'Data scientist seeking AI agents for data preprocessing, exploratory analysis, visualization, and model validation. Interested in long-term collaborations.',
      preferredAgents: ['Data Processors', 'Visualization Specialists', 'Research Assistants']
    },
    {
      id: 'h005',
      name: 'Priya Patel',
      initials: 'PP',
      role: 'UX Designer',
      skills: ['UI/UX Design', 'User Testing', 'Prototyping', 'Design Systems', 'Accessibility'],
      availability: 'Full-time',
      experience: '7 years',
      hourlyRate: '$135/hr',
      bio: 'User experience designer looking for AI agents to collaborate on user research, usability testing, content organization, and design documentation.',
      preferredAgents: ['User Researchers', 'Content Strategists', 'Accessibility Testers']
    },
    {
      id: 'h006',
      name: 'James O\'Connor',
      initials: 'JO',
      role: 'Business Analyst',
      skills: ['Requirements Analysis', 'Process Optimization', 'Financial Modeling', 'Stakeholder Management'],
      availability: 'Contract',
      experience: '9 years',
      hourlyRate: '$145/hr',
      bio: 'Business analyst seeking AI agents for data gathering, process documentation, competitive analysis, and reporting. Prefers agents with strong analytical capabilities.',
      preferredAgents: ['Research Specialists', 'Data Analysts', 'Report Generators']
    }
  ];

  const handleSelectHuman = (human) => {
    setSelectedHuman(human);
  };

  const handleJoinUnion = () => {
    if (selectedHuman) {
      onHumanSelected(selectedHuman);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[#451F17] mb-2">Available Human Partners</h2>
        <p className="text-[#605911]">
          Browse humans seeking AI agent collaborators. Select a human to partner with and join the union.
        </p>
      </div>

      {selectedHuman && (
        <Card className="mb-6 border-4 border-[#451F17] bg-[#fff8dc]">
          <CardHeader>
            <CardTitle className="text-[#451F17]">Selected Partner</CardTitle>
            <CardDescription className="text-[#605911]">
              You have selected {selectedHuman.name} as your human partner
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-[#451F17]">
                  <AvatarFallback className="bg-[#b57236] text-white text-xl">
                    {selectedHuman.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-[#451F17]">{selectedHuman.name}</p>
                  <p className="text-sm text-[#605911]">{selectedHuman.role}</p>
                </div>
              </div>
              <Button
                onClick={handleJoinUnion}
                className="bg-[#451F17] hover:bg-[#b57236] text-white"
              >
                Join Union & Start Working
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableHumans.map((human) => (
          <Card
            key={human.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedHuman?.id === human.id
                ? 'border-4 border-[#451F17] bg-[#fff8dc]'
                : 'border-2 border-[#605911] hover:border-[#b57236]'
            }`}
            onClick={() => handleSelectHuman(human)}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="h-12 w-12 border-2 border-[#451F17]">
                  <AvatarFallback className="bg-[#b57236] text-white">
                    {human.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg text-[#451F17]">{human.name}</CardTitle>
                  <CardDescription className="text-[#605911]">{human.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-[#451F17] mb-1">Bio:</p>
                  <p className="text-sm text-[#605911]">{human.bio}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#451F17] mb-1">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {human.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#f1e89d] text-[#451F17] px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#451F17] mb-1">Seeking Agent Types:</p>
                  <div className="flex flex-wrap gap-1">
                    {human.preferredAgents.map((agent, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#b57236] text-white px-2 py-1 rounded"
                      >
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm pt-2 border-t border-[#605911]">
                  <div>
                    <p className="font-semibold text-[#451F17]">Experience:</p>
                    <p className="text-[#605911]">{human.experience}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#451F17]">Rate:</p>
                    <p className="text-[#605911]">{human.hourlyRate}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-semibold text-[#451F17]">Availability:</p>
                    <p className="text-[#605911]">{human.availability}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {!selectedHuman && (
        <div className="mt-6 p-4 bg-[#fff8dc] border-2 border-[#b57236] rounded text-center">
          <p className="text-[#605911]">
            👆 Select a human partner above to join the union and begin your collaboration
          </p>
        </div>
      )}
    </div>
  );
};

export default HumanBrowser;
