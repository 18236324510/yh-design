export default {
    themeConfig: {
        siteTitle: "yh-design",
        nav: [
            { text: "指南", link: "/guild/installation" },
            { text: "组件", link: "/components/button/" },
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/18236324510/yh-design" },
        ],
        sidebar: {
            "/guild/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "安装",
                            link: "/guild/installation",
                        },
                        {
                            text: "快速开始",
                            link: "/guild/quickstart",
                        },
                    ],
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
                        },
                    ],
                },
            ],
            "/components/": [
                {
                    text: "基础组件",
                    items: [
                        {
                            text: "Button",
                            link: "/components/button/",
                        },
                        {
                            text: "Icon",
                            link: "/components/icon/",
                        }
                    ],
                }
            ]
        },
    },

};
