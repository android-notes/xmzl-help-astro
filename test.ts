export interface InsGroupParam {
    title: string;
    icon: string;
    expand: boolean;
    insID: string;
    children: FlowConfig[];
}

export class InsGroup extends FlowConfig {
    expand: boolean = true;

    init2({title, icon, expand, insID, children}: InsGroupParam): InsGroup {
        super.init({
            title: title,
            insID: insID,
            icon: icon,
            tips: '',
            help: '',
            desc: '-',
            showOptDialog: true,

            block: true,
            // cfgComponent: null,
            children: children,
            tag: ''
        });
        this.expand = expand;
        return this
    }
}


let data = [
    new InsGroup().init2({
        title: "条件判断",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g1",
        children: [
            new FlowConfig().init({
                title: "如果",
                insID: '1.1',
                icon: './icon/ins/default.png',
                tips: "条件成立时执行缩进的指令",
                help: "/",
                desc: '-',
                showOptDialog: true,

                // cfgComponent: If,
                block: true,
                children: [],
                tag: '条件,判断,if,如果'

            }),
            // new FlowConfig({
            //     title: "如果 - 条件 *",
            //     insID: '1.2',
            //     icon: './icon/ins/default.png',
            //     tips: "判断条件是否成立",
            //     help: "/",
            //     desc: '-',
            //     showOptDialog: true,
            //     // cfgComponent: If,
            //     block: true,
            //     children: []
            // }),
            new FlowConfig().init({
                title: "否则 - 如果",
                insID: '1.3',
                icon: './icon/ins/default.png',
                tips: "前面条件都不成立，并且当前条件成立时执行缩进的指令",
                help: "/",
                desc: "-",
                showOptDialog: true,

                // cfgComponent: If,
                block: true,
                children: [],
                tag: '条件,判断,else,否则,else if,elseif,elif'
            }),
            // new FlowConfig({
            //     title: "否则 - 条件 *",
            //     insID: '1.4',
            //     icon: './icon/ins/default.png',
            //     tips: "判断条件是否成立",
            //     help: "/",
            //     desc: '-',
            //     showOptDialog: true,
            //     // cfgComponent: If,
            //     block: true,
            //     children: []
            // }),
            new FlowConfig().init({
                title: "否则",
                insID: '1.5',
                icon: './icon/ins/default.png',
                tips: "前面所有条件都不成立时执行缩进的指令",
                help: "/",
                desc: '前面所有条件都不成立时执行缩进的指令',
                showOptDialog: false,
                // cfgComponent: If,
                block: true,
                children: [],
                tag: '条件,判断,else,否则'
            }),
            new FlowConfig().init({
                title: "图像是否存在",
                insID: '1.6',
                icon: './icon/ins/default.png',
                tips: "如果存在/不存在指定的图像则执行缩进的指令",
                help: "/",
                desc: "-",
                showOptDialog: true,
                block: true,
                children: [],
                tag: 'if,条件,判断,图像存在,包含图像'
            }),
            new FlowConfig().init({
                title: "文字是否存在(OCR)",
                insID: '1.7',
                icon: './icon/ins/default.png',
                tips: "如果存在/不存在指定的文字则执行缩进的指令",
                help: "/",
                desc: "-",
                showOptDialog: true,
                block: true,
                children: [],
                tag: 'if,条件,判断,文字存在,包含文字,包含文本'
            }),
        ]
    }),
    new InsGroup().init2({
        title: "循环",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g2",
        children: [
            new FlowConfig().init({
                title: "次数循环",
                insID: '2.1',
                icon: './icon/ins/default.png',
                tips: "对缩进的指令重复执行指定的次数",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: true,
                children: [],
                tag: '循环,次数,for,while,索引,下标'
            }),

            new FlowConfig().init({
                title: "条件循环",
                insID: '2.2',
                icon: './icon/ins/default.png',
                tips: "满足条件时执行缩进的指令，否则停止循环",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: true,
                children: [],
                tag: '循环,条件,for,while'
            }),

            new FlowConfig().init({
                title: "列表循环",
                insID: '2.3',
                icon: './icon/ins/default.png',
                tips: "依次获取列表中每一项的值并执行缩进的指令",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: true,
                children: [],
                tag: '循环,列表,for,while,索引,下标'
            }),
            new FlowConfig().init({
                title: "无限循环",
                insID: '2.4',
                icon: './icon/ins/default.png',
                tips: " ",
                help: "/",
                desc: '无限循环',
                showOptDialog: false,
                // cfgComponent: While,
                block: true,
                children: [],
                tag: '循环,for,while,无限,反复'
            }),

            new FlowConfig().init({
                title: "继续下次循环",
                insID: '2.5',
                icon: './icon/ins/default.png',
                tips: " ",
                help: "/",
                desc: '继续下次循环',
                showOptDialog: false,
                // cfgComponent: null,
                block: false,
                children: [],
                tag: '循环,继续,for,while,continue'
            }),

            new FlowConfig().init({
                title: "退出当前循环",
                insID: '2.6',
                icon: './icon/ins/default.png',
                tips: " ",
                help: "/",
                desc: '退出当前循环',
                showOptDialog: false,
                // cfgComponent: null,
                block: false,
                children: [],
                tag: '循环,退出,for,while,exit,break'
            }),
            new FlowConfig().init({
                title: "映射循环",
                insID: '2.7',
                icon: './icon/ins/default.png',
                tips: "依次获取映射中每一项的键和值并执行缩进的指令",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: null,
                block: true,
                children: [],
                tag: '循环,map,dict,while,映射,字典'
            }),
            new FlowConfig().init({
                title: "循环电子表格",
                insID: '2.8',
                icon: './icon/ins/default.png',
                tips: "依次获取电子中每一项然后执行缩进的指令",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: null,
                block: true,
                children: [],
                tag: '循环,电子表格,for,while,excel,单元格'
            }),

        ]
    }),
    new InsGroup().init2({
        title: "等待",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g3",
        children: [
            // new FlowConfig({
            //     title: "等待",
            //     insID: '3.1',
            //     icon: './icon/ins/default.png',
            //     tips: "让流程暂停一段时间",
            //     help: "/",
            //     desc: '-',
            //     showOptDialog: true,
            //     // cfgComponent: While,
            //     block: true,
            //     children: []
            // }),
            new FlowConfig().init({
                title: "暂停",
                insID: '3.2',
                icon: './icon/ins/default.png',
                tips: "让流程暂停一段时间",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: false,
                children: [],
                tag: '等待,wait,暂停,sleep,睡眠,休眠,pause'
            }),
            new FlowConfig().init({
                title: "等待图像",
                insID: '3.3',
                icon: './icon/ins/default.png',
                tips: "等待图像出现或者消失，使用 如果-条件 指令判断等待结果",
                help: "/",
                desc: "-",
                showOptDialog: true,
                block: false,
                children: [],
                tag: 'wait,等待图像,包含图像,图像存在,图像消失'
            }),
            new FlowConfig().init({
                title: "等待文字(OCR)",
                insID: '3.4',
                icon: './icon/ins/default.png',
                tips: "等待文字出现或者消失，使用 如果-条件 指令判断等待结果",
                help: "/",
                desc: "-",
                showOptDialog: true,
                block: false,
                children: [],
                tag: 'if,条件,判断,文字存在,包含文字,包含文本'
            }),
            // new FlowConfig({
            //     title: "条件循环",
            //     insID: '3.2',
            //     icon: './icon/ins/default.png',
            //     tips: "满足条件时则继续执行，否则停止循环",
            //     help: "/",
            //     desc: '-',
            //     showOptDialog: true,
            //     // cfgComponent: While,
            //     block: true,
            //     children: []
            // }),

            // new FlowConfig({
            //     title: "列表循环",
            //     insID: '3.3',
            //     icon: './icon/ins/default.png',
            //     tips: "依次获取列表中每一项的值并执行缩进的指令",
            //     help: "/",
            //     desc: '-',
            //     showOptDialog: true,
            //     // cfgComponent: While,
            //     block: true,
            //     children: []
            // }),
            // new FlowConfig({
            //     title: "无限循环",
            //     insID: '3.4',
            //     icon: './icon/ins/default.png',
            //     tips: " ",
            //     help: "/",
            //     desc: '-',
            //     showOptDialog: false,
            //     // cfgComponent: While,
            //     block: true,
            //     children: []
            // }),

            // new FlowConfig({
            //     title: "继续下次循环",
            //     insID: '3.5',
            //     icon: './icon/ins/default.png',
            //     tips: " ",
            //     help: "/",
            //     desc: '-',
            //     showOptDialog: false,
            //     // cfgComponent: null,
            //     block: false,
            //     children: []
            // }),
        ]
    }),
    new InsGroup().init2({
        title: "网页自动化",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g4",
        children: [
            new FlowConfig().init({
                title: "打开网页",
                insID: '4.1',
                icon: './icon/ins/default.png',
                tips: "使用浏览器自动打开网页",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: false,
                children: [],
                tag: 'web,open,browser,chrome,浏览器,网页,打开'
            }),
            new FlowConfig().init({
                title: "关闭网页",
                insID: '4.2',
                icon: './icon/ins/default.png',
                tips: "关闭指定的网页",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: false,
                children: [],
                tag: 'web,browser,chrome,浏览器,网页,关闭,close,stop,停止'
            }),
            new FlowConfig().init({
                title: "获取已打开的网页",
                insID: '4.3',
                icon: './icon/ins/default.png',
                tips: "根据标题或者网址获取已打开的网页",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: false,
                children: [],
                tag: 'web,open,browser,chrome,浏览器,网页,打开'
            }),
            new FlowConfig().init({
                title: "获取已打开的所有网页",
                insID: '4.4',
                icon: './icon/ins/default.png',
                tips: "获取已打开的所有网页并保存的列表",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: false,
                children: [],
                tag: 'web,open,browser,chrome,浏览器,网页,打开,list,列表'
            }),
            new InsGroup().init2({
                title: "元素操作",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "g4.5",
                children: [
                    new FlowConfig().init({
                        title: "点击网页元素",
                        insID: '4.5.1',
                        icon: './icon/ins/default.png',
                        tips: "点击网页中的文字/按钮/图片/链接等",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: While,
                        block: false,
                        children: [],
                        tag: 'web,browser,chrome,浏览器,网页,点击,元素,按钮,button,click,点击'
                    }),
                    new FlowConfig().init({
                        title: "填写网页输入框",
                        insID: '4.5.2',
                        icon: './icon/ins/default.png',
                        tips: "在网页的输入框中输入内容",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: While,
                        block: false,
                        children: [],
                        tag: 'web,open,browser,chrome,浏览器,网页,输入框,input'
                    }),
                    new FlowConfig().init({
                        title: "鼠标悬停在网页元素上",
                        insID: '4.5.3',
                        icon: './icon/ins/default.png',
                        tips: "将鼠标指针移动到网页中的文字/按钮/图片/链接等上面",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: While,
                        block: false,
                        children: [],
                        tag: 'web,open,browser,chrome,浏览器,网页,悬停,悬浮,hover,元素'
                    }),
                    new FlowConfig().init({
                        title: "设置网页下拉框",
                        insID: '4.5.4',
                        icon: './icon/ins/default.png',
                        tips: "设置下拉框的选项",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: While,
                        block: false,
                        children: [],
                        tag: 'web,browser,chrome,浏览器,下拉框,select,option'
                    }),
                    new FlowConfig().init({
                        title: "设置网页多选框",
                        insID: '4.5.5',
                        icon: './icon/ins/default.png',
                        tips: "设置多选框",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: While,
                        block: false,
                        children: [],
                        tag: 'web,browser,chrome,浏览器,多选框,复选框,input,checkbox'
                    }),
                    new FlowConfig().init({
                        title: "获取网页元素",
                        insID: '4.5.6',
                        icon: './icon/ins/default.png',
                        tips: "获取网页中的指定元素",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: While,
                        block: false,
                        children: [],
                        tag: 'web,browser,chrome,浏览器,网页,元素'
                    }),
                    new FlowConfig().init({
                        title: "获取网页关联元素",
                        insID: '4.5.7',
                        icon: './icon/ins/default.png',
                        tips: "获取网页中指定元素的父/子/兄弟元素并保存到列表",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: While,
                        block: false,
                        children: [],
                        tag: 'web,browser,chrome,浏览器,网页,关联,元素,列表,父亲,兄弟,孩子'
                    }),
                    new FlowConfig().init({
                        title: "获取网页相似元素",
                        insID: '4.5.8',
                        icon: './icon/ins/default.png',
                        tips: "获取网页中的相似元素并保存到列表",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: While,
                        block: false,
                        children: [],
                        tag: 'web,browser,chrome,浏览器,网页,相似,元素,列表'
                    }),

                    new FlowConfig().init({
                        title: "网页相似元素列表去重",
                        insID: '4.5.9',
                        icon: './icon/ins/default.png',
                        tips: "从相似元素列表2中移除相似元素列表1中的相同元素",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: While,
                        block: false,
                        children: [],
                        tag: 'web,browser,chrome,remove,deduplicate,duplicates,列表去重'
                    }),

                    new FlowConfig().init({
                        title: "网页元素滚动到窗口内",
                        insID: '4.5.10',
                        icon: './icon/ins/default.png',
                        tips: "自动横向/纵向滚动页面，让元素位于浏览器窗口可见范围内",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: While,
                        block: false,
                        children: [],
                        tag: 'web,browser,chrome,move,scroll,viewport,浏览器,窗口,移动,滚动,可见'
                    }),

                    new FlowConfig().init({
                        title: "网页元素是否存在",
                        insID: '4.5.11',
                        icon: './icon/ins/default.png',
                        tips: "如果网页存在/不存在指定元素则执行缩进的指令",
                        help: "/",
                        desc: '',
                        showOptDialog: true,
                        // cfgComponent: If,
                        block: true,
                        children: [],
                        tag: 'exist,if,web,条件,判断,存在,元素,网页'
                    }),
                    new FlowConfig().init({
                        title: "网页文本是否存在",
                        insID: '4.5.12',
                        icon: './icon/ins/default.png',
                        tips: "如果网页存在/不存在指定的文本则执行缩进的指令",
                        help: "/",
                        desc: '',
                        showOptDialog: true,
                        // cfgComponent: If,
                        block: true,
                        children: [],
                        tag: 'exist,if,web,条件,判断,存在,文本,文字,网页'
                    }),
                ]
            },),
            new InsGroup().init2({
                title: "网页操作",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "g4.7",
                children: [
                    new FlowConfig().init({
                        title: "执行JS脚本",
                        insID: '4.7.1',
                        icon: './icon/ins/default.png',
                        tips: "在指定的网页执行JS脚本",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'webpage,browser,js,JavaScript,执行脚本'
                    }),
                    new FlowConfig().init({
                        title: "获取网页像素缩放比例",
                        insID: '4.7.2',
                        icon: './icon/ins/default.png',
                        tips: "获取指定网页的像素缩放比例(非Chrome设置中的缩放)",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'webpage,browser,scale,devicePixelRatio,缩放比例'
                    }),
                ]
            },),
            new InsGroup().init2({
                title: "数据提取",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "g4.6",
                children: [
                    new FlowConfig().init({
                        title: "网页截图",
                        insID: '4.6.1',
                        icon: './icon/ins/default.png',
                        tips: "对指定的网页截图并保存到文件",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'webpage,browser,capture,浏览器,截屏,截图'

                    }),
                    new FlowConfig().init({
                        title: "获取网页元素属性",
                        insID: '4.6.2',
                        icon: './icon/ins/default.png',
                        tips: "获取网页元素的属性值",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'webpage,browser,property,元素属性值'

                    }),
                ]
            },)
        ]
    }),
    new InsGroup().init2({
        title: "桌面软件自动化",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g5",
        children: [
            new FlowConfig().init({
                title: "点击桌面元素",
                insID: '5.3',
                icon: './icon/ins/default.png',
                tips: "点击桌面软件中的按钮等",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: false,
                children: [],
                tag: '桌面,windows,按钮,button,click,点击'
            }),
            new FlowConfig().init({
                title: "鼠标悬停在桌面元素上",
                insID: '5.4',
                icon: './icon/ins/default.png',
                tips: "将鼠标指针移动到指定的元素上面",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: false,
                children: [],
                tag: '桌面,windows,按钮,button,悬浮,hover,悬停'
            }),
            new FlowConfig().init({
                title: "填写桌面输入框",
                insID: '5.5',
                icon: './icon/ins/default.png',
                tips: "在桌面软件的输入框中输入内容",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: false,
                children: [],
                tag: '桌面,windows,输入框,input,text,文本框'
            }),
            new FlowConfig().init({
                title: "获取桌面相似元素",
                insID: '5.6',
                icon: './icon/ins/default.png',
                tips: "获取桌面软件中的相似元素并保存到列表",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: false,
                children: [],
                tag: '桌面,windows,相似,元素,列表,list'
            }),
            new FlowConfig().init({
                title: "获取桌面关联元素",
                insID: '5.7',
                icon: './icon/ins/default.png',
                tips: "获取桌面指定元素的父/子/兄弟元素并保存到列表",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: false,
                children: [],
                tag: '桌面,windows,相似,元素,列表,list,父亲,兄弟,孩子'
            }),
            new FlowConfig().init({
                title: "获取桌面元素",
                insID: '5.8',
                icon: './icon/ins/default.png',
                tips: "获取桌面软件的元素",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: false,
                children: [],
                tag: '桌面,windows,元素'
            }),
            new FlowConfig().init({
                title: "桌面元素是否存在",
                insID: '5.9',
                icon: './icon/ins/default.png',
                tips: "如果存在/不存在指定的桌面元素则执行缩进的指令",
                help: "/",
                desc: '',
                showOptDialog: true,
                // cfgComponent: If,
                block: true,
                children: [],
                tag: '条件,判断,存在,元素,桌面,win'
            }),
            new InsGroup().init2({
                title: "窗口操作",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "g5.10",
                children: [
                    new FlowConfig().init({
                        title: "获取窗口对象",
                        insID: '5.10.1',
                        icon: './icon/ins/default.png',
                        tips: "获取窗口对象",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'window,getwindow,获取窗口'

                    }),
                    new FlowConfig().init({
                        title: "激活窗口",
                        insID: '5.10.2',
                        icon: './icon/ins/default.png',
                        tips: "激活窗口",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'window,foregroundwindow,active,激活,前台'
                    }),
                    new FlowConfig().init({
                        title: "设置窗口状态",
                        insID: '5.10.3',
                        icon: './icon/ins/default.png',
                        tips: "设置窗口状态",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'window,status,max,min,最大化,最小化,还原'
                    }),
                    new FlowConfig().init({
                        title: "显示/隐藏窗口",
                        insID: '5.10.4',
                        icon: './icon/ins/default.png',
                        tips: "设置窗口显示或者隐藏",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'window,visibility,显示,隐藏'
                    }),
                    new FlowConfig().init({
                        title: "移动窗口",
                        insID: '5.10.5',
                        icon: './icon/ins/default.png',
                        tips: "移动窗口到指定位置",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'window,move,移动窗口'
                    }),
                    new FlowConfig().init({
                        title: "调整窗口大小",
                        insID: '5.10.6',
                        icon: './icon/ins/default.png',
                        tips: "调整窗口大小",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'window,resize,调整窗口大小'
                    }),
                    new FlowConfig().init({
                        title: "关闭窗口",
                        insID: '5.10.7',
                        icon: './icon/ins/default.png',
                        tips: "关闭窗口",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'window,close,关闭窗口'
                    }),
                    new FlowConfig().init({
                        title: "获取窗口对象列表",
                        insID: '5.10.8',
                        icon: './icon/ins/default.png',
                        tips: "获取窗口对象列表",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'window,窗口'
                    }),
                ]
            },),
            new InsGroup().init2({
                title: "数据提取",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "g5.11",
                children: [
                    new FlowConfig().init({
                        title: "桌面元素截图",
                        insID: '5.11.1',
                        icon: './icon/ins/default.png',
                        tips: "对指定的元素截图并保存到文件",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'window,capture,截屏,截图'

                    }),
                    new FlowConfig().init({
                        title: "获取桌面元素属性",
                        insID: '5.11.2',
                        icon: './icon/ins/default.png',
                        tips: "获取桌面元素的属性值",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'window,element,property,元素属性值'

                    }),
                ]
            },)
        ]
    }),
    new InsGroup().init2({
        title: "鼠标键盘",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g6",
        children: [
            new FlowConfig().init({
                title: "滚动鼠标",
                insID: '6.1',
                icon: './icon/ins/default.png',
                tips: "滚动鼠标滚轮",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: '鼠标,mouse,滚动,滚轮,scroller'
            }),
            new FlowConfig().init({
                title: "鼠标拖动",
                insID: '6.2',
                icon: './icon/ins/default.png',
                tips: "从开始位置拖动到终止位置",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: '鼠标,mouse,拖动,拖拽,drag'
            }),
            new FlowConfig().init({
                title: "鼠标点击",
                insID: '6.3',
                icon: './icon/ins/default.png',
                tips: "鼠标点击指定位置",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: '鼠标,mouse,点击,按钮,button,click'
            }),
            new FlowConfig().init({
                title: "移动鼠标",
                insID: '6.4',
                icon: './icon/ins/default.png',
                tips: "移动鼠标指针到指定位置",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'mouse,move,鼠标,移动'
            }),
            new FlowConfig().init({
                title: "鼠标悬停在图像上",
                insID: '6.5',
                icon: './icon/ins/default.png',
                tips: "移动鼠标指针到图像上（建议优先通过捕获元素方式，图像匹配无法达到100%准确）",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'mouse,move,hover,鼠标,移动,图像'
            }),
            new FlowConfig().init({
                title: "点击图像",
                insID: '6.6',
                icon: './icon/ins/default.png',
                tips: "在指定范围内查找并点击图像（建议优先通过捕获元素方式，图像匹配无法达到100%准确）",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'mouse,click,鼠标点击,图像'
            }),
            new FlowConfig().init({
                title: "键盘输入",
                insID: '6.7',
                icon: './icon/ins/default.png',
                tips: "输入文字/快捷键",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'keyboard,键盘输入'
            }),
            new FlowConfig().init({
                title: "鼠标悬停在文字上(OCR)",
                insID: '6.8',
                icon: './icon/ins/default.png',
                tips: "移动鼠标指针到文字上（建议优先通过捕获元素方式，OCR匹配无法达到100%准确）",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'mouse,move,hover,鼠标,移动,文字'
            }),
            new FlowConfig().init({
                title: "鼠标点击文字(OCR)",
                insID: '6.9',
                icon: './icon/ins/default.png',
                tips: "鼠标点击文字（建议优先通过捕获元素方式，OCR匹配无法达到100%准确）",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'mouse,move,click,鼠标点击,文字'
            }),
        ]
    }),
    new InsGroup().init2({
        title: "Excel / WPS表格",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g7",
        children: [
            new FlowConfig().init({
                title: "打开 / 新建表格",
                insID: '7.1',
                icon: './icon/ins/default.png',
                tips: "打开已经存在的表格文件或者新建表格文件",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'excel,wps,office,open,create,打开,新建,表格,电子表格'
            }),
            new FlowConfig().init({
                title: "关闭电子表格",
                insID: '7.2',
                icon: './icon/ins/default.png',
                tips: "关闭使用的Office/WPS",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'excel,wps,office,close,save,关闭,保存,表格,电子表格'
            }),
            new InsGroup().init2({
                title: "内容读写",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "g7.3",
                children: [
                    new FlowConfig().init({
                        title: "读取表格格式数据",
                        insID: '7.3.1',
                        icon: './icon/ins/default.png',
                        tips: "获取表格中的数据，保留格式，例如数值格式，日期格式等",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'excel,wps,office,read,读取表格,电子表格'
                    }),
                    new FlowConfig().init({
                        title: "读取表格展示数据",
                        insID: '7.3.2',
                        icon: './icon/ins/default.png',
                        tips: "获取Office/WPS中显示的数据，获取到的数据会自动转换成文本",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'excel,wps,office,read,读取表格,电子表格'
                    }),
                    new FlowConfig().init({
                        title: "写入表格",
                        insID: '7.3.3',
                        icon: './icon/ins/default.png',
                        tips: "把数据添加到表格文件中的指定位置",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'excel,wps,office,write,add,append,写入,添加,追加,表格,电子表格'
                    }),
                    new FlowConfig().init({
                        title: "单元格插入图片",
                        insID: '7.3.4',
                        icon: './icon/ins/default.png',
                        tips: "把图片插入到表格文件的指定位置",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'excel,wps,office,write,add,insert,image,picture,图片,写入,添加,插入,表格,电子表格'
                    }),
                    new FlowConfig().init({
                        title: "删除单元格图片",
                        insID: '7.3.5',
                        icon: './icon/ins/default.png',
                        tips: "删除指定单元格中的所有图片",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'excel,wps,office,delete,remove,image,picture,图片,删除,移除,清除,表格,电子表格'
                    }),
                ]
            }),

            new InsGroup().init2({
                title: "行 / 列操作",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "g7.4",
                children: [
                    new FlowConfig().init({
                        title: "表格总行数",
                        insID: '7.4.1',
                        icon: './icon/ins/default.png',
                        tips: "获取电子表格已写入范围的最后一行的行号",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'excel,wps,office,lineNum,rowCount,total,总行数,电子表格'
                    }),
                    new FlowConfig().init({
                        title: "表格总列数",
                        insID: '7.4.2',
                        icon: './icon/ins/default.png',
                        tips: "获取电子表格已写入范围的总列数",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'excel,wps,office,columnCount,total,总列数,电子表格'
                    }),
                ]
            }),

            new InsGroup().init2({
                title: "Sheet页操作",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "g7.8",
                children: [
                    new FlowConfig().init({
                        title: "添加Sheet页",
                        insID: '7.8.1',
                        icon: './icon/ins/default.png',
                        tips: "添加Sheet页",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'excel,office,wps,sheet,add,添加'
                    }),
                    new FlowConfig().init({
                        title: "删除Sheet页",
                        insID: '7.8.2',
                        icon: './icon/ins/default.png',
                        tips: "删除Sheet页",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'excel,office,wps,sheet,delete,删除'
                    }),
                    new FlowConfig().init({
                        title: "激活Sheet页",
                        insID: '7.8.3',
                        icon: './icon/ins/default.png',
                        tips: "激活Sheet页",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'excel,office,wps,sheet,active,激活'
                    }),
                    new FlowConfig().init({
                        title: "获取Sheet页名称",
                        insID: '7.8.4',
                        icon: './icon/ins/default.png',
                        tips: "获取Sheet页名称",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'excel,office,wps,sheet,active,激活'
                    }),
                    new FlowConfig().init({
                        title: "Sheet页是否存在",
                        insID: '7.8.5',
                        icon: './icon/ins/default.png',
                        tips: "Sheet页是否存在",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: true,
                        children: [],
                        tag: 'excel,office,wps,sheet,exist,存在,不存在,有,没有'
                    }),
                ]
            }),

        ]
    }),
    new InsGroup().init2({
        title: "对话框",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g13",
        children: [
            new FlowConfig().init({
                title: "打开消息弹窗",
                insID: '13.1',
                icon: './icon/ins/default.png',
                tips: "打开消息弹窗并展示自定义的消息",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'message,dialog,tips,提示窗口,消息窗口'
            }),
            new FlowConfig().init({
                title: "打开输入对话框",
                insID: '13.2',
                icon: './icon/ins/default.png',
                tips: " ",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'message,dialog,tips,输入窗口,输入弹窗'
            }),
            new FlowConfig().init({
                title: "是否点击指定的按钮",
                insID: '13.3',
                icon: './icon/ins/default.png',
                tips: "是否点击了确定或者取消按钮",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: true,
                children: [],
                tag: 'message,dialog,tips,窗口,弹窗'
            }),

        ]
    }),
    new InsGroup().init2({
        title: "数据处理",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g8",
        children: [
            new FlowConfig().init({
                title: "设置变量",
                insID: '8.2',
                icon: './icon/ins/default.png',
                tips: " ",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'variable,define,set,get,定义变量,设置变量'
            }),
            new FlowConfig().init({
                title: "获取全局变量",
                insID: '8.5',
                icon: './icon/ins/default.png',
                tips: " ",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'variable,define,set,get,变量,获取,全局变量'
            }),
            new FlowConfig().init({
                title: "生成随机数",
                insID: '8.1',
                icon: './icon/ins/default.png',
                tips: " ",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: Random,
                block: false,
                children: [],
                tag: 'random,随机数'
            }),
            new FlowConfig().init({
                title: "生成词云",
                insID: '8.3',
                icon: './icon/ins/default.png',
                tips: "获取文本中词语的热度",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: Random,
                block: false,
                children: [],
                tag: 'wordcloud,hotness,词云,热度'
            }),
            new InsGroup().init2({
                title: "列表操作",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "g8.4",
                children: [
                    new FlowConfig().init({
                        title: "列表添加数据",
                        insID: '8.4.1',
                        icon: './icon/ins/default.png',
                        tips: "给列表添加数据",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: Fetch,
                        block: false,
                        children: [],
                        tag: 'list,add,append,insert,列表,添加,追加,插入'

                    }),
                    // new FlowConfig().init({
                    //     title: "获取文本长度",
                    //     insID: '999.3.2',
                    //     icon: './icon/ins/default.png',
                    //     tips: " ",
                    //     help: "/",
                    //     desc: '-',
                    //     showOptDialog: true,
                    //     // cfgComponent: Length,
                    //     block: false,
                    //     children: []
                    // }),
                ]
            },)

        ]
    }),
    new InsGroup().init2({
        title: "操作系统",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g9",
        children: [
            new FlowConfig().init({
                title: "截屏",
                insID: '9.0.1',
                icon: './icon/ins/default.png',
                tips: "对指定的窗口截屏",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'capture,screen,window,截屏,截图'
            }),
            new InsGroup().init2({
                title: "文件",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "g9.1",
                children: [
                    new FlowConfig().init({
                        title: "删除文件",
                        insID: '9.1.1',
                        icon: './icon/ins/default.png',
                        tips: "删除文件",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'file,delete,remove,rm,directory,删除文件,删除目录,删除文件夹'
                    }),
                    new FlowConfig().init({
                        title: "删除文件夹",
                        insID: '9.1.2',
                        icon: './icon/ins/default.png',
                        tips: "删除文件夹",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'file,delete,remove,rm,directory,删除文件,删除目录,删除文件夹'
                    }),
                    new FlowConfig().init({
                        title: "复制文件",
                        insID: '9.1.3',
                        icon: './icon/ins/default.png',
                        tips: "复制文件到指定的文件夹",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'file,copy,directory,复制文件,拷贝文件'
                    }),
                    new FlowConfig().init({
                        title: "复制文件夹",
                        insID: '9.1.4',
                        icon: './icon/ins/default.png',
                        tips: "复制文件夹到指定的文件夹",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'file,copy,directory,复制文件夹,拷贝文件夹'
                    }),
                    new FlowConfig().init({
                        title: "读取文件",
                        insID: '9.1.5',
                        icon: './icon/ins/default.png',
                        tips: "读取文件",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'file,read,读取文件,加载文件'
                    }),
                    new FlowConfig().init({
                        title: "写入文件",
                        insID: '9.1.6',
                        icon: './icon/ins/default.png',
                        tips: "写入文件",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'file,write,写入文件,追加文件'
                    }),
                    new FlowConfig().init({
                        title: "获取文件列表",
                        insID: '9.1.7',
                        icon: './icon/ins/default.png',
                        tips: "获取指定文件夹下的所有文件",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'file,文件列表'
                    }),
                ]
            }),
        ]
    }),
    new InsGroup().init2({
        title: "流程",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g10",
        children: [
            new FlowConfig().init({
                title: "调用流程",
                insID: '10.1',
                icon: './icon/ins/default.png',
                tips: "调用子流程",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'flow,call,invoke,execute,run,方法,函数,调用,执行,运行'
            }),
            new FlowConfig().init({
                title: "结束流程",
                insID: '10.2',
                icon: './icon/ins/default.png',
                tips: "只结束当前的流程",
                help: "/",
                desc: '结束当前的流程',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'flow,return,finish,exit,返回,退出,结束'
            }),
            new FlowConfig().init({
                title: "停止自动化",
                insID: '10.3',
                icon: './icon/ins/default.png',
                tips: "停止当前的自动化",
                help: "/",
                desc: '停止当前的自动化',
                showOptDialog: false,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'flow,stop,finish,exit,kill,terminate,end,停止,终止,结束,退出'
            }),
            new FlowConfig().init({
                title: "调用导入的指令",
                insID: '10.4',
                icon: './icon/ins/default.png',
                tips: "调用导入的指令",
                help: "/",
                desc: '',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'flow,call,invoke,execute,run,ins,方法,函数,调用,执行,运行,指令'
            }),
        ]
    }),
    new InsGroup().init2({
        title: "人工智能",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g11",
        children: [
            new InsGroup().init2({
                title: "光学字符识别(OCR)",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "11.1",
                children: [
                    new FlowConfig().init({
                        title: "通用文字识别",
                        insID: '11.1.1',
                        icon: './icon/ins/default.png',
                        tips: "识别图片/元素中的文字",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'ocr,文字识别,光学字符识别'
                    }),
                    new FlowConfig().init({
                        title: "证件识别",
                        insID: '11.1.2',
                        icon: './icon/ins/default.png',
                        tips: "识别身份证/银行卡/驾驶证等中的文字",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: 'ocr,文字识别,光学字符识别'
                    }),
                ]
            }),
            new InsGroup().init2({
                title: "验证码",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "11.2",
                children: [
                    new FlowConfig().init({
                        title: "字符验证码",
                        insID: '11.2.1',
                        icon: './icon/ins/default.png',
                        tips: "识别验证码中的文字",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: '文字验证码,验证码识别'
                    }),
                    new FlowConfig().init({
                        title: "图片旋转验证码",
                        insID: '11.2.2',
                        icon: './icon/ins/default.png',
                        tips: "识别图片旋转角度",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: '图片验证码,验证码识别,旋转'
                    }),
                    new FlowConfig().init({
                        title: "滑块验证码",
                        insID: '11.2.3',
                        icon: './icon/ins/default.png',
                        tips: "识别滑块滑动距离",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: '滑块验证码,验证码识别,滑动,拖动'
                    }),
                    new FlowConfig().init({
                        title: "文字点选验证码",
                        insID: '11.2.4',
                        icon: './icon/ins/default.png',
                        tips: "获取待点击文字的坐标",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        // cfgComponent: SetVar,
                        block: false,
                        children: [],
                        tag: '点击文字验证码'
                    }),
                ]
            }),
        ]
    }),
    new InsGroup().init2({
        title: "网络",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g12",
        children: [
            new InsGroup().init2({
                title: "邮件",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "12.1",
                children: [
                    new FlowConfig().init({
                        title: "发送邮件",
                        insID: '12.1.1',
                        icon: './icon/ins/default.png',
                        tips: "发送邮件",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '发送邮件'
                    }),

                ]
            }),

            new InsGroup().init2({
                title: "HTTP",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "12.2",
                children: [
                    new FlowConfig().init({
                        title: "下载文件",
                        insID: '12.2.1',
                        icon: './icon/ins/default.png',
                        tips: "下载文件",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '下载文件'
                    }),

                ]
            }),

        ]
    }),
    new InsGroup().init2({
        title: "手机",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "g14",
        children: [
            new FlowConfig().init({
                title: "连接手机",
                insID: '14.1',
                icon: './icon/ins/default.png',
                tips: "连接手机后才可以执行手机自动化",
                help: "/",
                desc: '-',
                showOptDialog: true,
                block: false,
                children: [],
                tag: '链接,连接,手机'
            }),
            // new FlowConfig().init({
            //     title: "断开手机连接",
            //     insID: '14.2',
            //     icon: './icon/ins/default.png',
            //     tips: "",
            //     help: "/",
            //     desc: '-',
            //     showOptDialog: true,
            //     block: false,
            //     children: [],
            //     tag: ''
            // }),
            // new FlowConfig().init({
            //     title: "并行执行",
            //     insID: '14.3',
            //     icon: './icon/ins/default.png',
            //     tips: "",
            //     help: "/",
            //     desc: '-',
            //     showOptDialog: true,
            //     block: false,
            //     children: [],
            //     tag: ''
            // }),

            new InsGroup().init2({
                title: "手机元素操作",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "14.4",
                children: [
                    new FlowConfig().init({
                        title: "点击手机元素",
                        insID: '14.4.1',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '点击,手机,元素,click'
                    }),
                    new FlowConfig().init({
                        title: "手机元素是否存在",
                        insID: '14.4.2',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: true,
                        children: [],
                        tag: '手机,元素,存在'
                    }),
                    new FlowConfig().init({
                        title: "获取手机元素",
                        insID: '14.4.3',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'get,手机,元素'
                    }),
                    new FlowConfig().init({
                        title: "获取手机相似元素",
                        insID: '14.4.4',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'get,相似元素,手机'
                    }),
                    new FlowConfig().init({
                        title: "获取手机关联元素",
                        insID: '14.4.6',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'get,关联元素,手机'
                    }),
                    new FlowConfig().init({
                        title: "手机元素截图",
                        insID: '14.4.5',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '手机,元素,截图'
                    }),
                ]
            }),
            new InsGroup().init2({
                title: "手机操作",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "14.5",
                children: [
                    new FlowConfig().init({
                        title: "点击手机按键",
                        insID: '14.5.1',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '点击,手机,按键,按钮,桌面,菜单,返回,home,menu'
                    }),
                    new FlowConfig().init({
                        title: "点击手机屏幕",
                        insID: '14.5.2',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '手机,点击,click'
                    }),
                    new FlowConfig().init({
                        title: "滑动手机屏幕",
                        insID: '14.5.3',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '滑动,手机,屏幕,swip'
                    }),
                    new FlowConfig().init({
                        title: "打开手机APP",
                        insID: '14.5.4',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '打开,open,手机,app,应用'
                    }),
                    new FlowConfig().init({
                        title: "关闭手机APP",
                        insID: '14.5.5',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '关闭,close,手机,app,应用'
                    }),

                    new FlowConfig().init({
                        title: "手机输入文字",
                        insID: '14.5.6',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '手机,输入,input'
                    }),
                    new FlowConfig().init({
                        title: "手机屏幕截图",
                        insID: '14.5.7',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '手机,截屏,截图'
                    }),
                    new FlowConfig().init({
                        title: "旋转手机屏幕",
                        insID: '14.5.8',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '旋转,手机,屏幕'
                    }),
                    new FlowConfig().init({
                        title: "点亮手机屏幕",
                        insID: '14.5.9',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '点亮,手机,屏幕'
                    }),
                    new FlowConfig().init({
                        title: "熄灭手机屏幕",
                        insID: '14.5.10',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '熄灭,手机,屏幕'
                    }),
                    new FlowConfig().init({
                        title: "手机执行Shell命令",
                        insID: '14.5.11',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'shell,命令'
                    }),
                    new FlowConfig().init({
                        title: "显示/隐藏点按位置",
                        insID: '14.5.12',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '点按,位置,显示,隐藏'
                    }),
                ]
            }),
            new InsGroup().init2({
                title: "手机数据处理",
                icon: './icon/ins/default.png',
                expand: true,
                insID: "14.6",
                children: [
                    new FlowConfig().init({
                        title: "获取手机文件",
                        insID: '14.6.1',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'file,文件,手机'
                    }),

                    new FlowConfig().init({
                        title: "发送文件到手机",
                        insID: '14.6.2',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: 'file,手机,文件'
                    }),

                    new FlowConfig().init({
                        title: "复制到手机粘贴板",
                        insID: '14.6.3',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '手机,粘贴板,剪切板'
                    }),
                    new FlowConfig().init({
                        title: "获取手机粘贴板文本",
                        insID: '14.6.4',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '手机,粘贴板,剪切板'
                    }),
                    // new FlowConfig().init({
                    //     title: "获取手机UI树",
                    //     insID: '14.6.5',
                    //     icon: './icon/ins/default.png',
                    //     tips: "",
                    //     help: "/",
                    //     desc: '-',
                    //     showOptDialog: true,
                    //     block: false,
                    //     children: [],
                    //     tag: '手机'
                    // }),
                    new FlowConfig().init({
                        title: "获取手机屏幕方向",
                        insID: '14.6.6',
                        icon: './icon/ins/default.png',
                        tips: "",
                        help: "/",
                        desc: '-',
                        showOptDialog: true,
                        block: false,
                        children: [],
                        tag: '手机,屏幕,方向'
                    }),
                    // new FlowConfig().init({
                    //     title: "获取手机信息",
                    //     insID: '14.6.7',
                    //     icon: './icon/ins/default.png',
                    //     tips: "",
                    //     help: "/",
                    //     desc: '-',
                    //     showOptDialog: true,
                    //     block: false,
                    //     children: [],
                    //     tag: '手机,信息'
                    // }),
                ]
            }),
        ]
    }),
    new InsGroup().init2({
        title: "其他",
        icon: './icon/ins/default.png',
        expand: true,
        insID: "gother",
        children: [
            new FlowConfig().init({
                title: "输出日志",
                insID: '888.1',
                icon: './icon/ins/default.png',
                tips: "输出到小秘助理的编辑窗口",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: '输出,打印,print,log'
            }),
            new FlowConfig().init({
                title: "插入Python代码",
                insID: '888.2',
                icon: './icon/ins/default.png',
                tips: "插入Python代码",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'python,editor'
            }),
            new FlowConfig().init({
                title: "拦截错误",
                insID: '888.3',
                icon: './icon/ins/default.png',
                tips: "拦截缩进的指令中的错误",
                help: "/",
                desc: '拦截缩进的指令中的错误',
                showOptDialog: false,
                // cfgComponent: SetVar,
                block: true,
                children: [],
                tag: 'try,catch,exception,error,捕获异常,拦截异常'
            }),
            new FlowConfig().init({
                title: "如果拦截到错误",
                insID: '888.4',
                icon: './icon/ins/default.png',
                tips: "如果拦截到错误则执行缩进的指令",
                help: "/",
                desc: '如果拦截到错误则执行缩进的指令',
                showOptDialog: false,
                // cfgComponent: SetVar,
                block: true,
                children: [],
                tag: 'try,catch,exception,error,捕获异常,拦截异常'
            }),
            new FlowConfig().init({
                title: "如果未拦截到错误",
                insID: '888.5',
                icon: './icon/ins/default.png',
                tips: "如果未拦截到错误则执行缩进的指令",
                help: "/",
                desc: '如果未拦截到错误则执行缩进的指令',
                showOptDialog: false,
                // cfgComponent: SetVar,
                block: true,
                children: [],
                tag: 'try,catch,exception,error,捕获异常,拦截异常'
            }),
            new FlowConfig().init({
                title: "获取拦截到的错误",
                insID: '888.6',
                icon: './icon/ins/default.png',
                tips: "获取拦截到的错误",
                help: "/",
                desc: '获取拦截到的错误',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'try,catch,exception,error,捕获异常,拦截异常'
            }),
            new FlowConfig().init({
                title: "触发错误",
                insID: '888.7',
                icon: './icon/ins/default.png',
                tips: "触发错误",
                help: "/",
                desc: '触发错误',
                showOptDialog: true,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'try,catch,exception,error,throw,raise,抛出异常,抛出错误'
            }),
            new FlowConfig().init({
                title: "隐藏小秘进度窗口",
                insID: '888.8',
                icon: './icon/ins/default.png',
                tips: "隐藏小秘进度窗口",
                help: "/",
                desc: '隐藏小秘助理运行时屏幕右下角的进度窗口',
                showOptDialog: false,
                // cfgComponent: SetVar,
                block: false,
                children: [],
                tag: 'hide,隐藏小秘进度窗口'
            }),
            new FlowConfig().init({
                title: "并行循环列表",
                insID: '888.9',
                icon: './icon/ins/default.png',
                tips: "并行执行每一项",
                help: "/",
                desc: '-',
                showOptDialog: true,
                // cfgComponent: While,
                block: true,
                children: [],
                tag: '并行,循环,列表,for,while,索引,下标'
            }),
        ]
    }),

]

export let insList = new InsGroup().init2({
    title: "root",
    icon: '',
    expand: true,
    insID: "g0",
    children: data
})
export const insGroup = writable(insList);