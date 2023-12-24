export const practices = [
    {
        id: 1,
        name: 'FMY ORTHODONTICS',
        creditCards: [
            'Visa',
            'MasterCard',
            'AM EX',
            'Discover'
        ],
        oid: 'of00001439',
        phones: [
            '(731) 668-8922',
            '(800) 548-5303'
        ],
        webSite: 'www.fmyortho.com',
        maxPayoutDiscount: 5,
        payoutDiscountBeginAt: 25,
        maxAprForExtendedPayouTime: 7,
        maxExtendedPayoutTime: 25,
        creditFromPrevContract: 100,
        logoUrl: ''
    }
]

export const treatmentTypes = [
    {
        id: 1,
        practiceId: 1,
        name: 'Regular Phase I',
        fee: '4.190',
        mos: 16,
        range: [9, 15],
        insMos: 15,
        addOnsNumber: 2
    },
    {
        id: 2,
        practiceId: 1,
        name: 'Regular Phase II',
        fee: '8.550',
        mos: 15,
        range: [9, 18],
        insMos: 24,
        addOnsNumber: 2
    },
    {
        id: 3,
        practiceId: 1,
        name: 'Regular Full',
        fee: '6.980',
        mos: 24,
        range: [15, 25],
        insMos: 24,
        addOnsNumber: 2
    },
    {
        id: 4,
        practiceId: 1,
        name: 'Complex Phase I',
        fee: '4.630',
        mos: 18,
        range: [15, 25],
        insMos: 20,
        addOnsNumber: 3
    },
    {
        id: 5,
        practiceId: 1,
        name: 'Complex Phase II',
        fee: '8.960',
        mos: 21,
        range: [18, 27],
        insMos: 30,
        addOnsNumber: 4
    },
    {
        id: 6,
        practiceId: 1,
        name: 'Complex full',
        fee: '8.300',
        mos: 31,
        range: [24, 33],
        insMos: 30,
        addOnsNumber: 6
    },
    {
        id: 7,
        practiceId: 1,
        name: 'Simple Phase I',
        fee: '3.195',
        mos: 12,
        range: [6, 9],
        insMos: 12,
        addOnsNumber: 7
    },
    {
        id: 8,
        practiceId: 1,
        name: 'Simple Phase II',
        fee: '5.200',
        mos: 13,
        range: [6, 10],
        insMos: 13,
        addOnsNumber: 7
    },
]

export const addOns = [
    {
        id: 1,
        practiceId: 1,
        name: 'Ceramic Braces',
        fee: '600.00'
    },
    {
        id: 2,
        practiceId: 1,
        name: 'Upper Ceramic Braces',
        fee: '300.00'
    },
    {
        id: 3,
        practiceId: 1,
        name: 'Invisalign',
        fee: '900.00'
    },
    {
        id: 4,
        practiceId: 1,
        name: 'Phase I Ceramic Braces',
        fee: '150.00'
    },
    {
        id: 5,
        practiceId: 1,
        name: 'Some other Add-On',
        fee: '900.00'
    },
]

export const discounts = [
    {
        id: 1,
        practiceId: 1,
        name: 'Bookkeeping',
        percentage: 5
    },
    {
        id: 2,
        practiceId: 1,
        name: 'Professional',
        percentage: 10
    },
    {
        id: 3,
        practiceId: 1,
        name: 'Personal',
        percentage: 20
    },
    {
        id: 4,
        practiceId: 1,
        name: 'Active Military',
        percentage: 20
    },
    {
        id: 5,
        practiceId: 1,
        name: 'At Cost',
        percentage: 40
    },
    {
        id: 6,
        practiceId: 1,
        name: 'No Charge',
        percentage: 100
    },
    {
        id: 7,
        practiceId: 1,
        name: 'Guaranteed Funds',
        percentage: 0
    },
]

export const locations = [
    {
        id: 1,
        practiceId: 1,
        name: 'Location1',
        address: 'New York, ...',
        phone: '(731) 668-8922',
        pid: 'op00001482'
    },
    {
        id: 2,
        practiceId: 1,
        name: 'Location2',
        address: 'New York, ...',
        phone: '(731) 668-8922',
        pid: 'op00001482'
    },
    {
        id: 3,
        practiceId: 1,
        name: 'Location3',
        address: 'New York, ...',
        phone: '(731) 668-8922',
        pid: 'op00001482'
    },
    {
        id: 4,
        practiceId: 1,
        name: 'Location4',
        address: 'New York, ...',
        phone: '(731) 668-8922',
        pid: 'op00001482'
    },
    {
        id: 5,
        practiceId: 1,
        name: 'Location5',
        address: 'New York, ...',
        phone: '(731) 668-8922',
        pid: 'op00001482'
    },
    {
        id: 6,
        practiceId: 1,
        name: 'Location6',
        address: 'New York, ...',
        phone: '(731) 668-8922',
        pid: 'op00001482'
    },
    {
        id: 7,
        practiceId: 1,
        name: 'Location7',
        address: 'New York, ...',
        phone: '(731) 668-8922',
        pid: 'op00001482'
    },
]

export const users = [
    {
        id: 1,
        practiceId: 1,
        name: 'John Rein',
        email: 'john@gmail.com',
        role: 'Admin',
        active: true
    },
    {
        id: 2,
        practiceId: 1,
        name: 'Mike Roven',
        email: 'mike@gmail.com',
        role: 'Admin',
        active: true
    },
    {
        id: 3,
        practiceId: 1,
        name: 'Bob Araica',
        email: 'b@gmail.com',
        role: 'Staff',
        active: true
    },
    {
        id: 4,
        practiceId: 1,
        name: 'Kate Martinez',
        email: 'kk@gmail.com',
        role: 'Staff',
        active: true
    },
    {
        id: 5,
        practiceId: 1,
        name: 'Daniel Martinez',
        email: 'dan@gmail.com',
        role: 'Staff',
        active: false
    },
    {
        id: 6,
        practiceId: 1,
        name: 'John Davidson',
        email: 'jj@gmail.com',
        role: 'Staff',
        active: true
    },
    {
        id: 7,
        practiceId: 1,
        name: 'Aftah Shah',
        email: 'aft@gmail.com',
        role: 'Staff',
        active: false
    },
    {
        id: 8,
        practiceId: 1,
        name: 'Linda Key',
        email: 'lkey@gmail.com',
        role: 'Admin',
        active: true
    },
]

export const patients = [
    {
        id: 1,
        practiceId: 1,
        firstName: 'John',
        lastName: 'Smith',
        email: 'johnsmith@gmail.com',
        patientNumber: '356784562',
        orthoBancNumber: '3421341',
        usedToDate: 1200,
        maxLifetime: 30000,
        percentage: 45.00,
        deductible: 1000,
        prevContractCredit: 1000,
        status: 'New',
        avatarBackground: 'CFFEF6',
        contractUrl: '',
        orthoBancFormUrl: '',
        signatureUrl: '',
        stillThinking: true,
        lastActionDate: new Date(2023, 8, 12),
        location: 'Jackson',
        discountType: 'Bookkeeping'
    },
    {
        id: 2,
        practiceId: 1,
        firstName: 'David',
        lastName: 'Martinez',
        email: 'dmartinez@gmail.com',
        patientNumber: '356784562',
        orthoBancNumber: '3421341',
        usedToDate: 1200,
        maxLifetime: 30000,
        percentage: 45.00,
        deductible: 1000,
        prevContractCredit: 1000,
        status: 'Paid',
        avatarBackground: 'FFDFE5',
        contractUrl: '',
        orthoBancFormUrl: '',
        signatureUrl: '',
        stillThinking: true,
        lastActionDate: new Date(2023, 8, 11),
        location: 'Jackson',
        discountType: 'Bookkeeping'
    },
]