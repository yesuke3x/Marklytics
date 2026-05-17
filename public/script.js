/* ============================================
   MARKLYTICS — script.js
   Data Warroom · Social Media Campaign Analytics
   ============================================ */

/* ---------- DATA: 15 кампаний (2024–2025) ---------- */
window.CAMPAIGNS_DATA = [
  {year:2024, campaign:"Spring Drop · IG Reels",        platform:"Instagram", budget:4200000,  reach:8400000,  ctr:2.4, conv:18400, roas:3.6, status:"done"},
  {year:2024, campaign:"GenZ Beat · TikTok Spark",      platform:"TikTok",    budget:3100000,  reach:12700000, ctr:4.1, conv:31200, roas:5.8, status:"done"},
  {year:2024, campaign:"YT Pre-roll · Q2",              platform:"YouTube",   budget:5800000,  reach:6200000,  ctr:1.6, conv:9700,  roas:2.4, status:"done"},
  {year:2024, campaign:"FB Carousel · Retargeting",     platform:"Facebook",  budget:2400000,  reach:3100000,  ctr:1.2, conv:7400,  roas:2.9, status:"done"},
  {year:2024, campaign:"LinkedIn B2B · Lead Magnet",    platform:"LinkedIn",  budget:3700000,  reach:920000,   ctr:2.8, conv:4200,  roas:4.7, status:"done"},
  {year:2024, campaign:"Holiday Burst · IG Stories",    platform:"Instagram", budget:5500000,  reach:11200000, ctr:3.2, conv:26800, roas:4.4, status:"done"},
  {year:2024, campaign:"Creators Wave · TikTok",        platform:"TikTok",    budget:4800000,  reach:18900000, ctr:5.0, conv:48700, roas:7.2, status:"done"},
  {year:2025, campaign:"NY Teaser · IG Reels",          platform:"Instagram", budget:4900000,  reach:10300000, ctr:3.4, conv:24100, roas:4.9, status:"live"},
  {year:2025, campaign:"TT Live Sale · Q1",             platform:"TikTok",    budget:5200000,  reach:21400000, ctr:5.6, conv:62300, roas:8.4, status:"live"},
  {year:2025, campaign:"YT Long-form · Brand Doc",      platform:"YouTube",   budget:7800000,  reach:9800000,  ctr:2.1, conv:18900, roas:3.2, status:"live"},
  {year:2025, campaign:"FB Catalogue · Dynamic",        platform:"Facebook",  budget:2900000,  reach:4400000,  ctr:1.4, conv:11200, roas:3.6, status:"live"},
  {year:2025, campaign:"LinkedIn Thought-Lead",         platform:"LinkedIn",  budget:4200000,  reach:1280000,  ctr:3.1, conv:5600,  roas:5.8, status:"live"},
  {year:2025, campaign:"Influencer Pulse · IG",         platform:"Instagram", budget:6100000,  reach:14700000, ctr:3.8, conv:36400, roas:5.4, status:"live"},
  {year:2025, campaign:"TT Hashtag Challenge",          platform:"TikTok",    budget:3400000,  reach:24200000, ctr:6.2, conv:71800, roas:9.1, status:"paused"},
  {year:2025, campaign:"YT Shorts · Snackable",         platform:"YouTube",   budget:2800000,  reach:11600000, ctr:2.9, conv:21400, roas:4.6, status:"live"}
];

/* ---------- HELPERS ---------- */
const $  = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => Array.from(p.querySelectorAll(s));

const fmtMoney = (n) => {
  if (n === null || n === undefined) return '—';
  return new Intl.NumberFormat('ru-RU').format(Math.round(n)) + ' ₸';
};
const fmtNum = (n) => {
  if (n === null || n === undefined) return '—';
  return new Intl.NumberFormat('ru-RU').format(Math.round(n));
};
const fmtReach = (n) => {
  if (n >= 1e6) return (n/1e6).toFixed(1).replace('.0','') + 'M';
  if (n >= 1e3) return (n/1e3).toFixed(0) + 'K';
  return String(n);
};

/* ============================================
   PAGE LOADER
   ============================================ */
function initLoader(){
  const loader = $('#loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('lifted');
      setTimeout(() => loader.classList.add('gone'), 900);
    }, 1100);
  });
}

/* ============================================
   CURSOR — TRAIL PARTICLES
   Главная точка + 8 убывающих следов с motion blur.
   Метафора: data trail / engagement events.
   ============================================ */
function initCursor(){
  if (window.matchMedia('(hover: none)').matches) return;
  const dot = $('#cursor-dot');
  if (!dot) return;

  const TRAIL_LEN = 8;
  const trails = [];
  for (let i = 0; i < TRAIL_LEN; i++){
    const t = document.createElement('div');
    t.className = 'trail-particle';
    document.body.appendChild(t);
    trails.push({ el:t, x:0, y:0 });
  }

  let mx = window.innerWidth/2, my = window.innerHeight/2;
  let dotX = mx, dotY = my;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
  }, { passive:true });

  /* Hover state delegation */
  document.addEventListener('mouseover', (e) => {
    const t = e.target;
    if (t.closest('a, button, .chip, .year-filter, .hex, .gallery-card, .scenario-card, .stat-card, .pred-card, .author-card, .compare-toggle button, .m-item, th, label')){
      dot.classList.add('hover-link');
      dot.classList.remove('hover-image');
    } else if (t.tagName === 'IMG' || t.tagName === 'VIDEO'){
      dot.classList.add('hover-image');
      dot.classList.remove('hover-link');
    } else {
      dot.classList.remove('hover-link','hover-image');
    }
  });

  window.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    trails.forEach(t => t.el.style.opacity = '0');
  });
  window.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
  });

  const loop = () => {
    /* main dot lerps slightly for smoothness */
    dotX += (mx - dotX) * 0.35;
    dotY += (my - dotY) * 0.35;
    dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%,-50%)`;

    /* trail chain — each follows previous with decay */
    let prevX = dotX, prevY = dotY;
    trails.forEach((tr, i) => {
      const speed = 0.32 - i * 0.025;
      tr.x += (prevX - tr.x) * Math.max(0.08, speed);
      tr.y += (prevY - tr.y) * Math.max(0.08, speed);
      const decay = 1 - (i + 1) / (TRAIL_LEN + 1);
      const size  = Math.max(2, 6 * decay);
      const opacity = decay * 0.85;
      tr.el.style.transform = `translate(${tr.x}px, ${tr.y}px) translate(-50%,-50%)`;
      tr.el.style.width  = size + 'px';
      tr.el.style.height = size + 'px';
      tr.el.style.opacity = opacity;
      tr.el.style.background = i < 4 ? 'var(--cyan)' : 'var(--magenta)';
      prevX = tr.x; prevY = tr.y;
    });

    requestAnimationFrame(loop);
  };
  loop();
}

/* ============================================
   HAMBURGER NAV
   ============================================ */
function initNav(){
  const btn = $('.hamburger');
  const links = $('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });
  $$('.nav-links a').forEach(a => a.addEventListener('click', () => {
    btn.classList.remove('open');
    links.classList.remove('open');
  }));
}

/* ============================================
   INTERSECTION OBSERVER — REVEALS
   ============================================ */
function initReveals(){
  const els = $$('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting){
        en.target.classList.add('in');
        io.unobserve(en.target);
      }
    });
  }, { threshold:0.1, rootMargin:'0px 0px -60px 0px' });
  els.forEach(e => io.observe(e));
}

/* ============================================
   COUNT-UP ON SCROLL
   ============================================ */
function initCountUp(){
  const els = $$('[data-count]');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const isInfinity = el.dataset.count === '∞';
      if (isInfinity){
        el.textContent = '∞';
        io.unobserve(el); return;
      }
      const duration = 1600;
      const start = performance.now();
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = target * eased;
        el.textContent = (decimals ? val.toFixed(decimals) : Math.floor(val)) + suffix;
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      io.unobserve(el);
    });
  }, { threshold:0.4 });
  els.forEach(e => io.observe(e));
}

/* ============================================
   HERO PARALLAX + PARTICLES
   ============================================ */
function initParallax(){
  const bg = $('.hero-bg');
  if (!bg) return;
  window.addEventListener('scroll', () => {
    const y = window.pageYOffset;
    if (y < window.innerHeight){
      bg.style.transform = `translateY(${y * 0.35}px) scale(${1 + y*0.0003})`;
    }
  }, { passive:true });
}

function initParticles(){
  const canvas = $('#particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };
  const spawn = () => {
    particles = Array.from({length:60}, () => ({
      x: Math.random()*W,
      y: Math.random()*H,
      r: Math.random()*2 + 0.5,
      vy: -(Math.random()*0.4 + 0.15),
      vx: (Math.random()-0.5)*0.15,
      a: Math.random()*0.5 + 0.2,
      mag: Math.random() < 0.25
    }));
  };
  resize(); spawn();
  window.addEventListener('resize', () => { resize(); spawn(); });

  const tick = () => {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.y < -10){ p.y = H + 5; p.x = Math.random()*W; }
      if (p.x < 0) p.x = W; else if (p.x > W) p.x = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      const colorBase = p.mag ? '255, 45, 120' : '0, 212, 255';
      ctx.fillStyle = `rgba(${colorBase}, ${p.a})`;
      ctx.shadowBlur = 6;
      ctx.shadowColor = `rgba(${colorBase}, 0.6)`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  };
  tick();
}

/* ============================================
   BACK TO TOP
   ============================================ */
function initBackTop(){
  const btn = $('#back-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.pageYOffset > 320);
  }, { passive:true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top:0, behavior:'smooth' });
  });
}

/* ============================================
   MUSIC PLAYER — Signal Pulse
   ============================================ */
function initPlayer(){
  const player = $('#player');
  if (!player) return;
  const audio = $('#bg-audio');
  const btn = $('#play-btn');
  const prog = $('#progress');
  const fill = $('#progress-fill');
  const time = $('#time');
  if (!audio) return;

  const fmtTime = (s) => {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s/60), ss = String(Math.floor(s%60)).padStart(2,'0');
    return `${m}:${ss}`;
  };

  btn.addEventListener('click', () => {
    if (audio.paused){
      audio.play().catch(() => {});
      btn.textContent = '⏸';
    } else {
      audio.pause();
      btn.textContent = '▶';
    }
  });

  audio.addEventListener('timeupdate', () => {
    const pct = (audio.currentTime / audio.duration) * 100 || 0;
    fill.style.width = pct + '%';
    prog.style.setProperty('--progress', pct + '%');
    if (time) time.textContent = `${fmtTime(audio.currentTime)} / ${fmtTime(audio.duration)}`;
  });

  prog.addEventListener('click', (e) => {
    const rect = prog.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    if (audio.duration) audio.currentTime = pct * audio.duration;
  });

  audio.addEventListener('ended', () => { btn.textContent = '▶'; });
}

/* ============================================
   DATA TABLE — Кампании
   ============================================ */
function initTable(){
  const tbody = $('#table-body');
  if (!tbody) return;
  const filterBtns = $$('.year-filter');
  const ths = $$('.data-table th[data-key]');

  let state = { platform:'all', sortKey:null, sortDir:'asc' };

  const pfClass = (p) => ({
    'Instagram':'pf-ig',
    'TikTok':'pf-tt',
    'YouTube':'pf-yt',
    'Facebook':'pf-fb',
    'LinkedIn':'pf-ln'
  })[p] || '';

  const statusBadge = (s) => {
    if (s === 'live')   return '<span class="status-live">● LIVE</span>';
    if (s === 'paused') return '<span class="status-paused">⏸ PAUSED</span>';
    return '<span class="status-done">✓ DONE</span>';
  };

  const render = () => {
    let rows = window.CAMPAIGNS_DATA.slice();
    if (state.platform !== 'all'){
      rows = rows.filter(r => r.platform === state.platform);
    }
    if (state.sortKey){
      const k = state.sortKey, dir = state.sortDir === 'asc' ? 1 : -1;
      rows.sort((a,b) => {
        const av = a[k], bv = b[k];
        if (av === null) return 1; if (bv === null) return -1;
        if (typeof av === 'string') return av.localeCompare(bv, 'ru') * dir;
        return (av - bv) * dir;
      });
    }
    tbody.innerHTML = rows.map(r => `
      <tr>
        <td><span class="num">${r.year}</span></td>
        <td>${r.campaign}</td>
        <td class="${pfClass(r.platform)}">${r.platform}</td>
        <td class="num">${fmtMoney(r.budget)}</td>
        <td class="num">${fmtReach(r.reach)}</td>
        <td class="num">${r.ctr.toFixed(1)}%</td>
        <td class="num">${fmtNum(r.conv)}</td>
        <td class="num pos">${r.roas.toFixed(1)}×</td>
        <td class="num">${statusBadge(r.status)}</td>
      </tr>`).join('');
  };

  filterBtns.forEach(b => b.addEventListener('click', () => {
    filterBtns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    state.platform = b.dataset.platform;
    render();
  }));

  ths.forEach(th => th.addEventListener('click', () => {
    const k = th.dataset.key;
    if (state.sortKey === k){
      state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      state.sortKey = k; state.sortDir = 'asc';
    }
    ths.forEach(x => { x.classList.remove('sorted-asc','sorted-desc'); });
    th.classList.add(state.sortDir === 'asc' ? 'sorted-asc' : 'sorted-desc');
    render();
  }));

  render();
}

/* ============================================
   COMPARE TOGGLE — 2024 ↔ 2025
   ============================================ */
function initCompare(){
  const toggles = $$('.compare-toggle button');
  if (!toggles.length) return;
  const cards = $$('.compare-card');

  /* Aggregate by platform+year */
  const agg = (year, platform) => {
    const rows = window.CAMPAIGNS_DATA.filter(r => r.year === year && r.platform === platform);
    if (!rows.length) return null;
    const reach = rows.reduce((s,r) => s + r.reach, 0);
    const ctr = rows.reduce((s,r) => s + r.ctr, 0) / rows.length;
    const roas = rows.reduce((s,r) => s + r.roas, 0) / rows.length;
    return { reach, ctr, roas };
  };

  const animateVal = (el, target, suffix='', decimals=1) => {
    const cur = parseFloat(el.dataset.cur || '0');
    const dur = 800, start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start)/dur);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = cur + (target - cur) * eased;
      if (suffix === 'reach') el.textContent = fmtReach(val);
      else el.textContent = val.toFixed(decimals) + suffix;
      if (t < 1) requestAnimationFrame(step);
      else el.dataset.cur = target;
    };
    requestAnimationFrame(step);
  };

  const update = (year) => {
    const y = parseInt(year, 10);
    cards.forEach(card => {
      const platformMap = { instagram:'Instagram', tiktok:'TikTok', youtube:'YouTube' };
      const platform = platformMap[card.dataset.platform];
      const data = agg(y, platform);
      if (!data) return;
      const maxReach = 25e6, maxCtr = 7, maxRoas = 10;
      const fields = [
        { key:'reach',  val:data.reach, pct:(data.reach/maxReach)*100, fmt:'reach', dec:0 },
        { key:'ctr',    val:data.ctr,   pct:(data.ctr/maxCtr)*100,     fmt:'%',     dec:1 },
        { key:'roas',   val:data.roas,  pct:(data.roas/maxRoas)*100,   fmt:'×',     dec:1 }
      ];
      fields.forEach(f => {
        const valEl  = card.querySelector(`[data-field="${f.key}"] .val`);
        const fillEl = card.querySelector(`[data-field="${f.key}"] .bar-fill`);
        if (valEl)  animateVal(valEl, f.val, f.fmt, f.dec);
        if (fillEl) fillEl.style.width = Math.min(100, f.pct) + '%';
      });
    });
  };

  toggles.forEach(t => t.addEventListener('click', () => {
    toggles.forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    update(t.dataset.year);
  }));

  const tgt = $('.compare-grid');
  if (tgt){
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting){
        update(toggles.find(x => x.classList.contains('active')).dataset.year);
        io.disconnect();
      }
    }, { threshold:0.2 });
    io.observe(tgt);
  }
}

/* ============================================
   CHARTS (dashboard.html)
   ============================================ */
function initCharts(){
  if (typeof Chart === 'undefined') return;
  Chart.defaults.color = '#7A8194';
  Chart.defaults.borderColor = 'rgba(0,212,255,0.08)';
  Chart.defaults.font.family = "'Karla', sans-serif";

  /* Chart 1 — Line: Engagement Rate по месяцам */
  const c1 = $('#chart-line');
  if (c1){
    const months = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];
    new Chart(c1.getContext('2d'), {
      type:'line',
      data:{
        labels:months,
        datasets:[
          { label:'Instagram',
            data:[3.1,3.3,3.0,3.6,3.8,4.1,4.4,4.2,4.6,4.8,5.0,5.2],
            borderColor:'#FF8FB1', backgroundColor:'rgba(255,143,177,0.10)',
            tension:0.4, fill:true, borderWidth:2.5, pointRadius:5, pointHoverRadius:9,
            pointBackgroundColor:'#FF8FB1', pointBorderColor:'#0A0F1E' },
          { label:'TikTok',
            data:[4.6,4.9,5.2,5.8,6.1,6.5,6.8,7.2,7.4,7.9,8.3,8.7],
            borderColor:'#7DEAFF', backgroundColor:'rgba(125,234,255,0.12)',
            tension:0.4, fill:true, borderWidth:2.5, pointRadius:5, pointHoverRadius:9,
            pointBackgroundColor:'#7DEAFF', pointBorderColor:'#0A0F1E' },
          { label:'YouTube',
            data:[2.4,2.2,2.6,2.8,2.9,3.1,3.0,3.2,3.3,3.5,3.6,3.8],
            borderColor:'#FF2D78', backgroundColor:'rgba(255,45,120,0.10)',
            tension:0.4, fill:true, borderWidth:2.5, pointRadius:5, pointHoverRadius:9,
            pointBackgroundColor:'#FF2D78', pointBorderColor:'#0A0F1E' }
        ]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{ position:'top', labels:{ usePointStyle:true, padding:20, font:{ size:12, weight:'500' } } },
          tooltip:{ backgroundColor:'#111827', borderColor:'#00D4FF', borderWidth:1,
            padding:14, titleFont:{ family:"'Fira Code',monospace", size:11 },
            bodyFont:{ size:12 },
            callbacks:{ label:(ctx) => `${ctx.dataset.label}: ${ctx.parsed.y}%` } }
        },
        scales:{
          x:{ grid:{ color:'rgba(0,212,255,0.05)' }, ticks:{ font:{ family:"'Fira Code',monospace", size:11 } } },
          y:{ grid:{ color:'rgba(0,212,255,0.05)' }, ticks:{ font:{ family:"'Fira Code',monospace", size:11 },
            callback:(v) => v + '%' } }
        },
        animation:{ duration:1400, easing:'easeOutCubic' }
      }
    });
  }

  /* Chart 2 — Horizontal Bar: ROAS по платформам (2025) */
  const c2 = $('#chart-bar');
  if (c2){
    const platforms = ['Instagram','TikTok','YouTube','Facebook','LinkedIn'];
    const data2025 = platforms.map(p => {
      const rows = window.CAMPAIGNS_DATA.filter(r => r.year === 2025 && r.platform === p);
      if (!rows.length) return 0;
      return rows.reduce((s,r) => s + r.roas, 0) / rows.length;
    });
    new Chart(c2.getContext('2d'), {
      type:'bar',
      data:{
        labels:platforms,
        datasets:[{
          label:'ROAS 2025',
          data:data2025,
          backgroundColor:[
            'rgba(255,143,177,0.85)',
            'rgba(125,234,255,0.85)',
            'rgba(255,45,120,0.85)',
            'rgba(125,196,255,0.85)',
            'rgba(167,139,250,0.85)'
          ],
          borderColor:['#FF8FB1','#7DEAFF','#FF2D78','#7DC4FF','#A78BFA'],
          borderWidth:1.5
        }]
      },
      options:{
        indexAxis:'y',
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{ display:false },
          tooltip:{ backgroundColor:'#111827', borderColor:'#00D4FF', borderWidth:1,
            callbacks:{ label:(ctx) => `ROAS: ${ctx.parsed.x.toFixed(1)}×` } }
        },
        scales:{
          x:{ grid:{ color:'rgba(0,212,255,0.05)' },
              ticks:{ font:{ family:"'Fira Code',monospace", size:11 }, callback:(v) => v + '×' } },
          y:{ grid:{ display:false }, ticks:{ font:{ family:"'Barlow Condensed',sans-serif", size:14, weight:'700' }, color:'#E8EDF5' } }
        },
        animation:{ duration:1500, easing:'easeOutQuart' }
      }
    });
  }

  /* Chart 3 — Doughnut: распределение бюджета по платформам (2025) */
  const c3 = $('#chart-doughnut');
  if (c3){
    const platforms = ['Instagram','TikTok','YouTube','Facebook','LinkedIn'];
    const budgetByP = platforms.map(p => {
      return window.CAMPAIGNS_DATA
        .filter(r => r.year === 2025 && r.platform === p)
        .reduce((s,r) => s + r.budget, 0);
    });
    const total = budgetByP.reduce((s,v) => s + v, 0);
    const pct = budgetByP.map(v => Math.round((v/total)*100));
    new Chart(c3.getContext('2d'), {
      type:'doughnut',
      data:{
        labels:platforms,
        datasets:[{
          data:pct,
          backgroundColor:['#FF8FB1','#7DEAFF','#FF2D78','#7DC4FF','#A78BFA'],
          borderColor:'#0A0F1E',
          borderWidth:3,
          hoverOffset:24
        }]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        cutout:'68%',
        plugins:{
          legend:{ position:'bottom', labels:{ usePointStyle:true, padding:18, boxWidth:8,
            font:{ family:"'Barlow Condensed',sans-serif", size:13, weight:'500' } } },
          tooltip:{ backgroundColor:'#111827', borderColor:'#00D4FF', borderWidth:1,
            callbacks:{ label:(ctx) => `${ctx.label}: ${ctx.parsed}%` } }
        },
        animation:{ duration:1600, easing:'easeOutQuart' }
      }
    });
  }
}

/* ============================================
   LIGHTBOX
   ============================================ */
function initLightbox(){
  const items = $$('.m-item img, [data-lightbox]');
  let box = $('#lightbox');
  if (!items.length) return;
  if (!box){
    box = document.createElement('div');
    box.id = 'lightbox';
    box.innerHTML = '<img alt="">';
    document.body.appendChild(box);
  }
  const lbImg = box.querySelector('img');
  items.forEach(img => img.addEventListener('click', () => {
    lbImg.src = img.src;
    box.classList.add('open');
  }));
  box.addEventListener('click', () => box.classList.remove('open'));
}

/* ============================================
   COPY-TO-CLIPBOARD CHIPS
   ============================================ */
function initChips(){
  $$('.chip').forEach(chip => {
    chip.addEventListener('click', async () => {
      const text = chip.dataset.text || chip.textContent.trim();
      try { await navigator.clipboard.writeText(text); } catch(e){}
      chip.classList.remove('copied');
      void chip.offsetWidth;
      chip.classList.add('copied');
      setTimeout(() => chip.classList.remove('copied'), 1500);
    });
  });
}

/* ============================================
   INIT ALL
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNav();
  initReveals();
  initCountUp();
  initParallax();
  initParticles();
  initBackTop();
  initPlayer();
  initTable();
  initCompare();
  initCharts();
  initLightbox();
  initChips();
});
