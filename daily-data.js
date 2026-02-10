const wellsData = [
    {
        id: "W-2025-001",
        wellName: "Davies 23-14-11 No. 1-Alt",
        isActive: true,
        location: "Bienville Parish, LA",
        status: "Fracking Stage 4", // 狀態文字
        phase: "Fracking",          // ★ 新增標記：Fracking (會顯示裂縫) 或 Drilling
        reportDate: "2025/12/15",
        currentMD: 24185,
        currentTVD: 14780,
        plannedVertical: 14990,
        plannedHorizontal: 12214,
        actualVertical: 14990,
        actualHorizontal: 10575,
        costIncurred: 6278680,
        estimatedCost: 6121369,
        rop: 0,
        mudWeight: 16.5,
        dailyNotes: "Stage 4 fracking in progress. Pressure holding steady."
    },
    {
        id: "W-2025-003",
        wellName: "WY CO 2-35-26HC NO.2",
        isActive: true,
        location: "Bienville Parish, LA",
        status: "Horizonal Drilling",
        phase: "Drilling",          // ★ 標記為 Drilling (維持原本動畫)
        reportDate: "2026/1/15",
        currentMD: 18000,
        currentTVD: 14780,
        plannedVertical: 15300,
        plannedHorizontal: 12214,
        actualVertical: 15300,      // 垂直已完
        actualHorizontal: 3000,     // 水平鑽進中
        costIncurred: 482396,
        estimatedCost: 10986555,
        rop: 120,
        mudWeight: 12.5,
        dailyNotes: "Sliding section."
    }
];
