import { defineStore } from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    selectedProject: null,
    projects: [
      {
        id: 1,
        title: 'Wedding Invitation',
        description: 'Website for wedding invitation.',
        img: 'projects/wedding-invitation.png',
        tech: ['Bootstrap'],
        source: 'https://github.com/muhdaniboyrendi/wedding-invitation'
      },
      {
        id: 2,
        title: 'Grasius',
        description: 'Application for student management and attendance system with QR Code.',
        img: 'projects/grasius.PNG',
        tech: ['Laravel', 'Livewire', 'Bootstrap'],
        source: 'https://github.com/muhdaniboyrendi/jombang-kota'
      },
      {
        id: 3,
        title: 'Online Shop',
        description: 'Simple online shop application with admin and customer pages.',
        img: 'projects/online-shop.PNG',
        tech: ['Laravel', 'Bootstrap'],
        source: 'https://github.com/muhdaniboyrendi/e-commerce'
      },
      {
        id: 4,
        title: 'Note App',
        description: 'Simple Notes App with features add, delete, archive, and search notes.',
        img: 'projects/notes.PNG',
        tech: ['React JS', 'Bootstrap'],
        source: 'https://github.com/muhdaniboyrendi/personal-notes'
      },
      {
        id: 5,
        title: 'Todo List App',
        description: 'Simple Todo List App with featues add, delete, and done todo.',
        img: 'projects/todo-list.PNG',
        tech: ['Vue JS', 'Bootstrap'],
        source: '#'
      },
    ]
  }),
  actions: {
    setSelectedProject(project) {
      this.selectedProject = project
    },
    getProjectById(id) {
      return this.projects.find(p => p.id === parseInt(id))
    }
  }
})
