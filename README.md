# MMD Defender Website

A modern, dark-themed tactical squad management interface built with HTML, CSS, and JavaScript.

## Features

### 🎯 **Dashboard**
- **Mission Readiness Overview**: Large 74% readiness score display
- **Team Metrics**: Progress bars for various performance indicators
  - Physical operational capability
  - Team hydration level
  - Physical Endurance
  - Tactical Coordination
  - Communication Efficiency
  - Mental Resilience
- **Team Members**: Interactive member list with search and filtering

### 👤 **Member Profiles**
- **Personal Mission Readiness**: Individual readiness scores
- **Detailed Metrics**: Personal performance breakdowns
- **Status Information**: Current status, assessments, and training schedules

### 🤖 **MMD Defender GPT**
- **AI Chat Interface**: Interactive chat with the AI assistant
- **Mission Support**: Get help with defense assessments, planning, and coordination
- **Real-time Responses**: Simulated AI responses to user messages

### 📊 **Navigation & Interface**
- **Dark Theme**: Professional dark interface with accent colors
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and animations

## Color Scheme

The website uses the exact color scheme from the original design:

- **Background**: `#1a1a1a` (Dark gray)
- **Sidebar**: `#2d2d2d` (Medium dark gray)
- **Borders**: `#404040` (Medium gray)
- **Accent Yellow**: `#FFD700` (Mission readiness scores)
- **Accent Green**: `#4CAF50` (Good status, ready indicators)
- **Accent Orange**: `#FF9800` (Warning status, medium performance)
- **Text Colors**: White, light gray, and dark gray variations

## Icons Used

All icons are sourced from the project's Icons folder:
- `Logo 32x32.png` - Application logo
- `mage_dashboard.png` - Dashboard navigation
- `basil_document-outline.png` - Records navigation
- `material-symbols_linked-services-outline.png` - Connections navigation
- `hugeicons_ai-brain-04.png` - MMD Defender GPT
- `prime_sign-out.png` - Logout
- `search.png` - Search functionality

## How to Use

### Navigation
1. **Dashboard**: Main overview with team metrics and readiness scores
2. **Records**: Mission and training documentation (placeholder)
3. **Connections**: Team and unit communications (placeholder)
4. **MMD Defender GPT**: AI-powered mission support chat

### Interactive Features
- **Click team members** to view their detailed profiles
- **Use search bar** to find specific team members
- **Apply filters** to view members by status (Hydration, Injured, Pulse, Ready)
- **Chat with AI** in the GPT interface
- **Keyboard shortcuts**:
  - `Ctrl/Cmd + 1-4`: Navigate between main sections
  - `Escape`: Return to dashboard

### Team Management
- View overall mission readiness (74%)
- Monitor individual team member performance
- Track physical and mental metrics
- Assess equipment and training status

## File Structure

```
MMD Defender/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and layout
├── script.js           # Interactive functionality
├── README.md           # This documentation
└── Icons/              # All application icons
    ├── Logo 32x32.png
    ├── mage_dashboard.png
    ├── basil_document-outline.png
    ├── material-symbols_linked-services-outline.png
    ├── hugeicons_ai-brain-04.png
    ├── prime_sign-out.png
    └── search.png
```

## Getting Started

1. **Open `index.html`** in a modern web browser
2. **Navigate** using the left sidebar
3. **Interact** with team members and metrics
4. **Chat** with the AI assistant in the GPT section

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (not supported)

## Responsive Design

The website automatically adapts to different screen sizes:
- **Desktop**: Full sidebar + content layout
- **Tablet**: Stacked layout for better mobile viewing
- **Mobile**: Optimized spacing and touch interactions

## Customization

### Adding New Team Members
Edit the HTML to add new member entries in the dashboard section:

```html
<div class="member" onclick="showProfile('newmember')">
    <div class="member-avatar nm">NM</div>
    <div class="member-info">
        <div class="member-name">N. Member Rank.</div>
        <div class="member-role">Role</div>
    </div>
    <div class="member-status">
        <span class="status-dot ready"></span>
        <span class="readiness">85%</span>
        <span class="arrow">→</span>
    </div>
</div>
```

### Modifying Colors
Update the CSS variables in `styles.css` to change the color scheme:

```css
:root {
    --background-color: #1a1a1a;
    --sidebar-color: #2d2d2d;
    --accent-yellow: #FFD700;
    --accent-green: #4CAF50;
    --accent-orange: #FF9800;
}
```

## Future Enhancements

- [ ] Real-time data integration
- [ ] User authentication system
- [ ] Database backend for team management
- [ ] Advanced reporting and analytics
- [ ] Mobile app version
- [ ] Real AI integration for GPT functionality

## Support

For questions or issues with the MMD Defender website, please refer to the project documentation or contact the development team.

---

**MMD Defender** - AI-Powered Defense & Mission Support
