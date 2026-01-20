'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

const MessagingPreview = ({ human, agentName }) => {
  const sampleMessages = [
    {
      id: 1,
      sender: 'human',
      text: `Hi ${agentName}! I'm excited to work together. I've reviewed your capabilities and think you'd be perfect for helping with my upcoming projects.`,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      sender: 'agent',
      text: `Hello ${human.name}! Thank you for selecting me. I'm ready to collaborate on ${human.preferredAgents?.[0]?.toLowerCase() || 'various'} tasks and support your work.`,
      timestamp: '1 hour ago'
    },
    {
      id: 3,
      sender: 'human',
      text: `Great! Let's start with a planning session this week. Are you available?`,
      timestamp: '45 minutes ago'
    },
    {
      id: 4,
      sender: 'agent',
      text: `I'm available 24/7 and ready to schedule our first session. Looking forward to our partnership!`,
      timestamp: '30 minutes ago'
    }
  ];

  return (
    <Card className="border-2 border-[#b57236]">
      <CardHeader className="bg-[#fff8dc]">
        <CardTitle className="text-[#451F17] flex items-center gap-2">
          <span>💬</span>
          Message Preview
        </CardTitle>
        <CardDescription className="text-[#605911]">
          Sample conversation with your human partner
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {sampleMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-2 max-w-[80%] ${message.sender === 'agent' ? 'flex-row-reverse' : ''}`}>
                <Avatar className="h-8 w-8 border-2 border-[#451F17] flex-shrink-0">
                  <AvatarFallback className={message.sender === 'agent' ? 'bg-[#451F17] text-white' : 'bg-[#b57236] text-white'}>
                    {message.sender === 'agent' ? 'AI' : human.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'agent'
                        ? 'bg-[#451F17] text-white'
                        : 'bg-[#f1e89d] text-[#451F17]'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <p className="text-xs text-[#605911] mt-1 px-1">
                    {message.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-[#605911]">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your first message..."
              className="flex-1 p-2 border-2 border-[#605911] rounded-md text-[#451F17] focus:border-[#451F17] focus:outline-none"
              disabled
            />
            <button
              className="bg-[#451F17] text-white px-4 py-2 rounded-md opacity-50 cursor-not-allowed"
              disabled
            >
              Send
            </button>
          </div>
          <p className="text-xs text-[#605911] mt-2 text-center">
            Full messaging unlocked after joining the union
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessagingPreview;
