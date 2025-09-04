// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Set default page
    showPage('dashboard');
    
    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            showPage(page);
            
            // Update active navigation state
            document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Handle chat input
    const chatInput = document.querySelector('.chat-input');
    const sendButton = document.querySelector('.send-button');
    
    if (chatInput && sendButton) {
        sendButton.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Handle search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', filterMembers);
    }
    
    // Handle filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isCurrentlyActive = this.classList.contains('active');
            
            if (isCurrentlyActive) {
                // If already active, deactivate it
                this.classList.remove('active');
                showAllMembers();
            } else {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Apply filter
            applyFilter(this.textContent.toLowerCase());
            }
        });
    });
});

// Function to show different pages
function showPage(pageName) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show the selected page
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    // Update navigation active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });
}

// Function to show member profile
function showProfile(memberId) {
    console.log('showProfile called with memberId:', memberId);
    
    showPage('profile');
    
    // Update navigation to show profile is active
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
    // Wait for page to be fully loaded and active
    const waitForProfilePage = () => {
        const profilePage = document.getElementById('profile');
        if (profilePage && profilePage.classList.contains('active')) {
            console.log('Profile page is now active, updating content for:', memberId);
    updateProfileContent(memberId);
        } else {
            console.log('Profile page not yet active, waiting...');
            setTimeout(waitForProfilePage, 50);
        }
    };
    
    // Start waiting for the profile page
    setTimeout(waitForProfilePage, 50);
}

// Function to update profile content based on member ID
function updateProfileContent(memberId) {
    const memberData = {
        'jesper': {
            name: 'Jesper Svensson',
            rank: 'Sergeant',
            role: 'Sergeant',
            readiness: 87,
            physicalFitness: 25,
            mentalAlertness: 45,
            equipmentStatus: 60,
            trainingCompletion: 35,
            teamCoordination: 40,
            missionKnowledge: 55,
            weaponProficiency: 'Expert',
            combatExperience: '8 years',
            specialization: 'Urban Warfare',
            lastMission: 'Operation Shield 3 days ago',
            clearanceLevel: 'Top Secret',
            bloodType: 'O+',
            allergies: 'None',
            lastMedical: '1 week ago',
            fitnessScore: '85/100',
            restStatus: 'Well Rested',
            primaryWeapon: 'AK5C - 95%',
            secondaryWeapon: 'Pistol 88 - 100%',
            bodyArmor: 'Needs Repair',
            communications: 'Operational',
            ammunition: 'Full Load'
        },
        'karlsson': {
            name: 'Marcus Karlsson',
            rank: 'Sergeant',
            role: 'Medic',
            readiness: 92,
            physicalFitness: 78,
            mentalAlertness: 95,
            equipmentStatus: 88,
            trainingCompletion: 92,
            teamCoordination: 85,
            missionKnowledge: 90,
            weaponProficiency: 'Advanced',
            combatExperience: '5 years',
            specialization: 'Combat Medicine',
            lastMission: 'Operation Shield 3 days ago',
            clearanceLevel: 'Secret',
            bloodType: 'A-',
            allergies: 'Penicillin',
            lastMedical: '2 days ago',
            fitnessScore: '92/100',
            restStatus: 'Well Rested',
            primaryWeapon: 'AK5C - 100%',
            secondaryWeapon: 'Pistol 88 - 95%',
            bodyArmor: 'Operational',
            communications: 'Operational',
            ammunition: 'Full Load'
        },
        'lindgren': {
            name: 'Anders Lindgren',
            rank: 'Sergeant',
            role: 'Rifleman',
            readiness: 37,
            physicalFitness: 15,
            mentalAlertness: 65,
            equipmentStatus: 45,
            trainingCompletion: 28,
            teamCoordination: 35,
            missionKnowledge: 42,
            weaponProficiency: 'Basic',
            combatExperience: '2 years',
            specialization: 'Infantry Operations',
            lastMission: 'Operation Shield 3 days ago',
            clearanceLevel: 'Confidential',
            bloodType: 'B+',
            allergies: 'None',
            lastMedical: '3 weeks ago',
            fitnessScore: '45/100',
            restStatus: 'Fatigued',
            primaryWeapon: 'AK5C - 60%',
            secondaryWeapon: 'Pistol 88 - 75%',
            bodyArmor: 'Needs Replacement',
            communications: 'Limited',
            ammunition: 'Partial Load'
        }
    };
    
    const member = memberData[memberId];
    if (!member) {
        console.error('Member not found:', memberId);
        return;
    }
    console.log('Member data retrieved:', member);
    console.log('Member ID:', memberId);
    console.log('Available member IDs:', Object.keys(memberData));
    
    // Update header information
    console.log('Updating header for member:', member.name, member.rank, member.role);
    
    // Only target elements within the profile page
    const profilePage = document.getElementById('profile');
    if (!profilePage) {
        console.error('Profile page not found!');
        return;
    }
    
    const nameElement = profilePage.querySelector('.page-header .user-info h2');
    const roleElement = profilePage.querySelector('.page-header .role');
    const avatarElement = profilePage.querySelector('.page-header .user-avatar span');
    
    console.log('Found elements:', { nameElement, roleElement, avatarElement });
    
    if (nameElement) {
        nameElement.textContent = member.name;
        console.log('Updated name to:', member.name);
    } else {
        console.error('Name element not found!');
    }
    
    if (roleElement) {
        roleElement.textContent = member.role;
        console.log('Updated role to:', member.role);
    } else {
        console.error('Role element not found!');
    }
    
    // Keep avatar as "JS" (Jesper's initials) regardless of member
    if (avatarElement) {
        avatarElement.textContent = 'JS';
        console.log('Avatar kept as JS (Jesper\'s account)');
    } else {
        console.error('Avatar element not found!');
    }
    
    // Update date to current date
    const today = new Date();
    const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    document.querySelector('.page-header .date').textContent = formattedDate;
    
    // Update readiness score
    const readinessScore = profilePage.querySelector('.readiness-score.large');
    if (readinessScore) {
        readinessScore.textContent = member.readiness + '%';
        console.log('Updated readiness score to:', member.readiness + '%');
    }
    
    // Update personal metrics with dynamic colors
    const metrics = profilePage.querySelectorAll('.personal-metrics .metric');
    
    // Helper function to get color based on percentage
    function getProgressColor(percentage) {
        if (percentage >= 70) return '#CAD784'; // Green
        if (percentage >= 40) return '#C5A945'; // Yellow
        return '#D35400'; // Red
    }
    
    // Physical Fitness
    metrics[0].querySelector('.progress-fill').style.width = member.physicalFitness + '%';
    metrics[0].querySelector('.progress-fill').style.backgroundColor = getProgressColor(member.physicalFitness);
    metrics[0].querySelector('.percentage').textContent = member.physicalFitness + '%';
    
    // Mental Alertness
    metrics[1].querySelector('.progress-fill').style.width = member.mentalAlertness + '%';
    metrics[1].querySelector('.progress-fill').style.backgroundColor = getProgressColor(member.mentalAlertness);
    metrics[1].querySelector('.percentage').textContent = member.mentalAlertness + '%';
    
    // Equipment Status
    metrics[2].querySelector('.progress-fill').style.width = member.equipmentStatus + '%';
    metrics[2].querySelector('.progress-fill').style.backgroundColor = getProgressColor(member.equipmentStatus);
    metrics[2].querySelector('.percentage').textContent = member.equipmentStatus + '%';
    
    // Training Completion
    metrics[3].querySelector('.progress-fill').style.width = member.trainingCompletion + '%';
    metrics[3].querySelector('.progress-fill').style.backgroundColor = getProgressColor(member.trainingCompletion);
    metrics[3].querySelector('.percentage').textContent = member.trainingCompletion + '%';
    
    // Team Coordination
    metrics[4].querySelector('.progress-fill').style.width = member.teamCoordination + '%';
    metrics[4].querySelector('.progress-fill').style.backgroundColor = getProgressColor(member.teamCoordination);
    metrics[4].querySelector('.percentage').textContent = member.teamCoordination + '%';
    
    // Mission Knowledge
    metrics[5].querySelector('.progress-fill').style.width = member.missionKnowledge + '%';
    metrics[5].querySelector('.progress-fill').style.backgroundColor = getProgressColor(member.missionKnowledge);
    metrics[5].querySelector('.percentage').textContent = member.missionKnowledge + '%';
    
    // Update operational details
    const operationalDetails = profilePage.querySelectorAll('.operational-details-card .detail-item .value');
    if (operationalDetails.length > 0) {
    operationalDetails[0].textContent = member.rank;
    operationalDetails[1].textContent = member.readiness >= 70 ? 'Ready' : member.readiness >= 40 ? 'Limited' : 'Not Ready';
    operationalDetails[1].className = 'value ' + (member.readiness >= 70 ? 'ready' : member.readiness >= 40 ? 'warning' : 'urgent');
        console.log('Updated operational details');
    }
    
    // Update tactical readiness
    const tacticalDetails = profilePage.querySelectorAll('.tactical-readiness-card .detail-item .value');
    if (tacticalDetails.length > 0) {
    tacticalDetails[0].textContent = member.weaponProficiency;
    tacticalDetails[1].textContent = member.combatExperience;
    tacticalDetails[2].textContent = member.specialization;
    tacticalDetails[3].textContent = member.lastMission;
    tacticalDetails[4].textContent = member.clearanceLevel;
        console.log('Updated tactical readiness');
    }
    
    // Update medical & physical
    const medicalDetails = profilePage.querySelectorAll('.medical-physical-card .detail-item .value');
    if (medicalDetails.length > 0) {
    medicalDetails[0].textContent = member.bloodType;
    medicalDetails[1].textContent = member.allergies;
    medicalDetails[2].textContent = member.lastMedical;
    medicalDetails[3].textContent = member.fitnessScore;
        
        // Rest Status with color
    medicalDetails[4].textContent = member.restStatus;
        if (member.restStatus === 'Well Rested') {
            medicalDetails[4].className = 'value ready';
        } else if (member.restStatus === 'Fatigued') {
            medicalDetails[4].className = 'value urgent';
        } else {
            medicalDetails[4].className = 'value warning';
        }
        console.log('Updated medical & physical');
    }
    
    // Update equipment & logistics with status colors
    const equipmentDetails = profilePage.querySelectorAll('.equipment-logistics-card .detail-item .value');
    if (equipmentDetails.length > 0) {
    equipmentDetails[0].textContent = member.primaryWeapon;
    equipmentDetails[1].textContent = member.secondaryWeapon;
        
        // Body Armor with status color
    equipmentDetails[2].textContent = member.bodyArmor;
        if (member.bodyArmor.includes('Needs') || member.bodyArmor.includes('Replacement')) {
            equipmentDetails[2].className = 'value urgent';
        } else {
            equipmentDetails[2].className = 'value ready';
        }
        
        // Communications with status color
    equipmentDetails[3].textContent = member.communications;
        if (member.communications === 'Limited') {
            equipmentDetails[3].className = 'value warning';
        } else {
            equipmentDetails[3].className = 'value ready';
        }
        
    equipmentDetails[4].textContent = member.ammunition;
        console.log('Updated equipment & logistics');
    }
}

// Function to return to dashboard
function showDashboard() {
    showPage('dashboard');
    
    // Update navigation to show dashboard is active
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === 'dashboard') {
            link.classList.add('active');
        }
    });
}

// Function to send chat message
function sendMessage() {
    const chatInput = document.querySelector('.chat-input');
    const message = chatInput.value.trim();
    
    if (message) {
        // Create new message element
        const chatContainer = document.querySelector('.chat-container');
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message user';
        
        messageElement.innerHTML = `
            <div class="message-header">
                <div class="message-avatar">
                    <div class="user-avatar" style="width: 24px; height: 24px; font-size: 12px;">
                        <span>JS</span>
                    </div>
                </div>
                <div class="message-info">
                    <span class="message-author">Jesper Svensson</span>
                    <span class="message-time">Just now</span>
                </div>
            </div>
            <div class="message-content">
                <p>${message}</p>
            </div>
        `;
        
        // Add message to chat
        chatContainer.appendChild(messageElement);
        
        // Clear input
        chatInput.value = '';
        
        // Scroll to bottom
        chatContainer.scrollTop = chatContainer.scrollHeight;
        
        // Simulate AI response after a short delay
        setTimeout(() => {
            const aiResponse = document.createElement('div');
            aiResponse.className = 'chat-message gpt';
            
            aiResponse.innerHTML = `
                <div class="message-header">
                    <div class="message-avatar">
                        <img src="Icons/hugeicons_ai-brain-04.png" alt="MMD Defender GPT" class="gpt-avatar">
                    </div>
                    <div class="message-info">
                        <span class="message-author">MMD Defender GPT</span>
                        <span class="message-time">Just now</span>
                    </div>
                </div>
                <div class="message-content">
                    <p>I understand your message: "${message}". How can I assist you further with your mission requirements?</p>
                </div>
            `;
            
            chatContainer.appendChild(aiResponse);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 1000);
    }
}

// Function to filter team members
function filterMembers() {
    const searchTerm = document.querySelector('.search-input').value.toLowerCase();
    const members = document.querySelectorAll('.member');
    const memberList = document.querySelector('.member-list');
    
    // Remove existing "no members" message
    const existingMessage = memberList.querySelector('.no-members-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    let visibleCount = 0;
    
    members.forEach(member => {
        const name = member.querySelector('.member-name').textContent.toLowerCase();
        const role = member.querySelector('.member-role').textContent.toLowerCase();
        
        if (name.includes(searchTerm) || role.includes(searchTerm)) {
            member.style.display = 'flex';
            visibleCount++;
        } else {
            member.style.display = 'none';
        }
    });
    
    // Show "no members found" message if no members match the search
    if (visibleCount === 0 && searchTerm !== '') {
        const noMembersMessage = document.createElement('div');
        noMembersMessage.className = 'no-members-message';
        noMembersMessage.textContent = 'No members found matching your search';
        memberList.appendChild(noMembersMessage);
    }
}

// Function to show all members (clear filter)
function showAllMembers() {
    const members = document.querySelectorAll('.member');
    const memberList = document.querySelector('.member-list');
    
    // Remove existing "no members" message
    const existingMessage = memberList.querySelector('.no-members-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Show all members
    members.forEach(member => {
        member.style.display = 'flex';
    });
}

// Function to apply filter buttons
function applyFilter(filterType) {
    const members = document.querySelectorAll('.member');
    const memberList = document.querySelector('.member-list');
    
    // Remove existing "no members" message
    const existingMessage = memberList.querySelector('.no-members-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    let visibleCount = 0;
    
    members.forEach(member => {
        const readiness = parseInt(member.querySelector('.readiness').textContent);
        const statusDot = member.querySelector('.status-dot');
        
        let show = true;
        
        switch (filterType) {
            case 'hydration':
                // Show members with low hydration (low readiness)
                show = readiness < 50;
                break;
            case 'injured':
                // Show members with warning status
                show = statusDot.classList.contains('warning');
                break;
            case 'pulse':
                // Show members with medium readiness
                show = readiness >= 50 && readiness < 80;
                break;
            case 'ready':
                // Show members with high readiness
                show = readiness >= 80;
                break;
            default:
                show = true;
        }
        
        member.style.display = show ? 'flex' : 'none';
        if (show) visibleCount++;
    });
    
    // Show "no members found" message if no members match the filter
    if (visibleCount === 0) {
        const noMembersMessage = document.createElement('div');
        noMembersMessage.className = 'no-members-message';
        noMembersMessage.textContent = 'No members found for this filter';
        memberList.appendChild(noMembersMessage);
    }
}

// Add some dynamic functionality to progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, Math.random() * 1000);
    });
}

// Initialize progress bar animations when dashboard is shown
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars after a short delay
    setTimeout(animateProgressBars, 500);
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to member cards
    const members = document.querySelectorAll('.member');
    members.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add hover effects to filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Update current date
function updateDate() {
    const dateElement = document.querySelector('.date');
    if (dateElement) {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric' 
        };
        const formattedDate = now.toLocaleDateString('en-US', options);
        dateElement.textContent = formattedDate;
    }
}

// Update date when page loads
document.addEventListener('DOMContentLoaded', updateDate);

// Add smooth transitions for page changes
document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.transition = 'opacity 0.3s ease-in-out';
    });
});

// Enhanced navigation with smooth transitions
function showPageWithTransition(pageName) {
    const currentPage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageName);
    
    if (currentPage && targetPage) {
        // Fade out current page
        currentPage.style.opacity = '0';
        
        setTimeout(() => {
            currentPage.classList.remove('active');
            targetPage.classList.add('active');
            targetPage.style.opacity = '0';
            
            // Fade in target page
            setTimeout(() => {
                targetPage.style.opacity = '1';
            }, 50);
        }, 300);
    }
}

// Notification dropdown functionality
function toggleNotifications() {
    const dropdown = document.getElementById('notification-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Close notifications when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('notification-dropdown');
    const bells = document.querySelectorAll('.notification-bell');
    
    if (dropdown && !dropdown.contains(e.target)) {
        // Check if click is on any notification bell
        let clickedOnBell = false;
        bells.forEach(bell => {
            if (bell.contains(e.target)) {
                clickedOnBell = true;
            }
        });
        
        if (!clickedOnBell) {
            dropdown.classList.remove('active');
        }
    }
});

// Profile dropdown functionality
function toggleProfileDropdown() {
    const dropdown = document.getElementById('profile-dropdown');
    const notificationDropdown = document.getElementById('notification-dropdown');
    
    // Close notification dropdown if open
    if (notificationDropdown) {
        notificationDropdown.classList.remove('active');
    }
    
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Profile section navigation
function showProfileSection(sectionName) {
    // For now, just show an alert - you can expand this to show different content
    const sectionTitles = {
        'personal': 'Personal Information',
        'preferences': 'Preferences',
        'security': 'Security & Privacy',
        'notifications': 'Notifications',
        'account': 'Account Settings'
    };
    
    alert(`Opening ${sectionTitles[sectionName]}...`);
}

// Close profile dropdown when clicking outside
document.addEventListener('click', function(e) {
    const profileDropdown = document.getElementById('profile-dropdown');
    const avatars = document.querySelectorAll('.user-avatar');
    
    if (profileDropdown && !profileDropdown.contains(e.target)) {
        // Check if click is on any avatar
        let clickedOnAvatar = false;
        avatars.forEach(avatar => {
            if (avatar.contains(e.target)) {
                clickedOnAvatar = true;
            }
        });
        
        if (!clickedOnAvatar) {
            profileDropdown.classList.remove('active');
        }
    }
});

// Profile tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const profileTabs = document.querySelectorAll('.profile-tab');
    const profileTabContents = document.querySelectorAll('.profile-tab-content');

    profileTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            profileTabs.forEach(t => t.classList.remove('active'));
            profileTabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab + '-tab');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Logout function
function logout() {
    if (confirm('Are you sure you want to sign out?')) {
        alert('Logout functionality would be implemented here.');
        // In a real application, this would redirect to login page
    }
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + 1-6 for navigation
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                showPage('dashboard');
                break;
            case '2':
                e.preventDefault();
                showPage('records');
                break;
            case '3':
                e.preventDefault();
                showPage('connections');
                break;
            case '4':
                e.preventDefault();
                showPage('gpt');
                break;
            case '5':
                e.preventDefault();
                showPage('help');
                break;
            case '6':
                e.preventDefault();
                showPage('settings');
                break;
        }
    }
    
    // Escape key to go back to dashboard
    if (e.key === 'Escape') {
        showDashboard();
    }
});

// Records page tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const tabContents = document.querySelectorAll('.records-tab-content');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            menuTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab + '-tab');
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

// Settings page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Toggle switch functionality
    const toggleInputs = document.querySelectorAll('.toggle-input');
    
    toggleInputs.forEach(toggle => {
        toggle.addEventListener('change', function() {
            // Toggle functionality - no text updates needed
        });
    });
    
    // Action buttons functionality
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            
            if (buttonText === 'Save Changes') {
                // Simulate saving changes
                this.textContent = 'Saving...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = 'Saved!';
                    setTimeout(() => {
                        this.textContent = 'Save Changes';
                        this.disabled = false;
                    }, 1500);
                }, 1000);
            } else if (buttonText === 'Reset to Defaults') {
                // Reset all settings to defaults
                if (confirm('Are you sure you want to reset all settings to their default values?')) {
                    resetSettingsToDefaults();
                }
            } else if (buttonText === 'Clear All Data') {
                // Clear all data confirmation
                if (confirm('WARNING: This will permanently delete all data. Are you absolutely sure?')) {
                    if (confirm('This action cannot be undone. Type "DELETE" to confirm.')) {
                        alert('Data clearing functionality would be implemented here.');
                    }
                }
            }
        });
    });
    
    // Function to reset settings to defaults
    function resetSettingsToDefaults() {
        // Reset theme
        const themeSelect = document.querySelector('select[class*="setting-select"]');
        if (themeSelect) themeSelect.value = 'dark';
        
        // Reset toggles
        const toggles = document.querySelectorAll('.toggle-input');
        toggles.forEach(toggle => {
            if (toggle.id === 'notifications' || toggle.id === 'encryption' || 
                toggle.id === 'audit-log' || toggle.id === 'emergency-alerts' || 
                toggle.id === 'location-tracking' || toggle.id === 'health-monitoring' || 
                toggle.id === 'cloud-sync') {
                toggle.checked = true;
            } else {
                toggle.checked = false;
            }
            
            // Toggle state updated - no text updates needed
        });
        
        // Reset selects
        const selects = document.querySelectorAll('.setting-select');
        selects.forEach(select => {
            if (select.querySelector('option[value="30"]')) {
                select.value = '30'; // Session timeout
            } else if (select.querySelector('option[value="60"]')) {
                select.value = '60'; // Auto-sync frequency
            } else if (select.querySelector('option[value="365"]')) {
                select.value = '365'; // Data retention
            } else if (select.querySelector('option[value="daily"]')) {
                select.value = 'daily'; // Backup frequency
            }
        });
        
        alert('Settings have been reset to defaults.');
    }
});

// Help page FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
    
    // Support button functionality
    const supportBtn = document.querySelector('.support-btn');
    if (supportBtn) {
        supportBtn.addEventListener('click', function() {
            alert('Documentation would open in a new window or tab. This would typically link to a comprehensive user manual or help documentation.');
        });
    }
});
