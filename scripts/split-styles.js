/**
 * Script to split styles.css into component-based files
 * Run: node scripts/split-styles.js
 */

const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, '..', 'src', 'app', 'css');
const stylesPath = path.join(cssDir, 'styles.css');

// Read the full styles.css
const content = fs.readFileSync(stylesPath, 'utf8');
const lines = content.split('\n');

// Find all section headers with their line numbers
function findSections() {
    const sections = [];
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('/* ==') && lines[i + 1]) {
            const headerLine = lines[i + 1].trim();
            if (headerLine && !headerLine.startsWith('/*') && !headerLine.startsWith('=')) {
                sections.push({
                    name: headerLine,
                    startLine: i
                });
            }
        }
    }
    return sections;
}

const allSections = findSections();
console.log('Found sections:', allSections.length);
allSections.forEach((s, i) => {
    // Set end line to next section start or end of file
    s.endLine = allSections[i + 1] ? allSections[i + 1].startLine : lines.length;
    console.log(`  ${s.startLine}-${s.endLine}: ${s.name}`);
});

// Define which sections go into which files
const fileMapping = {
    'components/base.css': [
        'RESET & BASE',
        'LAYOUT',
        'MAIN',
        'SECTIONS',
        'UTILITIES'
    ],
    'components/header.css': ['HEADER'],
    'components/mobile-menu.css': ['MOBILE MENU'],
    'components/banner.css': ['BANNER SECTION'],
    'components/certificate.css': ['CERTIFICATE SECTION'],
    'components/services.css': ['SERVICES SECTION (Accordion)'],
    'components/modal.css': ['MODAL', 'SERVICE REQUEST MODAL (Extended Form)'],
    'components/how-we-work.css': ['HOW WE WORK SECTION (Главная страница)'],
    'components/cases.css': ['CASES SECTION'],
    'components/cta.css': ['CTA SECTION'],
    'components/blog.css': ['BLOG SECTION'],
    'components/footer.css': ['FOOTER'],
    'components/statistics.css': ['STATISTICS SECTION'],
    'components/running-line.css': ['RUNNING LINE SECTION'],

    // Pages
    'pages/context.css': [
        'WHAT IS THIS SECTION',
        'PLATFORMS SECTION',
        'CONTEXT HOW WE WORK SECTION (for context.html)',
        'TOOLS SECTION - Инструменты',
        'CERTIFICATION SECTION - Сертификация',
        'CASES SECTION - Кейсы',
        'CTA PROJECT SECTION - Готовы обсудить проект?',
        'AD TYPES SECTION',
        'SERVICE CTA SECTION',
        'STRATEGIES SECTION'
    ],
    'pages/bots.css': [
        'BOTS BANNER SECTION',
        'BOTS STATISTIC SECTION',
        'BOTS WHAT IS THIS SECTION',
        'BOTS DIRECTIONS SECTION',
        'BOTS REQUEST FORM STYLES',
        'BOTS WHY SECTION (Для чего?)',
        'BOTS TECH STACK SECTION (Стек технологий)',
        'BOTS HOW WE WORK SECTION (Как мы работаем)',
        'BOTS INTEGRATIONS SECTION (Интеграции)',
        'BOTS SECURITY SECTION (Безопасность)'
    ],
    'pages/sites.css': [
        'SITES PAGE STYLES (Веб-сайты)',
        'SITES - What Is This Section',
        'SITES - User Flow Section',
        'SITES - Site Types Section',
        'SITES - Services Accordion Section',
        'SITES - Technologies Section',
        'SITES - Integrations Section',
        'SITES - How We Work Section',
        'SITES EFFECT FROM WEBSITE (FLIP CARDS) SECTION',
        'SITES FUNNEL SECTION (ВОРОНКА ПРОДАЖ)'
    ],
    'pages/target.css': [
        'TARGET PAGE STYLES'
    ],
    'pages/integrations.css': [
        'INTEGRATIONS PAGE STYLES (imported from original)',
        'INTEGRATIONS - Banner Section',
        'INTEGRATIONS - What Is Section',
        'INTEGRATIONS - Services Accordion Section (When Business Needs)',
        'INTEGRATIONS - Services Section',
        'INTEGRATIONS - Types Section',
        'INTEGRATIONS - Scenarios Section',
        'INTEGRATIONS - Data Flow Section',
        'INTEGRATIONS - Tech Section',
        'INTEGRATIONS - Systems Section',
        'INTEGRATIONS - How We Work Section',
        'INTEGRATIONS - Security Section',
        'INTEGRATIONS - FAQ Section'
    ]
};

// Create directories
['components', 'pages'].forEach(dir => {
    const dirPath = path.join(cssDir, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, {recursive: true});
    }
});

// Extract sections for each file
Object.entries(fileMapping).forEach(([filename, sectionNames]) => {
    let fileContent = `/**\n * ${path.basename(filename, '.css').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} Styles\n * Auto-generated from styles.css\n */\n\n`;

    sectionNames.forEach(sectionName => {
        // Find section that matches (partial match)
        const section = allSections.find(s => s.name.includes(sectionName) || sectionName.includes(s.name));

        if (section) {
            const sectionContent = lines.slice(section.startLine, section.endLine).join('\n');
            fileContent += sectionContent + '\n\n';
            console.log(`✓ Added "${section.name}" to ${filename}`);
        } else {
            console.log(`✗ Section "${sectionName}" not found for ${filename}`);
        }
    });

    // Write file
    const outputPath = path.join(cssDir, filename);
    fs.writeFileSync(outputPath, fileContent.trim() + '\n');
    console.log(`Created ${filename}`);
});

// Create index.css that imports all component files
const indexContent = `/**
 * Component Styles Index
 * Auto-generated - imports all component CSS files
 */

/* Base */
@import './components/base.css';

/* Components */
@import './components/header.css';
@import './components/mobile-menu.css';
@import './components/banner.css';
@import './components/certificate.css';
@import './components/services.css';
@import './components/modal.css';
@import './components/how-we-work.css';
@import './components/cases.css';
@import './components/cta.css';
@import './components/blog.css';
@import './components/footer.css';
@import './components/statistics.css';
@import './components/running-line.css';

/* Pages */
@import './pages/context.css';
@import './pages/bots.css';
@import './pages/sites.css';
@import './pages/target.css';
@import './pages/integrations.css';
`;

fs.writeFileSync(path.join(cssDir, 'index.css'), indexContent);
console.log('\nCreated index.css with all imports');

console.log('\n✅ Done! Update globals.css to import index.css instead of styles.css');
