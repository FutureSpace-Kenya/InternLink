'use client'
import LoginButton from '../../components/LoginButton';
import {useSession} from "next-auth/react";

const Dashboard = () => {
    const { data: session } = useSession();

    // Dummy data
    const internProfile = {
        name: 'John Doe',
        age: 22,
        skills: ['JavaScript', 'React', 'Node.js'],
        education: 'Computer Science, XYZ University',
        experience: '1 year at ABC Company',
    };

    const companies = [
        { name: 'Company 1', industry: 'Software', size: '100-500', location: 'City A' },
        { name: 'Company 2', industry: 'Hardware', size: '500-1000', location: 'City B' },
    ];

    const applications = [
        { jobId: '1', status: 'Pending' },
        { jobId: '2', status: 'Accepted' },
    ];

    const premiumMembership = {
        startDate: '2022-01-01',
        endDate: '2022-12-31',
        type: 'Gold',
    };

    if (!session) return <div>Loading...</div>;

    return (
        <div className="min-h-screen w-full bg-gray-100">
            <nav className="bg-green-500 p-4">
                <p className="text-white text-lg"><i className="fas fa-user-circle"></i> Welcome, {session.user.email}</p>
            </nav>
            <main className="w-full max-w-2xl mx-auto mt-4 p-4">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <p className="text-lg mb-4">Hello {session.user.email}, welcome to your dashboard!</p>
                <div className="bg-white shadow rounded p-4 mb-4">
                    <h2 className="text-xl font-bold mb-2">Your Profile</h2>
                    <p><strong>Name:</strong> {internProfile.name}</p>
                    <p><strong>Age:</strong> {internProfile.age}</p>
                    <p><strong>Skills:</strong> {internProfile.skills.join(', ')}</p>
                    <p><strong>Education:</strong> {internProfile.education}</p>
                    <p><strong>Experience:</strong> {internProfile.experience}</p>
                </div>
                <div className="bg-white shadow rounded p-4 mb-4">
                    <h2 className="text-xl font-bold mb-2">Companies</h2>
                    {companies.map((company, index) => (
                        <div key={index} className="mb-2">
                            <h3 className="text-lg font-semibold">{company.name}</h3>
                            <p><strong>Industry:</strong> {company.industry}</p>
                            <p><strong>Size:</strong> {company.size}</p>
                            <p><strong>Location:</strong> {company.location}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-white shadow rounded p-4 mb-4">
                    <h2 className="text-xl font-bold mb-2">Your Applications</h2>
                    {applications.map((application, index) => (
                        <p key={index}><strong>Job ID:</strong> {application.jobId}, <strong>Status:</strong> {application.status}</p>
                    ))}
                </div>
                <div className="bg-white shadow rounded p-4 mb-4">
                    <h2 className="text-xl font-bold mb-2">Premium Membership</h2>
                    <p><strong>Type:</strong> {premiumMembership.type}</p>
                    <p><strong>Start Date:</strong> {premiumMembership.startDate}</p>
                    <p><strong>End Date:</strong> {premiumMembership.endDate}</p>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;