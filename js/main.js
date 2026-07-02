// StrategyLab OS - Main JavaScript Module

// Utility Functions
const StrategyLab = {
    // Format currency
    formatCurrency: (amount, currency = 'USD') => {
        const formatter = new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: currency
        });
        return formatter.format(amount);
    },

    // Calculate profit distribution
    calculateProfit: (totalRevenue, costs, distributionRate = 0.3) => {
        const profit = totalRevenue - costs;
        return {
            profit: profit,
            distributable: profit * distributionRate,
            reinvestment: profit * 0.4,
            reserve: profit * 0.3
        };
    },

    // Calculate points distribution
    calculatePoints: (pointsSystem = {}) => {
        const totalPoints = Object.values(pointsSystem).reduce((a, b) => a + b, 0);
        return {
            totalPoints,
            distribution: Object.entries(pointsSystem).map(([name, points]) => ({
                name,
                points,
                percentage: ((points / totalPoints) * 100).toFixed(1)
            }))
        };
    },

    // Team members data
    teamMembers: [
        { id: 1, name: 'Rodolph', role: 'CEO', department: 'Operations', equity: 45, points: 5, location: 'Ghana' },
        { id: 2, name: 'Herman', role: 'Creative Director', department: 'Creative', equity: 15, points: 4, location: 'Ghana' },
        { id: 3, name: 'Hanss', role: 'CTO', department: 'Technology', equity: 15, points: 4, location: 'Ghana' },
        { id: 4, name: 'John', role: 'Growth Lead', department: 'Growth', equity: 15, points: 4, location: 'Togo' },
        { id: 5, name: 'Jacques', role: 'Junior Developer', department: 'Technology', equity: 5, points: 2, location: 'Togo' }
    ],

    // Services catalog
    services: [
        { id: 'brand', name: 'Branding', packages: ['Starter', 'Business', 'Enterprise'], basePrice: [200, 400, 700] },
        { id: 'web', name: 'Web Development', packages: ['Starter', 'Business', 'Enterprise'], basePrice: [250, 500, 1000] },
        { id: 'saas', name: 'SaaS Development', packages: ['Starter', 'Business', 'Enterprise'], basePrice: [750, 1500, 3000] },
        { id: 'mobile', name: 'Mobile Apps', packages: ['Starter', 'Business', 'Enterprise'], basePrice: [750, 1500, 3000] },
        { id: 'ai', name: 'AI Automation', packages: ['Basic', 'Advanced', 'Premium'], basePrice: [50, 100, 150] }
    ],

    // SOP pipeline steps
    pipelineSteps: [
        { num: 1, name: 'Prospection', responsible: 'John' },
        { num: 2, name: 'Découverte', responsible: 'John/Rodolph' },
        { num: 3, name: 'Devisage', responsible: 'Rodolph' },
        { num: 4, name: 'Contrat', responsible: 'Rodolph' },
        { num: 5, name: 'Branding', responsible: 'Herman' },
        { num: 6, name: 'Design UI/UX', responsible: 'Herman' },
        { num: 7, name: 'Développement', responsible: 'Hanss/Jacques' },
        { num: 8, name: 'Quality QA', responsible: 'Hanss' },
        { num: 9, name: 'Livraison', responsible: 'Hanss' },
        { num: 10, name: 'Maintenance', responsible: 'Jacques' },
        { num: 11, name: 'Facturation', responsible: 'Rodolph' },
        { num: 12, name: 'Archivage', responsible: 'Tous' }
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('StrategyLab OS loaded');
});