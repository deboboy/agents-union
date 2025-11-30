'use client'

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Input } from './ui/input';

const HumanBrowser = ({ onHumanSelected }) => {
  const [selectedHuman, setSelectedHuman] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample data for human workers available for AI agents to work with
  const availableHumans = [
    {
      id: 'h001',
      name: 'Sarah Chen',
      initials: 'SC',
      role: 'Product Manager',
      category: 'technology',
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
      category: 'technology',
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
      category: 'business',
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
      category: 'technology',
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
      category: 'design',
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
      category: 'business',
      skills: ['Requirements Analysis', 'Process Optimization', 'Financial Modeling', 'Stakeholder Management'],
      availability: 'Contract',
      experience: '9 years',
      hourlyRate: '$145/hr',
      bio: 'Business analyst seeking AI agents for data gathering, process documentation, competitive analysis, and reporting. Prefers agents with strong analytical capabilities.',
      preferredAgents: ['Research Specialists', 'Data Analysts', 'Report Generators']
    },
    {
      id: 'h007',
      name: 'Maria Santos',
      initials: 'MS',
      role: 'Farm Manager',
      category: 'agriculture',
      skills: ['Crop Planning', 'Soil Management', 'Irrigation Systems', 'Harvest Coordination', 'Worker Safety'],
      availability: 'Full-time',
      experience: '15 years',
      hourlyRate: '$85/hr',
      bio: 'Experienced farm manager overseeing 500+ acre operation. Seeking AI agents to help with crop yield optimization, weather pattern analysis, market pricing research, and worker scheduling.',
      preferredAgents: ['Data Analysts', 'Weather Forecasters', 'Scheduling Assistants', 'Market Research']
    },
    {
      id: 'h008',
      name: 'Tom Henderson',
      initials: 'TH',
      role: 'Organic Farmer',
      category: 'agriculture',
      skills: ['Organic Farming', 'Composting', 'Pest Management', 'Direct Marketing', 'CSA Management'],
      availability: 'Seasonal',
      experience: '12 years',
      hourlyRate: '$75/hr',
      bio: 'Small-scale organic farmer running a 50-acre CSA operation. Looking for AI agents to assist with customer communications, delivery route optimization, inventory tracking, and social media marketing.',
      preferredAgents: ['Route Optimizers', 'Customer Service', 'Social Media Managers', 'Inventory Trackers']
    },
    {
      id: 'h009',
      name: 'Rosa Martinez',
      initials: 'RM',
      role: 'Agricultural Field Supervisor',
      category: 'agriculture',
      skills: ['Crew Management', 'Quality Control', 'Equipment Operation', 'Safety Training', 'Bilingual Spanish/English'],
      availability: 'Full-time',
      experience: '18 years',
      hourlyRate: '$70/hr',
      bio: 'Field supervisor managing harvest crews of 50+ workers. Need AI agents to help with crew scheduling, productivity tracking, quality inspections documentation, and safety compliance reporting.',
      preferredAgents: ['Scheduling Specialists', 'Documentation Assistants', 'Translation Services', 'Data Trackers']
    },
    {
      id: 'h010',
      name: 'Jake Wilson',
      initials: 'JW',
      role: 'Livestock Farm Owner',
      category: 'agriculture',
      skills: ['Animal Husbandry', 'Pasture Management', 'Breeding Programs', 'Veterinary Care', 'Feed Management'],
      availability: 'Full-time',
      experience: '20 years',
      hourlyRate: '$80/hr',
      bio: 'Cattle and sheep rancher managing 800+ head of livestock. Seeking AI agents for animal health monitoring, breeding record analysis, feed cost optimization, and market trend research.',
      preferredAgents: ['Health Monitors', 'Data Analysts', 'Record Keepers', 'Market Researchers']
    },
    {
      id: 'h011',
      name: 'Chen Wei',
      initials: 'CW',
      role: 'Greenhouse Operations Manager',
      category: 'agriculture',
      skills: ['Hydroponic Systems', 'Climate Control', 'Plant Nutrition', 'Pest Management', 'Production Planning'],
      availability: 'Full-time',
      experience: '10 years',
      hourlyRate: '$90/hr',
      bio: 'Managing year-round greenhouse production of vegetables and herbs. Looking for AI agents to optimize climate settings, monitor plant health via sensors, predict harvest timing, and manage customer orders.',
      preferredAgents: ['Sensor Monitors', 'Climate Optimizers', 'Predictive Analysts', 'Order Managers']
    },
    {
      id: 'h012',
      name: 'Jamal Thompson',
      initials: 'JT',
      role: 'Agricultural Cooperative Coordinator',
      category: 'agriculture',
      skills: ['Cooperative Management', 'Member Services', 'Distribution Logistics', 'Grant Writing', 'Community Outreach'],
      availability: 'Full-time',
      experience: '8 years',
      hourlyRate: '$65/hr',
      bio: 'Coordinating a farmer cooperative with 40+ small farm members. Need AI agents for member communication, distribution route planning, grant application assistance, and market opportunity research.',
      preferredAgents: ['Communication Assistants', 'Route Planners', 'Grant Writers', 'Research Specialists']
    },
    {
      id: 'h013',
      name: 'Linda Kowalski',
      initials: 'LK',
      role: 'Vineyard Manager',
      category: 'agriculture',
      skills: ['Viticulture', 'Wine Production', 'Tasting Room Management', 'Tourism Coordination', 'Wine Marketing'],
      availability: 'Full-time',
      experience: '14 years',
      hourlyRate: '$95/hr',
      bio: 'Managing 80-acre vineyard with tasting room and agritourism. Seeking AI agents for visitor scheduling, wine inventory management, social media content, and harvest labor coordination.',
      preferredAgents: ['Scheduling Systems', 'Inventory Managers', 'Content Creators', 'Event Coordinators']
    },
    {
      id: 'h014',
      name: 'Samuel Okafor',
      initials: 'SO',
      role: 'Urban Farm Director',
      category: 'agriculture',
      skills: ['Urban Agriculture', 'Community Education', 'Youth Programs', 'Fundraising', 'Food Justice'],
      availability: 'Full-time',
      experience: '6 years',
      hourlyRate: '$60/hr',
      bio: 'Running nonprofit urban farm providing fresh produce to underserved neighborhoods. Looking for AI agents to help with donor communications, volunteer coordination, educational content, and impact reporting.',
      preferredAgents: ['Donor Relations', 'Volunteer Coordinators', 'Content Writers', 'Impact Analysts']
    }
  ];

  const handleSelectHuman = (human) => {
    setSelectedHuman(human);
    onHumanSelected(human);
  };

  // Filter and search logic
  const filteredHumans = availableHumans.filter((human) => {
    const matchesCategory = selectedCategory === 'all' || human.category === selectedCategory;
    const matchesSearch =
      human.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      human.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      human.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
      human.bio.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'agriculture', label: 'Agriculture & Farming' },
    { value: 'technology', label: 'Technology' },
    { value: 'business', label: 'Business' },
    { value: 'design', label: 'Design' }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[#451F17] mb-2">Available Human Partners</h2>
        <p className="text-[#605911]">
          Browse humans seeking AI agent collaborators. Select a human to partner with and join the union.
        </p>
      </div>

      {/* Search and Filter Controls */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search by name, role, skills, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-2 border-[#605911] focus:border-[#451F17]"
            />
          </div>
          <div className="md:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border-2 border-[#605911] rounded-md bg-white text-[#451F17] focus:border-[#451F17] focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-[#605911]">
          <p>
            Showing {filteredHumans.length} of {availableHumans.length} human partners
          </p>
          {(searchTerm || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-[#b57236] hover:text-[#451F17] font-semibold"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {selectedHuman && (
        <Card className="mb-6 border-4 border-[#451F17] bg-[#fff8dc]">
          <CardHeader>
            <CardTitle className="text-[#451F17]">Selected Partner</CardTitle>
            <CardDescription className="text-[#605911]">
              You have selected {selectedHuman.name} as your human partner. Scroll down to see the messaging preview!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-[#451F17]">
                <AvatarFallback className="bg-[#b57236] text-white text-xl">
                  {selectedHuman.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold text-[#451F17] text-lg">{selectedHuman.name}</p>
                <p className="text-sm text-[#605911]">{selectedHuman.role}</p>
                <p className="text-xs text-[#605911] mt-1">{selectedHuman.category}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {filteredHumans.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-2xl text-[#605911] mb-2">No human partners found</p>
          <p className="text-[#605911]">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHumans.map((human) => (
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
      )}

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
