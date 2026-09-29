import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// Run with the bundled runtime; keep its libraries out of the website dependencies.
const { RUNTIME_NODE_MODULES, PRESENTATIONS_SKILL_DIR, RUNTIME_PYTHON } = process.env;
if (!RUNTIME_NODE_MODULES || !PRESENTATIONS_SKILL_DIR || !RUNTIME_PYTHON) throw new Error('Set bundled presentation runtime paths.');
const { Presentation, PresentationFile, FileBlob } = await import(pathToFileURL(path.join(RUNTIME_NODE_MODULES, '@oai/artifact-tool/dist/artifact_tool.mjs')));
const { finalizePresentation } = await import(pathToFileURL(path.join(PRESENTATIONS_SKILL_DIR, 'container_tools/artifact_tool_utils.mjs')));
const root = process.cwd();
const build = path.join(root, '.codex-build/architecture-deck');
const output = path.join(root, 'public/downloads/officeai-industrial-architecture-2026-09-29.pptx');
await fs.mkdir(build, { recursive: true });
await fs.mkdir(path.dirname(output), { recursive: true });
const ppt = Presentation.create({ slideSize: { width: 1600, height: 1200 } });
const C = { ink: '#131212', gray: '#5E5E66', blue: '#134CFF', border: '#DFE4EE', bg: '#F7F8FA', white: '#FFFFFF' };
const font = 'Arial Unicode MS';
function rect(s, x, y, w, h, fill=C.white, border=C.border) {
  return s.shapes.add({ geometry:'rect', position:{left:x,top:y,width:w,height:h}, fill, line:{fill:border,width:1}, borderRadius:8 });
}
function text(s, value, x, y, w, h=35, size=24, color=C.ink, bold=false) {
  const t=s.shapes.add({geometry:'textbox',name:value.slice(0,30),position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
  t.text=value;
  t.text.style={typeface:font,fontSize:size,bold,color,autoFit:'none',wrap:'none',insets:{top:0,bottom:0,left:0,right:0},verticalAlignment:'middle'};
  return t;
}
function card(s,x,y,w,h,title,lines,opts={}) {
  const box=rect(s,x,y,w,h,opts.fill??C.white);
  text(s,title,x+22,y+16,w-44,38,opts.titleSize??29,C.ink,true);
  lines.forEach((v,i)=>text(s,v,x+22,y+64+i*31,w-44,29,opts.size??22,C.gray));
  return box;
}
function arrow(s,x1,y1,x2,y2,label='',dashed=false,labelX,labelY,labelW=150) {
  const pin=(x,y)=>s.shapes.add({geometry:'rect',position:{left:x,top:y,width:.1,height:.1},fill:'none',line:{fill:'none',width:0}});
  const a=pin(x1,y1),b=pin(x2,y2);
  s.shapes.connect(a,b,{kind:'straight',line:{fill:dashed? '#8590A5':C.blue,width:2,style:dashed?'dashed':'solid'},tail:{type:'triangle',width:'med',length:'med'}});
  if(label)text(s,label,labelX??Math.min(x1,x2),labelY??Math.min(y1,y2)-30,labelW,26,20,dashed?C.gray:C.blue);
}
function title(s,t,sub) {
  s.background.fill=C.bg;
  text(s,t,48,26,1460,66,48,C.ink,true);
  text(s,sub,48,99,1470,36,26,C.gray);
}
function footer(s,y=1070) {
  rect(s,48,y,1504,79);
  text(s,'业务可信',72,y+10,200,30,25,C.ink,true);
  text(s,'场景评测 · 依据溯源 · 人工复核',72,y+43,680,27,22,C.gray);
  text(s,'数据安全可信',834,y+10,400,30,25,C.ink,true);
  text(s,'可信环境 · 最小权限 · 数据边界',834,y+43,690,27,22,C.gray);
}

// Slide 1: OfficeAI. All components and six request arrows are native objects.
{
  const s=ppt.slides.add();
  title(s,'OfficeAI 办公智能','组件协同与内外部 Token 供给');
  rect(s,48,163,1130,860,C.bg);
  text(s,'客户私有化可信环境',76,181,1060,40,30,C.ink,true);
  card(s,76,247,1074,100,'Agent Admin｜智能体管理',['身份权限 · 发布审批 · 执行审计'],{titleSize:28});
  text(s,'治理覆盖全部组件',846,265,275,35,21,C.gray);
  const xs=[76,447,818];
  card(s,xs[0],391,332,143,'SkillHub',['企业技能中心','工作方法 · 版本 · 复用']);
  card(s,xs[1],391,332,143,'Connectors',['连接 OA、ERP 等已有系统','按权限查询与执行业务操作'],{size:20});
  card(s,xs[2],391,332,143,'知识库',['组织知识沉淀','制度文档 · 检索引用 · 更新'],{size:20});
  card(s,76,625,1074,105,'OfficeAgent｜员工入口与任务执行',['理解任务 · 调用技能与工具 · 形成成果']);
  xs.forEach((x,i)=>arrow(s,x+166,625,x+166,534,['使用技能','调用系统','检索知识'][i],false,x+183,570,135));
  card(s,76,825,350,163,'私有模型服务',['客户自有 / 专属算力部署','数据内部处理 · 内部额度核算'],{size:20});
  text(s,'内部 Token',96,790,300,30,22,C.blue);
  card(s,680,825,470,163,'TokenHub｜统一模型入口',['模型选择 · 路由 · 配额','用量计量 · 调用审计'],{titleSize:28});
  arrow(s,915,730,915,825,'模型调用',false,936,763);
  arrow(s,680,906,426,906,'敏感任务仅内部',false,461,866,210);
  card(s,1304,825,248,163,'SaaS 模型 API',['经授权的外部服务','外部额度 / 按调用计费'],{titleSize:26,size:19});
  text(s,'外部 Token · 可选',1304,786,260,34,23,C.blue);
  arrow(s,1150,906,1304,906,'允许外发',false,1188,849,125);
  text(s,'+ 已授权',1188,876,125,25,19,C.blue);
  text(s,'调用前检查策略',1240,653,320,28,22,C.gray);
  text(s,'与必要脱敏',1240,687,320,28,22,C.gray);
  text(s,'支持仅使用内部模型',1240,729,320,28,22,C.gray);
  footer(s,1041);
  text(s,'箭头表示调用请求方向，响应返回省略。',48,1133,1470,25,20,C.gray);
  text(s,'Token 是模型推理用量；API Key 是访问凭据，由 TokenHub 统一管理。',48,1162,1490,25,20,C.gray);
  s.speakerNotes.textFrame.setText('内容来自用户确认的 OfficeAI 架构图 v3（docs/diagrams/officeai-components-token-2026-09-29-v3.png）。样式参考 https://bigmodel.cn/glm-coding 。OfficeAI 组件在客户侧私有化可信环境部署，外部模型服务可选。内部模型依赖客户算力与内部额度；外部模型依赖授权、网络与供应商额度。Agent Admin 为治理层，不串入调用链路。');
}

// Slide 2: three forms, assessment and onboarding; model supply; two environments.
{
  const s=ppt.slides.add();
  title(s,'工业智能体平台','三种方案形态 · 统一评测接入 · 两种部署方式');
  text(s,'厂商示例：圆木智能 · 炽橙科技 · 同元软件 · 浩辰科技 · 等',48,145,1500,30,22,C.gray);
  const x=[48,570,1092], w=460;
  card(s,x[0],196,w,96,'专业模型',['行业推理 · 识别 · 预测']);
  card(s,x[1],196,w,96,'工业智能体',['面向特定业务任务的 Agent']);
  card(s,x[2],196,w,96,'完整业务应用',['自带界面 · 流程 · 业务逻辑']);
  rect(s,48,325,1504,68,'#EDF1F8');
  text(s,'场景评测',72,342,180,35,28,C.ink,true);
  text(s,'真实任务与验收标准｜效果 · 安全 · 时延 · 成本 · 部署适配',270,342,1260,35,23,C.gray);
  for(const v of x) {arrow(s,v+w/2,292,v+w/2,325,'',true);arrow(s,v+w/2,393,v+w/2,430,'',true);}
  card(s,48,430,425,132,'TokenHub',['模型服务接入与统一路由','模型选择 · 配额 · 计量 · 审计'],{size:21});
  card(s,640,430,395,132,'Agent Runtime',['智能体接入与运行适配','任务编排 · 执行监控 · 异常处理'],{size:20});
  card(s,1092,430,460,132,'应用集成',['应用入口 / API / Connector','保留原有界面与业务流程'],{size:22});
  // Correct onboarding endpoints for the asymmetric entry-card widths.
  // Vertical dashed lines end within the matching entry card's top edge.
  arrow(s,640,496,473,496,'模型调用',false,505,459,130);
  rect(s,48,586,1504,74);
  text(s,'Connectors｜连接系统与设备',70,597,490,28,22,C.ink,true);
  text(s,'知识库｜工艺、规则与经验',576,597,490,28,22,C.ink,true);
  text(s,'平台治理｜权限、发布与审计',1080,597,458,28,22,C.ink,true);
  text(s,'运行时按权限调用系统与检索知识；完整应用按接口条件集成。',70,630,1450,24,19,C.gray);
  text(s,'模型供给｜独立于平台部署方式',48,676,1450,35,28,C.ink,true);
  card(s,48,728,425,104,'内部 Token',['环境内模型：算力、质量与内部额度'],{titleSize:26,size:20});
  card(s,640,728,350,104,'TokenHub',['按任务与数据策略路由'],{titleSize:26,size:20});
  card(s,1157,728,395,104,'外部 Token · 可选',['外部 API：网络、授权与供应商额度'],{titleSize:26,size:18});
  arrow(s,640,782,473,782,'内部路由',false,510,745,120);
  arrow(s,990,782,1157,782,'允许外发',false,1017,745,130);
  text(s,'Token 为模型推理用量；非生成式专业模型按其接口与计量方式接入。',48,840,1490,28,20,C.gray);
  text(s,'部署方式｜同一套平台能力，按方案确认适配',48,880,1490,35,28,C.ink,true);
  card(s,48,929,738,134,'SaaS｜平台运营的可信云环境',['模型接入 · Agent 运行 · 应用集成 · 连接器 · 知识库 · 治理','租户隔离 · 按授权连接企业系统 · 明确上云数据范围'],{titleSize:27,size:20});
  card(s,814,929,738,134,'私有化一体机｜客户侧可信环境',['模型接入 · Agent 运行 · 应用集成 · 连接器 · 知识库 · 治理','按配置部署模型与组件 · 可仅用内部模型，关闭外部通道'],{titleSize:27,size:20});
  text(s,'SaaS 平台 ≠ 外部模型 API；私有化也可按策略使用外部模型。部署支持以适配结果为准。',48,1073,1490,28,20,C.gray);
  text(s,'业务可信：评测、溯源、复核    ｜    数据安全可信：可信环境、最小权限、数据边界',48,1111,1490,30,22,C.ink);
  text(s,'虚线：评测与接入流程；蓝色实线：调用请求（响应省略）。厂商仅为候选示例，不表示已合作或接入。',48,1155,1490,26,19,C.gray);
  s.speakerNotes.textFrame.setText('内容来自用户确认的工业智能体 v2 图（docs/diagrams/industrial-agent-components-token-2026-09-29-v2.png）。样式参考 https://bigmodel.cn/glm-coding 。三种形态分别接入 TokenHub、Agent Runtime、应用入口/API/Connector。厂商为用户指定候选示例，不表示已合作或完成适配。平台交付方式与模型供给互相独立，各方案实际部署支持以评测和适配结果为准。');
}

const candidate=path.join(build,'candidate.pptx');
await (await PresentationFile.exportPptx(ppt)).save(candidate);
await finalizePresentation({
  workspaceDir:root,candidatePath:candidate,finalPath:output,
  pythonExecutable:RUNTIME_PYTHON,
  integrityValidatorPath:path.join(PRESENTATIONS_SKILL_DIR,'container_tools/inspect_presentation_package_integrity.py'),
  layoutValidatorPath:path.join(PRESENTATIONS_SKILL_DIR,'container_tools/inspect_presentation_layout_geometry.py'),
  layoutArgs:['--expected-slide-size-emu','15240000,11430000','--validate-heading-fit'],
  explicitTotalSlideCount:2,requiredNativeTableOwnerSlides:[],requiredNativeChartOwnerSlides:[],
  fontPolicy:{basis:'design',families:[font]},verifyArtifactToolImport:true,
  receiptPath:path.join(build,'validation-final.json'),
});
// Render the finalized file, rather than only the in-memory draft.
const final=await PresentationFile.importPptx(await FileBlob.load(output));
for(let i=0;i<final.slides.items.length;i++) {
  const slide=final.slides.items[i];
  const png=await final.export({slide,format:'png',scale:1});
  await fs.writeFile(path.join(build,`slide-${i+1}.png`),new Uint8Array(await png.arrayBuffer()));
}
console.log(output);
