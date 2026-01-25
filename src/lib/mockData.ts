import type { Project, DailyRecord } from '@/types/project';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Lekki Duplex',
    location: 'Lekki Phase 1, Lagos',
    createdAt: new Date('2024-01-15'),
    reporterId: 'reporter-1',
  },
  {
    id: '2',
    name: 'Abuja Swimming Pool',
    location: 'Maitama, Abuja',
    createdAt: new Date('2024-02-01'),
    reporterId: 'reporter-1',
  },
  {
    id: '3',
    name: 'Victoria Island Office Complex',
    location: 'Victoria Island, Lagos',
    createdAt: new Date('2024-02-20'),
    reporterId: 'reporter-1',
  },
];

export const mockRecords: DailyRecord[] = [
  {
    id: 'r1',
    projectId: '1',
    date: '2026-01-20',
    summary: 'Foundation work completed. Concrete cured well overnight. Ready for column reinforcement tomorrow.',
    photos: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      'https://images.unsplash.com/photo-1590725140246-20acdee442be?w=800',
    ],
    videos: [],
    submittedAt: new Date('2026-01-20T17:30:00'),
    isLocked: true,
  },
  {
    id: 'r2',
    projectId: '1',
    date: '2026-01-21',
    summary: 'Column reinforcement started. Steel bars delivered and inspection passed. 6 columns completed.',
    photos: [
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800',
      'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=800',
    ],
    videos: [],
    submittedAt: new Date('2026-01-21T18:00:00'),
    isLocked: true,
  },
  {
    id: 'r3',
    projectId: '2',
    date: '2026-01-19',
    summary: 'Excavation completed for the pool. Soil tested and approved. Plumbing layout marked.',
    photos: [
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=800',
    ],
    videos: [],
    submittedAt: new Date('2026-01-19T16:45:00'),
    isLocked: true,
  },
];

export const getTodayDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-NG', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-NG', {
    hour: '2-digit',
    minute: '2-digit',
  });
};
