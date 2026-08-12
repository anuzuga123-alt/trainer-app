/**
 * Zuga Fitness Trainer App - Phase 1 Mock API
 * Simulates a cloud database with a 500ms network delay.
 * Persists to sessionStorage.
 */

const MOCK_DELAY = 500;

// Dynamic Date Helpers relative to Today
const getPastDateStr = (daysAgo) => {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return d.toISOString().split('T')[0];
};

// Seed Data
const initialState = {
    trainers: [
        {
            id: 'trainer_1',
            name: 'Head Coach',
            email: 'trainer@zuga.com',
            phone: '1234567890',
            password: 'zuga2026'
        }
    ],
    clientRegistry: {
        'client_1': {
            id: 'client_1',
            name: 'Dr. G. Keerthidaa',
            age: 33,
            gender: 'Female',
            phone: '7200197793',
            joiningDate: '2025-01-01',
            renewalDate: getPastDateStr(-15), // Active for next 15 days
            height: 155,
            weight: 85,
            medicalCondition: 'None',
            injuries: 'None',
            occupation: 'Dentist',
            goals: 'weight loss / fat loss / strength',
            diet: 'Pure Veg',
            sleep: '5-6 hrs',
            stress: 'high stress',
            supplements: 'Vitamin D + Magnesium',
            attendance: {
                [getPastDateStr(1)]: { status: 'present', notes: 'Great stamina during cardio.' },
                [getPastDateStr(2)]: { status: 'present', notes: 'Completed full lower body workout.' },
                [getPastDateStr(3)]: { status: 'absent', notes: 'Informed in advance - work conflict.' },
                [getPastDateStr(4)]: { status: 'present', notes: 'Excellent power output.' },
                [getPastDateStr(5)]: { status: 'holiday', notes: 'National Holiday' },
                [getPastDateStr(6)]: { status: 'freeze', notes: 'Medical freeze day' }
            }
        },
        'client_2': {
            id: 'client_2',
            name: 'Alex Johnson',
            age: 32,
            gender: 'Male',
            joiningDate: '2025-02-15',
            renewalDate: getPastDateStr(5), // Inactive, expired 5 days ago
            height: 180,
            weight: 82,
            medicalCondition: 'None',
            injuries: 'Ankle sprain',
            attendance: {
                [getPastDateStr(1)]: { status: 'absent', notes: 'Recovering from minor ankle twist.' },
                [getPastDateStr(2)]: { status: 'present', notes: 'Focused upper body only.' },
                [getPastDateStr(3)]: { status: 'present', notes: 'Light active recovery.' },
                [getPastDateStr(4)]: { status: 'present', notes: 'First session after ankle sprain.' }
            }
        },
        'group_1': {
            id: 'group_1',
            name: 'Emily Davis',
            age: 26,
            gender: 'Female',
            joiningDate: '2025-01-10',
            renewalDate: getPastDateStr(-45),
            height: 168,
            weight: 60,
            medicalCondition: 'None',
            injuries: 'Wrist soreness',
            attendance: {
                [getPastDateStr(7)]: { status: 'present', notes: 'Strong engagement.' },
                [getPastDateStr(6)]: { status: 'present', notes: '' },
                [getPastDateStr(5)]: { status: 'present', notes: '' },
                [getPastDateStr(4)]: { status: 'present', notes: '' },
                [getPastDateStr(3)]: { status: 'absent', notes: 'Personal reason.' },
                [getPastDateStr(2)]: { status: 'present', notes: '' },
                [getPastDateStr(1)]: { status: 'present', notes: '' }
            }
        },
        'group_2': {
            id: 'group_2',
            name: 'Marcus Stone',
            age: 34,
            gender: 'Male',
            joiningDate: '2025-03-01',
            renewalDate: getPastDateStr(-120),
            height: 175,
            weight: 78,
            medicalCondition: 'None',
            injuries: 'Lower back tightness',
            attendance: {
                [getPastDateStr(7)]: { status: 'present', notes: '' },
                [getPastDateStr(6)]: { status: 'present', notes: '' },
                [getPastDateStr(5)]: { status: 'present', notes: '' },
                [getPastDateStr(4)]: { status: 'present', notes: '' },
                [getPastDateStr(3)]: { status: 'present', notes: '' },
                [getPastDateStr(2)]: { status: 'present', notes: '' },
                [getPastDateStr(1)]: { status: 'present', notes: '' }
            }
        },
        'group_3': {
            id: 'group_3',
            name: 'Sarah Connor',
            age: 40,
            gender: 'Female',
            joiningDate: '2025-01-15',
            renewalDate: getPastDateStr(-200),
            height: 162,
            weight: 55,
            medicalCondition: 'None',
            injuries: 'Shoulder impingement',
            attendance: {
                [getPastDateStr(6)]: { status: 'present', notes: '' },
                [getPastDateStr(3)]: { status: 'present', notes: '' }
            }
        },
        'group_4': {
            id: 'group_4',
            name: 'David Kim',
            age: 28,
            gender: 'Male',
            joiningDate: '2025-02-20',
            renewalDate: getPastDateStr(-80),
            height: 182,
            weight: 74,
            medicalCondition: 'None',
            injuries: 'None',
            attendance: {
                [getPastDateStr(7)]: { status: 'present', notes: '' },
                [getPastDateStr(6)]: { status: 'present', notes: '' },
                [getPastDateStr(5)]: { status: 'freeze', notes: 'Membership frozen.' },
                [getPastDateStr(4)]: { status: 'present', notes: '' },
                [getPastDateStr(3)]: { status: 'absent', notes: '' },
                [getPastDateStr(2)]: { status: 'present', notes: '' },
                [getPastDateStr(1)]: { status: 'present', notes: '' }
            }
        },
        'group_5': {
            id: 'group_5',
            name: 'Jessica Taylor',
            age: 31,
            gender: 'Female',
            joiningDate: '2025-03-05',
            renewalDate: getPastDateStr(-100),
            height: 170,
            weight: 62,
            medicalCondition: 'None',
            injuries: 'None',
            attendance: {
                [getPastDateStr(7)]: { status: 'present', notes: '' },
                [getPastDateStr(6)]: { status: 'present', notes: '' },
                [getPastDateStr(5)]: { status: 'holiday', notes: 'National Holiday.' },
                [getPastDateStr(4)]: { status: 'present', notes: '' },
                [getPastDateStr(3)]: { status: 'absent', notes: '' },
                [getPastDateStr(2)]: { status: 'present', notes: '' }
            }
        }
    },
    trainerData: {
        'trainer_1': {
            ptClientIds: ['client_1', 'client_2', 'client_3'],
            groups: [
                {
                    id: 'group_class_1',
                    name: '6 AM Power Yoga',
                    clientIds: ['group_1', 'group_2', 'group_3', 'group_4', 'group_5']
                }
            ]
        }
    }
};

// Real-time Cloud JSON database synchronization via jsonbin-zeta.vercel.app & proxy.cors.sh
const BIN_ID = 't9plT7QQbE';
const CLOUD_API_URL = `https://proxy.cors.sh/https://jsonbin-zeta.vercel.app/api/bins/${BIN_ID}`;

let localCachedState = null;

function sanitizeAndSyncState(state) {
    if (!state) return state;
    if (!state.clientRegistry) state.clientRegistry = {};
    if (!state.trainerData) state.trainerData = {};
    if (!state.trainerData['trainer_1']) {
        state.trainerData['trainer_1'] = { ptClientIds: [], groups: [] };
    }

    // Ensure client_3 (Rohan Sharma) is in the registry
    if (!state.clientRegistry['client_3']) {
        state.clientRegistry['client_3'] = {
            id: 'client_3',
            name: 'Rohan Sharma',
            age: 28,
            gender: 'Male',
            phone: '9876543210',
            joiningDate: '2025-02-01',
            renewalDate: getPastDateStr(-1), // Tomorrow
            height: 178,
            weight: 76,
            medicalCondition: 'None',
            injuries: 'Slight knee sensitivity',
            occupation: 'Software Engineer',
            goals: 'muscle gain / athletic conditioning',
            diet: 'Non-Veg (High Protein)',
            sleep: '7-8 hrs',
            stress: 'moderate',
            supplements: 'Whey Protein + Creatine',
            attendance: {
                [getPastDateStr(1)]: { status: 'present', notes: 'Pushed hard on squat progression, knee felt stable.' },
                [getPastDateStr(2)]: { status: 'present', notes: 'Upper body hypertrophy focus. Great form on bench press.' },
                [getPastDateStr(3)]: { status: 'absent', notes: 'Rest day - had a late office release.' },
                [getPastDateStr(4)]: { status: 'present', notes: 'Conditioning and core circuits. High intensity.' },
                [getPastDateStr(5)]: { status: 'present', notes: 'Completed full deadlift session, working sets of 120kg.' },
                [getPastDateStr(6)]: { status: 'freeze', notes: 'Out of town business trip' },
                [getPastDateStr(7)]: { status: 'holiday', notes: 'National Holiday - Gym closed' },
                [getPastDateStr(8)]: { status: 'present', notes: 'Light active recovery and mobility stretches.' }
            }
        };
    }

    // Always dynamically adjust Rohan Sharma's renewal date to exactly tomorrow (1 day away)
    state.clientRegistry['client_3'].renewalDate = getPastDateStr(-1);

    // Ensure client_3 is linked to trainer_1
    if (!state.trainerData['trainer_1'].ptClientIds.includes('client_3')) {
        state.trainerData['trainer_1'].ptClientIds.push('client_3');
    }

    // Ensure sentEmails outbox list is initialized
    if (!state.sentEmails) {
        state.sentEmails = [];
    }

    return state;
}

function loadState() {
    if (localCachedState) return sanitizeAndSyncState(localCachedState);
    let stored = localStorage.getItem('zuga_state') || localStorage.getItem('zuga_session') || sessionStorage.getItem('zuga_state') || sessionStorage.getItem('zuga_session');
    let state;
    if (!stored) {
        const clonedState = JSON.parse(JSON.stringify(initialState));
        state = clonedState;
    } else {
        state = JSON.parse(stored);
    }
    state = sanitizeAndSyncState(state);
    localCachedState = state;
    return localCachedState;
}

async function fetchCloudState() {
    try {
        const res = await fetch(CLOUD_API_URL, {
            headers: { 'x-cors-gratis': 'true' }
        });
        if (res.ok) {
            let state = await res.json();
            state = sanitizeAndSyncState(state);
            localCachedState = state;
            const val = JSON.stringify(state);
            localStorage.setItem('zuga_state', val);
            localStorage.setItem('zuga_session', val);
            sessionStorage.setItem('zuga_state', val);
            sessionStorage.setItem('zuga_session', val);
            return state;
        }
    } catch (e) {
        console.warn('Cloud fetch failed, fallback to local storage', e);
    }
    return loadState();
}

async function saveState(state) {
    localCachedState = state;
    const val = JSON.stringify(state);
    localStorage.setItem('zuga_state', val);
    localStorage.setItem('zuga_session', val);
    sessionStorage.setItem('zuga_state', val);
    sessionStorage.setItem('zuga_session', val);

    try {
        await fetch(CLOUD_API_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-cors-gratis': 'true'
            },
            body: val
        });
    } catch (e) {
        console.warn('Cloud save failed, saved locally instead', e);
    }
}

// Helper to simulate delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const mockApi = {
    // Auth APIs
    login: async (email, password) => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        const trainer = state.trainers.find(t => (t.email === email || t.phone === email) && t.password === password);
        if (trainer) {
            localStorage.setItem('currentTrainer', JSON.stringify(trainer));
            sessionStorage.setItem('currentTrainer', JSON.stringify(trainer));
            return { success: true, trainer };
        }
        return { success: false, error: 'Invalid email/phone or password' };
    },

    register: async (name, phone, email, password) => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        if (state.trainers.some(t => t.email === email)) {
            return { success: false, error: 'A trainer with this email already exists' };
        }
        const newTrainer = {
            id: 'trainer_' + Date.now().toString(36),
            name,
            phone,
            email,
            password
        };
        state.trainers.push(newTrainer);
        state.trainerData[newTrainer.id] = {
            ptClientIds: [],
            groups: [
                {
                    id: 'group_class_' + Date.now().toString(36),
                    name: '6 AM Power Yoga',
                    clientIds: []
                }
            ]
        };
        await saveState(state);
        localStorage.setItem('currentTrainer', JSON.stringify(newTrainer));
        sessionStorage.setItem('currentTrainer', JSON.stringify(newTrainer));
        return { success: true, trainer: newTrainer };
    },

    logout: async () => {
        await delay(MOCK_DELAY);
        localStorage.removeItem('currentTrainer');
        sessionStorage.removeItem('currentTrainer');
        return { success: true };
    },

    getCurrentTrainer: () => {
        const stored = localStorage.getItem('currentTrainer') || sessionStorage.getItem('currentTrainer');
        return stored ? JSON.parse(stored) : null;
    },

    // Global Registry APIs
    getAllClients: async () => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        return Object.values(state.clientRegistry);
    },

    // PT Client APIs
    getPTClients: async (trainerId) => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        const trainerInfo = state.trainerData[trainerId] || { ptClientIds: [] };
        return trainerInfo.ptClientIds.map(id => state.clientRegistry[id]).filter(Boolean);
    },

    addPTClient: async (trainerId, clientData) => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        const newId = 'client_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4);
        const newClient = {
            id: newId,
            ...clientData,
            attendance: {}
        };
        state.clientRegistry[newId] = newClient;
        if (!state.trainerData[trainerId]) {
            state.trainerData[trainerId] = { ptClientIds: [], groups: [] };
        }
        state.trainerData[trainerId].ptClientIds.push(newId);
        await saveState(state);
        return { success: true, client: newClient };
    },

    updateClient: async (clientData) => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        const existing = state.clientRegistry[clientData.id];
        if (!existing) {
            return { success: false, error: 'Client not found' };
        }
        state.clientRegistry[clientData.id] = {
            ...existing,
            ...clientData
        };
        await saveState(state);
        return { success: true, client: state.clientRegistry[clientData.id] };
    },

    // Group Class APIs
    getGroups: async (trainerId) => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        const trainerInfo = state.trainerData[trainerId] || { groups: [] };
        // Enrich group clients
        return trainerInfo.groups.map(group => {
            const enrichedClients = group.clientIds.map(id => state.clientRegistry[id]).filter(Boolean);
            return {
                ...group,
                clients: enrichedClients
            };
        });
    },

    addGroupClient: async (trainerId, groupId, clientData) => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        const newId = 'group_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4);
        const newClient = {
            id: newId,
            ...clientData,
            attendance: {}
        };
        state.clientRegistry[newId] = newClient;
        const trainerInfo = state.trainerData[trainerId];
        if (trainerInfo) {
            const group = trainerInfo.groups.find(g => g.id === groupId);
            if (group) {
                group.clientIds.push(newId);
            }
        }
        await saveState(state);
        return { success: true, client: newClient };
    },

    addExistingClientToGroup: async (trainerId, groupId, clientId) => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        const trainerInfo = state.trainerData[trainerId];
        if (trainerInfo) {
            const group = trainerInfo.groups.find(g => g.id === groupId);
            if (group) {
                if (!group.clientIds.includes(clientId)) {
                    group.clientIds.push(clientId);
                    await saveState(state);
                    return { success: true };
                }
                return { success: false, error: 'Client already in group class' };
            }
        }
        return { success: false, error: 'Group or trainer info not found' };
    },

    // Attendance APIs
    saveAttendance: async (clientId, date, status, notes = '') => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        const client = state.clientRegistry[clientId];
        if (!client) {
            return { success: false, error: 'Client not found' };
        }
        if (!client.attendance) {
            client.attendance = {};
        }
        if (status === "") {
            delete client.attendance[date];
        } else {
            client.attendance[date] = { status, notes };
        }
        await saveState(state);
        return { success: true, client };
    },

    saveBatchAttendance: async (batchData) => {
        // batchData: [{ clientId, date, status }]
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        batchData.forEach(({ clientId, date, status }) => {
            const client = state.clientRegistry[clientId];
            if (client) {
                if (!client.attendance) {
                    client.attendance = {};
                }
                if (status === "") {
                    delete client.attendance[date];
                } else {
                    client.attendance[date] = {
                        status,
                        notes: client.attendance[date]?.notes || ''
                    };
                }
            }
        });
        await saveState(state);
        return { success: true };
    },

    getSentEmails: async () => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        return state.sentEmails || [];
    },

    sendEmailReport: async (clientId, to, subject, content) => {
        await delay(MOCK_DELAY);
        await fetchCloudState();
        const state = loadState();
        if (!state.sentEmails) {
            state.sentEmails = [];
        }
        const newMail = {
            id: 'email_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4),
            clientId,
            to,
            subject,
            content,
            sentAt: new Date().toISOString()
        };
        state.sentEmails.push(newMail);
        await saveState(state);
        return { success: true, email: newMail };
    },

    init: async () => {
        await fetchCloudState();
        const state = loadState();
        return state;
    }
};

// Expose to window object for global usage
window.mockApi = mockApi;
