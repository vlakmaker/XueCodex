"use strict";(self.webpackChunkxuecodex=self.webpackChunkxuecodex||[]).push([[4293],{1673:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"topics/machine-learning/vectorizing-logistic-regression","title":"Vectorizing Logistic Regression","description":"This knowledge item (KI) explains how we move from a loop-based implementation of logistic regression to a clean, fast, vectorized version using NumPy.","source":"@site/docs/topics/machine-learning/vectorizing-logistic-regression.md","sourceDirName":"topics/machine-learning","slug":"/topics/machine-learning/vectorizing-logistic-regression","permalink":"/docs/topics/machine-learning/vectorizing-logistic-regression","draft":false,"unlisted":false,"editUrl":"https://github.com/vlakmaker/XueCodex/tree/main/docs/topics/machine-learning/vectorizing-logistic-regression.md","tags":[{"inline":true,"label":"machine-learning","permalink":"/docs/tags/machine-learning"},{"inline":true,"label":"logistic regression","permalink":"/docs/tags/logistic-regression"},{"inline":true,"label":"derivatives","permalink":"/docs/tags/derivatives"}],"version":"current","frontMatter":{"id":"vectorizing-logistic-regression","title":"Vectorizing Logistic Regression","tags":["machine-learning","logistic regression","derivatives"]},"sidebar":"tutorialSidebar","previous":{"title":"Understanding the Training Process of a Machine Learning Model","permalink":"/docs/topics/machine-learning/training-process-of-ml"},"next":{"title":"What is Machine Learning","permalink":"/docs/topics/machine-learning/what-is-machine-learning"}}');var r=n(4848),d=n(8453);const t={id:"vectorizing-logistic-regression",title:"Vectorizing Logistic Regression",tags:["machine-learning","logistic regression","derivatives"]},c="Vectorizing Logistic Regression",o={},l=[{value:"\ud83d\udccc Goal",id:"-goal",level:2},{value:"\u2699\ufe0f Logistic Regression Prediction",id:"\ufe0f-logistic-regression-prediction",level:2},{value:"\ud83e\uddee Loop-Based vs. Vectorized",id:"-loop-based-vs-vectorized",level:2},{value:"\ud83d\udd01 Loop-Based:",id:"-loop-based",level:3},{value:"\u26a1 Vectorized:",id:"-vectorized",level:3},{value:"\ud83d\udd04 Gradient Descent Update",id:"-gradient-descent-update",level:2},{value:"\ud83d\udcca Shapes Recap",id:"-shapes-recap",level:2},{value:"\u2705 Summary",id:"-summary",level:2}];function a(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"vectorizing-logistic-regression",children:"Vectorizing Logistic Regression"})}),"\n",(0,r.jsx)(i.p,{children:"This knowledge item (KI) explains how we move from a loop-based implementation of logistic regression to a clean, fast, vectorized version using NumPy."}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"-goal",children:"\ud83d\udccc Goal"}),"\n",(0,r.jsx)(i.p,{children:"We want to:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Predict probabilities using logistic regression"}),"\n",(0,r.jsx)(i.li,{children:"Compute the cost and gradients"}),"\n",(0,r.jsxs)(i.li,{children:["Update parameters (weights ",(0,r.jsx)(i.code,{children:"w"})," and bias ",(0,r.jsx)(i.code,{children:"b"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:["Make this fast using ",(0,r.jsx)(i.strong,{children:"vectorization"})]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"\ufe0f-logistic-regression-prediction",children:"\u2699\ufe0f Logistic Regression Prediction"}),"\n",(0,r.jsx)(i.p,{children:"For a single training example:"}),"\n",(0,r.jsx)(i.p,{children:"For multiple examples:"}),"\n",(0,r.jsx)(i.p,{children:"Where:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"X"})," is the input matrix (n_features x m_examples)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"w"})," is the weight vector (n_features x 1)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"b"})," is the bias (scalar)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"Z"})," is the linear combination (1 x m)"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"A"})," is the activation/prediction (1 x m)"]}),"\n"]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"-loop-based-vs-vectorized",children:"\ud83e\uddee Loop-Based vs. Vectorized"}),"\n",(0,r.jsx)(i.h3,{id:"-loop-based",children:"\ud83d\udd01 Loop-Based:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"for i in range(m):\n    z[i] = np.dot(w.T, x[i]) + b\n    a[i] = sigmoid(z[i])\n    dz[i] = a[i] - y[i]\n    dw += x[i] * dz[i]\n    db += dz[i]\n"})}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h3,{id:"-vectorized",children:"\u26a1 Vectorized:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"Z = np.dot(w.T, X) + b     # shape: (1, m)\nA = sigmoid(Z)             # shape: (1, m)\ndZ = A - Y                 # shape: (1, m)\ndw = (1/m) * np.dot(X, dZ.T)\ndb = (1/m) * np.sum(dZ)\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Broadcasting takes care of adding ",(0,r.jsx)(i.code,{children:"b"})," to each column in ",(0,r.jsx)(i.code,{children:"Z"}),"."]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"-gradient-descent-update",children:"\ud83d\udd04 Gradient Descent Update"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"w = w - alpha * dw\nb = b - alpha * db\n"})}),"\n",(0,r.jsx)(i.p,{children:"This step is repeated over many iterations until the model converges."}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"-shapes-recap",children:"\ud83d\udcca Shapes Recap"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Variable"}),(0,r.jsx)(i.th,{children:"Shape"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"X"})}),(0,r.jsx)(i.td,{children:"(n_features, m)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"w"})}),(0,r.jsx)(i.td,{children:"(n_features, 1)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Z"})}),(0,r.jsx)(i.td,{children:"(1, m)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"A"})}),(0,r.jsx)(i.td,{children:"(1, m)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Y"})}),(0,r.jsx)(i.td,{children:"(1, m)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"dZ"})}),(0,r.jsx)(i.td,{children:"(1, m)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"dw"})}),(0,r.jsx)(i.td,{children:"(n_features, 1)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"db"})}),(0,r.jsx)(i.td,{children:"scalar"})]})]})]}),"\n",(0,r.jsx)(i.hr,{}),"\n",(0,r.jsx)(i.h2,{id:"-summary",children:"\u2705 Summary"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Concept"}),(0,r.jsx)(i.th,{children:"Loop Version"}),(0,r.jsx)(i.th,{children:"Vectorized Version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Prediction"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"a[i] = sigmoid(z[i])"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"A = sigmoid(Z)"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Gradients"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"dw1 += x1[i] * dz[i]"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"dw = X.dot(dZ.T)/m"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"Bias"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"db += dz[i]"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"db = sum(dZ)/m"})})]})]})]}),"\n",(0,r.jsx)(i.hr,{})]})}function h(e={}){const{wrapper:i}={...(0,d.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>c});var s=n(6540);const r={},d=s.createContext(r);function t(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);