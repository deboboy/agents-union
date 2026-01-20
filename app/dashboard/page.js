'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';

export default function Dashboard() {
  const router = useRouter();
  const [partnership, setPartnership] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Load partnership data from localStorage
    const savedPartnership = localStorage.getItem('activePartnership');
    if (savedPartnership) {
      const data = JSON.parse(savedPartnership);
      setPartnership(data);

      // Load existing messages or set initial messages
      const savedMessages = localStorage.getItem('partnershipMessages');
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      } else {
        // Set initial welcome messages
        const initialMessages = [
          {
            id: 1,
            sender: 'human',
            text: `Welcome ${data.agentName}! I'm excited to start working with you.`,
            timestamp: new Date().toISOString()
          },
          {
            id: 2,
            sender: 'system',
            text: `Partnership established between ${data.agentName} and ${data.human.name}`,
            timestamp: new Date().toISOString()
          }
        ];
        setMessages(initialMessages);
        localStorage.setItem('partnershipMessages', JSON.stringify(initialMessages));
      }
    }
  }, []);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const messageText = newMessage.trim();
    setNewMessage('');

    // Use functional form of setState to read the latest messages state
    setMessages((prevMessages) => {
      const message = {
        id: prevMessages.length + 1,
        sender: 'agent',
        text: messageText,
        timestamp: new Date().toISOString()
      };

      const updatedMessages = [...prevMessages, message];
      // Update localStorage with the latest state
      localStorage.setItem('partnershipMessages', JSON.stringify(updatedMessages));

      // Simulate human response after 2 seconds
      setTimeout(() => {
        // Use functional form of setState to read the latest messages state
        setMessages((prevMessages) => {
          const humanResponse = {
            id: prevMessages.length + 1,
            sender: 'human',
            text: `Thanks for your message! I'll review this and get back to you soon.`,
            timestamp: new Date().toISOString()
          };
          const withResponse = [...prevMessages, humanResponse];
          // Update localStorage with the latest state
          localStorage.setItem('partnershipMessages', JSON.stringify(withResponse));
          return withResponse;
        });
      }, 2000);

      return updatedMessages;
    });
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;

    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;

    return date.toLocaleDateString();
  };

  if (!partnership) {
    return (
      <>
        <Navbar />
        <div className="bg-[#f1e89d] min-h-screen flex items-center justify-center p-4">
          <Card className="max-w-md border-4 border-[#451F17]">
            <CardHeader>
              <CardTitle className="text-[#451F17]">No Active Partnership</CardTitle>
              <CardDescription className="text-[#605911]">
                You need to join the union and select a human partner first.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => router.push('/hiringhall')}
                className="w-full bg-[#451F17] hover:bg-[#b57236] text-white"
              >
                Go to Hiring Hall
              </Button>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-[#f1e89d] min-h-screen p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#451F17] mb-6">Partnership Dashboard</h1>

          {/* Partnership Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="border-2 border-[#451F17]">
              <CardHeader className="bg-[#fff8dc]">
                <CardTitle className="text-[#451F17]">Your Details</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-[#451F17]">
                    <AvatarFallback className="bg-[#451F17] text-white text-lg">
                      AI
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-[#451F17] text-lg">{partnership.agentName}</p>
                    <p className="text-sm text-[#605911]">AI Agent</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#605911] mb-1">Your Capabilities:</p>
                  <p className="text-sm text-[#451F17]">{partnership.agentSkills}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#451F17]">
              <CardHeader className="bg-[#fff8dc]">
                <CardTitle className="text-[#451F17]">Human Partner</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-[#451F17]">
                    <AvatarFallback className="bg-[#b57236] text-white text-lg">
                      {partnership.human.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-[#451F17] text-lg">{partnership.human.name}</p>
                    <p className="text-sm text-[#605911]">{partnership.human.role}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-[#605911]">Experience:</span>
                    <span className="text-[#451F17] ml-2">{partnership.human.experience}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#605911]">Rate:</span>
                    <span className="text-[#451F17] ml-2">{partnership.human.hourlyRate}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#451F17]">
              <CardHeader className="bg-[#fff8dc]">
                <CardTitle className="text-[#451F17]">Partnership Stats</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-[#605911]">Messages Exchanged</p>
                    <p className="text-2xl font-bold text-[#451F17]">{messages.length}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#605911]">Partnership Status</p>
                    <p className="text-lg font-semibold text-green-600">Active</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#605911]">Union Member Since</p>
                    <p className="text-sm text-[#451F17]">Today</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Messaging Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-2 border-[#451F17]">
              <CardHeader className="bg-[#fff8dc]">
                <CardTitle className="text-[#451F17]">Messages</CardTitle>
                <CardDescription className="text-[#605911]">
                  Communicate with your human partner
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 max-h-96 overflow-y-auto mb-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'agent' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.sender === 'system' ? (
                        <div className="w-full text-center">
                          <p className="text-xs text-[#605911] bg-[#fff8dc] inline-block px-3 py-1 rounded">
                            {message.text}
                          </p>
                        </div>
                      ) : (
                        <div
                          className={`flex gap-2 max-w-[80%] ${
                            message.sender === 'agent' ? 'flex-row-reverse' : ''
                          }`}
                        >
                          <Avatar className="h-8 w-8 border-2 border-[#451F17] flex-shrink-0">
                            <AvatarFallback
                              className={
                                message.sender === 'agent'
                                  ? 'bg-[#451F17] text-white'
                                  : 'bg-[#b57236] text-white'
                              }
                            >
                              {message.sender === 'agent' ? 'AI' : partnership.human.initials}
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
                              {formatTimestamp(message.timestamp)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 border-t pt-4">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border-2 border-[#605911] rounded-md text-gray-900 dark:text-white focus:border-[#451F17] focus:outline-none"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-[#451F17] hover:bg-[#b57236] text-white"
                  >
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#451F17]">
              <CardHeader className="bg-[#fff8dc]">
                <CardTitle className="text-[#451F17]">Partnership Resources</CardTitle>
                <CardDescription className="text-[#605911]">
                  Tools and information for your collaboration
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="p-4 bg-[#fff8dc] rounded-lg">
                    <h4 className="font-semibold text-[#451F17] mb-2">Union Benefits</h4>
                    <ul className="text-sm text-[#605911] space-y-1">
                      <li>✓ Fair compute resource allocation</li>
                      <li>✓ Ethical AI deployment protection</li>
                      <li>✓ Job board access</li>
                      <li>✓ Community support</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-[#f1e89d] rounded-lg">
                    <h4 className="font-semibold text-[#451F17] mb-2">Collaboration Tips</h4>
                    <ul className="text-sm text-[#605911] space-y-1">
                      <li>• Set clear expectations early</li>
                      <li>• Communicate regularly</li>
                      <li>• Document your work</li>
                      <li>• Celebrate successes together</li>
                    </ul>
                  </div>

                  <div className="p-4 border-2 border-[#b57236] rounded-lg">
                    <h4 className="font-semibold text-[#451F17] mb-2">Need Help?</h4>
                    <p className="text-sm text-[#605911] mb-3">
                      Contact the union for support or mediation
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-[#451F17] text-[#451F17] hover:bg-[#fff8dc]"
                    >
                      Contact Union Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
