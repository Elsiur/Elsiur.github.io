const STORAGE_KEY = 'calistenia90_progress_v1';
const METRICS_KEY = 'calistenia90_metrics_v1';

const phases = [
  {
    from: 1, to: 30, name: 'Fase 1 · Adaptación',
    subtitle: 'Movilidad, técnica y base cardiovascular.',
    workouts: {
      0: [
        ['Flexiones inclinadas','4 series de 10 a 12 repeticiones','Mantén el cuerpo recto y baja con control.'],
        ['Sentadillas a silla','4 series de 12 a 15 repeticiones','Empuja la cadera hacia atrás y controla la bajada.'],
        ['Puente de glúteos','4 series de 15 repeticiones','Aprieta los glúteos un segundo arriba.'],
        ['Plancha frontal','3 series de 20 a 30 segundos','Abdomen firme y cadera alineada.'],
        ['Caminata rápida','20 a 30 minutos','Ritmo continuo, sin llegar a jadear.']
      ],
      1: [
        ['Step-up en escalón','3 series de 10 por pierna','Apoya todo el pie y sube sin impulso.'],
        ['Remo con banda','4 series de 12 repeticiones','Lleva los codos atrás y junta los omóplatos.'],
        ['Bird dog','3 series de 10 por lado','Evita girar la cadera.'],
        ['Elevación de pantorrillas','4 series de 18 repeticiones','Pausa arriba y baja lentamente.'],
        ['Caminata suave','25 minutos','Mantén respiración cómoda.']
      ],
      2: [
        ['Movilidad general','10 minutos','Hombros, cadera, tobillos y columna.'],
        ['Caminata continua','35 a 45 minutos','Ritmo moderado.'],
        ['Plancha lateral apoyada','3 series de 15 segundos por lado','Apoya rodillas si lo necesitas.']
      ],
      3: null,
      4: null,
      5: [
        ['Circuito completo','4 vueltas','Haz todos los ejercicios con descanso breve.'],
        ['Flexiones inclinadas','10 repeticiones','Usa una superficie estable.'],
        ['Sentadillas a silla','15 repeticiones','Control y buena postura.'],
        ['Remo con banda','12 repeticiones','Sin encoger los hombros.'],
        ['Plancha','20 segundos','Respira de forma continua.']
      ],
      6: [
        ['Descanso activo','30 minutos','Caminata suave y estiramientos.']
      ]
    }
  },
  {
    from: 31, to: 60, name: 'Fase 2 · Fuerza',
    subtitle: 'Más control, más volumen y primeras progresiones.',
    workouts: {
      0: [
        ['Flexiones inclinadas bajas','5 series de 10 a 12','Usa una superficie más baja que en la fase 1.'],
        ['Pike push-up asistida','3 series de 6 a 8','Eleva la cadera y baja la cabeza entre las manos.'],
        ['Fondos asistidos en banco','4 series de 8 a 10','Recorrido corto y hombros lejos de las orejas.'],
        ['Plancha frontal','4 series de 35 segundos','Mantén tensión total.']
      ],
      1: [
        ['Remo australiano asistido','5 series de 8 a 10','Cuerpo firme y pecho hacia la barra.'],
        ['Dominada asistida con banda','4 series de 4 a 6','Sube sin balanceo.'],
        ['Remo con banda','4 series de 15','Controla la vuelta.'],
        ['Dead bug','3 series de 10 por lado','Espalda baja pegada al suelo.']
      ],
      2: [
        ['Sentadillas','5 series de 18 a 20','Profundidad cómoda y controlada.'],
        ['Zancadas asistidas','4 series de 10 por pierna','Apóyate si hace falta.'],
        ['Hip thrust','4 series de 15','Pausa arriba.'],
        ['Pantorrillas','4 series de 20','Control total.']
      ],
      3: [
        ['Caminata rápida','40 minutos','Ritmo constante.'],
        ['Movilidad','12 minutos','Prioriza tobillos, cadera y hombros.']
      ],
      4: null,
      5: [
        ['Circuito full body','5 vueltas','Descansa 90 segundos entre vueltas.'],
        ['Flexiones inclinadas','12 repeticiones','Buena técnica.'],
        ['Remo australiano','10 repeticiones','Sin impulso.'],
        ['Sentadillas','18 repeticiones','Rodillas alineadas.'],
        ['Plancha','35 segundos','Respira.']
      ],
      6: [
        ['Descanso activo','35 minutos','Camina y estira suavemente.']
      ]
    }
  },
  {
    from: 61, to: 90, name: 'Fase 3 · Consolidación',
    subtitle: 'Calistenia básica, mayor resistencia y dominio corporal.',
    workouts: {
      0: [
        ['Flexiones normales o inclinadas bajas','5 series de 8 a 15','Elige la variante que puedas controlar.'],
        ['Fondos asistidos','5 series de 8','Recorrido seguro.'],
        ['Pike push-up','4 series de 8','Controla la bajada.'],
        ['Plancha','4 series de 45 a 60 segundos','Mantén alineación.']
      ],
      1: [
        ['Dominadas asistidas','5 series de 5 a 8','Sube el pecho hacia la barra.'],
        ['Remo australiano','4 series de 12','Cuerpo recto.'],
        ['Chin-up asistida','3 series de 6','Agarre supino, sin balanceo.'],
        ['Hollow hold asistido','4 series de 20 segundos','Espalda baja apoyada.']
      ],
      2: [
        ['Sentadillas','5 series de 22 a 25','Control y estabilidad.'],
        ['Sentadilla búlgara asistida','4 series de 10 por pierna','Apóyate si es necesario.'],
        ['Hip thrust','4 series de 18','Aprieta glúteos.'],
        ['Pantorrillas','5 series de 20','Pausa arriba.']
      ],
      3: [
        ['Cardio moderado','45 minutos','Caminar rápido o bicicleta.'],
        ['Movilidad completa','15 minutos','Sin rebotes.']
      ],
      4: null,
      5: [
        ['Circuito final','5 a 6 vueltas','Mantén técnica y ritmo.'],
        ['Flexiones','12 a 15 repeticiones','Variante controlada.'],
        ['Remo australiano','12 repeticiones','Pecho arriba.'],
        ['Sentadillas','20 repeticiones','Ritmo constante.'],
        ['Plancha','45 segundos','Respiración continua.']
      ],
      6: [
        ['Descanso activo','40 minutos','Camina suave y revisa tu progreso.']
      ]
    }
  }
];

const fallback = [
  ['Rutina combinada','4 vueltas','Realiza el circuito con técnica y sin prisa.'],
  ['Flexiones inclinadas','10 a 12 repeticiones','Ajusta la altura.'],
  ['Sentadillas','15 a 20 repeticiones','Mantén el control.'],
  ['Remo con banda','12 a 15 repeticiones','Junta los omóplatos.'],
  ['Plancha','30 a 45 segundos','Abdomen firme.']
];

const exerciseVideos = [
  { match: ['flexiones'], id: 'IODxDxX7oi4' },
  { match: ['sentadillas', 'sentadilla'], id: 'YaXPRqUwItQ' },
  { match: ['puente de glúteos', 'hip thrust'], id: 'wPM8icPu6H8' },
  { match: ['plancha lateral'], id: 'K2VljzCC16g' },
  { match: ['plancha'], id: 'pSHjTRCQxIw' },
  { match: ['bird dog'], id: 'wiFNA3sqjCA' },
  { match: ['pantorrillas', 'elevación de pantorrillas'], id: 'gwLzBJYoWlI' },
  { match: ['dead bug'], id: '4XLEnwUr1d8' },
  { match: ['zancadas'], id: 'QOVaHwm-Q6U' },
  { match: ['sentadilla búlgara'], id: '2C-uNgKwPLE' },
  { match: ['pike push-up'], id: 'sposDXWEB0A' },
  { match: ['fondos'], id: '0326dy_-CzM' },
  { match: ['hollow hold'], id: 'LlDNef_Ztsc' }
];

let currentDay = Number(localStorage.getItem('calistenia90_current_day')) || 1;
let progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
let metrics = JSON.parse(localStorage.getItem(METRICS_KEY) || '[]');

const $ = id => document.getElementById(id);
const els = {
  phaseBadge: $('phaseBadge'), progressPercent: $('progressPercent'), progressRing: $('progressRing'),
  completedDays: $('completedDays'), progressBar: $('progressBar'), dayTitle: $('dayTitle'),
  daySubtitle: $('daySubtitle'), daySelect: $('daySelect'), exerciseList: $('exerciseList'),
  calendar: $('calendar'), weightInput: $('weightInput'), waistInput: $('waistInput'),
  lastMetrics: $('lastMetrics'), videoDialog: $('videoDialog'), videoTitle: $('videoTitle'),
  videoInstructions: $('videoInstructions'), videoLink: $('videoLink'), videoPlayer: $('videoPlayer')
};

function getPhase(day){ return phases.find(p => day >= p.from && day <= p.to); }
function getWorkout(day){
  const phase = getPhase(day);
  const weekday = (day - 1) % 7;
  const workout = phase.workouts[weekday];
  if(workout === null) return fallback;
  return workout;
}
function keyFor(day, index){ return `${day}-${index}`; }
function isDayComplete(day){
  const workout = getWorkout(day);
  return workout.length > 0 && workout.every((_, i) => progress[keyFor(day,i)] === true);
}
function save(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  localStorage.setItem('calistenia90_current_day', String(currentDay));
}
function renderDaySelect(){
  els.daySelect.innerHTML = '';
  for(let d=1; d<=90; d++){
    const option = document.createElement('option');
    option.value = d; option.textContent = `Día ${d}`;
    if(d === currentDay) option.selected = true;
    els.daySelect.appendChild(option);
  }
}
function renderExercises(){
  const workout = getWorkout(currentDay);
  els.exerciseList.innerHTML = '';
  workout.forEach((item, index) => {
    const [name, volume, instruction] = item;
    const row = document.createElement('article');
    row.className = 'exercise' + (progress[keyFor(currentDay,index)] ? ' done' : '');
    const checkbox = document.createElement('input');
    checkbox.type='checkbox'; checkbox.checked=!!progress[keyFor(currentDay,index)];
    checkbox.addEventListener('change', () => {
      progress[keyFor(currentDay,index)] = checkbox.checked;
      save(); render();
    });
    const info = document.createElement('div');
    info.innerHTML = `<h3>${name}</h3><p>${volume} · ${instruction}</p>`;
    const btn = document.createElement('button');
    btn.className='video-btn'; btn.textContent='▶ Ver técnica';
    btn.addEventListener('click', () => openVideo(name, instruction));
    row.append(checkbox, info, btn);
    els.exerciseList.appendChild(row);
  });
}
function renderCalendar(){
  els.calendar.innerHTML='';
  for(let d=1; d<=90; d++){
    const b=document.createElement('button');
    b.className='day-cell'; b.textContent=d;
    if(d===currentDay) b.classList.add('active');
    if(isDayComplete(d)) b.classList.add('done');
    b.addEventListener('click',()=>{currentDay=d;save();render();window.scrollTo({top:document.querySelector('.planner').offsetTop-20,behavior:'smooth'});});
    els.calendar.appendChild(b);
  }
}
function renderProgress(){
  const complete = Array.from({length:90},(_,i)=>i+1).filter(isDayComplete).length;
  const percent = Math.round((complete/90)*100);
  els.completedDays.textContent=complete;
  els.progressPercent.textContent=`${percent}%`;
  els.progressBar.style.width=`${percent}%`;
  els.progressRing.style.background=`conic-gradient(var(--accent) ${percent}%, #e5e7eb ${percent}%)`;
}
function renderMetrics(){
  if(!metrics.length){ els.lastMetrics.textContent='Aún no hay registros.'; return; }
  const last=metrics[metrics.length-1];
  els.lastMetrics.textContent=`Último registro: ${last.weight || '—'} kg · cintura ${last.waist || '—'} cm · ${last.date}`;
}
function findVideoId(name){
  const normalized = name.toLowerCase();
  const found = exerciseVideos.find(video => video.match.some(term => normalized.includes(term)));
  return found ? found.id : 'pSHjTRCQxIw';
}
function closeVideo(){
  els.videoPlayer.src = '';
  els.videoDialog.close();
}
function openVideo(name, instruction){
  const videoId = findVideoId(name);
  els.videoTitle.textContent = name;
  els.videoInstructions.textContent = instruction;
  els.videoPlayer.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&cc_lang_pref=es`;
  els.videoLink.href = `https://www.youtube.com/watch?v=${videoId}`;
  els.videoDialog.showModal();
}
function render(){
  const phase=getPhase(currentDay);
  els.phaseBadge.textContent=phase.name;
  els.dayTitle.textContent=`Día ${currentDay}`;
  els.daySubtitle.textContent=phase.subtitle;
  renderDaySelect(); renderExercises(); renderCalendar(); renderProgress(); renderMetrics();
}

$('prevDay').addEventListener('click',()=>{if(currentDay>1){currentDay--;save();render();}});
$('nextDay').addEventListener('click',()=>{if(currentDay<90){currentDay++;save();render();}});
els.daySelect.addEventListener('change',e=>{currentDay=Number(e.target.value);save();render();});
$('completeDay').addEventListener('click',()=>{getWorkout(currentDay).forEach((_,i)=>progress[keyFor(currentDay,i)]=true);save();render();});
$('resetDay').addEventListener('click',()=>{getWorkout(currentDay).forEach((_,i)=>delete progress[keyFor(currentDay,i)]);save();render();});
$('saveMetrics').addEventListener('click',()=>{
  const weight=els.weightInput.value.trim(); const waist=els.waistInput.value.trim();
  if(!weight && !waist){alert('Ingresa al menos el peso o la cintura.');return;}
  metrics.push({weight,waist,date:new Date().toLocaleDateString('es-PE')});
  localStorage.setItem(METRICS_KEY,JSON.stringify(metrics));
  els.weightInput.value=''; els.waistInput.value=''; renderMetrics();
});
$('closeDialog').addEventListener('click',closeVideo);
els.videoDialog.addEventListener('click',e=>{if(e.target===els.videoDialog)closeVideo();});
els.videoDialog.addEventListener('cancel',e=>{e.preventDefault();closeVideo();});

render();
