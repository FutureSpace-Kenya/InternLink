import React, {useState, useEffect} from 'react';

const Notification = ({notifications}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            let notificationElements = document.querySelectorAll('.notification');
            notificationElements.forEach((item, index) => {
                setTimeout(() => item.classList.add('hide'), index * 500); // Stagger the hide animation
            });
        }, 5000); // Start hiding after 5s

        return () => clearTimeout(timer);
    }, [notifications]);

    const notificationStyles = {
        error: "text-red-400 bg-red-100 ring-red-600",
        success: "text-green-400 bg-green-100 ring-green-600",
        warning: "text-orange-400 bg-orange-100 ring-orange-600",
        info: "text-blue-400 bg-blue-100 ring-blue-600",
        question: "text-purple-400 bg-purple-100 ring-purple-600",
        loading: "text-gray-400 bg-gray-100 ring-gray-600"
    };

    const notificationIcons = {
        error: "fas fa-exclamation-circle",
        success: "fas fa-check-circle",
        warning: "fas fa-exclamation-triangle",
        info: "fas fa-info-circle",
        question: "fas fa-question-circle",
        loading: "fas fa-circle-notch fa-spin"
    };

    return (
        <div className={`notification-container pointer-events-none absolute top-0 left-0 w-[380px] overflow-hidden h-screen flex flex-col gap-2 ${isExpanded ? "expanded" : "collapsed"}`}>
            <div className="absolute right-4 flex flex-col gap-2">
                {notifications.map((notification, index) => (
                    <div
                        key={index}
                        className={`notification flex ${notificationStyles[notification.type]}`}
                        style={{animationDelay: `${index * 0.5}s`}}
                    >
                        <i className={`${notificationIcons[notification.type]} icon mr-2`}></i>
                        <div className="text-xs">
                            <p>{notification.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Notification;