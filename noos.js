  // Constants
  const MOMENT_TYPES = {
    bug: { 
      icon: `<svg class="icon-moment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>`, 
      color: '#fa5252', 
      label: 'Bug', 
      prompts: ['What is the bug?', 'Steps to reproduce', 'Expected vs actual behavior'],
      template: [
        { name: 'severity', label: 'Severity', type: 'select', options: ['Critical', 'High', 'Medium', 'Low'] },
        { name: 'stepsToReproduce', label: 'Steps to Reproduce', type: 'textarea', placeholder: '1. Go to...\n2. Click on...\n3. See error' },
        { name: 'expectedBehavior', label: 'Expected Behavior', type: 'textarea', placeholder: 'What should happen' },
        { name: 'actualBehavior', label: 'Actual Behavior', type: 'textarea', placeholder: 'What actually happens' }
      ]
    },
    meeting: { 
      icon: `<svg class="icon-moment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, 
      color: '#339af0', 
      label: 'Meeting', 
      prompts: ['Key discussion points', 'Action items', 'Decisions made'],
      template: [
        { name: 'attendees', label: 'Attendees', type: 'text', placeholder: 'Who attended' },
        { name: 'actionItems', label: 'Action Items', type: 'textarea', placeholder: 'List of action items' },
        { name: 'nextSteps', label: 'Next Steps', type: 'textarea', placeholder: 'What happens next' }
      ]
    },
    decision: { 
      icon: `<svg class="icon-moment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></svg>`, 
      color: '#be4bdb', 
      label: 'Decision', 
      prompts: ['What was decided?', 'Why?', 'Alternatives considered'],
      template: [
        { name: 'options', label: 'Options Considered', type: 'textarea', placeholder: 'List the options that were evaluated' },
        { name: 'chosen', label: 'Chosen Option', type: 'text', placeholder: 'What was decided' },
        { name: 'reason', label: 'Reasoning', type: 'textarea', placeholder: 'Why this option was chosen' },
        { name: 'tradeoffs', label: 'Trade-offs', type: 'textarea', placeholder: 'What are we giving up?' }
      ]
    },
    codereview: { 
      icon: `<svg class="icon-moment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`, 
      color: '#20c997', 
      label: 'Code Review', 
      prompts: ['What did you review?', 'Feedback notes', 'Approval status'],
      template: [
        { name: 'pullRequest', label: 'PR/Branch', type: 'text', placeholder: 'PR number or branch name' },
        { name: 'findings', label: 'Findings', type: 'textarea', placeholder: 'Code quality, bugs, suggestions' },
        { name: 'approved', label: 'Status', type: 'select', options: ['Approved', 'Needs Changes', 'Rejected'] }
      ]
    },
    research: { 
      icon: `<svg class="icon-moment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8a3 3 0 0 0-3 3"/></svg>`, 
      color: '#a78bfa', 
      label: 'Research', 
      prompts: ['What are you investigating?', 'Key findings', 'Next steps'],
      template: [
        { name: 'topic', label: 'Research Topic', type: 'text', placeholder: 'What are you researching?' },
        { name: 'findings', label: 'Key Findings', type: 'textarea', placeholder: 'What did you learn?' },
        { name: 'sources', label: 'Sources', type: 'textarea', placeholder: 'Links, documentation, etc.' }
      ]
    },
    question: { 
      icon: `<svg class="icon-moment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`, 
      color: '#ff922b', 
      label: 'Question', 
      prompts: ['What needs clarification?', 'Context for the question'],
      template: [
        { name: 'question', label: 'Question', type: 'textarea', placeholder: 'What do you need to know?' },
        { name: 'context', label: 'Context', type: 'textarea', placeholder: 'Why are you asking?' },
        { name: 'answer', label: 'Answer', type: 'textarea', placeholder: 'Once you get an answer...' }
      ]
    },
    implementation: { 
      icon: `<svg class="icon-moment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`, 
      color: '#51cf66', 
      label: 'Implementation', 
      prompts: ['What are you building?', 'Approach taken', 'Challenges faced'],
      template: [
        { name: 'feature', label: 'What was implemented', type: 'text', placeholder: 'Brief description' },
        { name: 'approach', label: 'Approach', type: 'textarea', placeholder: 'How you built it' },
        { name: 'challenges', label: 'Challenges', type: 'textarea', placeholder: 'Problems encountered' }
      ]
    },
    feature: { 
      icon: `<svg class="icon-moment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/></svg>`, 
      color: '#ffd43b', 
      label: 'Feature', 
      prompts: ['What is the feature?', 'User value', 'Requirements'],
      template: [
        { name: 'description', label: 'Feature Description', type: 'textarea', placeholder: 'What does this feature do?' },
        { name: 'userValue', label: 'User Value', type: 'textarea', placeholder: 'Why do users need this?' },
        { name: 'requirements', label: 'Requirements', type: 'textarea', placeholder: 'Technical and product requirements' }
      ]
    }
  };
  
  // Migration function to convert old moment types to new ones
  function migrateMomentType(oldType) {
    const typeMap = {
      'incident': 'bug',
      'deploy': 'implementation',
      'idea': 'feature',
      'observation': 'research',
      'thought': 'question',
      'review': 'codereview'
    };
    
    return typeMap[oldType] || oldType;
  }
  
  // Migrate moments array to use new types
  function migrateMoments(moments) {
    if (!Array.isArray(moments)) return moments;
    
    return moments.map(moment => {
      if (moment.type && !MOMENT_TYPES[moment.type]) {
        const newType = migrateMomentType(moment.type);
        console.log(`[NooS] Migrating moment type: ${moment.type} → ${newType}`);
        return { ...moment, type: newType };
      }
      return moment;
    });
  }
  
  // State
  let state = {
    moments: [],
    threads: [],
    selectedMoment: null,
    selectedThread: null,
    view: 'timeline',
    filterType: 'all',
    searchQuery: '',
    searchResults: [],
    captureType: 'bug',
    captureText: '',
    captureContext: { service: '', environment: 'production', version: '' },
    captureCharts: [],
    captureCodeBlocks: [],
    captureTables: [],
    captureAttachments: [],
    captureTags: [],
    capturePriority: null,
    editingMoment: null,
    sortOrder: 'desc',
    inlineFilter: '',
    collapsedSections: { filtertype: true },
    whiteboardTiles: [],
    whiteboardLinks: [],
    githubSyncEnabled: false,
    lastGithubSave: null,
    githubPollInterval: null,
    _ghSha: null
  };
  
  // About Modal Functions
  window.showAboutModal = function() {
    document.getElementById('aboutModal').classList.add('visible');
  };
  
  window.hideAboutModal = function() {
    document.getElementById('aboutModal').classList.remove('visible');
  };
  
  // Close about modal on overlay click
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('aboutModal').addEventListener('click', (e) => {
      if (e.target.id === 'aboutModal') {
        hideAboutModal();
      }
    });
  });
  
  // Utility Functions
  function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
  
  const _fmtCache = new Map();
  let _fmtCacheTick = 0;
  function formatTime(timestamp) {
    const now = Date.now();
    const tick = Math.floor(now / 60000); // invalidate every minute
    if (tick !== _fmtCacheTick) { _fmtCache.clear(); _fmtCacheTick = tick; }
    if (_fmtCache.has(timestamp)) return _fmtCache.get(timestamp);
    const date = new Date(timestamp);
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    let result;
    if (minutes < 1) result = 'just now';
    else if (minutes < 60) result = `${minutes}m ago`;
    else if (hours < 24) result = `${hours}h ago`;
    else if (days < 7) result = `${days}d ago`;
    else result = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    _fmtCache.set(timestamp, result);
    return result;
  }
  
  // Markdown Parser
  // Configure marked once at init instead of per-parse
  marked.setOptions({ breaks: true, gfm: true, headerIds: false, mangle: false });

  // Cache for parsed markdown — keyed by processed text (after wikilink substitution)
  const _mdCache = new Map();
  const _MD_CACHE_MAX = 400;

  // Wikilink prefix lookup — precomputed from state.moments, rebuilt lazily on mutation
  // Maps: lowercased 50-char prefix → moment, and id → moment
  let _wikiPrefixes = null;
  let _wikiIdMap = null;
  function _getWikiPrefixes() {
    if (_wikiPrefixes) return _wikiPrefixes;
    _wikiPrefixes = state.moments.map(m => ({
      lc: m.text.substring(0, 50).toLowerCase(),
      id: m.id,
      moment: m
    }));
    _wikiIdMap = new Map(state.moments.map(m => [m.id, m]));
    return _wikiPrefixes;
  }
  function invalidateWikiLookup() { _wikiPrefixes = null; _wikiIdMap = null; _mdCache.clear(); }

  function parseMarkdown(text, momentId = null) {
    if (!text) return '';

    // Wikilink substitution — fetch prefix cache once, reuse for every [[link]] in this text
    const prefixes = _getWikiPrefixes();
    let processedText = text.replace(/\[\[([^\]]+)\]\]/g, (match, linkText) => {
      const lc = linkText.toLowerCase();
      const targetMoment = (_wikiIdMap && _wikiIdMap.get(linkText)) || prefixes.find(p => p.lc.includes(lc))?.moment;
      if (targetMoment) {
        return `<a href="#" class="wikilink" data-moment-id="${targetMoment.id}" onclick="navigateToMoment('${targetMoment.id}'); return false;">[[${linkText}]]</a>`;
      }
      return `<span class="wikilink-missing">[[${linkText}]]</span>`;
    });

    // Cache the expensive marked.parse() call by processed text
    if (_mdCache.has(processedText)) return _mdCache.get(processedText);
    const result = marked.parse(processedText);
    if (_mdCache.size >= _MD_CACHE_MAX) _mdCache.clear();
    _mdCache.set(processedText, result);
    return result;
  }
  
  // Extract wikilinks from text
  function extractWikilinks(text) {
    if (!text) return [];
    const regex = /\[\[([^\]]+)\]\]/g;
    const links = [];
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      links.push(match[1]);
    }
    
    return links;
  }
  
  // Get linked moments — cached by momentId + moments length to avoid O(n²) on every detail render
  const _linkedMomentsCache = new Map();
  function getLinkedMoments(momentId) {
    const cacheKey = momentId + '_' + state.moments.length;
    if (_linkedMomentsCache.has(cacheKey)) return _linkedMomentsCache.get(cacheKey);
    const moment = state.moments.find(m => m.id === momentId);
    if (!moment) return { outgoing: [], incoming: [] };
    
    const wikilinks = extractWikilinks(moment.text);
    const outgoing = [];
    
    const prefixes = _getWikiPrefixes();
    wikilinks.forEach(linkText => {
      const lc = linkText.toLowerCase();
      const entry = prefixes.find(p => p.id === linkText || p.lc.includes(lc));
      if (entry) outgoing.push(entry.moment);
    });

    // Find moments that link to this one — use precomputed prefix for target
    const momentPrefix = moment.text.substring(0, 50).toLowerCase();
    const incoming = state.moments.filter(m => {
      if (m.id === momentId) return false;
      const links = extractWikilinks(m.text);
      return links.some(linkText => {
        const lc = linkText.toLowerCase();
        return moment.id === linkText || momentPrefix.includes(lc);
      });
    });
    
    const result = { outgoing, incoming };
    if (_linkedMomentsCache.size > 200) _linkedMomentsCache.clear();
    _linkedMomentsCache.set(cacheKey, result);
    return result;
  }

  // Navigate to moment from wikilink
  window.navigateToMoment = function(momentId) {
    const moment = state.moments.find(m => m.id === momentId);
    if (moment) {
      state.selectedMoment = moment;
      state.view = 'timeline';
      render();
    }
  };
  
  // Syntax Highlighting — compiled regex cache for st() helper
  const _stCache = new Map();
  function highlightCode(code, language) {
    code = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Skip existing HTML tags when applying a pattern, to prevent corrupting already-inserted spans.
    // Usage: st(code, /pattern/, (match) => replacement)
    // _stCache: compile each combined regex once per unique pattern source
    function st(str, pattern, fn) {
      const key = pattern.source + '|' + (pattern.flags || '');
      let re = _stCache.get(key);
      if (!re) {
        re = new RegExp('(<[^>]*>)|(?:' + pattern.source + ')', (pattern.flags || '').replace('g', '') + 'g');
        if (_stCache.size >= 100) _stCache.clear();
        _stCache.set(key, re);
      }
      re.lastIndex = 0;
      return str.replace(re, function(m, tag) {
        if (tag) return tag;
        var args = Array.prototype.slice.call(arguments, 1);
        args[0] = undefined;
        return fn.apply(null, args.slice(1));
      });
    }

    switch(language) {
      case 'javascript':
      case 'java':
      case 'cpp':
      case 'csharp':
      case 'go':
      case 'rust':
        // Strings first — no spans in code yet, safe to apply directly
        code = code.replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="syntax-string">$1</span>');
        // Everything else uses st() to skip already-inserted span tags
        code = st(code, /(\/\/[^\n]*)/gm, (c) => '<span class="syntax-comment">' + c + '</span>');
        code = st(code, /(\/\*[\s\S]*?\*\/)/, (c) => '<span class="syntax-comment">' + c + '</span>');
        code = st(code, /\b(const|let|var|function|return|if|else|for|while|class|import|export|from|async|await|new|this|super|extends|try|catch|throw|break|continue|switch|case|default|do|public|private|protected|static|void|int|string|bool|float|double)\b/, (k) => '<span class="syntax-keyword">' + k + '</span>');
        code = st(code, /\b(\d+\.?\d*)\b/, (n) => '<span class="syntax-number">' + n + '</span>');
        code = st(code, /\b([a-zA-Z_]\w*)(\s*\()/, (f, p) => '<span class="syntax-function">' + f + '</span>' + p);
        break;

      case 'python':
        code = code.replace(/(".*?"|'.*?'|"""[\s\S]*?"""|'''[\s\S]*?''')/g, '<span class="syntax-string">$1</span>');
        code = st(code, /(#[^\n]*)/gm, (c) => '<span class="syntax-comment">' + c + '</span>');
        code = st(code, /\b(def|class|return|if|elif|else|for|while|import|from|as|with|try|except|finally|raise|break|continue|pass|lambda|yield|async|await|None|True|False)\b/, (k) => '<span class="syntax-keyword">' + k + '</span>');
        code = st(code, /\b(\d+\.?\d*)\b/, (n) => '<span class="syntax-number">' + n + '</span>');
        code = st(code, /\b([a-zA-Z_]\w*)(\s*\()/, (f, p) => '<span class="syntax-function">' + f + '</span>' + p);
        break;

      case 'sql':
        code = code.replace(/('.*?')/g, '<span class="syntax-string">$1</span>');
        code = st(code, /(--[^\n]*)/gm, (c) => '<span class="syntax-comment">' + c + '</span>');
        code = st(code, /\b(SELECT|FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER|ON|AND|OR|NOT|IN|LIKE|ORDER BY|GROUP BY|HAVING|INSERT|UPDATE|DELETE|CREATE|DROP|TABLE|DATABASE|INDEX|VIEW|AS|DISTINCT|COUNT|SUM|AVG|MAX|MIN)\b/i, (k) => '<span class="syntax-keyword">' + k + '</span>');
        code = st(code, /\b(\d+\.?\d*)\b/, (n) => '<span class="syntax-number">' + n + '</span>');
        break;

      case 'bash':
        code = code.replace(/(".*?"|'.*?')/g, '<span class="syntax-string">$1</span>');
        code = st(code, /(#[^\n]*)/gm, (c) => '<span class="syntax-comment">' + c + '</span>');
        code = st(code, /\b(if|then|else|elif|fi|for|while|do|done|case|esac|function|return|exit|echo|cd|ls|grep|awk|sed)\b/, (k) => '<span class="syntax-keyword">' + k + '</span>');
        break;

      case 'html':
        code = code.replace(/(&lt;\/?[a-zA-Z][a-zA-Z0-9]*)/g, '<span class="syntax-tag">$1</span>');
        code = code.replace(/(&gt;)/g, '<span class="syntax-tag">$1</span>');
        code = st(code, /(\s)([a-zA-Z-]+)(=)/, (sp, a, eq) => sp + '<span class="syntax-attr">' + a + '</span>' + eq);
        code = st(code, /(".*?"|'.*?')/, (s) => '<span class="syntax-string">' + s + '</span>');
        break;

      case 'css':
        code = code.replace(/([a-zA-Z-]+):/g, '<span class="syntax-property">$1</span>:');
        code = st(code, /(".*?"|'.*?')/, (s) => '<span class="syntax-string">' + s + '</span>');
        code = st(code, /\b(\d+\.?\d*(px|em|rem|%|vh|vw)?)/, (n) => '<span class="syntax-number">' + n + '</span>');
        code = st(code, /(\/\*[\s\S]*?\*\/)/, (c) => '<span class="syntax-comment">' + c + '</span>');
        break;

      case 'json':
      case 'yaml':
        // Properties first (key: pattern), then strings, then numbers/keywords
        code = code.replace(/(".*?")(\s*:)/g, '<span class="syntax-property">$1</span>$2');
        code = st(code, /(".*?")/, (s) => '<span class="syntax-string">' + s + '</span>');
        code = st(code, /\b(\d+\.?\d*)\b/, (n) => '<span class="syntax-number">' + n + '</span>');
        code = st(code, /\b(true|false|null)\b/, (k) => '<span class="syntax-keyword">' + k + '</span>');
        break;
    }

    return code;
  }
  
  // Code Block Component
  function createCodeBlock(language, code, title = '', codeId = null) {
    const id = codeId || `code-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const container = document.createElement('div');
    container.className = 'code-block-container';
    container.dataset.codeId = id;
    container.dataset.codeData = JSON.stringify({ language, code, title });
    
    const highlightedCode = highlightCode(code, language);
    
    let actionsHtml = '';
    if (codeId) {
      actionsHtml = `
        <div class="code-block-actions">
          <button class="code-block-btn" onclick="editCodeBlock('${id}')"><svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg> Edit</button>
          <button class="code-block-btn" onclick="removeCodeBlock('${id}')"><svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg> Remove</button>
        </div>
      `;
    }
    
    container.innerHTML = `
      <div class="code-block-header">
        <div class="code-block-info">
          <span class="code-block-lang">${language}</span>
          ${title ? `<span class="code-block-title">${title}</span>` : ''}
        </div>
        ${actionsHtml}
      </div>
      <div class="code-block-content">
        <pre class="code-block-pre">${highlightedCode}</pre>
      </div>
    `;
    
    return container;
  }
  
  // Table Component
  function createTable(title, data, tableId = null) {
    const id = tableId || `table-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const container = document.createElement('div');
    container.className = 'table-block-container';
    container.dataset.tableId = id;
    container.dataset.tableData = JSON.stringify({ title, data });
    
    let actionsHtml = '';
    if (tableId) {
      actionsHtml = `
        <div class="table-block-actions">
          <button class="code-block-btn" onclick="editTable('${id}')"><svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg> Edit</button>
          <button class="code-block-btn" onclick="removeTable('${id}')"><svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg> Remove</button>
        </div>
      `;
    }
    
    const rows = data.trim().split('\n').map(row => 
      row.split(',').map(cell => cell.trim())
    );
    
    const headers = rows[0] || [];
    const bodyRows = rows.slice(1);
    
    let tableHtml = '<table class="trace-table"><thead><tr>';
    headers.forEach(header => {
      tableHtml += `<th>${header}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';
    
    bodyRows.forEach(row => {
      tableHtml += '<tr>';
      row.forEach(cell => {
        tableHtml += `<td>${cell}</td>`;
      });
      tableHtml += '</tr>';
    });
    
    tableHtml += '</tbody></table>';
    
    container.innerHTML = `
      <div class="table-block-header">
        <div class="table-block-title">
          📊 ${title || 'Table'}
        </div>
        ${actionsHtml}
      </div>
      <div class="table-wrapper">
        ${tableHtml}
      </div>
    `;
    
    return container;
  }
  

  // Storage Functions
  

async function loadData() {
  console.log('[NooS] Starting loadData...');

  // Try GitHub sync first
  const githubLoaded = await loadFromGithub().catch(() => false);
  if (githubLoaded) {
    const savedThread = localStorage.getItem('ruby-selected-thread');
    if (savedThread) {
      const valid = savedThread === 'unthreaded' || state.threads.some(t => t.id === savedThread);
      if (valid) state.selectedThread = savedThread;
    }
    _startGithubPoll();
    render();
    return;
  }


    console.log('[NooS] Loading from localStorage as fallback...');
  
  // Fallback to localStorage
  try {
    const moments = localStorage.getItem('trace-moments');
    const threads = localStorage.getItem('trace-threads');
    
    if (moments) {
      state.moments = migrateMoments(JSON.parse(moments));
      console.log('[NooS] Loaded', state.moments.length, 'moments from localStorage');
    }
    if (threads) {
      state.threads = JSON.parse(threads);
      console.log('[NooS] Loaded', state.threads.length, 'threads from localStorage');
    }
    const wbTiles = localStorage.getItem('ruby-whiteboard-tiles');
    const wbLinks = localStorage.getItem('ruby-whiteboard-links');
    if (wbTiles) state.whiteboardTiles = JSON.parse(wbTiles);
    if (wbLinks) state.whiteboardLinks = JSON.parse(wbLinks);

    const savedThread = localStorage.getItem('ruby-selected-thread');
    if (savedThread) {
      const valid = savedThread === 'unthreaded' || state.threads.some(t => t.id === savedThread);
      if (valid) state.selectedThread = savedThread;
    }
    const savedMomentId = localStorage.getItem('ruby-selected-moment');
    if (savedMomentId) {
      const m = state.moments.find(m => m.id === savedMomentId);
      if (m) state.selectedMoment = m;
    }

    render();
  } catch (error) {
    console.error('[NooS] Failed to load data from localStorage:', error);
    alert('Failed to load saved data. Starting fresh.');
    state.moments = [];
    state.threads = [];
    render();
  }
}
  
function saveSelectedThread() {
  if (state.selectedThread) {
    localStorage.setItem('ruby-selected-thread', state.selectedThread);
  } else {
    localStorage.removeItem('ruby-selected-thread');
  }
}

// Immediate localStorage write — called on page close or explicitly
function _flushSave() {
  clearTimeout(_saveTimer);
  _saveTimer = null;
  if (!_stateDirty) return;
  _stateDirty = false;
  try {
    localStorage.setItem('trace-moments', JSON.stringify(state.moments));
    localStorage.setItem('trace-threads', JSON.stringify(state.threads));
    localStorage.setItem('ruby-whiteboard-tiles', JSON.stringify(state.whiteboardTiles));
    localStorage.setItem('ruby-whiteboard-links', JSON.stringify(state.whiteboardLinks));
    const selectedMomentId = state.selectedMoment?.id || (typeof state.selectedMoment === 'string' ? state.selectedMoment : null);
    if (selectedMomentId) {
      localStorage.setItem('ruby-selected-moment', selectedMomentId);
    } else {
      localStorage.removeItem('ruby-selected-moment');
    }
  } catch (error) {
    console.error('Failed to save data to localStorage:', error);
  }
}

// Debounced saveData — batches rapid changes (drags, keystrokes) into one write
let _saveTimer = null;
let _stateDirty = false;
function saveData() {
  _stateDirty = true;
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(_flushSave, 500);
  _githubSave();
}

// Manual "Save Now" button — flushes localStorage immediately and, if GitHub
// sync is enabled, pushes right away instead of waiting for the 3s debounce.
window.navSave = async function() {
  const btn = document.getElementById('navSaveBtn');
  const label = btn ? btn.querySelector('svg')?.nextSibling : null;
  const originalText = label ? label.textContent : null;

  _flushSave();

  if (state.githubSyncEnabled) {
    try {
      await _performGithubSave();
    } catch (e) {
      console.error('[NooS] Manual GitHub save failed:', e);
      alert('Saved locally, but GitHub sync failed: ' + e.message);
      return;
    }
  }

  if (label) {
    label.textContent = ' Saved!';
    setTimeout(() => { label.textContent = originalText; }, 1200);
  }
};
  

// Save to localStorage on page close — flush immediately, don't debounce
window.addEventListener('beforeunload', () => {
  _flushSave();
});



  // Chart Generation
  function createChart(title, data, color, labels = null, chartId = null, chartType = 'line') {
    const id = chartId || `chart-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const container = document.createElement('div');
    container.className = 'chart-container';
    container.style.position = 'relative';
    container.dataset.chartId = id;
    container.dataset.chartData = JSON.stringify({ title, data, labels, chartType });
    
    const header = document.createElement('div');
    header.className = 'chart-header';
    header.textContent = `📊 ${title}`;
    container.appendChild(header);
    
    const valueDisplay = document.createElement('div');
    valueDisplay.className = 'chart-value-display';
    container.appendChild(valueDisplay);
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.width = '100%';
    svg.style.height = '140px';
    svg.style.display = 'block';
    svg.setAttribute('data-chart-id', id);
    
    container.appendChild(svg);
    
    setTimeout(() => {
     const containerWidth = Math.max(container.offsetWidth - 24, 200);
      const width = containerWidth;
      const height = 140;
      const padding = 20;
      const chartHeight = height - padding * 2;
      const chartWidth = width - padding * 2;
      
      svg.setAttribute('width', width);
      svg.setAttribute('height', height);
      
      const max = Math.max(...data);
      const min = Math.min(...data);
      const range = max - min || 1;
      
      svg.innerHTML = '';
      
      for (let i = 0; i <= 4; i++) {
        const y = padding + (chartHeight / 4) * i;
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', padding);
        line.setAttribute('y1', y);
        line.setAttribute('x2', width - padding);
        line.setAttribute('y2', y);
        line.setAttribute('stroke', 'var(--border-color)');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
        
        const value = max - (range / 4) * i;
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', '5');
        text.setAttribute('y', y + 3);
        text.setAttribute('fill', 'var(--text-muted)');
        text.setAttribute('font-size', '10');
        text.textContent = value.toFixed(0);
        svg.appendChild(text);
      }
      
      if (chartType === 'bar') {
        const barWidth = (chartWidth / data.length) * 0.7;
        const barGap = (chartWidth / data.length) * 0.3;
        
        data.forEach((value, i) => {
          const x = padding + (i / data.length) * chartWidth + barGap / 2;
          const barHeight = ((value - min) / range) * chartHeight;
          const y = padding + chartHeight - barHeight;
          
          const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          rect.setAttribute('x', x);
          rect.setAttribute('y', y);
          rect.setAttribute('width', barWidth);
          rect.setAttribute('height', barHeight);
          rect.setAttribute('fill', color);
          rect.setAttribute('opacity', '0.7');
          rect.setAttribute('data-value', value);
          rect.setAttribute('data-label', labels && labels[i] ? labels[i] : `Bar ${i + 1}`);
          rect.style.cursor = 'pointer';
          rect.setAttribute('class', 'chart-bar');
          
          svg.appendChild(rect);
        });
      } else if (chartType === 'horizontalBar') {
        const barHeight = (chartHeight / data.length) * 0.7;
        const barGap = (chartHeight / data.length) * 0.3;
        
        data.forEach((value, i) => {
          const barWidth = ((value - min) / range) * chartWidth;
          const x = padding;
          const y = padding + (i / data.length) * chartHeight + barGap / 2;
          
          const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
          rect.setAttribute('x', x);
          rect.setAttribute('y', y);
          rect.setAttribute('width', barWidth);
          rect.setAttribute('height', barHeight);
          rect.setAttribute('fill', color);
          rect.setAttribute('opacity', '0.7');
          rect.setAttribute('data-value', value);
          rect.setAttribute('data-label', labels && labels[i] ? labels[i] : `Bar ${i + 1}`);
          rect.style.cursor = 'pointer';
          rect.setAttribute('class', 'chart-bar');
          
          svg.appendChild(rect);
        });
      } else if (chartType === 'area') {
        const areaPoints = data.map((value, i) => {
          const x = padding + (i / (data.length - 1)) * chartWidth;
          const y = padding + chartHeight - ((value - min) / range) * chartHeight;
          return `${x},${y}`;
        }).join(' ');
        
        const area = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        area.setAttribute('points', `${padding},${height - padding} ${areaPoints} ${width - padding},${height - padding}`);
        area.setAttribute('fill', color);
        area.setAttribute('opacity', '0.4');
        svg.appendChild(area);
        
        data.forEach((value, i) => {
          const x = padding + (i / (data.length - 1)) * chartWidth;
          const y = padding + chartHeight - ((value - min) / range) * chartHeight;
          
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttribute('cx', x);
          circle.setAttribute('cy', y);
          circle.setAttribute('r', '4');
          circle.setAttribute('fill', color);
          circle.setAttribute('opacity', '0.8');
          circle.setAttribute('data-value', value);
          circle.setAttribute('data-label', labels && labels[i] ? labels[i] : `Point ${i + 1}`);
          circle.style.cursor = 'pointer';
          
          svg.appendChild(circle);
        });
      } else if (chartType === 'scatter') {
        data.forEach((value, i) => {
          const x = padding + (i / (data.length - 1)) * chartWidth;
          const y = padding + chartHeight - ((value - min) / range) * chartHeight;
          
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttribute('cx', x);
          circle.setAttribute('cy', y);
          circle.setAttribute('r', '5');
          circle.setAttribute('fill', color);
          circle.setAttribute('opacity', '0.6');
          circle.setAttribute('data-value', value);
          circle.setAttribute('data-label', labels && labels[i] ? labels[i] : `Point ${i + 1}`);
          circle.style.cursor = 'pointer';
          
          svg.appendChild(circle);
        });
      } else if (chartType === 'pie' || chartType === 'donut') {
        const total = data.reduce((sum, val) => sum + val, 0);
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(chartWidth, chartHeight) / 2;
        const innerRadius = chartType === 'donut' ? radius * 0.5 : 0;
        
        let currentAngle = -Math.PI / 2;
        
        data.forEach((value, i) => {
          const sliceAngle = (value / total) * 2 * Math.PI;
          const endAngle = currentAngle + sliceAngle;
          
          const hue = (i / data.length) * 360;
          const sliceColor = `hsl(${hue}, 70%, 60%)`;
          
          if (chartType === 'donut') {
            const x1 = centerX + Math.cos(currentAngle) * radius;
            const y1 = centerY + Math.sin(currentAngle) * radius;
            const x2 = centerX + Math.cos(endAngle) * radius;
            const y2 = centerY + Math.sin(endAngle) * radius;
            const x3 = centerX + Math.cos(endAngle) * innerRadius;
            const y3 = centerY + Math.sin(endAngle) * innerRadius;
            const x4 = centerX + Math.cos(currentAngle) * innerRadius;
            const y4 = centerY + Math.sin(currentAngle) * innerRadius;
            
            const largeArc = sliceAngle > Math.PI ? 1 : 0;
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `
              M ${x1} ${y1}
              A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
              L ${x3} ${y3}
              A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4}
              Z
            `);
            path.setAttribute('fill', sliceColor);
            path.setAttribute('opacity', '0.8');
            path.setAttribute('data-value', value);
            path.setAttribute('data-label', labels && labels[i] ? labels[i] : `Slice ${i + 1}`);
            path.style.cursor = 'pointer';
            path.setAttribute('class', 'chart-slice');
            
            svg.appendChild(path);
          } else {
            const x1 = centerX + Math.cos(currentAngle) * radius;
            const y1 = centerY + Math.sin(currentAngle) * radius;
            const x2 = centerX + Math.cos(endAngle) * radius;
            const y2 = centerY + Math.sin(endAngle) * radius;
            
            const largeArc = sliceAngle > Math.PI ? 1 : 0;
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `
              M ${centerX} ${centerY}
              L ${x1} ${y1}
              A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
              Z
            `);
            path.setAttribute('fill', sliceColor);
            path.setAttribute('opacity', '0.8');
            path.setAttribute('data-value', value);
            path.setAttribute('data-label', labels && labels[i] ? labels[i] : `Slice ${i + 1}`);
            path.style.cursor = 'pointer';
            path.setAttribute('class', 'chart-slice');
            
            svg.appendChild(path);
          }
              
          currentAngle = endAngle;
        });
      } else {
        const areaPoints = data.map((value, i) => {
          const x = padding + (i / (data.length - 1)) * chartWidth;
          const y = padding + chartHeight - ((value - min) / range) * chartHeight;
          return `${x},${y}`;
        }).join(' ');
        
        const area = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        area.setAttribute('points', `${padding},${height - padding} ${areaPoints} ${width - padding},${height - padding}`);
        area.setAttribute('fill', color);
        area.setAttribute('opacity', '0.2');
        svg.appendChild(area);
        
        const linePoints = data.map((value, i) => {
          const x = padding + (i / (data.length - 1)) * chartWidth;
          const y = padding + chartHeight - ((value - min) / range) * chartHeight;
          return `${x},${y}`;
        }).join(' ');
        
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        polyline.setAttribute('points', linePoints);
        polyline.setAttribute('fill', 'none');
        polyline.setAttribute('stroke', color);
        polyline.setAttribute('stroke-width', '2');
        polyline.setAttribute('opacity', '0.8');
        svg.appendChild(polyline);
        
        data.forEach((value, i) => {
          const x = padding + (i / (data.length - 1)) * chartWidth;
          const y = padding + chartHeight - ((value - min) / range) * chartHeight;
          
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttribute('cx', x);
          circle.setAttribute('cy', y);
          circle.setAttribute('r', '4');
          circle.setAttribute('fill', color);
          circle.setAttribute('opacity', '0.8');
          circle.setAttribute('data-value', value);
          circle.setAttribute('data-label', labels && labels[i] ? labels[i] : `Point ${i + 1}`);
          circle.style.cursor = 'pointer';
          
          svg.appendChild(circle);
        });
      }
      
      svg.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'circle' || e.target.classList.contains('chart-bar') || e.target.classList.contains('chart-slice')) {
          const value = e.target.getAttribute('data-value');
          const label = e.target.getAttribute('data-label');
          valueDisplay.textContent = `${label}: ${parseFloat(value).toFixed(2)}`;
          valueDisplay.style.display = 'block';
          valueDisplay.style.left = e.offsetX + 10 + 'px';
          valueDisplay.style.top = e.offsetY - 10 + 'px';
          if (e.target.tagName === 'circle') {
            e.target.setAttribute('r', '6');
          } else if (e.target.classList.contains('chart-bar')) {
            e.target.setAttribute('opacity', '1');
          } else if (e.target.classList.contains('chart-slice')) {
            e.target.setAttribute('opacity', '1');
          }
        }
        });
      
      svg.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'circle') {
          valueDisplay.style.display = 'none';
          e.target.setAttribute('r', '4');
        } else if (e.target.classList.contains('chart-bar')) {
          valueDisplay.style.display = 'none';
          e.target.setAttribute('opacity', '0.7');
        } else if (e.target.classList.contains('chart-slice')) {
          valueDisplay.style.display = 'none';
          e.target.setAttribute('opacity', '0.8');
        }
        });
      
      svg.addEventListener('mousemove', (e) => {
        if (e.target.tagName === 'circle' || e.target.classList.contains('chart-bar') || e.target.classList.contains('chart-slice')) {
          valueDisplay.style.left = e.offsetX + 10 + 'px';
          valueDisplay.style.top = e.offsetY - 10 + 'px';
        }
        });
    }, 10);
    
    if (chartId) {
      const controls = document.createElement('div');
      controls.className = 'chart-controls';
      controls.innerHTML = `
        <button class="chart-btn" onclick="editChart('${id}')"><svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg> Edit</button>
        <button class="chart-btn" onclick="removeChart('${id}')"><svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg> Remove</button>
      `;
      container.appendChild(controls);
    }
    
    return container;
  }

  
  function createTemplateDisplay(templateData, templateConfig, compact = false) {
    if (!templateData || !templateConfig) return null;
    
    const container = document.createElement('div');
    container.className = 'template-data-display';
    
    templateConfig.forEach(field => {
      const value = templateData[field.name];
      if (!value) return;
      
      const item = document.createElement('div');
      item.className = 'template-data-item';
      
      const label = document.createElement('div');
      label.className = 'template-data-label';
      label.textContent = field.label;
      item.appendChild(label);
      
      const valueDiv = document.createElement('div');
      valueDiv.className = 'template-data-value';
      
      // Add badge styling for severity/impact/status fields
      if ((field.name === 'severity' || field.name === 'impact') && field.type === 'select') {
        const badge = document.createElement('span');
        badge.className = `template-badge ${field.name}-${value.toLowerCase()}`;
        badge.textContent = value;
        valueDiv.appendChild(badge);
      } else if (field.name === 'approved' && field.type === 'select') {
        const badge = document.createElement('span');
        badge.className = 'template-badge';
        badge.textContent = value;
        if (value === 'Approved') badge.style.cssText = 'background: rgba(81, 207, 102, 0.15); color: #51cf66;';
        else if (value === 'Needs Changes') badge.style.cssText = 'background: rgba(255, 146, 43, 0.15); color: #ff922b;';
        else if (value === 'Rejected') badge.style.cssText = 'background: rgba(224, 17, 95, 0.15); color: #E0115F;';
        valueDiv.appendChild(badge);
      } else {
        // For compact view (timeline), truncate long text
        if (compact && value.length > 100) {
          valueDiv.textContent = value.substring(0, 100) + '...';
        } else {
          valueDiv.textContent = value;
        }
      }
      
      item.appendChild(valueDiv);
      container.appendChild(item);
    });
    
    return container.children.length > 0 ? container : null;
  }
  
  // ── Shared moment card builder ───────────────────────────────────────────
  function buildMomentCard(moment) {
    if (!moment) return null;
    const config = MOMENT_TYPES[moment.type] || { color: 'var(--text-muted)', icon: '', label: moment.type };
    const card = document.createElement('div');
    card.className = 'moment-card';
    card.style.borderLeftColor = config.color;

    let priorityHtml = '';
    if (moment.priority) {
      const pIcons = { critical: `<svg class="icon-priority" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#E0115F"/></svg>`, 'follow-up': `<svg class="icon-priority" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#ff922b"/></svg>`, pinned: `<svg class="icon-priority" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#ffd700"/></svg>` };
      const pLabels = { critical: 'Critical', 'follow-up': 'Follow-up', pinned: 'Pinned' };
      priorityHtml = `<div class="moment-priority"><span class="priority-badge ${moment.priority}">${pIcons[moment.priority]} ${pLabels[moment.priority]}</span></div>`;
    }

    const thread = state.threads.find(t => t.id === moment.threadId);
    const threadBadge = thread ? `<div class="moment-thread-badge"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17h.01"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg> ${thread.name}</div>` : '';

    card.innerHTML = `
      ${threadBadge}${priorityHtml}
      <div class="moment-header">
        <div class="moment-type" style="color:${config.color}">${config.icon} ${config.label}</div>
      </div>
      <div class="moment-time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${formatTime(moment.timestamp)}</div>
      <div class="moment-text">${parseMarkdown(moment.text || '')}</div>
    `;

    if (moment.tags && moment.tags.length) {
      const tags = document.createElement('div');
      tags.className = 'moment-tags';
      moment.tags.forEach(tag => {
        const t = document.createElement('span');
        t.className = 'moment-tag';
        t.textContent = '#' + tag;
        tags.appendChild(t);
      });
      card.appendChild(tags);
    }

    card.addEventListener('click', () => {
      state.selectedMoment = moment.id;
      state.view = 'timeline';
      render();
    });
    return card;
  }

  // ── On This Day ─────────────────────────────────────────────────────────
  let _onThisDayState = { count: -1, date: '' };
  function renderOnThisDay() {
    const el = _els.onThisDayBanner;
    if (!el) return;
    const today = new Date().toDateString();
    if (_onThisDayState.count === state.moments.length && _onThisDayState.date === today) return;
    _onThisDayState = { count: state.moments.length, date: today };
    const now = Date.now();
    const DAY = 86400000;
    const lookbacks = [
      { label: '1 week ago',  from: now - 9*DAY,  to: now - 5*DAY },
      { label: '1 month ago', from: now - 33*DAY, to: now - 27*DAY },
      { label: '3 months ago',from: now - 95*DAY, to: now - 85*DAY },
      { label: '1 year ago',  from: now - 368*DAY,to: now - 362*DAY },
    ];
    const groups = lookbacks.map(lb => ({
      label: lb.label,
      moments: state.moments.filter(m => m.timestamp >= lb.from && m.timestamp <= lb.to)
    })).filter(g => g.moments.length > 0);

    if (groups.length === 0) { el.innerHTML = ''; return; }
    const total = groups.reduce((s, g) => s + g.moments.length, 0);
    const chevronSvg = `<svg class="on-this-day-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
    const banner = document.createElement('div');
    banner.className = 'on-this-day-banner';
    banner.innerHTML = `
      <div class="on-this-day-header">
        <span class="on-this-day-icon">🕰️</span>
        <span class="on-this-day-title">On This Day</span>
        <span class="on-this-day-count">${total} moment${total !== 1 ? 's' : ''}</span>
        ${chevronSvg}
      </div>
      <div class="on-this-day-body" id="onThisDayBody"></div>
    `;
    banner.querySelector('.on-this-day-header').addEventListener('click', () => {
      banner.classList.toggle('expanded');
    });
    const body = banner.querySelector('#onThisDayBody');
    groups.forEach(g => {
      const group = document.createElement('div');
      group.className = 'on-this-day-group';
      group.innerHTML = `<div class="on-this-day-group-label">${g.label}</div>`;
      g.moments.slice(0, 5).forEach(m => {
        const cfg = MOMENT_TYPES[m.type] || {};
        const card = document.createElement('div');
        card.className = 'on-this-day-card';
        card.innerHTML = `
          <div class="on-this-day-card-type" style="color:${cfg.color||'var(--text-muted)'}">
            ${cfg.icon||''} ${cfg.label||m.type} &middot; ${formatTime(m.timestamp)}
          </div>
          <div class="on-this-day-card-text">${(m.text||'').slice(0, 120)}${m.text && m.text.length > 120 ? '…' : ''}</div>
        `;
        card.addEventListener('click', () => {
          state.selectedMoment = m;
          render();
        });
        group.appendChild(card);
      });
      if (g.moments.length > 5) {
        const more = document.createElement('div');
        more.style.cssText = 'font-size:11px;color:var(--text-muted);padding:4px 0 2px;';
        more.textContent = `+${g.moments.length - 5} more`;
        group.appendChild(more);
      }
      body.appendChild(group);
    });
    el.innerHTML = '';
    el.appendChild(banner);
  }

  // ── Export to Markdown ───────────────────────────────────────────────────
  window.exportToMarkdown = function() {
    const lines = [];
    const date = new Date().toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
    lines.push('# NooS Export');
    lines.push('');
    lines.push(`**Exported:** ${date}  `);
    lines.push(`**Total moments:** ${state.moments.length}  `);
    lines.push(`**Threads:** ${state.threads.length}`);
    lines.push('');
    lines.push('---');
    lines.push('');

    // Group moments by thread
    const threadOrder = [...state.threads];
    const byThread = {};
    state.moments.forEach(m => {
      const key = m.threadId || '__none__';
      if (!byThread[key]) byThread[key] = [];
      byThread[key].push(m);
    });

    // Sort moments within groups newest-first
    Object.values(byThread).forEach(arr => arr.sort((a, b) => b.timestamp - a.timestamp));

    const writeGroup = (name, moments) => {
      lines.push(`## ${name}`);
      lines.push('');
      moments.forEach(m => {
        const cfg = MOMENT_TYPES[m.type] || {};
        const ts = new Date(m.timestamp).toLocaleString();
        lines.push(`### ${cfg.icon || ''} ${cfg.label || m.type} — ${ts}`);
        if (m.tags && m.tags.length) lines.push(`**Tags:** ${m.tags.join(', ')}`);
        if (m.priority) lines.push(`**Priority:** ${m.priority}`);
        lines.push('');
        if (m.text) lines.push(m.text);
        if (m.codeBlocks && m.codeBlocks.length) {
          m.codeBlocks.forEach(cb => {
            lines.push('');
            lines.push('```' + (cb.language || ''));
            lines.push(cb.code || '');
            lines.push('```');
          });
          if (m.charts && m.charts.length) {
            lines.push('');
            lines.push(`*${m.charts.length} chart(s) attached*`);
            lines.push('');
          }
        }
        lines.push('---');
        lines.push('');
      });
    };

    threadOrder.forEach(t => {
      if (byThread[t.id] && byThread[t.id].length) {
        writeGroup(t.name, byThread[t.id]);
      }
    });
    if (byThread['__none__'] && byThread['__none__'].length) {
      writeGroup('Unthreaded', byThread['__none__']);
    }

    const blob = new Blob([lines.join('\n')], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `noos-export-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ── Markdown Editor ──────────────────────────────────────────────────────
  const MD_STORAGE_KEY = 'ruby-md-docs';
  const MD_CURRENT_KEY = 'ruby-md-current';

  function mdLoadDocs() {
    try { return JSON.parse(localStorage.getItem(MD_STORAGE_KEY) || '[]'); } catch { return []; }
  }
  function mdSaveDocs(docs) { localStorage.setItem(MD_STORAGE_KEY, JSON.stringify(docs)); }
  function mdGetCurrentId() { return localStorage.getItem(MD_CURRENT_KEY) || null; }
  function mdSetCurrentId(id) { localStorage.setItem(MD_CURRENT_KEY, id); }

  function mdGenerateId() { return 'md_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7); }

  let _mdInitialized = false;

  function mdInitView() {
    if (_mdInitialized) { mdRefreshSelect(); return; }
    _mdInitialized = true;
    let docs = mdLoadDocs();
    if (docs.length === 0) {
      const first = { id: mdGenerateId(), title: 'Untitled', content: '', updated: Date.now() };
      docs = [first];
      mdSaveDocs(docs);
      mdSetCurrentId(first.id);
    }
    mdRefreshSelect();
    const currentId = mdGetCurrentId() || docs[0].id;
    mdLoadDoc(currentId);

    const ta = document.getElementById('mdEditorTextarea');
    if (ta) ta.addEventListener('input', mdOnInput);
  }

  function mdRefreshSelect() {
    const sel = document.getElementById('mdDocSelect');
    if (!sel) return;
    const docs = mdLoadDocs();
    const currentId = mdGetCurrentId();
    sel.innerHTML = docs.map(d =>
      `<option value="${d.id}" ${d.id === currentId ? 'selected' : ''}>${d.title || 'Untitled'}</option>`
    ).join('');
  }

  function mdLoadDoc(id) {
    const docs = mdLoadDocs();
    const doc = docs.find(d => d.id === id);
    if (!doc) return;
    mdSetCurrentId(id);
    const ta = document.getElementById('mdEditorTextarea');
    const ti = document.getElementById('mdTitleInput');
    if (ta) ta.value = doc.content;
    if (ti) ti.value = doc.title;
    mdUpdatePreview(doc.content);
    mdRefreshSelect();
  }

  window.mdSwitchDoc = function(id) { mdLoadDoc(id); };

  window.mdNewDoc = function() {
    const docs = mdLoadDocs();
    const doc = { id: mdGenerateId(), title: 'Untitled', content: '', updated: Date.now() };
    docs.push(doc);
    mdSaveDocs(docs);
    mdLoadDoc(doc.id);
  };

  window.mdDeleteDoc = function() {
    let docs = mdLoadDocs();
    if (docs.length <= 1) { alert('Cannot delete the last document.'); return; }
    const id = mdGetCurrentId();
    docs = docs.filter(d => d.id !== id);
    mdSaveDocs(docs);
    mdLoadDoc(docs[0].id);
  };

  window.mdOnTitleChange = function() {
    const ti = document.getElementById('mdTitleInput');
    if (!ti) return;
    const docs = mdLoadDocs();
    const id = mdGetCurrentId();
    const doc = docs.find(d => d.id === id);
    if (doc) { doc.title = ti.value || 'Untitled'; doc.updated = Date.now(); mdSaveDocs(docs); mdRefreshSelect(); }
  };

  let _mdPreviewTimer = null;
  window.mdOnInput = function() {
    const ta = document.getElementById('mdEditorTextarea');
    if (!ta) return;
    const content = ta.value;
    // Save debounced
    clearTimeout(_mdPreviewTimer);
    _mdPreviewTimer = setTimeout(() => {
      const docs = mdLoadDocs();
      const id = mdGetCurrentId();
      const doc = docs.find(d => d.id === id);
      if (doc) { doc.content = content; doc.updated = Date.now(); mdSaveDocs(docs); }
    }, 400);
    mdUpdatePreview(content);
  };

  function mdUpdatePreview(content) {
    const preview = document.getElementById('mdPreview');
    if (!preview) return;
    if (!content.trim()) { preview.innerHTML = '<div class="md-empty-state"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg><p>Preview will appear here</p></div>'; return; }
    try { preview.innerHTML = marked.parse(content); } catch { preview.textContent = content; }
  }

  // Toolbar helpers
  window.mdWrap = function(before, after) {
    const ta = document.getElementById('mdEditorTextarea');
    if (!ta) return;
    const start = ta.selectionStart, end = ta.selectionEnd;
    const sel = ta.value.slice(start, end);
    const replacement = before + (sel || 'text') + after;
    ta.setRangeText(replacement, start, end, 'select');
    if (!sel) { ta.selectionStart = start + before.length; ta.selectionEnd = start + before.length + 4; }
    ta.focus();
    mdOnInput();
  };

  window.mdLinePrefix = function(prefix) {
    const ta = document.getElementById('mdEditorTextarea');
    if (!ta) return;
    const start = ta.selectionStart;
    const lineStart = ta.value.lastIndexOf('\n', start - 1) + 1;
    ta.setRangeText(prefix, lineStart, lineStart, 'end');
    ta.focus();
    mdOnInput();
  };

  window.mdInsertBlock = function(before, after) {
    const ta = document.getElementById('mdEditorTextarea');
    if (!ta) return;
    const start = ta.selectionStart, end = ta.selectionEnd;
    const sel = ta.value.slice(start, end);
    ta.setRangeText(before + (sel || '') + after, start, end, 'end');
    ta.focus();
    mdOnInput();
  };

  window.mdInsertAtCursor = function(text) {
    const ta = document.getElementById('mdEditorTextarea');
    if (!ta) return;
    const pos = ta.selectionStart;
    ta.setRangeText(text, pos, pos, 'end');
    ta.focus();
    mdOnInput();
  };

  window.mdInsertLink = function() {
    const url = prompt('URL:');
    if (!url) return;
    const ta = document.getElementById('mdEditorTextarea');
    if (!ta) return;
    const start = ta.selectionStart, end = ta.selectionEnd;
    const sel = ta.value.slice(start, end) || 'link text';
    ta.setRangeText(`[${sel}](${url})`, start, end, 'end');
    ta.focus();
    mdOnInput();
  };

  // ── Code Editor ──────────────────────────────────────────────────────────
  // Reinit guard so divider/Monaco setup only runs once
  const CE_FILES_KEY = 'ruby-code-files';
  const CE_CUR_KEY   = 'ruby-code-current';

  let _ceEditor      = null;
  let _ceModels      = {};
  let _ceMonacoReady = false;
  let _ceViewInited  = false;
  let _ceRunning     = false;
  let _ceTsLoaded    = false;

  const CE_LANG_EXT = {
    js:'javascript', jsx:'javascript', mjs:'javascript', cjs:'javascript',
    ts:'typescript', tsx:'typescript',
    css:'css', scss:'scss', less:'less',
    html:'html', htm:'html', svg:'xml',
    json:'json', jsonc:'json',
    md:'markdown', markdown:'markdown',
    py:'python', rb:'ruby', go:'go', rs:'rust',
    java:'java', c:'c', cpp:'cpp', cc:'cpp', cxx:'cpp', h:'cpp', hpp:'cpp',
    cs:'csharp', php:'php', swift:'swift', kt:'kotlin', kts:'kotlin',
    sh:'shell', bash:'shell', zsh:'shell', fish:'shell',
    sql:'sql', yaml:'yaml', yml:'yaml', xml:'xml',
    toml:'ini', ini:'ini', env:'ini',
    dockerfile:'dockerfile', txt:'plaintext',
  };

  const CE_LANG_COLORS = {
    javascript:'#f0db4f', typescript:'#3178c6', html:'#e34c26',
    css:'#264de4', scss:'#cd6799', less:'#2a4f83',
    python:'#3572a5', ruby:'#cc342d', go:'#00add8', rust:'#dea584',
    java:'#b07219', c:'#555', cpp:'#f34b7d', csharp:'#178600',
    php:'#4f5d95', swift:'#fa7343', kotlin:'#7f52ff',
    json:'#cbcb41', yaml:'#cb171e', markdown:'#519aba',
    shell:'#89e051', sql:'#e38c00', xml:'#0060ac', dockerfile:'#0db7ed',
  };

  function ceDetectLang(name) {
    const lower = name.toLowerCase();
    if (lower === 'dockerfile' || lower === 'makefile') return lower;
    const ext = lower.split('.').pop();
    return CE_LANG_EXT[ext] || 'plaintext';
  }

  function ceLangColor(lang) { return CE_LANG_COLORS[lang] || '#666'; }

  function ceLoadFiles() {
    try { return JSON.parse(localStorage.getItem(CE_FILES_KEY) || '[]'); } catch { return []; }
  }
  function ceSaveFiles(f) { localStorage.setItem(CE_FILES_KEY, JSON.stringify(f)); }
  function ceGetCur()     { return localStorage.getItem(CE_CUR_KEY) || null; }
  function ceSetCur(id)   { localStorage.setItem(CE_CUR_KEY, id); }
  function ceGenId()      { return 'ce_' + Date.now() + '_' + Math.random().toString(36).slice(2,7); }

  function ceInitView() {
    if (!_ceViewInited) {
      _ceViewInited = true;
      let files = ceLoadFiles();
      if (files.length === 0) {
        const f = { id: ceGenId(), name: 'main.js', content: '// Welcome to the Code Editor\n// Ctrl+Enter to run  |  supports async/await, fetch, console.log\n\nconst nums = [3, 1, 4, 1, 5, 9, 2, 6];\nconsole.log("Sorted:", [...nums].sort((a, b) => a - b));\nconsole.log("Sum:", nums.reduce((a, b) => a + b, 0));\n', language: 'javascript', updated: Date.now() };
        files = [f];
        ceSaveFiles(files);
        ceSetCur(f.id);
      }
      ceRenderTabs();
      ceDividerSetup();
      ceLoadMonaco(() => {
        const loading = document.getElementById('ceLoading');
        if (loading) loading.classList.add('hidden');
        ceOpenFile(ceGetCur() || ceLoadFiles()[0].id);
      });
    } else {
      ceRenderTabs();
      if (_ceEditor) requestAnimationFrame(() => _ceEditor.layout());
    }
  }

  function ceDividerSetup() {
    const divider = document.getElementById('ceDivider');
    if (!divider || divider.dataset.setup) return;
    divider.dataset.setup = '1';
    let dragging = false, startX = 0, startW = 0;
    divider.addEventListener('mousedown', e => {
      dragging = true;
      startX = e.clientX;
      const panel = document.getElementById('ceOutputPanel');
      startW = panel ? panel.offsetWidth : 380;
      divider.classList.add('dragging');
      document.body.style.cursor = 'col-resize';
      e.preventDefault();
    });
    document.addEventListener('mousemove', e => {
      if (!dragging) return;
      const panel = document.getElementById('ceOutputPanel');
      if (!panel) return;
      const newW = Math.max(140, Math.min(window.innerWidth * 0.7, startW + (startX - e.clientX)));
      panel.style.width = newW + 'px';
      if (_ceEditor) _ceEditor.layout();
    });
    document.addEventListener('mouseup', () => {
      if (!dragging) return;
      dragging = false;
      divider.classList.remove('dragging');
      document.body.style.cursor = '';
      if (_ceEditor) _ceEditor.layout();
    });
  }

  function ceLoadMonaco(cb) {
    if (_ceMonacoReady) { cb(); return; }
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs/loader.js';
    s.onload = () => {
      window.require.config({ paths: { vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.45.0/min/vs' } });
      window.require(['vs/editor/editor.main'], () => {
        _ceMonacoReady = true;
        ceCreateEditor();
        cb();
      });
    };
    document.head.appendChild(s);
  }

  function ceCreateEditor() {
    const container = document.getElementById('ceEditorMount');
    if (!container || _ceEditor) return;
    _ceEditor = monaco.editor.create(container, {
      value: '',
      language: 'javascript',
      theme: 'vs-dark',
      fontSize: 13,
      fontFamily: "'JetBrains Mono','Fira Code','Cascadia Code','Consolas',monospace",
      fontLigatures: true,
      lineHeight: 20,
      minimap: { enabled: true },
      scrollbar: { verticalScrollbarSize: 10, horizontalScrollbarSize: 10 },
      renderWhitespace: 'selection',
      tabSize: 2,
      insertSpaces: true,
      wordWrap: 'off',
      automaticLayout: true,
      bracketPairColorization: { enabled: true },
      padding: { top: 10, bottom: 10 },
      smoothScrolling: true,
      cursorBlinking: 'smooth',
      cursorSmoothCaretAnimation: 'on',
      renderLineHighlight: 'all',
      selectionHighlight: true,
      occurrencesHighlight: true,
      folding: true,
      showFoldingControls: 'mouseover',
      stickyScroll: { enabled: true },
      suggestOnTriggerCharacters: true,
      quickSuggestions: { other: true, comments: false, strings: false },
      parameterHints: { enabled: true },
      wordBasedSuggestions: 'currentDocument',
    });

    // Ctrl+Enter → run
    _ceEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => ceRun());

    // Cursor position in status bar
    _ceEditor.onDidChangeCursorPosition(() => {
      const pos = _ceEditor.getPosition();
      const el = document.getElementById('ceCursorPos');
      if (el && pos) el.textContent = `Ln ${pos.lineNumber}, Col ${pos.column}`;
    });

    // Auto-save with debounce
    let _saveT = null;
    _ceEditor.onDidChangeModelContent(() => {
      clearTimeout(_saveT);
      _saveT = setTimeout(() => {
        const id = ceGetCur();
        if (!id) return;
        const files = ceLoadFiles();
        const f = files.find(x => x.id === id);
        if (f) { f.content = _ceEditor.getValue(); f.updated = Date.now(); ceSaveFiles(files); }
      }, 500);
    });
  }

  function ceOpenFile(id) {
    const files = ceLoadFiles();
    const file  = files.find(f => f.id === id);
    if (!file || !_ceEditor) return;
    ceSetCur(id);
    if (!_ceModels[id]) {
      _ceModels[id] = monaco.editor.createModel(
        file.content,
        file.language,
        monaco.Uri.parse('inmemory://' + encodeURIComponent(file.name) + '?id=' + id)
      );
    }
    _ceEditor.setModel(_ceModels[id]);
    const sel = document.getElementById('ceLangSelect');
    if (sel) sel.value = file.language;
    ceRenderTabs();
    _ceEditor.focus();
  }

  function ceRenderTabs() {
    const bar = document.getElementById('ceTabBar');
    if (!bar) return;
    const files = ceLoadFiles();
    const curId = ceGetCur();
    bar.innerHTML = files.map(f => `
      <div class="ce-tab${f.id === curId ? ' active' : ''}" onclick="ceClickTab('${f.id}')" ondblclick="ceRenameTab(event,'${f.id}')" title="${f.name} — double-click to rename">
        <span class="ce-tab-dot" style="background:${ceLangColor(f.language)}"></span>
        <span class="ce-tab-name">${f.name}</span>
        <button class="ce-tab-close" onclick="ceCloseTab(event,'${f.id}')">×</button>
      </div>`).join('') +
      `<button class="ce-new-tab-btn" onclick="ceNewFile()" title="New file">+</button>`;
  }

  window.ceClickTab = function(id) {
    if (ceGetCur() === id) return;
    const curId = ceGetCur();
    if (curId && _ceEditor && _ceModels[curId]) {
      const files = ceLoadFiles();
      const f = files.find(x => x.id === curId);
      if (f) { f.content = _ceEditor.getValue(); ceSaveFiles(files); }
    }
    ceOpenFile(id);
  };

  window.ceCloseTab = function(e, id) {
    e.stopPropagation();
    let files = ceLoadFiles();
    if (files.length <= 1) return;
    const idx = files.findIndex(f => f.id === id);
    if (id === ceGetCur() && _ceEditor) {
      const f = files[idx]; if (f) f.content = _ceEditor.getValue();
    }
    files.splice(idx, 1);
    ceSaveFiles(files);
    if (_ceModels[id]) { try { _ceModels[id].dispose(); } catch {} delete _ceModels[id]; }
    if (id === ceGetCur()) ceOpenFile(files[Math.min(idx, files.length - 1)].id);
    else ceRenderTabs();
  };

  window.ceNewFile = function() {
    const name = prompt('File name:', 'untitled.js');
    if (!name || !name.trim()) return;
    const files = ceLoadFiles();
    const f = { id: ceGenId(), name: name.trim(), content: '', language: ceDetectLang(name.trim()), updated: Date.now() };
    files.push(f);
    ceSaveFiles(files);
    if (_ceMonacoReady) ceOpenFile(f.id);
    else ceRenderTabs();
  };

  window.ceRenameTab = function(e, id) {
    e.stopPropagation();
    const files = ceLoadFiles();
    const f = files.find(x => x.id === id);
    if (!f) return;
    const newName = prompt('Rename:', f.name);
    if (!newName || !newName.trim() || newName.trim() === f.name) return;
    if (_ceModels[id]) { try { _ceModels[id].dispose(); } catch {} delete _ceModels[id]; }
    f.name = newName.trim();
    f.language = ceDetectLang(f.name);
    f.updated = Date.now();
    ceSaveFiles(files);
    if (id === ceGetCur() && _ceEditor) {
      ceOpenFile(id);
      const sel = document.getElementById('ceLangSelect');
      if (sel) sel.value = f.language;
    } else {
      ceRenderTabs();
    }
  };

  window.ceLangChange = function(lang) {
    if (!_ceEditor) return;
    const model = _ceEditor.getModel();
    if (model) monaco.editor.setModelLanguage(model, lang);
    const id = ceGetCur();
    const files = ceLoadFiles();
    const f = files.find(x => x.id === id);
    if (f) { f.language = lang; ceSaveFiles(files); ceRenderTabs(); }
  };

  window.ceFormat = async function() {
    if (!_ceEditor) return;
    const btn = document.getElementById('ceFormatBtn');
    if (btn) { btn.textContent = 'Formatting…'; btn.disabled = true; }
    try {
      // Monaco built-in formatter first
      const action = _ceEditor.getAction('editor.action.formatDocument');
      if (action) { await action.run(); return; }
      // Prettier fallback for unsupported languages
      const id = ceGetCur();
      const files = ceLoadFiles();
      const f = files.find(x => x.id === id);
      if (f) await cePrettierFormat(f.language);
    } catch(e) {
      console.warn('[CE] Format error:', e);
    } finally {
      if (btn) { btn.textContent = 'Format'; btn.disabled = false; }
    }
  };

  async function cePrettierFormat(lang) {
    const MAP = {
      javascript: { parser:'babel',      plugins:['babel','estree'] },
      typescript: { parser:'typescript', plugins:['typescript','estree'] },
      css:        { parser:'css',        plugins:['postcss'] },
      scss:       { parser:'scss',       plugins:['postcss'] },
      less:       { parser:'less',       plugins:['postcss'] },
      html:       { parser:'html',       plugins:['html'] },
      markdown:   { parser:'markdown',   plugins:['markdown'] },
      json:       { parser:'json',       plugins:['babel','estree'] },
    };
    const cfg = MAP[lang];
    if (!cfg) return;
    await cePrettierLoad(cfg.plugins);
    const pluginObjs = cfg.plugins.map(p => window.prettierPlugins?.[p]).filter(Boolean);
    if (!window.prettier || !pluginObjs.length) return;
    const formatted = await window.prettier.format(_ceEditor.getValue(), { parser: cfg.parser, plugins: pluginObjs });
    const pos = _ceEditor.getPosition();
    _ceEditor.setValue(formatted);
    if (pos) _ceEditor.setPosition(pos);
  }

  // ── Run Engine ───────────────────────────────────────────────────────────
  window.ceRun = async function() {
    if (!_ceEditor) return;
    if (_ceRunning) return;
    _ceRunning = true;

    const btn = document.getElementById('ceRunBtn');
    if (btn) { btn.textContent = '■ Stop'; btn.classList.add('running'); }

    ceShowTab('output');
    ceClearOutput();

    const id    = ceGetCur();
    const files = ceLoadFiles();
    const file  = files.find(f => f.id === id);
    if (!file) { _ceFinishRun(0); return; }

    const onlyRunnable = ['javascript','typescript'];
    if (!onlyRunnable.includes(file.language)) {
      ceLogLine('system', `// Only JavaScript and TypeScript can be executed in the browser.`);
      _ceFinishRun(0);
      return;
    }

    let code = _ceEditor.getValue();

    // TypeScript → transpile first
    if (file.language === 'typescript') {
      ceLogLine('system', '// Transpiling TypeScript…');
      try {
        code = await ceTranspileTS(code);
      } catch(e) {
        ceLogLine('error', '✖ TypeScript: ' + e.message);
        _ceFinishRun(0);
        return;
      }
    }

    // Parse $input helpers
    const rawInput = document.getElementById('ceInputBody')?.value || '';
    let $json = null;
    try { $json = JSON.parse(rawInput); } catch {}
    const $lines = rawInput ? rawInput.split('\n') : [];
    const $csv   = $lines.map(l => l.split(',').map(s => s.trim()));

    // Intercept console
    const mockConsole = {
      log:   (...a) => ceLogLine('log',   a.map(ceSerialize).join(' ')),
      warn:  (...a) => ceLogLine('warn',  a.map(ceSerialize).join(' ')),
      error: (...a) => ceLogLine('error', a.map(ceSerialize).join(' ')),
      info:  (...a) => ceLogLine('info',  a.map(ceSerialize).join(' ')),
      table: (...a) => ceLogLine('log',   ceSerializeTable(a[0])),
      dir:   (...a) => ceLogLine('log',   a.map(ceSerialize).join(' ')),
      group: (...a) => ceLogLine('system','▶ ' + a.join(' ')),
      groupEnd: () => {},
      time:  (l='default') => { _ceTimers = _ceTimers||{}; _ceTimers[l] = performance.now(); },
      timeEnd:(l='default') => { if (_ceTimers?.[l]) { ceLogLine('log', `${l}: ${(performance.now()-_ceTimers[l]).toFixed(2)}ms`); delete _ceTimers[l]; } },
    };

    const t0 = performance.now();
    try {
      const fn = new Function(
        'console','$input','$json','$lines','$csv','fetch',
        '"use strict";\nreturn (async()=>{\n' + code + '\n})();'
      );
      const result = await fn(mockConsole, rawInput, $json, $lines, $csv, window.fetch.bind(window));
      if (result !== undefined) ceLogLine('result', '→ ' + ceSerialize(result));
      _ceFinishRun(performance.now() - t0);
    } catch(e) {
      ceLogLine('error', '✖ ' + (e.message || String(e)));
      if (e.stack) {
        const lines = e.stack.split('\n').slice(1, 4);
        lines.forEach(l => ceLogLine('error', '  ' + l.trim()));
      _ceFinishRun(performance.now() - t0);
    }
  };

  let _ceTimers = {};

  function _ceFinishRun(ms) {
    _ceRunning = false;
    const btn = document.getElementById('ceRunBtn');
    if (btn) { btn.textContent = '▶ Run'; btn.classList.remove('running'); }
    const timeEl = document.getElementById('ceExecTime');
    if (timeEl && ms > 0) timeEl.textContent = ms < 1000 ? ms.toFixed(1) + 'ms' : (ms/1000).toFixed(2) + 's';
    const body = document.getElementById('ceOutputBody');
    if (body && !body.querySelector('.ce-log-line')) {
      body.innerHTML = '<div class="ce-log-line system">// No output</div>';
    }
  }

  function ceLogLine(type, text) {
    const body = document.getElementById('ceOutputBody');
    if (!body) return;
    const empty = body.querySelector('.ce-output-empty');
    if (empty) empty.remove();
    const div = document.createElement('div');
    div.className = 'ce-log-line ' + type;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function ceSerialize(v) {
    if (v === null) return 'null';
    if (v === undefined) return 'undefined';
    if (typeof v === 'string') return v;
    if (typeof v === 'number' || typeof v === 'boolean') return String(v);
    if (v instanceof Error) return v.message;
    if (v instanceof Response) return `Response { status: ${v.status}, url: "${v.url}" }`;
    try { return JSON.stringify(v, null, 2); } catch { return String(v); }
  }

  function ceSerializeTable(v) {
    if (!v || typeof v !== 'object') return ceSerialize(v);
    try {
      const rows = Array.isArray(v) ? v : Object.entries(v).map(([k,val]) => ({ key: k, ...(typeof val==='object' && val ? val : { value: val }) }));
      if (!rows.length) return '(empty)';
      const cols = [...new Set(rows.flatMap(r => Object.keys(r)))];
      const w = cols.map(c => Math.max(c.length, ...rows.map(r => String(r[c] ?? '').length)));
      const pad = (s, n) => String(s ?? '').padEnd(n);
      const sep = cols.map((_,i) => '-'.repeat(w[i])).join('-+-');
      const header = cols.map((c,i) => pad(c,w[i])).join(' | ');
      return [header, sep, ...rows.map(r => cols.map((c,i) => pad(r[c],w[i])).join(' | '))].join('\n');
    } catch { return ceSerialize(v); }
  }
  };

  window.ceClearOutput = function() {
    const body = document.getElementById('ceOutputBody');
    if (body) body.innerHTML = '<div class="ce-output-empty">▶ Run your code to see output here</div>';
    const timeEl = document.getElementById('ceExecTime');
    if (timeEl) timeEl.textContent = '';
  };

  window.ceShowTab = function(tab) {
    const outTab  = document.getElementById('ceOutTabOutput');
    const inTab   = document.getElementById('ceOutTabInput');
    const outBody = document.getElementById('ceOutputBody');
    const inBody  = document.getElementById('ceInputBody');
    if (tab === 'output') {
      outTab?.classList.add('active');    inTab?.classList.remove('active');
      if (outBody) outBody.style.display = ''; if (inBody) inBody.classList.remove('visible');
    } else {
      outTab?.classList.remove('active'); inTab?.classList.add('active');
      if (outBody) outBody.style.display = 'none'; if (inBody) inBody.classList.add('visible');
    }
  };

  // TypeScript transpilation (lazy-loads TS compiler ~5MB)
  async function ceTranspileTS(code) {
    if (!_ceTsLoaded) {
      await new Promise((res, rej) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/typescript@5.4.5/lib/typescript.js';
        s.onload = () => { _ceTsLoaded = true; res(); };
        s.onerror = rej;
        document.head.appendChild(s);
      });
    }
    const result = window.ts.transpileModule(code, {
      compilerOptions: {
        module: window.ts.ModuleKind.None,
        target: window.ts.ScriptTarget.ES2020,
        strict: false,
        experimentalDecorators: true,
      },
    });
    return result.outputText;
  }

  function cePrettierLoad(plugins) {
    return new Promise(resolve => {
      const base = 'https://cdn.jsdelivr.net/npm/prettier@3.2.5';
      const needed = [];
      if (!window.prettier) needed.push(base + '/standalone.js');
      plugins.forEach(p => { if (!window.prettierPlugins?.[p]) needed.push(base + '/plugins/' + p + '.js'); });
      if (!needed.length) { resolve(); return; }
      let done = 0;
      needed.forEach(url => {
        const s = document.createElement('script');
        s.src = url;
        s.onload = s.onerror = () => { if (++done === needed.length) resolve(); };
        document.head.appendChild(s);
      });
    });
  }

  // ── Quick Capture overlay ────────────────────────────────────────────────
  let qcType = 'bug';
  const QC_TYPES = ['bug','meeting','decision','codereview','research','question','implementation','feature'];

  function buildQcTypeBar() {
    const bar = document.getElementById('qcTypeBar');
    if (!bar || bar.dataset.built) return;
    bar.dataset.built = '1';
    QC_TYPES.forEach(t => {
      const cfg = MOMENT_TYPES[t] || {};
      const pill = document.createElement('span');
      pill.className = 'qc-type-pill' + (t === qcType ? ' active' : '');
      pill.style.setProperty('--pill-color', cfg.color || 'var(--accent-primary)');
      pill.innerHTML = cfg.icon || '';
      pill.title = cfg.label || t;
      pill.dataset.type = t;
      pill.addEventListener('click', () => {
        qcType = t;
        bar.querySelectorAll('.qc-type-pill').forEach(p => p.classList.toggle('active', p.dataset.type === t));
      });
      bar.appendChild(pill);
    });
  }

  function populateQcThreads() {
    const sel = document.getElementById('qcThreadSelect');
    if (!sel) return;
    sel.innerHTML = '<option value="">No thread</option>';
    state.threads.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = t.name;
      if (state.selectedThread === t.id) opt.selected = true;
      sel.appendChild(opt);
    });
  }

  window.openQuickCapture = function() {
    const overlay = document.getElementById('quickCaptureOverlay');
    if (!overlay) return;
    buildQcTypeBar();
    populateQcThreads();
    overlay.classList.add('open');
    setTimeout(() => document.getElementById('qcText')?.focus(), 80);
  };

  window.closeQuickCapture = function() {
    const overlay = document.getElementById('quickCaptureOverlay');
    if (overlay) overlay.classList.remove('open');
    const ta = document.getElementById('qcText');
    if (ta) ta.value = '';
  };

  window.qcBackdropClick = function(e) {
    if (e.target === document.getElementById('quickCaptureOverlay')) closeQuickCapture();
  };

  window.submitQuickCapture = function() {
    const text = (document.getElementById('qcText')?.value || '').trim();
    if (!text) { document.getElementById('qcText')?.focus(); return; }
    const threadId = document.getElementById('qcThreadSelect')?.value || null;
    const newMoment = {
      id: generateId(),
      type: qcType,
      text,
      timestamp: Date.now(),
      threadId: threadId || (state.selectedThread && state.selectedThread !== 'unthreaded' ? state.selectedThread : null),
      context: { service: '', environment: 'production', version: '' },
      tags: [],
      charts: [],
      codeBlocks: [],
      tables: [],
      attachments: [],
      templateData: {},
      priority: null
    };
    state.moments.unshift(newMoment);
    invalidateWikiLookup();
    saveData();
    closeQuickCapture();
    render();
  };

  // ── Search with filters ──────────────────────────────────────────────────
  let searchFilters = { type: 'all', date: 'all' };

  function applySearchFilters(moments) {
    let result = moments;
    if (searchFilters.type !== 'all') {
      result = result.filter(m => m.type === searchFilters.type);
    }
    const now = Date.now();
    const DAY = 86400000;
    if (searchFilters.date === 'today') {
      const startOfDay = new Date(); startOfDay.setHours(0,0,0,0);
      result = result.filter(m => m.timestamp >= startOfDay.getTime());
    } else if (searchFilters.date === 'week') {
      result = result.filter(m => m.timestamp >= now - 7*DAY);
    } else if (searchFilters.date === 'month') {
      result = result.filter(m => m.timestamp >= now - 30*DAY);
    }
    return result;
  }

  function renderSearchResults(moments, query) {
    const container = document.getElementById('searchResults');
    const countEl = document.getElementById('searchResultsCount');
    if (!container) return;
    if (moments.length === 0) {
      container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No results</h3><p>Try adjusting your filters or search terms</p></div>`;
      if (countEl) countEl.textContent = '';
      return;
    }
    if (countEl) countEl.textContent = `${moments.length} result${moments.length !== 1 ? 's' : ''}${query ? ' for "' + query + '"' : ''}`;
    container.innerHTML = '';
    moments.forEach(m => {
      const card = buildMomentCard(m);
      if (card) container.appendChild(card);
    });
  }

  function runLocalSearch(query) {
    let pool = applySearchFilters(state.moments);
    if (query) {
      const q = query.toLowerCase();
      pool = pool.filter(m =>
        (m.text && m.text.toLowerCase().includes(q)) ||
        (m.tags && m.tags.some(t => t.toLowerCase().includes(q))) ||
        (m.type && m.type.toLowerCase().includes(q))
      );
    }
    pool = [...pool].sort((a, b) => b.timestamp - a.timestamp);
    renderSearchResults(pool, query);
  }

  // Render Functions
  // Track the currently selected card element to avoid querySelectorAll on every click
  let _selectedCardEl = null;

  // Virtual list state
  let _vlObserver = null;
  let _vlOrdered = [];
  let _vlRendered = 0;
  let _vlPinnedCount = 0;
  let _vlHasPinnedHeader = false;
  let _vlHasUnpinnedHeader = false;
  let _threadMap = new Map(); // keyed by thread.id, rebuilt before each render batch

  function _buildMomentCard(moment) {
    const config = MOMENT_TYPES[moment.type];
    const card = document.createElement('div');
    card.className = 'moment-card';
    if (state.selectedMoment?.id === moment.id) card.classList.add('selected');
    card.style.borderLeftColor = config.color;
    if (moment.pinnedToTop) card.classList.add('pinned-to-top');

    let contextHtml = '';
    if (moment.context.service || moment.context.environment || moment.context.version) {
      contextHtml = '<div class="moment-context">';
      if (moment.context.service) contextHtml += `<div class="context-tag"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> ${moment.context.service}</div>`;
      if (moment.context.environment) contextHtml += `<div class="context-tag"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> ${moment.context.environment}</div>`;
      if (moment.context.version) contextHtml += `<div class="context-tag"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" x2="7.01" y1="7" y2="7"/></svg> ${moment.context.version}</div>`;
      contextHtml += '</div>';
    }

    let threadBadge = '';
    if (moment.threadId && !state.selectedThread) {
      const thread = _threadMap.get(moment.threadId);
      if (thread) {
        threadBadge = `<div class="moment-thread-badge"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17h.01"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg> ${thread.name}</div>`;
      }
    } else if (!moment.threadId && state.threads.length > 0 && !state.selectedThread) {
      threadBadge = `<div class="moment-unthreaded-badge"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Unthreaded</div>`;
    }

    let priorityHtml = '';
    if (moment.priority) {
      const priorityIcons = { critical: `<svg class="icon-priority" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#E0115F"/></svg>`, 'follow-up': `<svg class="icon-priority" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#ff922b"/></svg>`, pinned: `<svg class="icon-priority" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#ffd700"/></svg>` };
      const priorityLabels = { critical: 'Critical', 'follow-up': 'Follow-up', pinned: 'Pinned' };
      priorityHtml = `<div class="moment-priority"><span class="priority-badge ${moment.priority}">${priorityIcons[moment.priority]} ${priorityLabels[moment.priority]}</span></div>`;
    }

    card.innerHTML = `
      ${threadBadge}
      ${priorityHtml}
      <div class="moment-header">
        <div class="moment-type" style="color: ${config.color}">
          ${config.icon} ${config.label}
        </div>
      </div>
      <div class="moment-time"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${formatTime(moment.timestamp)}</div>
      <div class="moment-text">${parseMarkdown(moment.text)}</div>
      ${contextHtml}
    `;

    const pinBtn = document.createElement('button');
    pinBtn.className = 'pin-top-btn' + (moment.pinnedToTop ? ' active' : '');
    pinBtn.title = moment.pinnedToTop ? 'Unpin from top' : 'Pin to top';
    pinBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="${moment.pinnedToTop ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg>`;
    pinBtn.addEventListener('click', (e) => { e.stopPropagation(); togglePinToTop(moment.id); });
    card.appendChild(pinBtn);

    if (moment.tags && moment.tags.length > 0) {
      const tagsContainer = document.createElement('div');
      tagsContainer.className = 'moment-tags';
      moment.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'moment-tag';
        tagEl.textContent = '#' + tag;
        tagEl.style.cursor = 'default';
        tagsContainer.appendChild(tagEl);
      });
      card.appendChild(tagsContainer);
    }

    if (moment.templateData && config.template) {
      const templateDisplay = createTemplateDisplay(moment.templateData, config.template, true);
      if (templateDisplay) card.appendChild(templateDisplay);
    }

    if (moment.charts && moment.charts.length > 0) {
      const chartsContainer = document.createElement('div');
      chartsContainer.className = 'moment-charts';
      moment.charts.forEach(chart => {
        chartsContainer.appendChild(createChart(chart.title || chart.type, chart.data, config.color, chart.labels || null, chart.id || null, chart.chartType || 'line'));
      });
      card.appendChild(chartsContainer);
    }

    if (moment.codeBlocks && moment.codeBlocks.length > 0) {
      const codeContainer = document.createElement('div');
      codeContainer.className = 'moment-code-blocks';
      moment.codeBlocks.forEach(codeBlock => {
        codeContainer.appendChild(createCodeBlock(codeBlock.language, codeBlock.code, codeBlock.title || '', null));
      });
      card.appendChild(codeContainer);
    }

    if (moment.tables && moment.tables.length > 0) {
      const tableContainer = document.createElement('div');
      tableContainer.className = 'moment-tables';
      moment.tables.forEach(table => {
        tableContainer.appendChild(createTable(table.title || '', table.data, null));
      });
      card.appendChild(tableContainer);
    }

    if (moment.attachments && moment.attachments.length > 0) {
      const attachmentsContainer = document.createElement('div');
      attachmentsContainer.className = 'moment-attachments';
      moment.attachments.forEach(attachment => {
        const preview = document.createElement('div');
        preview.className = 'attachment-preview';
        if (attachment.isImage) {
          preview.innerHTML = `<img src="${attachment.data}" alt="${attachment.name}">`;
          preview.addEventListener('click', (e) => { e.stopPropagation(); showImageModal(attachment.data); });
        } else {
          preview.innerHTML = `<div class="attachment-file"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg></div>`;
          preview.addEventListener('click', (e) => { e.stopPropagation(); downloadAttachment(attachment); });
        }
        attachmentsContainer.appendChild(preview);
      });
      card.appendChild(attachmentsContainer);
    }

    card.addEventListener('click', () => {
      state.selectedMoment = moment;
      if (_selectedCardEl) _selectedCardEl.classList.remove('selected');
      card.classList.add('selected');
      _selectedCardEl = card;
      if (state.view === 'timeline') renderDetail();
    });

    return card;
  }

  function _vlRenderBatch() {
    const container = document.getElementById('momentsList');
    if (!container) return;

    // Remove existing sentinel
    const oldSentinel = document.getElementById('_vlSentinel');
    if (oldSentinel) oldSentinel.remove();

    const end = Math.min(_vlRendered + 25, _vlOrdered.length);

    for (let i = _vlRendered; i < end; i++) {
      const moment = _vlOrdered[i];

      if (moment.pinnedToTop && !_vlHasPinnedHeader) {
        const header = document.createElement('div');
        header.className = 'pinned-section-header';
        header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> Pinned`;
        container.appendChild(header);
        _vlHasPinnedHeader = true;
      }
      if (!moment.pinnedToTop && !_vlHasUnpinnedHeader && _vlPinnedCount > 0) {
        const divider = document.createElement('div');
        divider.className = 'timeline-section-divider';
        divider.textContent = 'Timeline';
        container.appendChild(divider);
        _vlHasUnpinnedHeader = true;
      }
      container.appendChild(_buildMomentCard(moment));
    }

    _vlRendered = end;

    if (_vlRendered < _vlOrdered.length) {
      // Add sentinel for next batch
      const sentinel = document.createElement('div');
      sentinel.id = '_vlSentinel';
      sentinel.style.cssText = 'height:1px;width:100%;';
      container.appendChild(sentinel);

      if (_vlObserver) _vlObserver.disconnect();
      const scrollRoot = container.closest('.timeline-list');
      _vlObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) _vlRenderBatch();
      }, { root: scrollRoot, rootMargin: '400px' });
      _vlObserver.observe(sentinel);
    } else {
      if (_vlObserver) { _vlObserver.disconnect(); _vlObserver = null; }
      if (window.innerWidth <= 768) setTimeout(() => renderMobileCaptureButton(), 10);
    }
  }

  function renderMoments() {
    const container = document.getElementById('momentsList');
    renderOnThisDay();

    // Single-pass filter combining thread + type (avoids two array allocations)
    const needsThreadFilter = !!state.selectedThread;
    const needsTypeFilter = state.filterType !== 'all';
    let filteredMoments;
    if (!needsThreadFilter && !needsTypeFilter) {
      filteredMoments = state.moments;
    } else {
      filteredMoments = state.moments.filter(m => {
        if (needsThreadFilter) {
          if (state.selectedThread === 'unthreaded' ? m.threadId : m.threadId !== state.selectedThread) return false;
          if (needsTypeFilter && m.type !== state.filterType) return false;
        }
        return true;
      });
    }

    let displayMoments = state.view === 'search' && state.searchResults.length > 0
      ? state.searchResults
      : filteredMoments;

    // Apply sort order
    displayMoments = [...displayMoments].sort((a, b) =>
      state.sortOrder === 'desc' ? b.timestamp - a.timestamp : a.timestamp - b.timestamp
    );

    // Apply inline text filter
    if (state.inlineFilter) {
      const q = state.inlineFilter.toLowerCase();
      displayMoments = displayMoments.filter(m => m.text && m.text.toLowerCase().includes(q));
    }

    if (displayMoments.length === 0) {
      if (_vlObserver) { _vlObserver.disconnect(); _vlObserver = null; }
      if (state.selectedThread === 'unthreaded') {
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg></div>
            <h3>No unthreaded moments</h3>
            <p>All moments are assigned to threads</p>
          </div>
        `;
      } else if (state.selectedThread) {
        const thread = state.threads.find(t => t.id === state.selectedThread);
        const isMobile = window.innerWidth <= 768;
        const captureButton = isMobile ? `
          <button class="btn-primary mobile-empty-capture-btn" onclick="state.view = 'capture'; render();">
            <svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Capture Moment
          </button>
        ` : '';
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17h.01"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg></div>
            <h3>No moments in this thread</h3>
            <p>Capture a moment to add it to "${thread ? thread.name : 'this thread'}"</p>
            ${captureButton}
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">🕐</div>
            <h3>No moments yet</h3>
            <p>Capture your first moment to get started</p>
          </div>
        `;
        return;
      }
    }

    container.innerHTML = '';

    // Disconnect any previous observer
    if (_vlObserver) { _vlObserver.disconnect(); _vlObserver = null; }

    const pinnedMoments = displayMoments.filter(m => m.pinnedToTop);
    const unpinnedMoments = displayMoments.filter(m => !m.pinnedToTop);
    _vlOrdered = [...pinnedMoments, ...unpinnedMoments];
    _vlPinnedCount = pinnedMoments.length;
    _vlRendered = 0;
    _vlHasPinnedHeader = false;
    _vlHasUnpinnedHeader = false;

    // Rebuild thread lookup Map once before rendering cards
    _threadMap = new Map(state.threads.map(t => [t.id, t]));

    _vlRenderBatch();
  }
  
  let _lastDetailId = null;
  function invalidateDetail() { _lastDetailId = null; }
  function renderDetail() {
    const panel = _els.detailPanel;

    if (!state.selectedMoment) {
      panel.classList.remove('visible');
      _lastDetailId = null;
      return;
    }

    // Skip full rebuild if the same moment is already displayed
    if (state.selectedMoment.id === _lastDetailId) return;
    _lastDetailId = state.selectedMoment.id;
    
    panel.classList.add('visible');
    const moment = state.selectedMoment;
    const config = MOMENT_TYPES[moment.type];
    
    let editButtonHtml = `
      <button class="btn-secondary" onclick="editMoment('${moment.id}')">
        <svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg> Edit Moment
      </button>
    `;
    
    let deleteButtonHtml = `
      <button class="btn-danger" onclick="confirmDeleteMoment('${moment.id}')">
        <svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg> Delete Moment
      </button>
    `;

    let pinButtonHtml = `
      <button class="btn-secondary" onclick="togglePinToTop('${moment.id}')" style="${moment.pinnedToTop ? 'color:#ffd700;border-color:rgba(255,215,0,0.4);' : ''}">
        <svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${moment.pinnedToTop ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="17" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg> ${moment.pinnedToTop ? 'Unpin from Top' : 'Pin to Top'}
      </button>
    `;

    let threadAssignmentHtml = '';
    const momentThread = moment.threadId ? state.threads.find(t => t.id === moment.threadId) : null;
    
    if (state.threads.length > 0) {
      threadAssignmentHtml = `
        <div class="thread-assignment">
          <div class="thread-assignment-header">
            <span class="thread-assignment-label"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17h.01"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg> Thread</span>
            ${momentThread ? `<button class="thread-remove-btn" onclick="removeFromThread('${moment.id}')">✕</button>` : ''}
          </div>
          <select class="thread-select" onchange="assignToThread('${moment.id}', this.value)">
            <option value="">No thread</option>
            ${state.threads.map(t => `
              <option value="${t.id}" ${t.id === moment.threadId ? 'selected' : ''}>
                ${t.name}
              </option>
            `).join('')}
          </select>
        </div>
      `;
    }
    
    let contextHtml = '';
    if (moment.context.service || moment.context.environment || moment.context.version) {
      contextHtml = '<div class="detail-section"><h3>Context</h3><div class="context-grid">';
      if (moment.context.service) {
        contextHtml += `
          <div class="context-item">
            <div class="context-item-label">Service</div>
            <div class="context-item-value">${moment.context.service}</div>
          </div>
        `;
      }
      if (moment.context.environment) {
        contextHtml += `
          <div class="context-item">
            <div class="context-item-label">Environment</div>
            <div class="context-item-value">${moment.context.environment}</div>
          </div>
        `;
      }
      if (moment.context.version) {
        contextHtml += `
          <div class="context-item">
            <div class="context-item-label">Version</div>
            <div class="context-item-value">${moment.context.version}</div>
          </div>
        `;
      }
      contextHtml += '</div></div>';
    }
    
    panel.innerHTML = '';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'detail-panel-content';
    contentDiv.innerHTML = `
      ${threadAssignmentHtml}
      <div class="detail-header">
        <div class="detail-type-icon" style="color: ${config.color}">
          ${config.icon}
        </div>
        <div class="detail-meta">
          <h2>${config.label}</h2>
          <div class="detail-timestamp">${new Date(moment.timestamp).toLocaleString()}</div>
        </div>
      </div>
      
      <div class="detail-section">
        <h3>Thought</h3>
        <div class="detail-content">${parseMarkdown(moment.text)}</div>
      </div>
      
      ${contextHtml}
    `;

    panel.appendChild(contentDiv);

    if (moment.priority) {
      const section = document.createElement('div');
      section.className = 'detail-section';
      section.innerHTML = '<h3>Priority</h3>';
      const priorityIcons = { critical: `<svg class="icon-priority" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#E0115F"/></svg>`, 'follow-up': `<svg class="icon-priority" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#ff922b"/></svg>`, pinned: `<svg class="icon-priority" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#ffd700"/></svg>` };
      const priorityLabels = { critical: 'Critical', 'follow-up': 'Follow-up Required', pinned: 'Pinned' };
      const badge = document.createElement('span');
      badge.className = `priority-badge ${moment.priority}`;
      badge.innerHTML = `${priorityIcons[moment.priority]} ${priorityLabels[moment.priority]}`;
      section.appendChild(badge);
      contentDiv.appendChild(section);
    }
    
    if (moment.tags && moment.tags.length > 0) {
      const section = document.createElement('div');
      section.className = 'detail-section';
      section.innerHTML = '<h3>Tags</h3>';
      const tagsContainer = document.createElement('div');
      tagsContainer.className = 'moment-tags';
      moment.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'moment-tag';
        tagEl.textContent = '#' + tag;
        tagEl.style.cursor = 'default';
        tagsContainer.appendChild(tagEl);
      });
      section.appendChild(tagsContainer);
      contentDiv.appendChild(section);
    }
    
    if (moment.templateData && config.template) {
      const section = document.createElement('div');
      section.className = 'detail-section';
      section.innerHTML = '<h3>Details</h3>';
      const templateDisplay = createTemplateDisplay(moment.templateData, config.template, false);
      if (templateDisplay) {
        section.appendChild(templateDisplay);
        panel.appendChild(section);
      }
    }
    
    if (moment.charts && moment.charts.length > 0) {
      const section = document.createElement('div');
      section.className = 'detail-section';
      section.innerHTML = '<h3>Signals</h3>';
      const chartsContainer = document.createElement('div');
      chartsContainer.style.display = 'flex';
      chartsContainer.style.flexDirection = 'column';
      chartsContainer.style.gap = '12px';
      
      moment.charts.forEach(chart => {
        chartsContainer.appendChild(createChart(
          chart.title || chart.type, 
          chart.data, 
          config.color, 
          chart.labels || null, 
          chart.id || null, 
          chart.chartType || 'line'
        ));
      });
      
      section.appendChild(chartsContainer);
      contentDiv.appendChild(section);
    }
    
    if (moment.codeBlocks && moment.codeBlocks.length > 0) {
      const section = document.createElement('div');
      section.className = 'detail-section';
      section.innerHTML = '<h3>Code</h3>';
      const codeContainer = document.createElement('div');
      codeContainer.style.display = 'flex';
      codeContainer.style.flexDirection = 'column';
      codeContainer.style.gap = '12px';
      
      moment.codeBlocks.forEach(codeBlock => {
        codeContainer.appendChild(createCodeBlock(codeBlock.language, codeBlock.code, codeBlock.title || '', null));
      });
      
      section.appendChild(codeContainer);
      contentDiv.appendChild(section);
    }
    
    if (moment.tables && moment.tables.length > 0) {
      const section = document.createElement('div');
      section.className = 'detail-section';
      section.innerHTML = '<h3>Tables</h3>';
      const tableContainer = document.createElement('div');
      tableContainer.style.display = 'flex';
      tableContainer.style.flexDirection = 'column';
      tableContainer.style.gap = '12px';
      
      moment.tables.forEach(table => {
        tableContainer.appendChild(createTable(table.title || '', table.data, null));
      });
      
      section.appendChild(tableContainer);
      contentDiv.appendChild(section);
    }
    
    if (moment.attachments && moment.attachments.length > 0) {
      const section = document.createElement('div');
      section.className = 'detail-section';
      section.innerHTML = '<h3>Attachments</h3>';
      const attachmentsContainer = document.createElement('div');
      attachmentsContainer.style.display = 'flex';
      attachmentsContainer.style.flexDirection = 'column';
      attachmentsContainer.style.gap = '12px';
      
      moment.attachments.forEach(attachment => {
        if (attachment.isImage) {
          const preview = document.createElement('div');
          preview.className = 'attachment-preview-large';
          preview.innerHTML = `<img src="${attachment.data}" alt="${attachment.name}" style="cursor: pointer;">`;
          preview.addEventListener('click', () => showImageModal(attachment.data));
          attachmentsContainer.appendChild(preview);
        } else {
          const fileItem = document.createElement('div');
          fileItem.className = 'attachment-file-item';
          fileItem.innerHTML = `
            <div style="font-size: 32px;"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg></div>
            <div style="flex: 1;">
              <div style="font-size: 13px; font-weight: 600; color: var(--text-primary);">${attachment.name}</div>
              <div style="font-size: 11px; color: var(--text-muted);">${(attachment.size / 1024).toFixed(1)} KB</div>
            </div>
            <div style="font-size: 20px; color: var(--accent-primary);"><svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg></div>
          `;
          fileItem.addEventListener('click', () => downloadAttachment(attachment));
          attachmentsContainer.appendChild(fileItem);
        }
      });

      section.appendChild(attachmentsContainer);
      contentDiv.appendChild(section);
    }
    
    // Add backlinks section
    const { outgoing, incoming } = getLinkedMoments(moment.id);
    if (outgoing.length > 0 || incoming.length > 0) {
      const linksSection = document.createElement('div');
      linksSection.className = 'detail-section';
      linksSection.innerHTML = '<h3><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Links & Backlinks</h3>';
      
      if (outgoing.length > 0) {
        const outgoingDiv = document.createElement('div');
        outgoingDiv.style.marginBottom = '12px';
        outgoingDiv.innerHTML = '<h4 style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">Links To:</h4>';
        outgoing.forEach(m => {
          const cfg = MOMENT_TYPES[m.type];
          const linkItem = document.createElement('div');
          linkItem.className = 'graph-link-item';
          linkItem.innerHTML = `${cfg.icon} ${m.text.substring(0, 60)}...`;
          linkItem.onclick = () => navigateToMoment(m.id);
          outgoingDiv.appendChild(linkItem);
        });
        linksSection.appendChild(outgoingDiv);
      }

      if (incoming.length > 0) {
        const incomingDiv = document.createElement('div');
        incomingDiv.innerHTML = '<h4 style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">Linked From (Backlinks):</h4>';
        incoming.forEach(m => {
          const cfg = MOMENT_TYPES[m.type];
          const linkItem = document.createElement('div');
          linkItem.className = 'graph-link-item';
          linkItem.innerHTML = `${cfg.icon} ${m.text.substring(0, 60)}...`;
          linkItem.onclick = () => navigateToMoment(m.id);
          incomingDiv.appendChild(linkItem);
        });
        linksSection.appendChild(incomingDiv);
      }

      contentDiv.appendChild(linksSection);
    }

    // Sticky footer with action buttons
    const footer = document.createElement('div');
    footer.className = 'detail-panel-footer';
    footer.innerHTML = editButtonHtml + pinButtonHtml + deleteButtonHtml;
    panel.appendChild(footer);
  }

  let _threadsRenderKey = '';
  function renderThreads() {
    // Build a cheap cache key — skip full rebuild if threads/moments/selection unchanged
    const key = state.threads.map(t => t.id).join(',') + '|' + state.moments.length + '|' + (state.selectedThread || '');
    if (key === _threadsRenderKey) return;
    _threadsRenderKey = key;

    const container = _els.threadList;
    container.innerHTML = '';

    // Count moments per thread in one pass instead of one filter per thread
    const threadCounts = {};
    state.moments.forEach(m => { if (m.threadId) threadCounts[m.threadId] = (threadCounts[m.threadId] || 0) + 1; });

    state.threads.forEach(thread => {
      const count = threadCounts[thread.id] || 0;
      const item = document.createElement('div');
      item.className = 'thread-item';
      if (state.selectedThread === thread.id) item.classList.add('active');
      item.innerHTML = `
        <div class="thread-name">${thread.name}</div>
        <div class="thread-meta">${count} moment${count !== 1 ? 's' : ''}</div>
      `;
      item.addEventListener('click', () => {
        state.selectedThread = state.selectedThread === thread.id ? null : thread.id;
        saveSelectedThread();
        state.selectedMoment = null;
        state.view = 'timeline';
        if (window.innerWidth <= 768) closeMobileSidebar();
        render();
        if (window.innerWidth <= 768) updateMobileViews();
      });
      container.appendChild(item);
    });
  }
  
  let _countsRenderKey = '';
  function updateCounts() {
    const key = state.moments.length + '|' + (state.selectedThread || '') + '|' + state.filterType;
    if (key === _countsRenderKey) return;
    _countsRenderKey = key;

    let momentsToCount;
    if (state.selectedThread === 'unthreaded') {
      momentsToCount = state.moments.filter(m => !m.threadId);
    } else if (state.selectedThread) {
      momentsToCount = state.moments.filter(m => m.threadId === state.selectedThread);
    } else {
      momentsToCount = state.moments;
    }

    // Single pass — count all types and unthreaded at once
    const typeCounts = {};
    let unthreadedCount = 0;
    for (let i = 0; i < momentsToCount.length; i++) {
      const m = momentsToCount[i];
      typeCounts[m.type] = (typeCounts[m.type] || 0) + 1;
      if (!m.threadId) unthreadedCount++;
    }

    if (_countEls.all) _countEls.all.textContent = momentsToCount.length;

    Object.keys(MOMENT_TYPES).forEach(type => {
      const el = _countEls.types[type];
      if (el) el.textContent = typeCounts[type] || 0;
    });

    if (_countEls.unthreaded) _countEls.unthreaded.textContent = unthreadedCount;
  }
  
  
  // Render Graph Visualization
  // Cache the galaxy background so 120 animated stars are only created once
  let _graphGalaxy = null;
  let _graphDataKey = '';
  let _graphSvgCache = null;
  let _graphSimulation = null; // track active D3 simulation so it can be stopped on rebuild
  function renderGraph() {
    const container = document.getElementById('graphContainer');

    // Build a cheap key — only rebuild D3 if moments changed
    const last = state.moments[state.moments.length - 1];
    const dataKey = state.moments.length + '|' + (last ? last.id : '');
    const dataChanged = dataKey !== _graphDataKey;
    _graphDataKey = dataKey;

    container.innerHTML = '';

    // Reuse cached galaxy — only build 120 star elements once
    if (!_graphGalaxy) {
      const galaxy = document.createElement('div');
      galaxy.className = 'graph-galaxy';
      const starChars = ['✦', '✧', '⋆', '·'];
      for (let i = 0; i < 120; i++) {
        const star = document.createElement('span');
        star.className = 'graph-star';
        const size = 0.3 + Math.random() * 0.8;
        const opacity = 0.2 + Math.random() * 0.6;
        const duration = 8 + Math.random() * 20;
        const delay = -(Math.random() * duration);
        const dx = (Math.random() - 0.5) * 6;
        const dy = (Math.random() - 0.5) * 6;
        star.textContent = starChars[Math.floor(Math.random() * starChars.length)];
        star.style.cssText = `
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          font-size: ${size}em;
          --star-opacity: ${opacity};
          --dx1: ${dx * 0.3}px; --dy1: ${dy * 0.5}px;
          --dx2: ${dx * 0.7}px; --dy2: ${dy * 0.2}px;
          --dx3: ${dx}px;       --dy3: ${dy * 0.8}px;
          animation-duration: ${duration}s;
          animation-delay: ${delay}s;
          text-shadow: 0 0 ${4 + Math.random() * 6}px rgba(180,210,255,${0.4 + Math.random() * 0.5}),
                       0 0 ${8 + Math.random() * 10}px rgba(120,160,255,${0.2 + Math.random() * 0.3});
        `;
        galaxy.appendChild(star);
      }
      _graphGalaxy = galaxy;
    }
    container.appendChild(_graphGalaxy);

    if (state.moments.length === 0) {
      container.innerHTML += '<div class="empty-state" style="position:relative;z-index:3"><div class="empty-state-icon">🕸️</div><h3>No Moments Yet</h3><p>Create moments with [[wikilinks]] to build your knowledge graph</p></div>';
      _graphSvgCache = null;
      return;
    }

    // If data unchanged and we have a cached SVG, just re-inject it — skip full D3 rebuild
    if (!dataChanged && _graphSvgCache) {
      container.appendChild(_graphSvgCache);
      return;
    }

    // Build nodes and links
    const nodes = state.moments.map(m => ({
      id: m.id,
      label: m.text.substring(0, 30).replace(/\n/g, ' ') + (m.text.length > 30 ? '...' : ''),
      type: m.type,
      moment: m
    }));
    
    const links = [];
    const linkSet = new Set();
    
    // Build O(1) lookup for wikilink resolution (avoids O(n) find per link)
    const _wikiLookup = new Map();
    state.moments.forEach(m => {
      _wikiLookup.set(m.id, m);
      const prefix = m.text.substring(0, 50).toLowerCase();
      if (!_wikiLookup.has(prefix)) _wikiLookup.set(prefix, m);
    });

    state.moments.forEach(moment => {
      const wikilinks = extractWikilinks(moment.text);
      wikilinks.forEach(linkText => {
        const lc = linkText.toLowerCase();
        const targetMoment = _wikiLookup.get(linkText) ||
          state.moments.find(m => m.text.substring(0, 50).toLowerCase().includes(lc));
        if (targetMoment) {
          const linkKey = `${moment.id}-${targetMoment.id}`;
          if (!linkSet.has(linkKey)) {
            links.push({ source: moment.id, target: targetMoment.id });
            linkSet.add(linkKey);
          }
        }
      });
    });
    
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    const svg = d3.select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);
    
    // Add zoom behavior
    const g = svg.append('g');
    
    svg.call(d3.zoom()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      }));
    
    // Stop any previous simulation before rebuilding
    if (_graphSimulation) { _graphSimulation.stop(); _graphSimulation = null; }

    // Create force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(40));
    
    // Draw links
    const link = g.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('class', 'graph-link')
      .attr('stroke', 'rgba(255, 255, 255, 0.15)')
      .attr('stroke-width', 1.5);
    
    // Draw nodes
    const node = g.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('class', 'graph-node')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended))
      .on('click', (event, d) => {
        event.stopPropagation();
        showGraphNodeDetails(d.moment);
        
        // Highlight connected nodes
        node.classed('selected', n => n.id === d.id);
        link.classed('highlighted', l => 
          l.source.id === d.id || l.target.id === d.id
        );
      });
    
    // Add circles to nodes
    node.append('circle')
      .attr('r', 20)
      .attr('fill', d => {
        const config = MOMENT_TYPES[d.type];
        return config ? config.color : '#64748b';
      })
      .attr('opacity', 0.8);
    
    // Add labels to nodes
    node.append('text')
      .text(d => d.label)
      .attr('x', 0)
      .attr('y', 30)
      .attr('text-anchor', 'middle')
      .attr('fill', '#e4e4e7')
      .attr('font-size', '11px');
    
    // Update positions on simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
      
      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
    
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    // Store simulation reference and cache the built SVG node for reuse on next graph view
    _graphSimulation = simulation;
    _graphSvgCache = container.querySelector('svg');
  }

  // Show graph node details
  function showGraphNodeDetails(moment) {
    const panel = document.getElementById('graphDetailPanel');
    
    if (!moment) {
      panel.classList.remove('visible');
      return;
    }
    
    // Just call the same rendering logic as timeline detail panel
    panel.classList.add('visible');
    
    // Temporarily set this as selected moment for rendering
    const originalSelected = state.selectedMoment;
    state.selectedMoment = moment;
    
    // Render using the same logic, but to the graph detail panel
    const config = MOMENT_TYPES[moment.type];
    
    let editButtonHtml = `
      <button class="btn-secondary" onclick="editMoment('${moment.id}')">
        <svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"/></svg> Edit Moment
      </button>
    `;
    
    let deleteButtonHtml = `
      <button class="btn-danger" onclick="confirmDeleteMoment('${moment.id}')">
        <svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg> Delete Moment
      </button>
    `;
    
    panel.innerHTML = editButtonHtml + deleteButtonHtml;
    
    // Restore original selected moment
    state.selectedMoment = originalSelected;
    
    // Now render full details by copying logic from renderDetail
    const detailPanel = document.getElementById('detailPanel');
    if (detailPanel) {
      // Temporarily swap the panel reference
      const tempHTML = detailPanel.innerHTML;
      state.selectedMoment = moment;
      invalidateDetail();
      renderDetail();
      panel.innerHTML = detailPanel.innerHTML;
      detailPanel.innerHTML = tempHTML;
      state.selectedMoment = originalSelected;
    }
  }
  
  // Mobile Navigation
  let _mobileHeadersInitialized = false;
  let _cachedMobileNavItems = null;

  function setupMobileNavigation() {
    if (window.innerWidth <= 768) {
      // Add mobile headers (only once)
      if (!_mobileHeadersInitialized) {
        addMobileHeaders();
        _mobileHeadersInitialized = true;
      }

      // Update view visibility for mobile
      updateMobileViews();
    }
  }
  
  const MENU_ICON = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
  const BACK_ICON = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`;

  function addMobileHeaders() {
    // Timeline view header — hamburger to open sidebar drawer
    const timelineView = document.getElementById('timelineView');
    const timelineList = timelineView.querySelector('.timeline-list');
    if (timelineList && !timelineList.querySelector('.mobile-header')) {
      const header = document.createElement('div');
      header.className = 'mobile-header';
      header.innerHTML = `
        <button class="mobile-back-btn mobile-menu-btn" onclick="openMobileSidebar()">${MENU_ICON}</button>
        <h2 id="mobileTimelineTitle">Timeline</h2>
      `;
      timelineList.insertBefore(header, timelineList.firstChild);
    }

    // Capture view header — back button to go to timeline
    const captureView = document.getElementById('captureView');
    if (!captureView.querySelector('.mobile-header')) {
      const header = document.createElement('div');
      header.className = 'mobile-header';
      header.innerHTML = `
        <button class="mobile-back-btn" onclick="mobileBack('capture')">${BACK_ICON}</button>
        <h2>Capture Moment</h2>
      `;
      captureView.insertBefore(header, captureView.firstChild);
    }

    // Search view header — hamburger
    const searchView = document.getElementById('searchView');
    if (!searchView.querySelector('.mobile-header')) {
      const header = document.createElement('div');
      header.className = 'mobile-header';
      header.innerHTML = `
        <button class="mobile-back-btn mobile-menu-btn" onclick="openMobileSidebar()">${MENU_ICON}</button>
        <h2>Search</h2>
      `;
      searchView.insertBefore(header, searchView.firstChild);
    }

    // Graph view header — hamburger
    const graphView = document.getElementById('graphView');
    const graphContainer = graphView.querySelector('.graph-container-wrapper');
    if (graphContainer && !graphContainer.querySelector('.mobile-header')) {
      const header = document.createElement('div');
      header.className = 'mobile-header';
      header.innerHTML = `
        <button class="mobile-back-btn mobile-menu-btn" onclick="openMobileSidebar()">${MENU_ICON}</button>
        <h2>Knowledge Graph</h2>
      `;
      graphContainer.insertBefore(header, graphContainer.firstChild);
    }

    // Whiteboard view header — hamburger
    const whiteboardView = document.getElementById('whiteboardView');
    if (whiteboardView && !whiteboardView.querySelector('.mobile-header')) {
      const header = document.createElement('div');
      header.className = 'mobile-header';
      header.style.cssText = 'position:relative;z-index:20;';
      header.innerHTML = `
        <button class="mobile-back-btn mobile-menu-btn" onclick="openMobileSidebar()">${MENU_ICON}</button>
        <h2>Whiteboard</h2>
      `;
      whiteboardView.insertBefore(header, whiteboardView.firstChild);
    }

    // Detail panel header — back button
    const detailPanel = document.getElementById('detailPanel');
    if (!detailPanel.querySelector('.mobile-header')) {
      const header = document.createElement('div');
      header.className = 'mobile-header';
      header.innerHTML = `
        <button class="mobile-back-btn" onclick="mobileBack('detail')">${BACK_ICON}</button>
        <h2>Moment Details</h2>
      `;
      detailPanel.insertBefore(header, detailPanel.firstChild);
    }

    // Graph detail panel header — back button
    const graphDetailPanel = document.getElementById('graphDetailPanel');
    if (!graphDetailPanel.querySelector('.mobile-header')) {
      const header = document.createElement('div');
      header.className = 'mobile-header';
      header.innerHTML = `
        <button class="mobile-back-btn" onclick="mobileBack('graphDetail')">${BACK_ICON}</button>
        <h2>Moment Details</h2>
      `;
      graphDetailPanel.insertBefore(header, graphDetailPanel.firstChild);
    }
  }
  
  function updateMobileViews() {
    if (window.innerWidth > 768) return;

    const timelineView = _els.timelineView;
    const captureView = _els.captureView;
    const searchView = _els.searchView;
    const graphView = _els.graphView;
    const whiteboardView = _els.whiteboardView;
    const markdownEditorView = _els.markdownEditorView;
    const codeEditorView = _els.codeEditorView;

    // Remove all visible classes first
    timelineView.classList.remove('visible');
    captureView.classList.remove('visible');
    searchView.classList.remove('visible');
    graphView.classList.remove('visible');
    if (whiteboardView) whiteboardView.classList.remove('visible');
    if (markdownEditorView) markdownEditorView.classList.remove('visible');
    if (codeEditorView) codeEditorView.classList.remove('visible');

    // Add visible class based on current view
    if (state.view === 'timeline') {
      timelineView.classList.add('visible');
      updateMobileTimelineTitle();
    } else if (state.view === 'capture') {
      captureView.classList.add('visible');
    } else if (state.view === 'search') {
      searchView.classList.add('visible');
    } else if (state.view === 'graph') {
      graphView.classList.add('visible');
    } else if (state.view === 'whiteboard') {
      if (whiteboardView) whiteboardView.classList.add('visible');
    } else if (state.view === 'editor') {
      if (markdownEditorView) markdownEditorView.classList.add('visible');
    } else if (state.view === 'code') {
      if (codeEditorView) codeEditorView.classList.add('visible');
    }

    // Update bottom nav active state
    if (!_cachedMobileNavItems) {
      _cachedMobileNavItems = Array.from(document.querySelectorAll('.mobile-nav-item[data-view]'));
    }
    _cachedMobileNavItems.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === state.view);
    });
  }
  
  function updateMobileTimelineTitle() {
    const titleEl = document.getElementById('mobileTimelineTitle');
    if (!titleEl) return;
    
    if (state.selectedThread === 'unthreaded') {
      titleEl.textContent = 'Unthreaded Moments';
    } else if (state.selectedThread) {
      const thread = state.threads.find(t => t.id === state.selectedThread);
      titleEl.textContent = thread ? thread.name : 'Timeline';
    } else if (state.filterType === 'all') {
      titleEl.textContent = 'All Moments';
    } else {
      titleEl.textContent = MOMENT_TYPES[state.filterType]?.label || 'Timeline';
    }
  }
  
function renderMobileCaptureButton() {
  if (window.innerWidth > 768) return;
  
  // Only add capture button to TIMELINE (not sidebar)
  const timelineView = document.getElementById('timelineView');
  if (!timelineView) return;
  
  // Remove existing timeline button if present
  const existingTimelineBtn = timelineView.querySelector('.mobile-capture-btn-container');
  if (existingTimelineBtn) {
    existingTimelineBtn.remove();
  }
  
  // Create fixed container for the button
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'mobile-capture-btn-container';
  
  const timelineCaptureBtn = document.createElement('button');
  timelineCaptureBtn.className = 'mobile-capture-btn';
  timelineCaptureBtn.innerHTML = `
    <svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
    Capture Moment
  `;
  timelineCaptureBtn.onclick = () => {
    state.view = 'capture';
    state.editingMoment = null;
    document.getElementById('submitCaptureBtn').innerHTML = '<svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Capture Moment';
    render();
  };
  
  buttonContainer.appendChild(timelineCaptureBtn);
  timelineView.appendChild(buttonContainer);
}
  
  window.mobileBack = function(from) {
    if (window.innerWidth > 768) return;

    if (from === 'detail' || from === 'graphDetail') {
      state.selectedMoment = null;
      document.getElementById('detailPanel').classList.remove('visible');
      document.getElementById('graphDetailPanel').classList.remove('visible');
      renderMoments();
    } else if (from === 'capture') {
      // Cancel capture and go back to timeline
      state.view = 'timeline';
      state.captureText = '';
      state.captureCharts = [];
      state.captureCodeBlocks = [];
      state.captureTables = [];
      state.captureAttachments = [];
      state.captureTags = [];
      state.capturePriority = null;
      state.editingMoment = null;
      document.getElementById('captureText').value = '';
      document.getElementById('chartPreview').innerHTML = '';
      document.getElementById('codePreview').innerHTML = '';
      document.getElementById('tablePreview').innerHTML = '';
      document.getElementById('attachmentsPreview').innerHTML = '';
      document.getElementById('templateFieldsContainer').innerHTML = '';
      document.getElementById('templateFields').style.display = 'none';
      document.getElementById('tagsInput').value = '';
      document.getElementById('tagsDisplay').innerHTML = '';
      document.querySelectorAll('.priority-btn').forEach(b => b.classList.remove('active', 'critical', 'follow-up', 'pinned'));
      render();
      updateMobileViews();
    }
  };

  window.openMobileSidebar = function() {
    if (window.innerWidth > 768) return;
    document.getElementById('appSidebar').classList.add('drawer-open');
    document.getElementById('sidebarBackdrop').classList.add('visible');
  };

  window.closeMobileSidebar = function() {
    document.getElementById('appSidebar').classList.remove('drawer-open');
    document.getElementById('sidebarBackdrop').classList.remove('visible');
  };

  window.mobileNavTo = function(view) {
    if (window.innerWidth > 768) return;
    closeMobileSidebar();
    state.view = view;
    if (view === 'capture') {
      state.editingMoment = null;
      const submitBtn = document.getElementById('submitCaptureBtn');
      if (submitBtn) submitBtn.innerHTML = '<svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Capture Moment';
    }
    render();
    updateMobileViews();
  };

  // ── Whiteboard ──────────────────────────────────────────────────────────────

  const wb = {
    scale: 1, panX: 0, panY: 0,
    isPanning: false, panStartX: 0, panStartY: 0,
    linkMode: false, linkSourceId: null,
    eventsSetup: false,
    topZ: 10
  };

  function wbBringToFront(tile, el) {
    wb.topZ++;
    tile.zIndex = wb.topZ;
    el.style.zIndex = wb.topZ;
  }

  function wbVisibleCenter() {
    const outer = _els.wbCanvasOuter;
    const r = outer ? outer.getBoundingClientRect() : { width: 800, height: 600 };
    return {
      x: Math.max(20, (r.width  / 2 - wb.panX) / wb.scale - 110),
      y: Math.max(20, (r.height / 2 - wb.panY) / wb.scale - 60)
    };
  }

  function wbIsUrl(text) {
    return /^https?:\/\/\S+$/.test(text.trim()) || /^www\.\S+\.\S+$/.test(text.trim());
  }

  function wbIsCode(text) {
    if (!text.includes('\n')) return false;
    const lines = text.split('\n');
    const indented = lines.filter(l => /^[ \t]{2,}/.test(l)).length;
    const codeChars = (text.match(/[{}();=><]/g) || []).length;
    return indented >= 2 || codeChars >= 6;
  }

  function renderWhiteboard() {
    setupWhiteboardEvents();
    const canvas = _els.wbCanvas;
    const svg = _els.wbLinksSvg;
    if (!canvas || !svg) return;

    // Sync topZ so new bring-to-fronts are always above existing tiles
    if (state.whiteboardTiles.length) {
      wb.topZ = state.whiteboardTiles.reduce((max, t) => Math.max(max, t.zIndex || 1), wb.topZ);
    }

    canvas.style.transform = `translate(${wb.panX}px,${wb.panY}px) scale(${wb.scale})`;

    // Remove old tiles
    canvas.querySelectorAll('.wb-tile').forEach(el => el.remove());

    // Build SVG defs (arrowhead marker)
    svg.innerHTML = `<defs>
      <marker id="wb-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="var(--accent-primary)" opacity="0.7"/>
      </marker>
    </defs>`;

    // Build tile lookup Map for O(1) link rendering
    const tileMap = new Map(state.whiteboardTiles.map(t => [t.id, t]));

    // Draw links
    state.whiteboardLinks.forEach(link => {
      const from = tileMap.get(link.fromTileId);
      const to   = tileMap.get(link.toTileId);
      if (!from || !to) return;
      const x1 = from.x + (from.width || 200) / 2;
      const y1 = from.y + (from.height || 120) / 2;
      const x2 = to.x   + (to.width   || 200) / 2;
      const y2 = to.y   + (to.height  || 120) / 2;
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', x1); line.setAttribute('y1', y1);
      line.setAttribute('x2', x2); line.setAttribute('y2', y2);
      line.setAttribute('class', 'wb-link-line');
      line.setAttribute('marker-end', 'url(#wb-arrow)');
      line.style.pointerEvents = 'stroke';
      line.addEventListener('contextmenu', e => {
        e.preventDefault();
        state.whiteboardLinks = state.whiteboardLinks.filter(l => l.id !== link.id);
        saveData(); renderWhiteboard();
      });
      svg.appendChild(line);
      if (link.label) {
        const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        txt.setAttribute('x', (x1 + x2) / 2);
        txt.setAttribute('y', (y1 + y2) / 2 - 5);
        txt.setAttribute('text-anchor', 'middle');
        txt.setAttribute('font-size', '11');
        txt.setAttribute('fill', 'var(--text-muted)');
        txt.textContent = link.label;
        svg.appendChild(txt);
      }
    });

    // Render tiles
    state.whiteboardTiles.forEach(tile => canvas.appendChild(createWbTile(tile)));

    if (_els.wbZoomLabel) _els.wbZoomLabel.textContent = Math.round(wb.scale * 100) + '%';
  }

  function wbRedrawLinks() {
    const svg = _els.wbLinksSvg;
    if (!svg) return;
    svg.querySelectorAll('line, text').forEach(el => el.remove());
    const tileMap = new Map(state.whiteboardTiles.map(t => [t.id, t]));
    state.whiteboardLinks.forEach(link => {
      const from = tileMap.get(link.fromTileId);
      const to   = tileMap.get(link.toTileId);
      if (!from || !to) return;
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', from.x + (from.width || 200) / 2);
      line.setAttribute('y1', from.y + (from.height || 120) / 2);
      line.setAttribute('x2', to.x   + (to.width   || 200) / 2);
      line.setAttribute('y2', to.y   + (to.height  || 120) / 2);
      line.setAttribute('class', 'wb-link-line');
      line.setAttribute('marker-end', 'url(#wb-arrow)');
      svg.appendChild(line);
    });
  }

  function createWbTile(tile) {
    const el = document.createElement('div');
    el.className = 'wb-tile';
    el.id = 'wbt-' + tile.id;
    el.style.left    = tile.x + 'px';
    el.style.top     = tile.y + 'px';
    el.style.width   = (tile.width  || 200) + 'px';
    el.style.zIndex  = tile.zIndex || 1;
    if (tile.height) el.style.height = tile.height + 'px';

    // Bring to front on any click/mousedown
    el.addEventListener('mousedown', () => wbBringToFront(tile, el), true);

    // Header
    const header = document.createElement('div');
    header.className = 'wb-tile-header';
    const badge = document.createElement('span');
    badge.className = 'wb-tile-type-badge';
    badge.textContent = (tile.type === 'code' && tile.language) ? tile.language : tile.type;
    const label = document.createElement('span');
    label.style.cssText = 'flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:4px';
    label.textContent = tile.title || '';
    const closeBtn = document.createElement('button');
    closeBtn.className = 'wb-tile-close';
    closeBtn.textContent = '×';
    closeBtn.title = 'Remove tile';
    closeBtn.addEventListener('click', e => {
      e.stopPropagation();
      state.whiteboardTiles = state.whiteboardTiles.filter(t => t.id !== tile.id);
      state.whiteboardLinks = state.whiteboardLinks.filter(l =>
        l.fromTileId !== tile.id && l.toTileId !== tile.id);
      saveData(); renderWhiteboard();
    });
    header.appendChild(badge);
    header.appendChild(label);
    header.appendChild(closeBtn);
    el.appendChild(header);

    // Body
    const body = document.createElement('div');
    body.className = 'wb-tile-body';

    if (tile.type === 'text') {
      const ta = document.createElement('textarea');
      ta.value = tile.content || '';
      ta.placeholder = 'Type a note…';
      ta.addEventListener('mousedown', e => e.stopPropagation());
      ta.addEventListener('input', () => { tile.content = ta.value; saveData(); });
      body.appendChild(ta);

    } else if (tile.type === 'code') {
      const lang = tile.language || 'javascript';

      const pre = document.createElement('pre');
      pre.style.cssText = 'margin:0;padding:4px;font-size:11px;font-family:monospace;overflow:auto;height:100%;box-sizing:border-box;white-space:pre-wrap;word-break:break-all;cursor:text;min-height:60px';
      pre.innerHTML = highlightCode(tile.content || '', lang);
      pre.title = 'Double-click to edit';

      const showHighlighted = () => {
        pre.innerHTML = highlightCode(tile.content || '', lang);
        pre.style.display = '';
        ta.style.display = 'none';
      };

      const ta = document.createElement('textarea');
      ta.style.cssText = 'display:none;width:100%;height:100%;min-height:60px;background:transparent;border:none;color:var(--text-primary);font-size:11px;font-family:monospace;resize:none;outline:none;box-sizing:border-box;padding:4px';
      ta.spellcheck = false;
      ta.value = tile.content || '';
      ta.addEventListener('mousedown', e => e.stopPropagation());
      ta.addEventListener('input', () => { tile.content = ta.value; saveData(); });
      ta.addEventListener('blur', showHighlighted);

      pre.addEventListener('mousedown', e => e.stopPropagation());
      pre.addEventListener('dblclick', () => {
        ta.value = tile.content || '';
        pre.style.display = 'none';
        ta.style.display = '';
        ta.focus();
      });

      body.appendChild(pre);
      body.appendChild(ta);

    } else if (tile.type === 'link') {
      const url = (tile.content || '').trim();
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.style.cssText = 'color:var(--accent-primary);font-size:12px;word-break:break-all;display:block;text-decoration:none;';
      a.textContent = url;
      a.addEventListener('mousedown', e => e.stopPropagation());
      const domain = document.createElement('div');
      domain.style.cssText = 'font-size:10px;color:var(--text-muted);margin-top:4px';
      try { domain.textContent = new URL(url).hostname; } catch { domain.textContent = ''; }
      body.appendChild(a);
      body.appendChild(domain);

    } else if (tile.type === 'image') {
      if (tile.content) {
        const img = document.createElement('img');
        img.src = tile.content;
        body.appendChild(img);
      } else {
        const hint = document.createElement('div');
        hint.style.cssText = 'color:var(--text-muted);font-size:11px;padding:8px';
        hint.textContent = 'No image';
        body.appendChild(hint);
      }

    } else if (tile.type === 'moment') {
      const m = tile.momentId ? state.moments.find(x => x.id === tile.momentId) : null;
      if (m) {
        const typeRow = document.createElement('div');
        typeRow.className = 'wb-tile-moment-type';
        typeRow.textContent = (MOMENT_TYPES && MOMENT_TYPES[m.type]) ? (MOMENT_TYPES[m.type].label || m.type) : m.type;
        const textRow = document.createElement('div');
        textRow.className = 'wb-tile-moment-text';
        textRow.textContent = m.text.substring(0, 200) + (m.text.length > 200 ? '…' : '');
        const openLink = document.createElement('div');
        openLink.className = 'wb-tile-moment-open';
        openLink.textContent = 'Open in timeline →';
        openLink.addEventListener('click', e => {
          e.stopPropagation();
          state.selectedMoment = m;
          state.view = 'timeline';
          render();
        });
        body.appendChild(typeRow);
        body.appendChild(textRow);
        body.appendChild(openLink);
      } else {
        body.textContent = 'Moment not found';
        body.style.color = 'var(--text-muted)';
      }
    }

    el.appendChild(body);

    // Resize handle
    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'wb-tile-resize';
    resizeHandle.title = 'Resize';
    resizeHandle.innerHTML = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 2L2 10M6 2L2 6M10 6L6 10"/></svg>';
    el.appendChild(resizeHandle);

    // Drag tile via header (mouse)
    header.addEventListener('mousedown', e => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      if (wb.linkMode) return;
      const sx = e.clientX, sy = e.clientY;
      const ox = tile.x,    oy = tile.y;
      const onMove = e => {
        tile.x = ox + (e.clientX - sx) / wb.scale;
        tile.y = oy + (e.clientY - sy) / wb.scale;
        el.style.left = tile.x + 'px';
        el.style.top  = tile.y + 'px';
        wbRedrawLinks();
      };
      const onUp = () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);
        saveData();
      };
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    });

    // Drag tile via header (touch)
    header.addEventListener('touchstart', e => {
      if (wb.linkMode) return;
      wbBringToFront(tile, el);
      const t0 = e.touches[0];
      const sx = t0.clientX, sy = t0.clientY;
      const ox = tile.x, oy = tile.y;
      const onMove = ev => {
        ev.preventDefault();
        const t = ev.touches[0];
        tile.x = ox + (t.clientX - sx) / wb.scale;
        tile.y = oy + (t.clientY - sy) / wb.scale;
        el.style.left = tile.x + 'px';
        el.style.top  = tile.y + 'px';
        wbRedrawLinks();
      };
      const onEnd = () => {
        window.removeEventListener('touchmove', onMove);
        window.removeEventListener('touchend', onEnd);
        saveData();
      };
      window.addEventListener('touchmove', onMove, { passive: false });
      window.addEventListener('touchend', onEnd);
    }, { passive: true });

    // Resize via handle (mouse)
    resizeHandle.addEventListener('mousedown', e => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      const sx = e.clientX, sy = e.clientY;
      const ow = tile.width || 200, oh = tile.height || 120;
      const onMove = e => {
        tile.width  = Math.max(140, ow + (e.clientX - sx) / wb.scale);
        tile.height = Math.max(80,  oh + (e.clientY - sy) / wb.scale);
        el.style.width  = tile.width  + 'px';
        el.style.height = tile.height + 'px';
        wbRedrawLinks();
      };
      const onUp = () => {
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);
        saveData();
      };
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
    });

    // Resize via handle (touch)
    resizeHandle.addEventListener('touchstart', e => {
      const t0 = e.touches[0];
      const sx = t0.clientX, sy = t0.clientY;
      const ow = tile.width || 200, oh = tile.height || 120;
      const onMove = ev => {
        ev.preventDefault();
        const t = ev.touches[0];
        tile.width  = Math.max(140, ow + (t.clientX - sx) / wb.scale);
        tile.height = Math.max(80,  oh + (t.clientY - sy) / wb.scale);
        el.style.width  = tile.width  + 'px';
        el.style.height = tile.height + 'px';
        wbRedrawLinks();
      };
      const onEnd = () => {
        window.removeEventListener('touchmove', onMove);
        window.removeEventListener('touchend', onEnd);
        saveData();
      };
      window.addEventListener('touchmove', onMove, { passive: false });
      window.addEventListener('touchend', onEnd);
    }, { passive: true });

    // Click tile for link mode
    el.addEventListener('click', e => {
      if (!wb.linkMode) return;
      e.stopPropagation();
      if (!wb.linkSourceId) {
        wb.linkSourceId = tile.id;
        el.classList.add('link-source');
      } else if (wb.linkSourceId !== tile.id) {
        // Avoid duplicate links
        const exists = state.whiteboardLinks.some(l =>
          l.fromTileId === wb.linkSourceId && l.toTileId === tile.id);
        if (!exists) {
          state.whiteboardLinks.push({ id: generateId(), fromTileId: wb.linkSourceId, toTileId: tile.id, label: '' });
          wb.linkMode = false;
          wb.linkSourceId = null;
          document.getElementById('wbLinkMode')?.classList.remove('active');
          saveData(); renderWhiteboard();
        }
      }
    });

    return el;
  }

  function showWbMomentPicker() {
    const existing = document.getElementById('wbMomentPicker');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.className = 'wb-moment-picker';
    overlay.id = 'wbMomentPicker';

    const inner = document.createElement('div');
    inner.className = 'wb-moment-picker-inner';

    const title = document.createElement('h3');
    title.style.cssText = 'margin:0;font-size:14px';
    title.textContent = 'Add a Moment to Whiteboard';

    const search = document.createElement('input');
    search.className = 'form-input';
    search.placeholder = 'Search moments…';
    search.style.width = '100%';

    const list = document.createElement('div');
    list.className = 'wb-moment-list';

    const actions = document.createElement('div');
    actions.style.cssText = 'display:flex;justify-content:flex-end';
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'btn-secondary';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.style.margin = '0';
    cancelBtn.addEventListener('click', () => overlay.remove());
    actions.appendChild(cancelBtn);

    inner.appendChild(title);
    inner.appendChild(search);
    inner.appendChild(list);
    inner.appendChild(actions);
    overlay.appendChild(inner);
    document.body.appendChild(overlay);

    const renderList = query => {
      list.innerHTML = '';
      const q = (query || '').toLowerCase();
      const filtered = state.moments.filter(m =>
        !q || m.text.toLowerCase().includes(q) || (m.tags || []).some(t => t.toLowerCase().includes(q))
      ).slice(0, 40);
      if (!filtered.length) {
        list.innerHTML = '<div style="color:var(--text-muted);font-size:12px;padding:8px">No moments found</div>';
        return;
      }
      filtered.forEach(m => {
        const item = document.createElement('div');
        item.className = 'wb-moment-pick-item';
        item.innerHTML = `<div style="font-size:10px;color:var(--text-muted);margin-bottom:3px;text-transform:uppercase;letter-spacing:0.4px">${m.type}</div>
          <div>${(m.text || '').substring(0, 120)}${m.text.length > 120 ? '…' : ''}</div>`;
        item.addEventListener('click', () => {
          const tile = {
            id: generateId(), type: 'moment', momentId: m.id,
            x: Math.max(20, 200 - wb.panX / wb.scale),
            y: Math.max(20, 100 - wb.panY / wb.scale),
            width: 260, height: 140,
            title: (m.text || '').substring(0, 32)
          };
          state.whiteboardTiles.push(tile);
          saveData(); renderWhiteboard();
          overlay.remove();
        });
        list.appendChild(item);
      });
    };

    renderList('');
    search.addEventListener('input', e => renderList(e.target.value));
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
    setTimeout(() => search.focus(), 50);
  }

  const WB_CODE_LANGS = [
    'javascript','python','sql','bash','html','css','json','yaml',
    'java','cpp','csharp','go','rust','typescript','php','ruby','swift','kotlin'
  ];

  function showWbCodeLangPicker(code, pos) {
    const existing = document.getElementById('wbCodeLangPicker');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'wbCodeLangPicker';
    overlay.style.cssText = `position:fixed;inset:0;z-index:1200;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,0.5)`;

    const box = document.createElement('div');
    box.style.cssText = `background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:10px;padding:20px;width:280px;display:flex;flex-direction:column;gap:14px`;

    const title = document.createElement('div');
    title.style.cssText = 'font-size:13px;font-weight:600;color:var(--text-primary)';
    title.textContent = 'Select code language';

    const select = document.createElement('select');
    select.style.cssText = `width:100%;padding:8px 10px;background:var(--bg-tertiary);border:1px solid var(--border-color);border-radius:6px;color:var(--text-primary);font-size:13px;cursor:pointer`;
    WB_CODE_LANGS.forEach(lang => {
      const opt = document.createElement('option');
      opt.value = lang;
      opt.textContent = lang.charAt(0).toUpperCase() + lang.slice(1);
      select.appendChild(opt);
    });

    const btns = document.createElement('div');
    btns.style.cssText = 'display:flex;gap:8px;justify-content:flex-end';

    const cancel = document.createElement('button');
    cancel.className = 'btn-secondary';
    cancel.style.margin = '0';
    cancel.textContent = 'Cancel';
    cancel.addEventListener('click', () => overlay.remove());

    const confirm = document.createElement('button');
    confirm.className = 'btn-primary';
    confirm.style.cssText = 'margin:0;flex:1';
    confirm.textContent = 'Add Code Tile';
    confirm.addEventListener('click', () => {
      const lang = select.value;
      const c = pos || wbVisibleCenter();
      const tile = { id: generateId(), type: 'code', title: lang, language: lang,
        x: c.x, y: c.y, width: 340, height: 200, content: code || '' };
      state.whiteboardTiles.push(tile);
      saveData(); renderWhiteboard();
      overlay.remove();
    });

    btns.appendChild(cancel);
    btns.appendChild(confirm);
    box.appendChild(title);
    box.appendChild(select);
    box.appendChild(btns);
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
    setTimeout(() => select.focus(), 50);
  }

  function setupWhiteboardEvents() {
    if (wb.eventsSetup) return;
    wb.eventsSetup = true;

    const outer = _els.wbCanvasOuter;
    const canvas = _els.wbCanvas;
    if (!outer || !canvas) return;

    // Pan: middle-mouse or space+drag
    let spaceDown = false;
    document.addEventListener('keydown', e => { if (e.code === 'Space' && state.view === 'whiteboard') { e.preventDefault(); spaceDown = true; } });
    document.addEventListener('keyup',   e => { if (e.code === 'Space') spaceDown = false; });

    outer.addEventListener('mousedown', e => {
      if (e.button === 1 || (e.button === 0 && spaceDown)) {
        e.preventDefault();
        wb.isPanning = true;
        wb.panStartX = e.clientX - wb.panX;
        wb.panStartY = e.clientY - wb.panY;
        outer.classList.add('panning');
      }
    });
    window.addEventListener('mousemove', e => {
      if (!wb.isPanning) return;
      wb.panX = e.clientX - wb.panStartX;
      wb.panY = e.clientY - wb.panStartY;
      canvas.style.transform = `translate(${wb.panX}px,${wb.panY}px) scale(${wb.scale})`;
    });
    window.addEventListener('mouseup', () => {
      if (wb.isPanning) { wb.isPanning = false; outer.classList.remove('panning'); }
    });

    // Touch support: pan with single finger, pinch-zoom with two fingers
    let wbTouchState = { touches: 0, lastX: 0, lastY: 0, lastDist: 0 };
    outer.addEventListener('touchstart', e => {
      wbTouchState.touches = e.touches.length;
      if (e.touches.length === 1) {
        wbTouchState.lastX = e.touches[0].clientX;
        wbTouchState.lastY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        wbTouchState.lastX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        wbTouchState.lastY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        wbTouchState.lastDist = Math.hypot(
          e.touches[1].clientX - e.touches[0].clientX,
          e.touches[1].clientY - e.touches[0].clientY
        );
      }
    }, { passive: true });
    outer.addEventListener('touchmove', e => {
      e.preventDefault();
      if (e.touches.length === 1) {
        const dx = e.touches[0].clientX - wbTouchState.lastX;
        const dy = e.touches[0].clientY - wbTouchState.lastY;
        wb.panX += dx;
        wb.panY += dy;
        wbTouchState.lastX = e.touches[0].clientX;
        wbTouchState.lastY = e.touches[0].clientY;
        canvas.style.transform = `translate(${wb.panX}px,${wb.panY}px) scale(${wb.scale})`;
      } else if (e.touches.length === 2) {
        const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        const dist = Math.hypot(
          e.touches[1].clientX - e.touches[0].clientX,
          e.touches[1].clientY - e.touches[0].clientY
        );
        const factor = dist / (wbTouchState.lastDist || dist);
        const newScale = Math.min(3, Math.max(0.15, wb.scale * factor));
        const rect = outer.getBoundingClientRect();
        const mx = cx - rect.left;
        const my = cy - rect.top;
        wb.panX = mx - (mx - wb.panX) * (newScale / wb.scale);
        wb.panY = my - (my - wb.panY) * (newScale / wb.scale);
        wb.scale = newScale;
        // Also pan
        wb.panX += cx - wbTouchState.lastX;
        wb.panY += cy - wbTouchState.lastY;
        wbTouchState.lastX = cx;
        wbTouchState.lastY = cy;
        wbTouchState.lastDist = dist;
        canvas.style.transform = `translate(${wb.panX}px,${wb.panY}px) scale(${wb.scale})`;
        if (_els.wbZoomLabel) _els.wbZoomLabel.textContent = Math.round(wb.scale * 100) + '%';
      }
    }, { passive: false });

    // Wheel zoom (centred on cursor)
    outer.addEventListener('wheel', e => {
      e.preventDefault();
      const rect = outer.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.1 : 0.9;
      const newScale = Math.min(3, Math.max(0.15, wb.scale * factor));
      wb.panX = mx - (mx - wb.panX) * (newScale / wb.scale);
      wb.panY = my - (my - wb.panY) * (newScale / wb.scale);
      wb.scale = newScale;
      canvas.style.transform = `translate(${wb.panX}px,${wb.panY}px) scale(${wb.scale})`;
      const lbl = document.getElementById('wbZoomLabel');
      if (lbl) lbl.textContent = Math.round(wb.scale * 100) + '%';
    }, { passive: false });

    // Toolbar: Text
    document.getElementById('wbAddText')?.addEventListener('click', () => {
      const tile = { id: generateId(), type: 'text', title: 'Note',
        x: Math.max(20, 60 - wb.panX / wb.scale), y: Math.max(20, 60 - wb.panY / wb.scale),
        width: 220, height: 130, content: '' };
      state.whiteboardTiles.push(tile);
      saveData(); renderWhiteboard();
    });

    // Toolbar: Code
    document.getElementById('wbAddCode')?.addEventListener('click', () => {
      showWbCodeLangPicker('', null);
    });

    // Toolbar: Image
    document.getElementById('wbAddImage')?.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
          const tile = { id: generateId(), type: 'image', title: file.name,
            x: Math.max(20, 100 - wb.panX / wb.scale), y: Math.max(20, 100 - wb.panY / wb.scale),
            width: 280, height: 200, content: ev.target.result };
          state.whiteboardTiles.push(tile);
          saveData(); renderWhiteboard();
        };
        reader.readAsDataURL(file);
      };
      input.click();
    });

    // Toolbar: Moment picker
    document.getElementById('wbAddMoment')?.addEventListener('click', showWbMomentPicker);

    // Toolbar: Link mode toggle
    document.getElementById('wbLinkMode')?.addEventListener('click', () => {
      wb.linkMode = !wb.linkMode;
      wb.linkSourceId = null;
      document.getElementById('wbLinkMode').classList.toggle('active', wb.linkMode);
      document.querySelectorAll('.wb-tile.link-source').forEach(el => el.classList.remove('link-source'));
    });

    // Toolbar: Clear
    document.getElementById('wbClearCanvas')?.addEventListener('click', () => {
      if (!confirm('Clear all whiteboard tiles and links?')) return;
      state.whiteboardTiles = [];
      state.whiteboardLinks = [];
      saveData(); renderWhiteboard();
    });

    // Zoom buttons
    document.getElementById('wbZoomIn')?.addEventListener('click', () => {
      wb.scale = Math.min(3, wb.scale * 1.2);
      if (canvas) canvas.style.transform = `translate(${wb.panX}px,${wb.panY}px) scale(${wb.scale})`;
      const lbl = document.getElementById('wbZoomLabel');
      if (lbl) lbl.textContent = Math.round(wb.scale * 100) + '%';
    });
    document.getElementById('wbZoomOut')?.addEventListener('click', () => {
      wb.scale = Math.max(0.15, wb.scale / 1.2);
      if (canvas) canvas.style.transform = `translate(${wb.panX}px,${wb.panY}px) scale(${wb.scale})`;
      const lbl = document.getElementById('wbZoomLabel');
      if (lbl) lbl.textContent = Math.round(wb.scale * 100) + '%';
    });
    document.getElementById('wbZoomReset')?.addEventListener('click', () => {
      wb.scale = 1; wb.panX = 0; wb.panY = 0;
      if (canvas) canvas.style.transform = 'translate(0px,0px) scale(1)';
      const lbl = document.getElementById('wbZoomLabel');
      if (lbl) lbl.textContent = '100%';
    });

    // Smart paste: image, URL, code, or plain text
    document.addEventListener('paste', e => {
      if (state.view !== 'whiteboard') return;
      // Don't intercept paste while editing a tile's textarea/pre
      const tag = document.activeElement?.tagName;
      if (tag === 'TEXTAREA' || document.activeElement?.contentEditable === 'true') return;

      const items = e.clipboardData?.items;
      if (!items) return;

      // 1. Image
      for (const item of items) {
        if (item.type.startsWith('image/')) {
          e.preventDefault();
          const blob = item.getAsFile();
          const reader = new FileReader();
          reader.onload = ev => {
            const c = wbVisibleCenter();
            const tile = { id: generateId(), type: 'image', title: 'Pasted Image',
              x: c.x, y: c.y, width: 280, height: 200, content: ev.target.result };
            state.whiteboardTiles.push(tile);
            saveData(); renderWhiteboard();
          };
          reader.readAsDataURL(blob);
          return;
        }
      }

      // 2. Text — detect URL / code / plain
      const textItem = [...items].find(i => i.type === 'text/plain');
      if (!textItem) return;
      e.preventDefault();
      textItem.getAsString(text => {
        if (!text.trim()) return;
        const c = wbVisibleCenter();
        let tile;
        if (wbIsUrl(text)) {
          tile = { id: generateId(), type: 'link', title: text.trim().replace(/^https?:\/\//, '').split('/')[0],
            x: c.x, y: c.y, width: 280, height: 80, content: text.trim() };
        } else if (wbIsCode(text)) {
          showWbCodeLangPicker(text, c);
          return;
        } else {
          tile = { id: generateId(), type: 'text', title: 'Note',
            x: c.x, y: c.y, width: 240, height: 130, content: text };
          state.whiteboardTiles.push(tile);
          saveData(); renderWhiteboard();
        }
      });
    });
  }

  // ── End Whiteboard ───────────────────────────────────────────────────────────

  // Cached static DOM node lists — queried once, reused on every render()
  const _cachedNavItems = Array.from(document.querySelectorAll('.nav-item'));
  const _cachedFilterItems = Array.from(document.querySelectorAll('.filter-item'));

  // Cached persistent element references — getElementById called once at init
  const _els = {
    timelineView:          document.getElementById('timelineView'),
    captureView:           document.getElementById('captureView'),
    searchView:            document.getElementById('searchView'),
    graphView:             document.getElementById('graphView'),
    whiteboardView:        document.getElementById('whiteboardView'),
    markdownEditorView:    document.getElementById('markdownEditorView'),
    codeEditorView:        document.getElementById('codeEditorView'),
    detailPanel:           document.getElementById('detailPanel'),
    timelineTitle:         document.getElementById('timelineTitle'),
    threadBanner:          document.getElementById('threadBanner'),
    threadBannerText:      document.getElementById('threadBannerText'),
    threadBannerDeleteBtn: document.getElementById('threadBannerDeleteBtn'),
    unthreadedFilter:      document.getElementById('unthreadedFilter'),
    captureThreadIndicator:document.getElementById('captureThreadIndicator'),
    captureTitle:          document.getElementById('captureTitle'),
    captureSubtitle:       document.getElementById('captureSubtitle'),
    captureThreadSelect:   document.getElementById('captureThreadSelect'),
    threadList:            document.getElementById('threadList'),
    wbCanvasOuter:         document.getElementById('wbCanvasOuter'),
    wbCanvas:              document.getElementById('wbCanvas'),
    wbLinksSvg:            document.getElementById('wbLinksSvg'),
    wbZoomLabel:           document.getElementById('wbZoomLabel'),
    onThisDayBanner:       document.getElementById('onThisDayBanner'),
  };

  // Pre-cache count badge elements — queried once, reused in updateCounts()
  const _countEls = {
    all:         document.getElementById('count-all'),
    unthreaded:  document.getElementById('count-unthreaded'),
    types:       Object.fromEntries(Object.keys(MOMENT_TYPES).map(t => [t, document.getElementById(`count-${t}`)]))
  };

  function render() {
    const timelineView = _els.timelineView;
    const captureView = _els.captureView;
    const searchView = _els.searchView;
    const graphView = _els.graphView;
    const whiteboardView = _els.whiteboardView;
    const markdownEditorView = _els.markdownEditorView;
    const codeEditorView = _els.codeEditorView;

    if (timelineView) timelineView.classList.toggle('hidden', state.view !== 'timeline');
    if (captureView) captureView.classList.toggle('visible', state.view === 'capture');
    if (searchView) searchView.classList.toggle('visible', state.view === 'search');
    if (graphView) graphView.classList.toggle('visible', state.view === 'graph');
    if (whiteboardView) whiteboardView.classList.toggle('visible', state.view === 'whiteboard');
    if (markdownEditorView) markdownEditorView.classList.toggle('visible', state.view === 'editor');
    if (codeEditorView) codeEditorView.classList.toggle('visible', state.view === 'code');

    if (state.view === 'editor') mdInitView();
    if (state.view === 'code') ceInitView();

    if (state.view === 'graph') {
      renderGraph();
    }
    if (state.view === 'whiteboard') {
      renderWhiteboard();
    }
    
    if (state.view === 'capture') {
      const threadIndicator = _els.captureThreadIndicator;
      const captureTitle = _els.captureTitle;
      const captureSubtitle = _els.captureSubtitle;

      if (state.editingMoment) {
        if (captureTitle) captureTitle.textContent = 'Edit Moment';
        if (captureSubtitle) {
          const timestamp = new Date(state.editingMoment.timestamp).toLocaleString();
          captureSubtitle.textContent = `Original timestamp: ${timestamp}`;
        }
      } else {
        if (captureTitle) captureTitle.textContent = 'Capture a Moment';
        if (captureSubtitle) captureSubtitle.textContent = 'What are you thinking right now?';
      }

      if (state.selectedThread && !state.editingMoment && threadIndicator) {
        const thread = _threadMap.get(state.selectedThread) || state.threads.find(t => t.id === state.selectedThread);
        if (thread) {
          threadIndicator.classList.remove('hidden');
          threadIndicator.innerHTML = `<svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17h.01"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg> Adding to thread: <strong>${thread.name}</strong>`;
        } else if (threadIndicator) {
          threadIndicator.classList.add('hidden');
        }
      }

      const threadSelect = _els.captureThreadSelect;
      if (threadSelect) {
        threadSelect.innerHTML = '<option value="">No thread</option>';
        state.threads.forEach(thread => {
          const option = document.createElement('option');
          option.value = thread.id;
          option.textContent = thread.name;
          if (state.selectedThread === thread.id) {
            option.selected = true;
          }
          threadSelect.appendChild(option);
        });
      }
    }
    
    _cachedNavItems.forEach(item => item.classList.toggle('active', item.dataset.view === state.view));
    _cachedFilterItems.forEach(item => item.classList.toggle('active', item.dataset.filter === state.filterType));
    
    const titleEl = _els.timelineTitle;
    const threadBanner = _els.threadBanner;
    const threadBannerText = _els.threadBannerText;
    const threadBannerDeleteBtn = _els.threadBannerDeleteBtn;
    
    if (!state.filterType || (state.filterType !== 'all' && !MOMENT_TYPES[state.filterType])) {
      state.filterType = 'all';
    }
    
    if (state.selectedThread === 'unthreaded') {
      const unthreadedMoments = state.moments.filter(m => !m.threadId);
      
      if (titleEl) {
        if (state.filterType === 'all') {
          titleEl.textContent = `Unthreaded Moments (${unthreadedMoments.length})`;
        } else {
          const count = unthreadedMoments.filter(m => m.type === state.filterType).length;
          titleEl.textContent = `${MOMENT_TYPES[state.filterType].label} (${count})`;
        }
      }
      if (threadBanner) threadBanner.classList.remove('hidden');
      if (threadBannerText) threadBannerText.textContent = 'Viewing unthreaded moments';
      if (threadBannerDeleteBtn) threadBannerDeleteBtn.style.display = 'none';
    } else if (state.selectedThread) {
      const thread = state.threads.find(t => t.id === state.selectedThread);
      const threadMoments = state.moments.filter(m => m.threadId === state.selectedThread);
      
      if (titleEl) {
        if (state.filterType === 'all') {
          titleEl.textContent = `All Moments (${threadMoments.length})`;
        } else {
          const count = threadMoments.filter(m => m.type === state.filterType).length;
          titleEl.textContent = `${MOMENT_TYPES[state.filterType].label} (${count})`;
        }
      }
      if (thread) {
        if (threadBanner) threadBanner.classList.remove('hidden');
        if (threadBannerText) threadBannerText.textContent = `Viewing thread: ${thread.name}`;
        if (threadBannerDeleteBtn) threadBannerDeleteBtn.style.display = '';
      }
    } else {
      if (threadBanner) threadBanner.classList.add('hidden');
      
      if (titleEl) {
        if (state.filterType === 'all') {
          titleEl.textContent = `All Moments (${state.moments.length})`;
        } else {
          const count = state.moments.filter(m => m.type === state.filterType).length;
          titleEl.textContent = `${MOMENT_TYPES[state.filterType].label} (${count})`;
        }
      }
    }

    const unthreadedFilter = _els.unthreadedFilter;
    if (unthreadedFilter) {
      if (state.threads.length > 0) {
        unthreadedFilter.classList.remove('hidden');
        unthreadedFilter.classList.toggle('active', state.selectedThread === 'unthreaded');
      } else {
        unthreadedFilter.classList.add('hidden');
      }
    }

    // Only re-render the moment list when the timeline/search is actually visible
    if (state.view === 'timeline' || state.view === 'search') {
      renderMoments();
    }
    // Only re-render the detail panel when a moment is selected
    if (state.selectedMoment) {
      renderDetail();
    } else {
      if (_els.detailPanel) _els.detailPanel.classList.remove('visible');
    }
    renderThreads();
    updateCounts();
    
    // Mobile navigation updates
    if (window.innerWidth <= 768) {
      setupMobileNavigation();
    }
  }
  
  // Event Handlers
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      state.view = item.dataset.view;
      render();
      if (window.innerWidth <= 768) {
        closeMobileSidebar();
        updateMobileViews();
      }
    });
  });

  document.querySelectorAll('.filter-item').forEach(item => {
    item.addEventListener('click', () => {
      state.filterType = item.dataset.filter;
      if (window.innerWidth <= 768) {
        closeMobileSidebar();
        state.view = 'timeline';
      }
      render();
      if (window.innerWidth <= 768) updateMobileViews();
    });
  });
  
  document.getElementById('captureMomentBtn').addEventListener('click', () => {
    state.view = 'capture';
    state.editingMoment = null;
    document.getElementById('submitCaptureBtn').innerHTML = '<svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Capture Moment';
    if (window.innerWidth <= 768) closeMobileSidebar();
    render();
  });
  
  // Theme Toggle
  const themeNames = {
    'classic': 'NooS Classic',
    'ruby-noir': 'NooS Noir',
    'ruby-twilight': 'NooS Twilight',
    'ruby-forest': 'NooS Forest',
    'ruby-ocean': 'NooS Ocean',
    'ruby-ember': 'NooS Ember',
    'ruby-slate': 'NooS Slate',
    'ruby-midnight': 'NooS Midnight',
    'ruby-crimson': 'NooS Crimson',
    'ruby-cosmic': 'NooS Cosmic'
  };
  
  function loadTheme() {
    const savedTheme = localStorage.getItem('ruby-theme') || 'classic';
    applyTheme(savedTheme);
  }
  
  function applyTheme(theme) {
    if (theme === 'classic') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }

    document.querySelectorAll('.theme-option').forEach(option => {
      option.classList.toggle('active', option.dataset.theme === theme);
    });

    document.querySelectorAll('.theme-swatch').forEach(s => {
      s.classList.toggle('active', s.dataset.theme === theme);
    });

    localStorage.setItem('ruby-theme', theme);

    const indicator = document.getElementById('themeIndicator');
    if (indicator) {
      // defer so CSS var has updated
      requestAnimationFrame(() => {
        indicator.style.background = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim();
      });
    }
  }

  window.toggleThemePopover = function(e) {
    e.stopPropagation();
    const popover = document.getElementById('themePopover');
    const indicator = document.getElementById('themeIndicator');
    if (popover.classList.contains('visible')) {
      popover.classList.remove('visible');
    } else {
      const rect = indicator.getBoundingClientRect();
      popover.style.top  = (rect.bottom + 8) + 'px';
      popover.style.left = Math.max(8, rect.right - 180) + 'px';
      popover.classList.add('visible');
    }
  };

  window.closeThemePopover = function() {
    document.getElementById('themePopover').classList.remove('visible');
  };

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.theme-indicator-wrapper')) {
      closeThemePopover();
    }
  });

  window.selectThemeFromModal = function(el) {
    applyTheme(el.dataset.theme);
  };

  loadTheme();

  // ── 1. Collapsible sidebar sections ──
  window.toggleNavSection = function(section) {
    state.collapsedSections[section] = !state.collapsedSections[section];
    const h3 = document.querySelector(`.nav-section h3[data-section="${section}"]`);
    const body = document.getElementById(`nav-section-body-${section}`);
    if (h3) h3.classList.toggle('collapsed', !!state.collapsedSections[section]);
    if (body) body.classList.toggle('collapsed', !!state.collapsedSections[section]);
  };

  // ── 2. Resizable divider ──
  (function setupResizeHandle() {
    const handle = document.getElementById('timelineResizeHandle');
    const detailPanel = document.getElementById('detailPanel');
    if (!handle || !detailPanel) return;
    let dragging = false;
    let startX = 0;
    let startWidth = 0;

    handle.addEventListener('mousedown', (e) => {
      dragging = true;
      startX = e.clientX;
      startWidth = detailPanel.offsetWidth;
      handle.classList.add('dragging');
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      e.preventDefault();
    });

    let _resizeRaf = null;
    document.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      if (_resizeRaf) return;
      _resizeRaf = requestAnimationFrame(() => {
        _resizeRaf = null;
        const delta = startX - e.clientX;
        const newWidth = Math.min(800, Math.max(300, startWidth + delta));
        detailPanel.style.width = newWidth + 'px';
      });
    });

    document.addEventListener('mouseup', () => {
      if (!dragging) return;
      dragging = false;
      handle.classList.remove('dragging');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    });
  })();

  // ── 3. Sort order toggle ──
  window.toggleAiSearch = function() {
    const panel = document.getElementById('aiSearchPanel');
    const btn = document.getElementById('aiSearchToggleBtn');
    const open = panel.style.display === 'none';
    panel.style.display = open ? 'block' : 'none';
    btn.style.color = open ? 'var(--accent-primary)' : '';
    if (open) document.getElementById('searchInput').focus();
    if (!open) closeAiSearch();
  };

  window.closeAiSearch = function() {
    document.getElementById('aiSearchPanel').style.display = 'none';
    document.getElementById('aiSearchToggleBtn').style.color = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
    state.searchResults = [];
    renderMoments();
  };

  window.toggleSortOrder = function() {
    state.sortOrder = state.sortOrder === 'desc' ? 'asc' : 'desc';
    const label = document.getElementById('sortToggleLabel');
    if (label) label.textContent = state.sortOrder === 'desc' ? 'Newest First' : 'Oldest First';
    renderMoments();
  };

  // ── 4. Escape closes detail panel ──
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close detail panel
      if (state.selectedMoment) {
        state.selectedMoment = null;
        if (_selectedCardEl) { _selectedCardEl.classList.remove('selected'); _selectedCardEl = null; }
        renderDetail();
      }
    }
  });

  // ── 6. Inline filter functions ──
  let _filterTimer = null;
  window.onInlineFilterInput = function(value) {
    state.inlineFilter = value;
    const clearBtn = document.getElementById('inlineFilterClear');
    if (clearBtn) clearBtn.classList.toggle('visible', value.length > 0);
    clearTimeout(_filterTimer);
    _filterTimer = setTimeout(() => renderMoments(), 150);
  };

  window.clearInlineFilter = function() {
    state.inlineFilter = '';
    const input = document.getElementById('inlineFilterInput');
    if (input) input.value = '';
    const clearBtn = document.getElementById('inlineFilterClear');
    if (clearBtn) clearBtn.classList.remove('visible');
    renderMoments();
  };

  // (quick capture is handled by openQuickCapture / closeQuickCapture / submitQuickCapture above)
  
document.getElementById('newThreadBtn').addEventListener('click', () => {
  const name = prompt('Thread name:');
  if (!name) return;
  
  const newThread = {
    id: generateId(),
    name,
    created: Date.now(),
    momentIds: []
  };
  
  state.threads.unshift(newThread);
  saveData();
  render();
  
  // On mobile, stay on main screen (sidebar)
  if (window.innerWidth <= 768) {
    // Don't navigate anywhere - just update the thread list
    const timelineView = document.getElementById('timelineView');
    const captureView = document.getElementById('captureView');
    const searchView = document.getElementById('searchView');
    const graphView = document.getElementById('graphView');
    
    timelineView.classList.remove('visible');
    captureView.classList.remove('visible');
    searchView.classList.remove('visible');
    graphView.classList.remove('visible');
  }
});
  
  document.getElementById('unthreadedFilter').addEventListener('click', () => {
    state.selectedThread = state.selectedThread === 'unthreaded' ? null : 'unthreaded';
    saveSelectedThread();
    state.view = 'timeline';
    if (window.innerWidth <= 768) closeMobileSidebar();
    render();
    if (window.innerWidth <= 768) updateMobileViews();
  });
  
  document.querySelectorAll('.type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.captureType = btn.dataset.type;
      
      const config = MOMENT_TYPES[state.captureType];
      const placeholder = config.prompts[0] || "What's on your mind?";
      document.getElementById('captureText').placeholder = placeholder;
      
      renderTemplateFields(state.captureType);
    });
  });
  
  function renderTemplateFields(type) {
    const config = MOMENT_TYPES[type];
    const container = document.getElementById('templateFieldsContainer');
    const wrapper = document.getElementById('templateFields');
    
    if (!config.template || config.template.length === 0) {
      wrapper.style.display = 'none';
      container.innerHTML = '';
      return;
    }
    
    wrapper.style.display = 'block';
    container.innerHTML = '';
    
    config.template.forEach(field => {
      const fieldDiv = document.createElement('div');
      fieldDiv.className = 'template-field';
      
      const label = document.createElement('label');
      label.className = 'template-field-label';
      label.textContent = field.label;
      fieldDiv.appendChild(label);
      
      if (field.type === 'text') {
        const input = document.createElement('input');
        input.className = 'form-input';
        input.placeholder = field.placeholder || '';
        input.dataset.templateField = field.name;
        fieldDiv.appendChild(input);
      } else if (field.type === 'textarea') {
        const textarea = document.createElement('textarea');
        textarea.className = 'template-field-textarea';
        textarea.placeholder = field.placeholder || '';
        textarea.dataset.templateField = field.name;
        fieldDiv.appendChild(textarea);
      } else if (field.type === 'select') {
        const select = document.createElement('select');
        select.className = 'form-input';
        select.dataset.templateField = field.name;
        
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = 'Select...';
        select.appendChild(emptyOption);
        
        field.options.forEach(option => {
          const opt = document.createElement('option');
          opt.value = option;
          opt.textContent = option;
          select.appendChild(opt);
        });
        
        fieldDiv.appendChild(select);
      }
      container.appendChild(fieldDiv);
    });
  }
  
  
  document.getElementById('addChartBtn').addEventListener('click', () => {
    document.getElementById('chartModal').classList.add('visible');
    document.getElementById('modalChartType').value = 'line';
    document.getElementById('modalChartTitle').value = '';
    document.getElementById('modalChartData').value = '';
    document.getElementById('modalChartLabels').value = '';
  });
  
  document.getElementById('addCodeBtn').addEventListener('click', () => {
    document.getElementById('codeModal').classList.add('visible');
    document.getElementById('modalCodeLanguage').value = 'javascript';
    document.getElementById('modalCodeTitle').value = '';
    document.getElementById('modalCodeContent').value = '';
  });
  
  document.getElementById('addFileBtn').addEventListener('click', () => {
  });
  

  
  function renderAttachmentPreview(attachment) {
    const container = document.getElementById('attachmentsPreview');
    const item = document.createElement('div');
    item.className = 'attachment-item';
    item.dataset.attachmentId = attachment.id;
    
    if (attachment.isImage) {
      item.innerHTML = `
        <div class="attachment-preview">
          <img src="${attachment.data}" alt="${attachment.name}">
          <button class="attachment-remove" onclick="removeAttachment('${attachment.id}')">✕</button>
        </div>
      `;
    } else {
      item.innerHTML = `
        <div class="attachment-preview">
          <div class="attachment-file"><svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg></div>
          <button class="attachment-remove" onclick="removeAttachment('${attachment.id}')">✕</button>
        </div>
        <div style="font-size: 10px; color: var(--text-secondary); margin-top: 4px; max-width: 80px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${attachment.name}</div>
      `;
    }
    
    container.appendChild(item);
  }
  
  window.removeAttachment = function(attachmentId) {
    const index = state.captureAttachments.findIndex(a => a.id === attachmentId);
    if (index !== -1) {
      state.captureAttachments.splice(index, 1);
    }
    
    const element = document.querySelector(`[data-attachment-id="${attachmentId}"]`);
    if (element) {
      element.remove();
    }
  };
  
  // Tags functionality
  const AUTO_TAG_KEYWORDS = {
    'latency': ['latency', 'slow', 'performance', 'timeout', 'delay'],
    'ui': ['ui', 'ux', 'interface', 'design', 'layout', 'button', 'form'],
    'customer-impact': ['customer', 'user', 'client', 'production', 'outage', 'down'],
    'database': ['database', 'db', 'sql', 'query', 'postgres', 'mysql'],
    'api': ['api', 'endpoint', 'rest', 'graphql', 'request', 'response'],
    'security': ['security', 'auth', 'authentication', 'permission', 'vulnerability'],
    'performance': ['performance', 'optimization', 'cache', 'speed', 'memory'],
    'bug': ['bug', 'error', 'issue', 'broken', 'crash', 'fail']
  };
  
  function autoTagText(text) {
    const autoTags = [];
    const lowerText = text.toLowerCase();
    
    for (const [tag, keywords] of Object.entries(AUTO_TAG_KEYWORDS)) {
      for (const keyword of keywords) {
        if (lowerText.includes(keyword)) {
          autoTags.push(tag);
          break;
      }
    }
  }

    return [...new Set(autoTags)];
  }

  function renderTag(tag, isAuto = false) {
    const tagEl = document.createElement('span');
    tagEl.className = `moment-tag ${isAuto ? 'auto-tag' : ''}`;
    tagEl.innerHTML = `${isAuto ? '<svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg> ' : ''}#${tag} <span class="tag-remove" onclick="removeTag('${tag}')">✕</span>`;
    return tagEl;
  }
  
  window.removeTag = function(tag) {
    const index = state.captureTags.indexOf(tag);
    if (index !== -1) {
      state.captureTags.splice(index, 1);
      renderTagsDisplay();
    }
  };
  
  function renderTagsDisplay() {
    const container = document.getElementById('tagsDisplay');
    container.innerHTML = '';
    state.captureTags.forEach(tag => {
      container.appendChild(renderTag(tag));
    });
  }
  
  document.getElementById('tagsInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const input = e.target;
      let tag = input.value.trim().toLowerCase();
      
      if (!tag) return;
      
      // Remove # if user added it
      tag = tag.replace(/^#/, '');
      
      // Add tag if not already present
      if (tag && !state.captureTags.includes(tag)) {
        state.captureTags.push(tag);
        renderTagsDisplay();
      }
      input.value = '';
    }
  });
  
  // Auto-tag when text changes
  document.getElementById('captureText').addEventListener('input', (e) => {
    const text = e.target.value;
    const autoTags = autoTagText(text);
    
    // Add auto-tags that aren't already in the list
    autoTags.forEach(tag => {
      if (!state.captureTags.includes(tag)) {
        state.captureTags.push(tag);
      }
    });
    
    renderTagsDisplay();
  });
  
  // Priority selector
  document.querySelectorAll('.priority-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const priority = btn.dataset.priority;
      
      document.querySelectorAll('.priority-btn').forEach(b => {
        b.classList.remove('active', 'critical', 'follow-up', 'pinned');
      });
      
      if (priority !== 'none') {
        btn.classList.add('active', priority);
        state.capturePriority = priority;
      } else {
        state.capturePriority = null;
      }
    });
  });
  
  document.getElementById('captureThreadSelect').addEventListener('change', (e) => {
    const threadId = e.target.value;
    state.selectedThread = threadId || null;
    render();
  });
  
  document.getElementById('createThreadFromCaptureBtn').addEventListener('click', () => {
    const name = prompt('Thread name:');
    if (!name) return;
    
    const newThread = {
      id: generateId(),
      name,
      created: Date.now(),
      momentIds: []
    };
    
    state.threads.unshift(newThread);
    state.selectedThread = newThread.id;
    saveData();
    render();
  });
  
  document.getElementById('codeModalCancelBtn').addEventListener('click', () => {
    document.getElementById('codeModal').classList.remove('visible');
  });
  
  document.getElementById('codeModalAddBtn').addEventListener('click', () => {
    const language = document.getElementById('modalCodeLanguage').value;
    const title = document.getElementById('modalCodeTitle').value.trim();
    const code = document.getElementById('modalCodeContent').value.trim();
    
    if (!code) {
      alert('Please enter some code');
      return;
    }
    
    const codeId = `code-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    state.captureCodeBlocks.push({ language, code, title, id: codeId });
    
    const preview = document.getElementById('codePreview');
    preview.appendChild(createCodeBlock(language, code, title, codeId));
    
    document.getElementById('codeModal').classList.remove('visible');
  });
  
  window.editCodeBlock = function(codeId) {
    const codeIndex = state.captureCodeBlocks.findIndex(c => c.id === codeId);
    if (codeIndex === -1) return;
    
    const codeBlock = state.captureCodeBlocks[codeIndex];
    document.getElementById('modalCodeLanguage').value = codeBlock.language;
    document.getElementById('modalCodeTitle').value = codeBlock.title || '';
    document.getElementById('modalCodeContent').value = codeBlock.code;
    
    document.getElementById('codeModal').classList.add('visible');
    
    const codeElement = document.querySelector(`[data-code-id="${codeId}"]`);
    if (codeElement) {
      codeElement.remove();
    }
    state.captureCodeBlocks.splice(codeIndex, 1);
  };
  
  window.removeCodeBlock = function(codeId) {
    const codeIndex = state.captureCodeBlocks.findIndex(c => c.id === codeId);
    if (codeIndex !== -1) {
      state.captureCodeBlocks.splice(codeIndex, 1);
    }
    
    const codeElement = document.querySelector(`[data-code-id="${codeId}"]`);
    if (codeElement) {
      codeElement.remove();
    }
  };
  
  document.getElementById('addTableBtn').addEventListener('click', () => {
    document.getElementById('tableModal').classList.add('visible');
    document.getElementById('modalTableTitle').value = '';
    document.getElementById('modalTableContent').value = '';
  });
  
  document.getElementById('tableModalCancelBtn').addEventListener('click', () => {
    document.getElementById('tableModal').classList.remove('visible');
  });
  
  document.getElementById('tableModalAddBtn').addEventListener('click', () => {
    const title = document.getElementById('modalTableTitle').value.trim();
    const data = document.getElementById('modalTableContent').value.trim();
    
    if (!data) {
      alert('Please enter table data');
      return;
    }
    
    const tableId = `table-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    state.captureTables.push({ title, data, id: tableId });
    
    const preview = document.getElementById('tablePreview');
    preview.appendChild(createTable(title, data, tableId));
    
    document.getElementById('tableModal').classList.remove('visible');
  });
  
  window.editTable = function(tableId) {
    const tableIndex = state.captureTables.findIndex(t => t.id === tableId);
    if (tableIndex === -1) return;
    
    const table = state.captureTables[tableIndex];
    document.getElementById('modalTableTitle').value = table.title || '';
    document.getElementById('modalTableContent').value = table.data;
    
    document.getElementById('tableModal').classList.add('visible');
    
    const tableElement = document.querySelector(`[data-table-id="${tableId}"]`);
    if (tableElement) {
      tableElement.remove();
    }
    state.captureTables.splice(tableIndex, 1);
  };
  
  window.removeTable = function(tableId) {
    const tableIndex = state.captureTables.findIndex(t => t.id === tableId);
    if (tableIndex !== -1) {
      state.captureTables.splice(tableIndex, 1);
    }
    
    const tableElement = document.querySelector(`[data-table-id="${tableId}"]`);
    if (tableElement) {
      tableElement.remove();
    }
  };
  
  document.getElementById('modalCancelBtn').addEventListener('click', () => {
    document.getElementById('chartModal').classList.remove('visible');
  });
  
  document.getElementById('modalAddBtn').addEventListener('click', () => {
    const title = document.getElementById('modalChartTitle').value.trim();
    const dataStr = document.getElementById('modalChartData').value.trim();
    const labelsStr = document.getElementById('modalChartLabels').value.trim();
    const chartType = document.getElementById('modalChartType').value;
    
    if (!title || !dataStr) {
      alert('Please enter a chart title and data points');
      return;
    }
    
    const data = dataStr.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));
    if (data.length === 0) {
      alert('Please enter valid numeric data points');
      return;
    }
    
    const labels = labelsStr ? labelsStr.split(',').map(l => l.trim()) : null;
    
    const chartId = `chart-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    state.captureCharts.push({ title, data, labels, chartType, id: chartId });
    
    const preview = document.getElementById('chartPreview');
    const config = MOMENT_TYPES[state.captureType];
    preview.appendChild(createChart(title, data, config.color, labels, chartId, chartType));
    
    document.getElementById('chartModal').classList.remove('visible');
  });
  
  document.getElementById('confirmCancelBtn').addEventListener('click', hideConfirmModal);
  
  document.getElementById('confirmDeleteBtn').addEventListener('click', () => {
    if (confirmCallback) {
      confirmCallback();
    }
  });
  
  document.getElementById('chartModal').addEventListener('click', (e) => {
    if (e.target.id === 'chartModal') {
      document.getElementById('chartModal').classList.remove('visible');
    }
  });
  
  document.getElementById('codeModal').addEventListener('click', (e) => {
    if (e.target.id === 'codeModal') {
      document.getElementById('codeModal').classList.remove('visible');
    }
  });
  
  document.getElementById('tableModal').addEventListener('click', (e) => {
    if (e.target.id === 'tableModal') {
      document.getElementById('tableModal').classList.remove('visible');
    }
  });
  
  document.getElementById('confirmModal').addEventListener('click', (e) => {
    if (e.target.id === 'confirmModal') {
      hideConfirmModal();
    }
  });
  
  window.editChart = function(chartId) {
    const chartIndex = state.captureCharts.findIndex(c => c.id === chartId);
    if (chartIndex === -1) return;
    
    const chart = state.captureCharts[chartIndex];
    document.getElementById('modalChartTitle').value = chart.title || chart.type;
    document.getElementById('modalChartData').value = chart.data.join(', ');
    document.getElementById('modalChartLabels').value = chart.labels ? chart.labels.join(', ') : '';
    document.getElementById('modalChartType').value = chart.chartType || 'line';
    
    document.getElementById('chartModal').classList.add('visible');
    
    const chartElement = document.querySelector(`[data-chart-id="${chartId}"]`);
    if (chartElement) {
      chartElement.remove();
    }
    state.captureCharts.splice(chartIndex, 1);
  };
  
  window.removeChart = function(chartId) {
    const chartIndex = state.captureCharts.findIndex(c => c.id === chartId);
    if (chartIndex !== -1) {
      state.captureCharts.splice(chartIndex, 1);
    }
    
    const chartElement = document.querySelector(`[data-chart-id="${chartId}"]`);
    if (chartElement) {
      chartElement.remove();
    }
  };
  
  window.editMoment = function(momentId) {
    const moment = state.moments.find(m => m.id === momentId);
    if (!moment) return;
    
    state.editingMoment = moment;
    state.selectedThread = moment.threadId || null;
    
    state.captureType = moment.type;
    document.getElementById('captureText').value = moment.text;
    document.getElementById('contextService').value = moment.context.service || '';
    document.getElementById('contextEnvironment').value = moment.context.environment || 'production';
    document.getElementById('contextVersion').value = moment.context.version || '';
    
    document.querySelectorAll('.type-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.type === moment.type);
    });
    
    state.captureCharts = moment.charts ? structuredClone(moment.charts) : [];
    const chartPreview = document.getElementById('chartPreview');
    chartPreview.innerHTML = '';
    state.captureCharts.forEach(chart => {
      const config = MOMENT_TYPES[state.captureType];
      chartPreview.appendChild(createChart(
        chart.title || chart.type, 
        chart.data, 
        config.color, 
        chart.labels || null, 
        chart.id, 
        chart.chartType || 'line'
      ));
    });
    
    state.captureCodeBlocks = moment.codeBlocks ? structuredClone(moment.codeBlocks) : [];
    const codePreview = document.getElementById('codePreview');
    codePreview.innerHTML = '';
    state.captureCodeBlocks.forEach(codeBlock => {
      codePreview.appendChild(createCodeBlock(codeBlock.language, codeBlock.code, codeBlock.title || '', codeBlock.id));
    });
    
    state.captureTables = moment.tables ? structuredClone(moment.tables) : [];
    const tablePreview = document.getElementById('tablePreview');
    tablePreview.innerHTML = '';
    state.captureTables.forEach(table => {
      tablePreview.appendChild(createTable(table.title || '', table.data, table.id));
    });
    
    state.captureAttachments = moment.attachments ? structuredClone(moment.attachments) : [];
    const attachmentsPreview = document.getElementById('attachmentsPreview');
    attachmentsPreview.innerHTML = '';
    state.captureAttachments.forEach(attachment => {
      renderAttachmentPreview(attachment);
    });
    
    // Populate template fields
    renderTemplateFields(moment.type);
    if (moment.templateData) {
      setTimeout(() => {
        const container = document.getElementById('templateFieldsContainer');
        const inputs = container.querySelectorAll('[data-template-field]');
        inputs.forEach(input => {
          const fieldName = input.dataset.templateField;
          if (moment.templateData[fieldName]) {
            input.value = moment.templateData[fieldName];
          }
        });
      }, 100);
    }
    
    // Populate tags
    state.captureTags = moment.tags ? [...moment.tags] : [];
    renderTagsDisplay();
    
    // Populate priority
    state.capturePriority = moment.priority || null;
    document.querySelectorAll('.priority-btn').forEach(btn => {
      btn.classList.remove('active', 'critical', 'follow-up', 'pinned');
      if (moment.priority && btn.dataset.priority === moment.priority) {
        btn.classList.add('active', moment.priority);
      }
    });
    
    document.getElementById('submitCaptureBtn').innerHTML = '<svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg> Update Moment';
    state.view = 'capture';
    render();
  };
  
  window.clearThreadFilter = function() {
    state.selectedThread = null;
    render();
  };
  
  window.assignToThread = function(momentId, threadId) {
    const momentIndex = state.moments.findIndex(m => m.id === momentId);
    if (momentIndex === -1) return;
    
    if (threadId) {
      state.moments[momentIndex].threadId = threadId;
    } else {
      delete state.moments[momentIndex].threadId;
    }
    
    saveData();
    render();
  };
  
  window.removeFromThread = function(momentId) {
    const momentIndex = state.moments.findIndex(m => m.id === momentId);
    if (momentIndex === -1) return;
    
    delete state.moments[momentIndex].threadId;
    saveData();
    render();
  };
  
  let confirmCallback = null;
  
function showConfirmModal(title, message, icon, onConfirm) {
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmMessage').textContent = message;
  document.getElementById('confirmIcon').innerHTML = icon; // Change from textContent to innerHTML
  confirmCallback = onConfirm;
  document.getElementById('confirmModal').classList.add('visible');
}
  
  function hideConfirmModal() {
    document.getElementById('confirmModal').classList.remove('visible');
    confirmCallback = null;
  }
  
  window.togglePinToTop = function(momentId) {
    const moment = state.moments.find(m => m.id === momentId);
    if (!moment) return;
    moment.pinnedToTop = !moment.pinnedToTop;
    saveData();
    renderMoments();
    if (state.selectedMoment?.id === momentId) {
      state.selectedMoment = moment;
      invalidateDetail();
      renderDetail();
    }
  };

  window.confirmDeleteMoment = function(momentId) {
    const moment = state.moments.find(m => m.id === momentId);
    if (!moment) return;
    
    const config = MOMENT_TYPES[moment.type];
    showConfirmModal(
      'Delete Moment?',
      `Are you sure you want to delete this ${config.label.toLowerCase()}? This action cannot be undone.`,
      '<svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>',
      () => deleteMoment(momentId)
    );
  };
  
  function deleteMoment(momentId) {
    const momentIndex = state.moments.findIndex(m => m.id === momentId);
    if (momentIndex === -1) return;
    
    state.moments.splice(momentIndex, 1);
    state.selectedMoment = null;
    invalidateWikiLookup();
    saveData();
    hideConfirmModal();
    render();
  }
  
  window.confirmDeleteThread = function() {
    if (!state.selectedThread) return;
    
    const thread = state.threads.find(t => t.id === state.selectedThread);
    if (!thread) return;
    
    const threadMoments = state.moments.filter(m => m.threadId === state.selectedThread);
    
    showConfirmModal(
      'Delete Thread?',
      `Are you sure you want to delete "${thread.name}"? This will remove the thread but keep all ${threadMoments.length} moment${threadMoments.length !== 1 ? 's' : ''} (they will become unthreaded).`,
      '<svg class="icon-context" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 17h.01"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>',
      () => deleteThread(state.selectedThread)
    );
  };
  
  function deleteThread(threadId) {
    const threadIndex = state.threads.findIndex(t => t.id === threadId);
    if (threadIndex === -1) return;
    
    state.moments.forEach(moment => {
      if (moment.threadId === threadId) {
        delete moment.threadId;
      }
    });
    
    state.threads.splice(threadIndex, 1);
    state.selectedThread = null;
    
    saveData();
    hideConfirmModal();
    render();
  }
  
document.getElementById('cancelCaptureBtn').addEventListener('click', () => {
  // Clear capture state
  state.captureText = '';
  state.captureCharts = [];
  state.captureCodeBlocks = [];
  state.captureTables = [];
  state.captureAttachments = [];
  state.captureTags = [];
  state.capturePriority = null;
  state.editingMoment = null;
  document.getElementById('captureText').value = '';
  document.getElementById('chartPreview').innerHTML = '';
  document.getElementById('codePreview').innerHTML = '';
  document.getElementById('tablePreview').innerHTML = '';
  document.getElementById('attachmentsPreview').innerHTML = '';
  document.getElementById('templateFieldsContainer').innerHTML = '';
  document.getElementById('templateFields').style.display = 'none';
  document.getElementById('tagsInput').value = '';
  document.getElementById('tagsDisplay').innerHTML = '';
  document.querySelectorAll('.priority-btn').forEach(b => b.classList.remove('active', 'critical', 'follow-up', 'pinned'));
  document.getElementById('submitCaptureBtn').innerHTML = '<svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Capture Moment';
  
  // On mobile, just hide the capture view to return to sidebar
  if (window.innerWidth <= 768) {
    document.getElementById('captureView').classList.remove('visible');
  } else {
    state.view = 'timeline';
    render();
  }
});
  
  
  function collectTemplateData() {
    const container = document.getElementById('templateFieldsContainer');
    const inputs = container.querySelectorAll('[data-template-field]');
    const templateData = {};
    
    inputs.forEach(input => {
      const fieldName = input.dataset.templateField;
      const value = input.value.trim();
      if (value) {
        templateData[fieldName] = value;
      }
    });
    
    return Object.keys(templateData).length > 0 ? templateData : null;
  }
  
document.getElementById('submitCaptureBtn').addEventListener('click', () => {
  const text = document.getElementById('captureText').value.trim();
  if (!text) {
    alert('Please enter your thought');
    return;
  }
  
  const templateData = collectTemplateData();
  
  if (state.editingMoment) {
    const momentIndex = state.moments.findIndex(m => m.id === state.editingMoment.id);
    if (momentIndex !== -1) {
      state.moments[momentIndex] = {
        ...state.moments[momentIndex],
        type: state.captureType,
        text: text,
        context: {
          service: document.getElementById('contextService').value,
          environment: document.getElementById('contextEnvironment').value,
          version: document.getElementById('contextVersion').value
        },
        charts: state.captureCharts,
        codeBlocks: state.captureCodeBlocks,
        tables: state.captureTables,
        attachments: state.captureAttachments,
        templateData: templateData,
        tags: [...state.captureTags],
        priority: state.capturePriority
      };
      // Don't auto-select the moment
    }
    state.editingMoment = null;
  } else {
    const newMoment = {
      id: generateId(),
      type: state.captureType,
      text: text,
      timestamp: Date.now(),
      context: {
        service: document.getElementById('contextService').value,
        environment: document.getElementById('contextEnvironment').value,
        version: document.getElementById('contextVersion').value
      },
      charts: state.captureCharts,
      codeBlocks: state.captureCodeBlocks,
      tables: state.captureTables,
      attachments: state.captureAttachments,
      templateData: templateData,
      tags: [...state.captureTags],
      priority: state.capturePriority,
      threadId: state.selectedThread
    };
    
    state.moments.unshift(newMoment);
    // Don't auto-select the moment - just add it
  }
  invalidateWikiLookup();

  // Clear selected moment so detail panel doesn't open
  state.selectedMoment = null;
  state.view = 'timeline';
  state.captureText = '';
  state.captureCharts = [];
  state.captureCodeBlocks = [];
  state.captureTables = [];
  state.captureAttachments = [];
  state.captureTags = [];
  state.capturePriority = null;
  
  document.getElementById('captureText').value = '';
  document.getElementById('contextService').value = '';
  document.getElementById('contextEnvironment').value = 'production';
  document.getElementById('contextVersion').value = '';
  document.getElementById('chartPreview').innerHTML = '';
  document.getElementById('codePreview').innerHTML = '';
  document.getElementById('tablePreview').innerHTML = '';
  document.getElementById('attachmentsPreview').innerHTML = '';
  document.getElementById('templateFieldsContainer').innerHTML = '';
  document.getElementById('templateFields').style.display = 'none';
  document.getElementById('tagsInput').value = '';
  document.getElementById('tagsDisplay').innerHTML = '';
  document.querySelectorAll('.priority-btn').forEach(b => b.classList.remove('active', 'critical', 'follow-up', 'pinned'));
  document.getElementById('submitCaptureBtn').innerHTML = '<svg class="icon-action" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Capture Moment';
  
  saveData();
  render();
});
  
  document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  // Single consolidated input handler — clears results and runs local search (debounced 150ms)
  let _searchInputTimer = null;
  document.getElementById('searchInput').addEventListener('input', (e) => {
    const q = e.target.value.trim();
    if (!q) {
      state.searchResults = [];
      document.getElementById('searchResults').innerHTML = '';
    }
    clearTimeout(_searchInputTimer);
    _searchInputTimer = setTimeout(() => runLocalSearch(q), 150);
  });

  // Search filter pill handlers
  const _sfTypePills = document.querySelectorAll('.sf-pill[data-sf-type]');
  const _sfDatePills = document.querySelectorAll('.sf-pill[data-sf-date]');
  _sfTypePills.forEach(pill => {
    pill.addEventListener('click', () => {
      searchFilters.type = pill.dataset.sfType;
      _sfTypePills.forEach(p => p.classList.toggle('active', p.dataset.sfType === searchFilters.type));
      runLocalSearch(document.getElementById('searchInput').value.trim());
    });
  });
  _sfDatePills.forEach(pill => {
    pill.addEventListener('click', () => {
      searchFilters.date = pill.dataset.sfDate;
      _sfDatePills.forEach(p => p.classList.toggle('active', p.dataset.sfDate === searchFilters.date));
      runLocalSearch(document.getElementById('searchInput').value.trim());
    });
  });

  document.getElementById('searchBtn').addEventListener('click', performSearch);

  // Keyboard shortcut: Ctrl+K to open quick capture
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openQuickCapture();
    }
    if (e.key === 'Escape') {
      closeQuickCapture();
    }
  });

  // Quick capture: Enter to submit, Shift+Enter for newline
  document.getElementById('qcText')?.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitQuickCapture();
    }
  });

  async function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) { runLocalSearch(''); return; }
    
    const btn = document.getElementById('searchBtn');
    btn.disabled = true;
    btn.textContent = '🔍 Searching...';
    
    const resultsContainer = document.getElementById('searchResults');
    
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `You are a semantic search engine for developer notes. Given this search query and list of moments, return the IDs of relevant moments ranked by relevance. Only return a JSON array of IDs, nothing else.

Search query: "${query}"

Moments:
${applySearchFilters(state.moments).map(m => `ID: ${m.id}\nType: ${m.type}\nText: ${m.text}\nContext: ${JSON.stringify(m.context)}\nTags: ${m.tags ? m.tags.join(', ') : 'none'}\nPriority: ${m.priority || 'none'}\n`).join('\n---\n')}

Return only: ["id1", "id2", ...]`
          }]
        })
      });
      
      const data = await response.json();
      const text = data.content.find(c => c.type === 'text')?.text || '[]';
      const cleanText = text.replace(/```json|```/g, '').trim();
      const ids = JSON.parse(cleanText);
      
      state.searchResults = ids
        .map(id => state.moments.find(m => m.id === id))
        .filter(Boolean);
      
    } catch (error) {
      console.error('Search failed, falling back to local search:', error);
      runLocalSearch(query);
      btn.disabled = false;
      btn.textContent = 'Search';
      return;
    }

    btn.disabled = false;
    btn.textContent = 'Search';
    // Apply filters to AI results too
    state.searchResults = applySearchFilters(state.searchResults);
    renderSearchResults(state.searchResults, query);
    state.searchQuery = query;
  }
  

  
  // Image modal functions
  function showImageModal(imageData) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('modalImage');
    if (modal && img) {
      img.src = imageData;
      modal.classList.add('visible');
    }
  }
  
  window.hideImageModal = function() {
    const modal = document.getElementById('imageModal');
    if (modal) {
      modal.classList.remove('visible');
    }
  };
  
  // Add event listener only if imageModal exists
  const imageModal = document.getElementById('imageModal');
  if (imageModal) {
    imageModal.addEventListener('click', (e) => {
      if (e.target.id === 'imageModal' || e.target.classList.contains('image-modal-close')) {
        hideImageModal();
      }
    });
  }
  
  // Download attachment function
  function downloadAttachment(attachment) {
    const a = document.createElement('a');
    a.href = attachment.data;
    a.download = attachment.name;
    a.click();
  }
  
  // Update render function to handle mobile
const originalRender = render;
render = function() {
  originalRender();
  if (window.innerWidth <= 768) {
    renderMobileCaptureButton();
  }
};
  
  // Handle window resize
  let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth <= 768) {
      setupMobileNavigation();
      renderMobileCaptureButton();
    }
  }, 250);
});
  
  // Initialize mobile navigation
  if (window.innerWidth <= 768) {
    setupMobileNavigation();
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
  } else {
    // DOM already loaded
    initializeApp();
  }
  
  function initializeApp() {
    console.log('[NooS] Initializing app...');
    // Apply initial collapsed sections to DOM
    Object.entries(state.collapsedSections).forEach(([section, isCollapsed]) => {
      if (isCollapsed) {
        const h3 = document.querySelector(`.nav-section h3[data-section="${section}"]`);
        const body = document.getElementById(`nav-section-body-${section}`);
        if (h3) h3.classList.add('collapsed');
        if (body) body.classList.add('collapsed');
      }
    });
    loadData();
  }
  
  // Show custom prompt to set up auto-save (uses button for proper user gesture)




// ── GitHub Repo Sync ─────────────────────────────────────────────────────────
const GH_OWNER     = 'VincentFeliciano';
const GH_REPO      = 'NOOS';
const GH_FILE      = 'noos-data.json';
const GH_TOKEN_KEY = 'ruby-github-token';

function _ghHeaders(token) {
  return {
    Authorization: 'token ' + token,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  };
}

async function _ghGetFile(token) {
  const r = await fetch(
    'https://api.github.com/repos/' + GH_OWNER + '/' + GH_REPO + '/contents/' + GH_FILE,
    { headers: _ghHeaders(token) }
  );
  if (r.status === 404) return null;
  if (!r.ok) throw new Error('GitHub GET ' + r.status);
  return r.json();
}

async function _ghPutFile(token, content, sha) {
  const body = {
    message: 'NooS sync ' + new Date().toISOString(),
    content: btoa(unescape(encodeURIComponent(content)))
  };
  if (sha) body.sha = sha;
  const r = await fetch(
    'https://api.github.com/repos/' + GH_OWNER + '/' + GH_REPO + '/contents/' + GH_FILE,
    { method: 'PUT', headers: _ghHeaders(token), body: JSON.stringify(body) }
  );
  if (!r.ok) throw new Error('GitHub PUT ' + r.status);
  return r.json();
}

async function loadFromGithub() {
  const token = localStorage.getItem(GH_TOKEN_KEY);
  if (!token) return false;
  const file = await _ghGetFile(token);
  if (!file) return false;
  const text = decodeURIComponent(escape(atob(file.content.replace(/\n/g, ''))));
  const data = JSON.parse(text);
  if (!data.moments || !Array.isArray(data.moments)) return false;
  state.moments           = migrateMoments(data.moments);
  state.threads           = data.threads         || [];
  state.whiteboardTiles   = data.whiteboardTiles  || [];
  state.whiteboardLinks   = data.whiteboardLinks  || [];
  state._ghSha            = file.sha;
  state.githubSyncEnabled = true;
  console.log('[NooS] Loaded ' + state.moments.length + ' moments from GitHub');
  updateGithubSyncUI();
  return true;
}

let _githubSaveTimer = null;
async function _performGithubSave() {
  const token = localStorage.getItem(GH_TOKEN_KEY);
  if (!token || !state.githubSyncEnabled) return;
  const data = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    moments: state.moments,
    threads: state.threads,
    whiteboardTiles: state.whiteboardTiles,
    whiteboardLinks: state.whiteboardLinks,
    selectedMomentId: state.selectedMoment?.id || null
  };
  const content = JSON.stringify(data);
  const current = await _ghGetFile(token).catch(() => null);
  const sha = current?.sha || state._ghSha;
  const result = await _ghPutFile(token, content, sha);
  state._ghSha         = result.content?.sha || sha;
  state.lastGithubSave = new Date();
  updateGithubSyncUI();
  console.log('[NooS] GitHub save OK');
}

function _githubSave() {
  if (!state.githubSyncEnabled) return;
  clearTimeout(_githubSaveTimer);
  _githubSaveTimer = setTimeout(
    () => _performGithubSave().catch(e => console.error('[NooS] GitHub save failed:', e)),
    3000
  );
}

function _startGithubPoll() {
  if (state.githubPollInterval) clearInterval(state.githubPollInterval);
  state.githubPollInterval = setInterval(async () => {
    const token = localStorage.getItem(GH_TOKEN_KEY);
    if (!token || !state.githubSyncEnabled) return;
    try {
      const file = await _ghGetFile(token);
      if (!file || file.sha === state._ghSha) return;
      const text = decodeURIComponent(escape(atob(file.content.replace(/\n/g, ''))));
      const data = JSON.parse(text);
      if (!data.moments) return;
      state.moments         = migrateMoments(data.moments);
      state.threads         = data.threads         || [];
      state.whiteboardTiles = data.whiteboardTiles  || [];
      state.whiteboardLinks = data.whiteboardLinks  || [];
      state._ghSha          = file.sha;
      invalidateWikiLookup();
      if (state.view === 'timeline' || state.view === 'search') render();
      console.log('[NooS] GitHub poll: remote changes merged');
    } catch (e) { /* silent poll failure */ }
  }, 60000);
}

window.setupGithubSync = async function() {
  const input = document.getElementById('githubTokenInput');
  const token = input?.value?.trim();
  if (!token) { alert('Enter your GitHub Personal Access Token first.'); return; }
  localStorage.setItem(GH_TOKEN_KEY, token);
  let loaded;
  try { loaded = await loadFromGithub(); } catch (e) { loaded = false; }
  if (loaded) {
    _startGithubPoll();
    updateGithubSyncUI();
    render();
    alert('GitHub sync enabled!\nData loaded from repo.\nSyncs 3 s after changes, polls every 60 s.');
  } else {
    state.githubSyncEnabled = true;
    try {
      await _performGithubSave();
      _startGithubPoll();
      updateGithubSyncUI();
      alert('GitHub sync enabled!\nData file created in VincentFeliciano/NOOS.');
    } catch (e) {
      state.githubSyncEnabled = false;
      alert('Failed to connect: ' + e.message + '\n\nEnsure token has repo write access.');
    }
  }
};

window.disableGithubSync = function() {
  if (!confirm('Disable GitHub sync?')) return;
  clearInterval(state.githubPollInterval);
  state.githubPollInterval = null;
  state.githubSyncEnabled  = false;
  state._ghSha             = null;
  localStorage.removeItem(GH_TOKEN_KEY);
  updateGithubSyncUI();
};

function updateGithubSyncUI() {
  const statusEl      = document.getElementById('githubSyncStatus');
  const tokenInput    = document.getElementById('githubTokenInput');
  const connectBtn    = document.getElementById('githubConnectBtn');
  const disconnectBtn = document.getElementById('githubDisconnectBtn');
  const lastSaveEl    = document.getElementById('githubLastSave');
  if (!statusEl) return;
  if (state.githubSyncEnabled) {
    statusEl.style.display = 'block';
    if (connectBtn)    connectBtn.style.display    = 'none';
    if (disconnectBtn) disconnectBtn.style.display = '';
    if (lastSaveEl)    lastSaveEl.textContent = state.lastGithubSave
      ? 'Last synced: ' + state.lastGithubSave.toLocaleTimeString()
      : 'Connected — waiting for first sync';
  } else {
    statusEl.style.display = 'none';
    if (connectBtn)    connectBtn.style.display    = '';
    if (disconnectBtn) disconnectBtn.style.display = 'none';
    const stored = localStorage.getItem(GH_TOKEN_KEY);
    if (tokenInput && stored) tokenInput.value = stored;
  }
}
