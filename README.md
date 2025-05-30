# Todo List React App

A modern, feature-rich todo list application built with React, TypeScript, and Tailwind CSS. This application helps users manage their tasks efficiently with a beautiful and intuitive user interface.

## 🌟 Features

### Task Management
- Create, edit, and delete tasks
- Mark tasks as completed/uncompleted
- Mark tasks as important
- Set due dates for tasks
- Add descriptions to tasks
- Filter tasks by status (All, Today, Important, Completed, Uncompleted)

### Directory Organization
- Create custom directories to organize tasks
- Move tasks between directories
- Delete directories (tasks are moved to main directory)
- View tasks by directory

### User Interface
- Responsive design for all screen sizes
- Dark/Light mode support
- Sidebar navigation
- Grid/List view options
- Loading states and animations
- Error handling and notifications

### Search and Filter
- Real-time search functionality
- Filter tasks by various criteria
- Search in task titles and descriptions

### Progress Tracking
- Track overall task completion progress
- Monitor today's tasks progress
- Visual progress indicators

## 🛠️ Technologies Used

- **React** - Frontend library
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **Local Storage** - Data persistence
- **Context API** - State management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Trung112277/todo-list-react-v2.git
cd todo-list-react-v2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── app/              # App entry point and routes
├── components/       # React components
│   ├── common/      # Shared components
│   ├── feature/     # Feature-specific components
│   └── ui/          # UI components
├── contexts/        # React Context providers
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── types/           # TypeScript type definitions
└── styles/          # Global styles
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Features in Detail

### Task Management
- Create tasks with titles, descriptions, and due dates
- Edit existing tasks
- Delete tasks individually or in bulk
- Toggle task completion status
- Mark tasks as important
- Set due dates with date picker

### Directory System
- Create custom directories for task organization
- Move tasks between directories
- Delete directories (tasks are automatically moved to main directory)
- View tasks filtered by directory

### User Interface
- Responsive design that works on mobile, tablet, and desktop
- Dark/Light mode toggle
- Collapsible sidebar navigation
- Grid/List view toggle for task display
- Loading spinners and animations
- Error alerts and notifications

### Search and Filter
- Real-time search as you type
- Search in task titles and descriptions
- Filter tasks by various criteria (status, importance, due date)
- Clear search and filters

### Progress Tracking
- Overall task completion progress bar
- Today's tasks progress tracking
- Visual indicators for task status
- Task count displays

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
