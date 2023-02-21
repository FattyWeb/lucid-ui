const pages = [
  {
    "title": "branding",
    "frontmatter": {
      "branding": true
    },
    "regularPath": "/branding/",
    "relativePath": "branding/README.md",
    "key": "v-a4b544f8",
    "path": "/branding/",
    "lastUpdated": "1/23/2020, 12:28:16 AM"
  },
  {
    "title": "Home",
    "frontmatter": {
      "home": true,
      "heroText": "<b>Vuesax</b> Framework <br> Components for <a target=\"_blank\" href=\"https://vuejs.org/\" >Vuejs</a>",
      "tagline": "We love what we do. Let us help you do what <b>You love</b>.",
      "actionText": "Get Started",
      "actionLink": "/docs/guide/",
      "suscribe": "<b>Subscribe</b> to our <br> Weekly Newsletter",
      "premiumThemes": {
        "title": "<b>Vuesax</b> Premium Themes",
        "details": "Create great projects with a higher level saving time and work with the themes created with vuesax"
      },
      "features": [
        {
          "title": "<b>Reusable Components</b> and easy to implement",
          "details": "With <b>Vuesax</b> you can use any component with few lines of code <br> and with great customization, and most importantly very easy to use and understand.",
          "action": "/docs/components/",
          "actionText": "Components"
        },
        {
          "title": "Do you need support for applications or <b>Responsive Pages</b>?",
          "details": "Vuesax components have responsive support and adapt to each type of size, apart from that you can easily use the grid components to generate <b>visual changes based on screen size</b> either a <b>phone</b>, <b>tablet</b> or <b>desktop</b>.",
          "action": "/docs/layout/",
          "actionText": "Design grid"
        },
        {
          "title": "<b>Vuesax</b> is here to help you create your ideas and develop those <b>great projects</b>",
          "details": "Do you have an idea? or some project for a client, vuesax can help you <b>create faster and work less</b> giving you everything you need to implement an interface from the simplest to the most complex.",
          "action": "/docs/guide/gettingStarted/",
          "actionText": "Get Started"
        },
        {
          "title": "<b>Unique and beautiful<b> design",
          "details": "<b>Our designs are unique</b> for each component and are not anchored to any visual trends or design rules, which makes us unique and of course your projects as well.",
          "action": null,
          "actionText": null
        }
      ]
    },
    "regularPath": "/",
    "relativePath": "README.md",
    "key": "v-e1cfdf18",
    "path": "/",
    "lastUpdated": "1/13/2020, 7:32:50 PM"
  },
  {
    "title": "animations",
    "frontmatter": {},
    "regularPath": "/docs/animations/",
    "relativePath": "docs/animations/README.md",
    "key": "v-f81d91e8",
    "path": "/docs/animations/",
    "lastUpdated": "11/7/2019, 10:56:15 AM"
  },
  {
    "frontmatter": {
      "docsHome": true
    },
    "regularPath": "/docs/",
    "relativePath": "docs/README.md",
    "key": "v-32b388f8",
    "path": "/docs/",
    "lastUpdated": "11/7/2019, 10:56:15 AM"
  },
  {
    "title": "头像",
    "frontmatter": {
      "PROPS": [
        {
          "name": "color",
          "type": "String",
          "values": "Vuesax Colors, RGB, HEX",
          "description": "Change the color of the component.",
          "default": "gray-2",
          "link": null,
          "usage": "#color",
          "code": "<vs-avatar color=\"#7d33ff\">\n  <template #text>\n    HEX\n  </template>\n</vs-avatar> <vs-avatar color=\"rgb(59,222,200)\">\n  <template #text>\n    RGB\n  </template>\n</vs-avatar>\n"
        },
        {
          "name": "size",
          "type": "Number",
          "values": "Number",
          "description": "Change the size of the avatar component.",
          "default": 44,
          "link": null,
          "usage": "#size",
          "code": "<template>\n  <div class=\"center con-avatars\">\n    <vs-avatar size=\"30\">\n      <template #text>\n        Lily\n      </template>\n    </vs-avatar>\n    <vs-avatar size=\"40\">\n      <template #text>\n        Evan You\n      </template>\n    </vs-avatar>\n    <vs-avatar>\n        <i class='bx bx-user'></i>\n    </vs-avatar>\n    <vs-avatar size=\"60\" primary badge badge-color=\"danger\">\n        <i class='bx bxs-hot' ></i>\n    </vs-avatar>\n    <vs-avatar size=\"70\" badge badge-color=\"success\">\n      <img src=\"/avatars/avatar-4.png\" alt=\"\">\n    </vs-avatar>\n  </div>\n</template>\n"
        },
        {
          "name": "badge",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determine if the badge is active.",
          "default": false,
          "link": null,
          "usage": "#badge",
          "code": "<template>\n  <div class=\"center con-avatars\">\n    <vs-avatar badge>\n      <img src=\"/avatars/avatar-5.png\" alt=\"\">\n    </vs-avatar>\n    <vs-avatar badge badge-color=\"danger\">\n      <img src=\"/avatars/avatar-6.png\" alt=\"\">\n    </vs-avatar>\n    <vs-avatar badge badge-color=\"success\">\n      <img src=\"/avatars/avatar-2.png\" alt=\"\">\n      <template #badge>\n        28\n      </template>\n    </vs-avatar>\n    <vs-avatar badge badge-color=\"warn\">\n      <img src=\"/avatars/avatar-8.png\" alt=\"\">\n      <template #badge>\n        <i class='bx bxs-bell-off' ></i>\n      </template>\n    </vs-avatar>\n    <vs-avatar writing badge badge-color=\"primary\">\n      <img src=\"/avatars/avatar-3.png\" alt=\"\">\n    </vs-avatar>\n    <vs-avatar badge-position=\"top-right\" badge badge-color=\"#7d33ff\">\n      <img src=\"/avatars/avatar-1.png\" alt=\"\">\n    </vs-avatar>\n  </div>\n</template>\n"
        },
        {
          "name": "badge-color",
          "type": "String",
          "values": "Vuesax colors,RGB,HEX",
          "description": "Change the color of the badge inside the avatar.",
          "default": "primary",
          "link": null,
          "usage": "#badge",
          "code": "<vs-avatar badge badge-color=\"danger\">\n  <img src=\"/avatars/avatar-6.png\" alt=\"\">\n</vs-avatar>\n"
        },
        {
          "name": "circle",
          "type": "Boolean",
          "values": "true, false",
          "description": "Change the style of the avatar by circulating it.",
          "default": false,
          "link": null,
          "usage": "#circle",
          "code": "<vs-avatar circle>\n  <template #text>\n    Joel\n  </template>\n</vs-avatar>\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "true, false",
          "description": "Change the style of the avatar by making it square.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-avatar square>\n  <template #text>\n    Joel\n  </template>\n</vs-avatar>\n"
        },
        {
          "name": "writing",
          "type": "Boolean",
          "values": "true,false",
          "description": "Add an animation to the writing badge.",
          "default": false,
          "link": null,
          "usage": "#badge",
          "code": "<vs-avatar writing badge badge-color=\"primary\">\n  <img src=\"/avatars/avatar-3.png\" alt=\"\">\n</vs-avatar>\n"
        },
        {
          "name": "history",
          "type": "Boolean",
          "values": "true,false",
          "description": "Add a border to the avatar.",
          "default": "gray-2",
          "link": null,
          "usage": "#history",
          "code": "<vs-avatar history history-gradient>\n  <img src=\"/avatars/avatar-5.png\" alt=\"\">\n</vs-avatar>\n"
        },
        {
          "name": "history-gradient",
          "type": "Boolean",
          "values": "true,false",
          "description": "Change the color of the border to a gradient.",
          "default": false,
          "link": null,
          "usage": "#history",
          "code": "<vs-avatar history history-gradient>\n  <img src=\"/avatars/avatar-5.png\" alt=\"\">\n</vs-avatar>\n"
        },
        {
          "name": "loading",
          "type": "Boolean",
          "values": "true,false",
          "description": "Add a loading animation to the avatar.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<vs-avatar loading badge>\n  <img src=\"/avatars/avatar-5.png\" alt=\"\">\n</vs-avatar>\n"
        },
        {
          "name": "max",
          "type": "number",
          "values": "number",
          "description": "(vs-avatar-group) determine how many avatars are visible.",
          "default": null,
          "link": null,
          "usage": "#group",
          "code": "<vs-avatar-group max=\"7\">\n  <vs-avatar>\n    <img src=\"/avatars/avatar-1.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-6.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-2.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-7.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-3.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-8.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-4.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-9.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-5.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-10.png\" alt=\"\">\n  </vs-avatar>\n</vs-avatar-group>\n"
        },
        {
          "name": "float",
          "type": "Boolean",
          "values": "true,false",
          "description": "(vs-avatar-group) change the way the avatar is composed by placing one next to the other.",
          "default": false,
          "link": null,
          "usage": "#group",
          "code": "<vs-avatar-group float max=\"8\">\n  <vs-avatar>\n    <img src=\"/avatars/avatar-1.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-6.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-2.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-7.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-3.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-8.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-4.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-9.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-5.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-10.png\" alt=\"\">\n  </vs-avatar>\n  </vs-avatar-group>\n"
        },
        {
          "name": "pointer",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determine if the avatar has a pointer cursor.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-avatar pointer >\n  <img src=\"/avatars/avatar-10.png\" alt=\"\">\n</vs-avatar>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "text",
          "type": "slot",
          "values": null,
          "description": "Add text within the avatar component.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-avatar>\n  <template #text>\n    Lily\n  </template>\n</vs-avatar>\n"
        },
        {
          "name": "badge",
          "type": "slot",
          "values": null,
          "description": "Add to the badge everything that is inside the slot, commonly used for numbers and an icon.",
          "default": null,
          "link": null,
          "usage": "#badge",
          "code": "<vs-avatar badge badge-color=\"success\">\n  <img src=\"/avatars/avatar-2.png\" alt=\"\">\n  <template #badge>\n    28\n  </template>\n</vs-avatar>\n"
        },
        {
          "name": "icons",
          "type": "slot",
          "values": null,
          "description": "Add a space to put icons next to the avatar.",
          "default": null,
          "link": null,
          "usage": "#icons",
          "code": "<vs-avatar>\n  <img src=\"/avatars/avatar-1.png\" alt=\"\">\n  <template #icons>\n    <i class='bx bxl-facebook-square' ></i>\n    <i class='bx bxl-github' ></i>\n    <i class='bx bxl-twitter' ></i>\n  </template>\n</vs-avatar>\n"
        }
      ],
      "NEWS": [
        "圆形",
        "方形",
        "复古",
        "功能图标组",
        "分组",
        "加载"
      ]
    },
    "regularPath": "/docs/components/Avatar.html",
    "relativePath": "docs/components/Avatar.md",
    "key": "v-03ef4ad7",
    "path": "/docs/components/Avatar.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "尺寸",
        "slug": "尺寸"
      },
      {
        "level": 2,
        "title": "角标",
        "slug": "角标"
      },
      {
        "level": 2,
        "title": "自动适配字体(仅限英文)",
        "slug": "自动适配字体(仅限英文)"
      },
      {
        "level": 2,
        "title": "圆形",
        "slug": "圆形"
      },
      {
        "level": 2,
        "title": "方形",
        "slug": "方形"
      },
      {
        "level": 2,
        "title": "复古",
        "slug": "复古"
      },
      {
        "level": 2,
        "title": "图标",
        "slug": "图标"
      },
      {
        "level": 2,
        "title": "加载",
        "slug": "加载"
      },
      {
        "level": 2,
        "title": "功能图标组",
        "slug": "功能图标组"
      },
      {
        "level": 2,
        "title": "分组",
        "slug": "分组"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "2/10/2020, 9:21:50 AM"
  },
  {
    "title": "多选框",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "boolean, string, array",
          "values": "boolean, string, array",
          "description": "determine the value of the checkbox and data anchor.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox v-model=\"option\">\n      Option\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "color",
          "type": "string",
          "values": "vuesax colors, RGB, HEX",
          "description": "Change the color of the component.",
          "default": false,
          "link": null,
          "usage": "#color",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox v-model=\"option1\">\n      Primary\n    </vs-checkbox>\n    <vs-checkbox success v-model=\"option2\">\n      Success\n    </vs-checkbox>\n    <vs-checkbox danger v-model=\"option3\">\n      Danger\n    </vs-checkbox>\n    <vs-checkbox warn v-model=\"option4\">\n      warning\n    </vs-checkbox>\n    <vs-checkbox dark v-model=\"option5\">\n      dark\n    </vs-checkbox>\n    <vs-checkbox color=\"#7d33ff\" v-model=\"option6\">\n      dark\n    </vs-checkbox>\n    <vs-checkbox color=\"rgb(59,222,200)\" v-model=\"option7\">\n      RGB\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "val",
          "type": "string, object",
          "values": "string, object",
          "description": "Determine the value of the input when being checked.",
          "default": true,
          "link": null,
          "usage": "#string-value",
          "code": "<template>\n  <div class=\"center con-checkbox\">\n    <vs-checkbox val=\"automatically\" v-model=\"option\">\n      Save data automatically\n    </vs-checkbox>\n\n    <span class=\"data\">\n      {{ option ? option : 'null'}}\n    </span>\n  </div>\n</template>\n"
        },
        {
          "name": "loading",
          "type": "boolean",
          "values": "true, false",
          "description": "Add a loading animation and disable the input.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<template>\n  <div class=\"center con-checkbox\">\n    <vs-checkbox loading v-model=\"option\">\n      Loading checked\n    </vs-checkbox>\n    <vs-checkbox loading v-model=\"option2\">\n      Loading unchecked\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "line-through",
          "type": "boolean",
          "values": "true, false",
          "description": "Add a line in the center of the label when checked.",
          "default": false,
          "link": null,
          "usage": "#linethrough",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox line-through v-model=\"option\">\n      Option\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "indeterminate",
          "type": "boolean",
          "values": "true, false",
          "description": "Change the default checkbox icon to a line that represents undetermined data.",
          "default": false,
          "link": null,
          "usage": "#Indeterminate",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox indeterminate v-model=\"option\">\n      Option\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "label-before",
          "type": "boolean",
          "values": "true, false",
          "description": "Change the position of the label.",
          "default": false,
          "link": null,
          "usage": "#label",
          "code": "<vs-checkbox label-before v-model=\"option2\">\n  Label Before\n</vs-checkbox>\n"
        },
        {
          "name": "checked",
          "type": "boolean",
          "values": "true, false",
          "description": "Determine if the component is initially in check (this changes the property computed in v-model to true).",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-checkbox label-before v-model=\"option2\">\n  Label Before\n</vs-checkbox>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "icon",
          "type": "slot",
          "values": null,
          "description": "Change the component icon.",
          "default": null,
          "link": null,
          "usage": "#icon",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox v-model=\"option1\">\n      <template #icon>\n        <i class='bx bx-check' ></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox success v-model=\"option2\">\n      <template #icon>\n        <i class='bx bx-check-double'></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox danger v-model=\"option3\">\n      <template #icon>\n        <i class='bx bx-x'></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox warn v-model=\"option4\">\n      <template #icon>\n        <i class='bx bxs-shield'></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox dark v-model=\"option5\">\n      <template #icon>\n        <i class='bx bxs-heart' ></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox color=\"#7d33ff\" v-model=\"option6\">\n      <template #icon>\n        <i class='bx bx-brightness' ></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox color=\"rgb(59,222,200)\" v-model=\"option7\">\n      <template #icon>\n        <i class='bx bxs-paint' ></i>\n      </template>\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Add a label to the component.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox v-model=\"option\">\n      Option\n    </vs-checkbox>\n  </div>\n</template>\n"
        }
      ],
      "NEWS": [
        "部分选中",
        "加载中",
        "穿梭线"
      ]
    },
    "regularPath": "/docs/components/Checkbox.html",
    "relativePath": "docs/components/Checkbox.md",
    "key": "v-67ebc803",
    "path": "/docs/components/Checkbox.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "布尔值",
        "slug": "布尔值"
      },
      {
        "level": 2,
        "title": "字符串",
        "slug": "字符串"
      },
      {
        "level": 2,
        "title": "数组",
        "slug": "数组"
      },
      {
        "level": 2,
        "title": "数组对象",
        "slug": "数组对象"
      },
      {
        "level": 2,
        "title": "图标",
        "slug": "图标"
      },
      {
        "level": 2,
        "title": "Label",
        "slug": "label"
      },
      {
        "level": 2,
        "title": "加载",
        "slug": "加载"
      },
      {
        "level": 2,
        "title": "穿梭线",
        "slug": "穿梭线"
      },
      {
        "level": 2,
        "title": "部分选中",
        "slug": "部分选中"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "2/10/2020, 9:21:50 AM"
  },
  {
    "title": "卡片",
    "frontmatter": {
      "PROPS": [
        {
          "name": "type",
          "type": "String",
          "values": "1,2,3,4,5",
          "description": "Change the style of the letter and the position of the internals.",
          "default": null,
          "link": null,
          "usage": "#type-2",
          "code": "<vs-card type=\"2\">\n  <template #title>\n    <h3>Pot with a plant</h3>\n  </template>\n  <template #img>\n    <img src=\"/foto6.png\" alt=\"\">\n  </template>\n  <template #text>\n    <p>\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n    </p>\n  </template>\n  <template #interactions>\n    <vs-button danger icon>\n      <i class='bx bx-heart'></i>\n    </vs-button>\n    <vs-button class=\"btn-chat\" shadow primary>\n      <i class='bx bx-chat' ></i>\n      <span class=\"span\">\n        54\n      </span>\n    </vs-button>\n  </template>\n</vs-card>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "text",
          "type": "slot",
          "values": null,
          "description": "Add text to the card in the section determined by the card type.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #text>\n  <p>\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n  </p>\n</template>\n"
        },
        {
          "name": "title",
          "type": "slot",
          "values": null,
          "description": "Add the title to the card in the section determined by the type of card.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #title>\n  <h3>Pot with a plant</h3>\n</template>\n"
        },
        {
          "name": "buttons",
          "type": "slot",
          "values": null,
          "description": "Add the buttons to the card in the section determined by the type of card.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #buttons>\n  <vs-button class=\"btn-chat\" shadow primary>\n    <i class='bx bx-chat' ></i>\n    <span class=\"span\">\n      54\n    </span>\n  </vs-button>\n</template>\n"
        },
        {
          "name": "interactions",
          "type": "slot",
          "values": null,
          "description": "Add the interactions to the card in the section determined by the card type.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #interactions>\n  <vs-button danger icon>\n    <i class='bx bx-heart'></i>\n  </vs-button>\n  <vs-button class=\"btn-chat\" shadow primary>\n    <i class='bx bx-chat' ></i>\n    <span class=\"span\">\n      54\n    </span>\n  </vs-button>\n</template>\n"
        },
        {
          "name": "img",
          "type": "slot",
          "values": null,
          "description": "Add the image or video to the card in the section determined by the type of card.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #img>\n  <img :src=\"`/foto5.png`\" alt=\"\">\n</template>\n"
        }
      ],
      "NEWS": [
        "name"
      ]
    },
    "regularPath": "/docs/components/Card.html",
    "relativePath": "docs/components/Card.md",
    "key": "v-9073d2ae",
    "path": "/docs/components/Card.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "样式 2",
        "slug": "样式-2"
      },
      {
        "level": 2,
        "title": "样式 3",
        "slug": "样式-3"
      },
      {
        "level": 2,
        "title": "样式 4",
        "slug": "样式-4"
      },
      {
        "level": 2,
        "title": "样式 5",
        "slug": "type-5"
      },
      {
        "level": 2,
        "title": "卡片组",
        "slug": "卡片组"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "9/20/2020, 8:36:51 PM"
  },
  {
    "title": "警告框",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "boolean",
          "values": "boolean",
          "description": "Determine if the component is visible.",
          "default": true,
          "link": null,
          "code": "<template>\n  <vs-button flat @click=\"active=!active\">\n    {{ active ? 'Close Alert' : 'Open Alert' }}\n  </vs-button>\n\n  <vs-alert closable v-model=\"active\">\n    <template #title>\n      Vuesax Framework\n    </template>\n    Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>\n    created with <a href=\"https://vuejs.org/\">Vuejs</a> to make projects easily and with a\n    Unique and pleasant style, Vuesax is created from scratch and designed for all types of\n    developed from the frontend lover to the backend that wants to easily create\n    your visual approach to the end user\n  </vs-alert>\n</template>\n<script>\n  export default {\n    data:() => ({\n      active: true,\n    })\n  }\n</script>\n",
          "usage": "#closable"
        },
        {
          "name": "color",
          "type": "String",
          "values": "primary, success, danger, warning, dark, RGB, HEX",
          "description": "Change the color of the component and some of its sub components.",
          "default": "primary",
          "link": null,
          "usage": "#color",
          "code": "<vs-alert color=\"success\">\n  <template #title>\n    Vuesax Framework\n  </template>\n  Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>\n  created with <a href=\"https://vuejs.org/\">Vuejs</a> to make projects easily and with a\n  Unique and pleasant style, Vuesax is created from scratch and designed for all types of\n  developed from the frontend lover to the backend that wants to easily create\n  your visual approach to the end user\n</vs-alert>\n"
        },
        {
          "name": "type",
          "type": "boolean",
          "values": "solid, border, shadow,gradient,relief",
          "description": "Change the style of all the alert.",
          "default": "default",
          "link": null,
          "usage": "#solid",
          "code": "<vs-alert solid>\n  <template #title>\n    Vuesax Framework\n  </template>\n  Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>\n  created with <a href=\"https://vuejs.org/\">Vuejs</a> to make projects easily and with a\n  Unique and pleasant style, Vuesax is created from scratch and designed for all types of\n  developed from the frontend lover to the backend that wants to easily create\n  your visual approach to the end user\n</vs-alert>\n"
        },
        {
          "name": "hidden-content",
          "type": "boolean",
          "values": "boolean",
          "description": "With this property you can hide the content of the alert.",
          "default": false,
          "link": null,
          "usage": "#hidden-content",
          "code": "<template>\n  <vs-alert :hidden-content=\"true\" >\n    <template #title>\n      Vuesax Framework\n    </template>\n    Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>\n    created with <a href=\"https://vuejs.org/\">Vuejs</a> to make projects easily and with a\n    Unique and pleasant style, Vuesax is created from scratch and designed for all types of\n    developed from the frontend lover to the backend that wants to easily create\n    your visual approach to the end user\n  </vs-alert>\n</template>\n"
        },
        {
          "name": "page",
          "type": "Number",
          "values": "Number",
          "description": "Determine the page that is active (this property is linked to the slots=\"page-{n}\").",
          "default": null,
          "link": null,
          "usage": "#pagination",
          "code": "<template>\n  <vs-alert :page=\"1\" >\n    <template #title>\n      Vuesax Framework\n    </template>\n    <template #page-1>\n      Page 1 - this page is a slot and here you can add either text, html elements or components\n    </template>\n  </vs-alert>\n</template>\n"
        },
        {
          "name": "progress",
          "type": "Number",
          "values": "0 - 100",
          "description": "Add a progress bar to the alert and the value is the percentage of width.",
          "default": null,
          "link": null,
          "usage": "#progress-bar",
          "code": "<vs-alert progress=\"70\">\n  <template #title>\n    Vuesax Framework\n  </template>\n  Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>\n  created with <a href=\"https://vuejs.org/\">Vuejs</a> to make projects easily and with a\n  Unique and pleasant style, Vuesax is created from scratch and designed for all types of\n  developed from the frontend lover to the backend that wants to easily create\n  your visual approach to the end user\n</vs-alert>\n"
        },
        {
          "name": "closable",
          "type": "boolean",
          "values": "boolean",
          "description": "Add a button to close the alert (it is necessary to use v-model).",
          "default": false,
          "link": null,
          "usage": "#closable",
          "code": "<template>\n  <vs-button flat @click=\"active=!active\">\n    {{ active ? 'Close Alert' : 'Open Alert' }}\n  </vs-button>\n\n  <vs-alert closable v-model=\"active\">\n    <template #title>\n      Vuesax Framework\n    </template>\n    Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>\n    created with <a href=\"https://vuejs.org/\">Vuejs</a> to make projects easily and with a\n    Unique and pleasant style, Vuesax is created from scratch and designed for all types of\n    developed from the frontend lover to the backend that wants to easily create\n    your visual approach to the end user\n  </vs-alert>\n</template>\n<script>\n  export default {\n    data:() => ({\n      active: true,\n    })\n  }\n</script>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "icon",
          "type": "slot",
          "values": null,
          "description": "Add an icon to the alert.",
          "default": null,
          "link": null,
          "usage": "#icon",
          "code": "<template>\n  <vs-alert>\n    <template #icon>\n      <i class='bx bxs-chat'></i>\n    </template>\n    <template #title>\n      Vuesax Alert Icon\n    </template>\n    Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>\n    created with <a href=\"https://vuejs.org/\">Vuejs</a> to make projects easily and with a\n    Unique and pleasant style, Vuesax is created from scratch and designed for all types of\n    developed from the frontend lover to the backend that wants to easily create\n    your visual approach to the end user\n  </vs-alert>\n</template>\n"
        },
        {
          "name": "title",
          "type": "slot",
          "values": null,
          "description": "Add a title to the alert.",
          "default": null,
          "link": null,
          "usage": "#title",
          "code": "<template>\n  <div class=\"center\">\n    <vs-alert>\n      <template #title>\n        Vuesax Alert Title\n      </template>\n      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>\n      created with <a href=\"https://vuejs.org/\">Vuejs</a> to make projects easily and with a\n      Unique and pleasant style, Vuesax is created from scratch and designed for all types of\n      developed from the frontend lover to the backend that wants to easily create\n      your visual approach to the end user\n    </vs-alert>\n  </div>\n</template>\n"
        },
        {
          "name": "page-{n}",
          "type": "slot",
          "values": "(page-1 - page-{n})",
          "description": "Add the pages to the alert component if it is page one would be (slot=\"page-1\").",
          "default": null,
          "link": null,
          "usage": "#pagination",
          "code": "<template>\n  <vs-alert :page.sync=\"page\" >\n    <template #title>\n      Vuesax Framework\n    </template>\n\n    <template #page-1>\n      Page 1 - this page is a slot and here you can add either text,\n      html elements or components\n    </template>\n  </vs-alert>\n</template>\n"
        },
        {
          "name": "footer",
          "type": "slot",
          "values": null,
          "description": "Add a footer to the alert component.",
          "default": null,
          "link": null,
          "usage": "#footer",
          "code": "<vs-alert>\n  <template #title>\n    Vuesax Framework\n  </template>\n  Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>\n  created with <a href=\"https://vuejs.org/\">Vuejs</a> to make projects easily and with a\n  Unique and pleasant style, Vuesax is created from scratch and designed for all types of\n  developed from the frontend lover to the backend that wants to easily create\n  your visual approach to the end user\n  <template #footer>\n    <vs-button flat>\n      Cancel\n    </vs-button>\n    <vs-button>\n      Accept\n    </vs-button>\n  </template>\n</vs-alert>\n"
        }
      ],
      "NEWS": [
        "填充",
        "边框",
        "阴影",
        "渐变",
        "relief",
        "animate",
        "隐藏内容",
        "分页",
        "footer",
        "progress-bar",
        "time-close"
      ]
    },
    "regularPath": "/docs/components/Alert.html",
    "relativePath": "docs/components/Alert.md",
    "key": "v-90fd4972",
    "path": "/docs/components/Alert.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "填充",
        "slug": "填充"
      },
      {
        "level": 2,
        "title": "边框",
        "slug": "边框"
      },
      {
        "level": 2,
        "title": "阴影",
        "slug": "阴影"
      },
      {
        "level": 2,
        "title": "渐变",
        "slug": "渐变"
      },
      {
        "level": 2,
        "title": "悬浮",
        "slug": "悬浮"
      },
      {
        "level": 2,
        "title": "动画",
        "slug": "动画"
      },
      {
        "level": 2,
        "title": "颜色",
        "slug": "颜色"
      },
      {
        "level": 2,
        "title": "图标",
        "slug": "图标"
      },
      {
        "level": 2,
        "title": "标题",
        "slug": "标题"
      },
      {
        "level": 2,
        "title": "隐藏内容",
        "slug": "隐藏内容"
      },
      {
        "level": 2,
        "title": "分页",
        "slug": "分页"
      },
      {
        "level": 2,
        "title": "页脚",
        "slug": "页脚"
      },
      {
        "level": 2,
        "title": "进度条",
        "slug": "进度条"
      },
      {
        "level": 2,
        "title": "关闭",
        "slug": "关闭"
      },
      {
        "level": 2,
        "title": "计时关闭",
        "slug": "计时关闭"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "1/13/2020, 7:32:50 PM"
  },
  {
    "title": "对话框",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determine if the dialogue is visible or hidden.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-dialog v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "not-center",
          "type": "boolean",
          "values": "true.false",
          "description": "By default the header centers the elements, with this property the centering is eliminated.",
          "default": false,
          "link": null,
          "usage": "#type",
          "code": "<vs-dialog not-center v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "width",
          "type": "String",
          "values": "px",
          "description": "Determine the width of the dialog.",
          "default": null,
          "link": null,
          "usage": "#type",
          "code": "<vs-dialog width=\"550px\" v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "Loading",
          "type": "Boolean",
          "values": "true,false",
          "description": "Add a loading animation to the dialog.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<vs-dialog loading v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "not-close",
          "type": "Boolean",
          "values": "true,false",
          "description": "Remove the close button from the dialog.",
          "default": false,
          "link": null,
          "usage": "#not-close",
          "code": "<vs-dialog not-close v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "scroll",
          "type": "Boolean",
          "values": "true,false",
          "description": "Makes the content a maximum high and gives the possibility to overflow the content add scroll.",
          "default": false,
          "link": null,
          "usage": "#scroll",
          "code": "<vs-dialog scroll v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "overflow-hidden",
          "type": "Boolean",
          "values": "true,false",
          "description": "When the dialog is opened, the page scroll is deleted.",
          "default": false,
          "link": null,
          "usage": "#overflow-hidden-body",
          "code": "<vs-dialog overflow-hidden v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "auto-width",
          "type": "Boolean",
          "values": "true,false",
          "description": "It makes the dialog have an automatic width to its content.",
          "default": false,
          "link": null,
          "usage": "#scroll",
          "code": "<vs-dialog auto-width v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "not-padding",
          "type": "Boolean",
          "values": "true,false",
          "description": "Eliminates the padding of the base elements of the dialog.",
          "default": false,
          "link": null,
          "usage": "#not-padding",
          "code": "<vs-dialog not-padding v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "full-screen",
          "type": "Boolean",
          "values": "true,false",
          "description": "Makes the dialog the size of the window.",
          "default": false,
          "link": null,
          "usage": "#full-screen",
          "code": "<vs-dialog full-screen v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "blur",
          "type": "Boolean",
          "values": "true,false",
          "description": "Makes all elements blur when the dialog opens.",
          "default": false,
          "link": null,
          "usage": "#blur",
          "code": "<vs-dialog blur v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "true,false",
          "description": "Remove the border radius from the dialog.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-dialog square v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "prevent-close",
          "type": "Boolean",
          "values": "true,false",
          "description": "It makes the dialog cannot be closed by clicking outside or by pressing the esc key.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-dialog prevent-close v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "v-on:close",
          "type": "Methods",
          "values": "function",
          "description": "return function when closing the dialog.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<vs-dialog @close=\"handleClose\" v-model=\"active\">\n  ...\n</vs-dialog>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "slot name",
          "type": "slot",
          "values": null,
          "description": "texto descriptivo.",
          "default": null,
          "link": null,
          "usage": "#animated",
          "code": "...\n"
        }
      ],
      "NEWS": [
        "name"
      ]
    },
    "regularPath": "/docs/components/Dialog.html",
    "relativePath": "docs/components/Dialog.md",
    "key": "v-60283279",
    "path": "/docs/components/Dialog.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "类型",
        "slug": "类型"
      },
      {
        "level": 2,
        "title": "加载",
        "slug": "加载"
      },
      {
        "level": 2,
        "title": "隐藏关闭按钮",
        "slug": "隐藏关闭按钮"
      },
      {
        "level": 2,
        "title": "可滚动",
        "slug": "可滚动"
      },
      {
        "level": 2,
        "title": "禁止父级页面滚动",
        "slug": "禁止父级页面滚动"
      },
      {
        "level": 2,
        "title": "无padding",
        "slug": "无padding"
      },
      {
        "level": 2,
        "title": "层级",
        "slug": "层级"
      },
      {
        "level": 2,
        "title": "全屏",
        "slug": "全屏"
      },
      {
        "level": 2,
        "title": "背景模糊",
        "slug": "背景模糊"
      },
      {
        "level": 2,
        "title": "方形",
        "slug": "方形"
      },
      {
        "level": 2,
        "title": "禁用关闭",
        "slug": "禁用关闭"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "9/30/2020, 5:58:17 AM"
  },
  {
    "title": "加载",
    "frontmatter": {
      "PROPS": [
        {
          "name": "type",
          "type": "String",
          "values": "waves, corners, border, points, square, gradient, rectangle, circles, square-rotate, scale",
          "description": "Change the animation of the loading.",
          "default": "default",
          "link": null,
          "usage": "#type",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          type: 'waves'\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "color",
          "type": "String",
          "values": "All colors of vuesax (RGB y HEX)",
          "description": "Change the color of the loading animation.",
          "default": "primary",
          "link": "/theme/",
          "usage": "#color",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          color: '#000'\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "background",
          "type": "String",
          "values": "All colors of vuesax (RGB y HEX)",
          "description": "Change the background color of the loading.",
          "default": "#fff",
          "link": "/theme/",
          "usage": "#background",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          background: 'danger',\n          color: '#fff'\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "text",
          "type": "String",
          "values": "String",
          "description": "Add a text below the loading animation.",
          "default": null,
          "link": null,
          "usage": "#text",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          text: 'Loading...',\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "percent",
          "type": "String",
          "values": "(0% - 100%)",
          "description": "Add a percentage text inside the loading.",
          "default": null,
          "link": null,
          "usage": "#percent",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          percent: '67%',\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "progress",
          "type": "String || Number",
          "values": "(0 - 100)",
          "description": "Add a progress bar to the loading and the progress would be the value.",
          "default": null,
          "link": null,
          "usage": "#progress",
          "code": "código...\n"
        },
        {
          "name": "target",
          "type": "String || html || ref",
          "values": "String || html || ref",
          "description": "Determine the parent of the loading where it will be instantiated.",
          "default": null,
          "link": null,
          "usage": "#target",
          "code": "<template>\n  <div class=\"center\">\n    <div class=\"con-btns\">\n      <vs-button dark flat @click=\"openLoading\">Open Loading <b>Target</b></vs-button>\n    </div>\n\n    <div ref=\"content\" class=\"content-div\">\n      Soy el contenedor <br> del <b>loading</b>\n    </div>\n  </div>\n</template> <script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          target: this.$refs.content\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "opacity",
          "type": "String || Number",
          "values": "(0 - 1)",
          "description": "Change the opacity of the background.",
          "default": "0.6",
          "link": null,
          "usage": "#target",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          opacity: 1,\n          color: 'dark'\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "scale",
          "type": "String || Number",
          "values": "(0 - 1)",
          "description": "Change the size of the loading animation.",
          "default": "1",
          "link": null,
          "usage": "#target",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          scale: '0.4',\n          color: 'dark'\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "changePercent()",
          "type": "function",
          "values": "String",
          "description": "Change the value of the percent after instantiating the loading.",
          "default": null,
          "link": null,
          "usage": "#percent",
          "code": "<script>\n  export default {\n    data: () => ({\n      percent: 0\n    }),\n    methods: {\n      openLoading() {\n\n        const loading = this.$vs.loading({\n          percent: this.percent\n        })\n        const interval = setInterval(() => {\n          if (this.percent <= 100) {\n            loading.changePercent(`${this.percent++}%`)\n          }\n        }, 40)\n        setTimeout(() => {\n          loading.close()\n          clearInterval(interval)\n          this.percent = 0\n        }, 4800)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "changeProgress()",
          "type": "function",
          "values": "String",
          "description": "Change the value of the progress after instantiating the loading.",
          "default": null,
          "link": null,
          "usage": "#progress",
          "code": "<script>\n  export default {\n    data: () => ({\n      progress: 0\n    }),\n    methods: {\n      openLoading() {\n\n        const loading = this.$vs.loading({\n          progress: 0\n        })\n        const interval = setInterval(() => {\n          if (this.progress <= 100) {\n            loading.changeProgress(this.progress++)\n          }\n        }, 40)\n        setTimeout(() => {\n          loading.close()\n          clearInterval(interval)\n          this.progress = 0\n        }, 4100)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "changeText()",
          "type": "function",
          "values": "String",
          "description": "Change the value of the text property after instantiating the loading.",
          "default": null,
          "link": null,
          "usage": null,
          "code": null
        }
      ],
      "UPDATE": [
        "type"
      ],
      "NEWS": [
        "文言",
        "百分比",
        "进度",
        "选定目标"
      ]
    },
    "regularPath": "/docs/components/Loading.html",
    "relativePath": "docs/components/Loading.md",
    "key": "v-3fff4907",
    "path": "/docs/components/Loading.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "类型",
        "slug": "类型"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "背景色",
        "slug": "背景色"
      },
      {
        "level": 2,
        "title": "文言",
        "slug": "文言"
      },
      {
        "level": 2,
        "title": "百分比",
        "slug": "百分比"
      },
      {
        "level": 2,
        "title": "进度",
        "slug": "进度"
      },
      {
        "level": 2,
        "title": "选定目标",
        "slug": "选定目标"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "9/30/2020, 5:58:17 AM"
  },
  {
    "title": "导航",
    "frontmatter": {
      "PROPS": [
        {
          "name": "fixed",
          "type": "boolean",
          "values": "true,false",
          "description": "Defines if the component is fixed on the screen.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-navbar fixed>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "shadow",
          "type": "boolean",
          "values": "true,false",
          "description": "Add a shadow to the component.",
          "default": "primary",
          "link": null,
          "usage": null,
          "code": "<vs-navbar shadow>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "shadowScroll",
          "type": "boolean",
          "values": "true,false",
          "description": "Add functionality to add shadow to component when scrollTop is more than 0.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-navbar shadow-scroll>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "hideScroll",
          "type": "boolean",
          "values": "true,false",
          "description": "Add the functionality to hide and show the component based on whether the scroll is lowered or raised.",
          "default": false,
          "link": null,
          "usage": "#hide-scroll",
          "code": "<vs-navbar hide-scroll>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "textWhite",
          "type": "boolean",
          "values": "true,false",
          "description": "Change the text color of items to white.",
          "default": false,
          "link": null,
          "usage": "#color",
          "code": "<vs-navbar text-white>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "square",
          "type": "boolean",
          "values": "true,false",
          "description": "Change the border radius to 0 by making the component square.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-navbar square>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "paddingScroll",
          "type": "boolean",
          "values": "true,false",
          "description": "Determines if the component has padding and the user scrolling is removed making an effect.",
          "default": false,
          "link": null,
          "usage": "#padding-scroll",
          "code": "<vs-navbar padding-scroll>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "notLine",
          "type": "boolean",
          "values": "true,false",
          "description": "Delete the active line in the component.",
          "default": false,
          "link": null,
          "usage": "#not-line",
          "code": "<vs-navbar not-line>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "leftCollapsed",
          "type": "boolean",
          "values": "true,false",
          "description": "Add the functionality that when the elements of this slot cannot be correctly they are visually removed.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-navbar left-collapsed>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "centerCollapsed",
          "type": "boolean",
          "values": "true,false",
          "description": "Add the functionality that when the elements of this slot cannot be correctly they are visually removed.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-navbar center-collapsed>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "rightCollapsed",
          "type": "boolean",
          "values": "true,false",
          "description": "Add the functionality that when the elements of this slot cannot be correctly they are visually removed.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-navbar right-collapsed>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "targetScroll",
          "type": "boolean",
          "values": "true,false",
          "description": "Determines the element to which the scroll event will be requested.",
          "default": "document",
          "link": null,
          "usage": "#padding-scroll",
          "code": "<vs-navbar padding-scroll=\"#my-element\">\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "item:active",
          "type": "boolean",
          "values": "true,false",
          "description": "Determines if the component is in active status.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-navbar-item active>\n  ...\n</vs-navbar-item>\n"
        },
        {
          "name": "item:to",
          "type": "string",
          "values": "url",
          "description": "Use vue-router to generate a new view based on the supplied string.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-navbar-item to=\"/\">\n  ...\n</vs-navbar-item>\n"
        },
        {
          "name": "item:id",
          "type": "string",
          "values": "id",
          "description": "It is the id that is used to change the value of the v-model of the parent component and thus be able to determine the active state based on user interaction..",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-navbar-item id=\"myIdItem\">\n  ...\n</vs-navbar-item>\n"
        },
        {
          "name": "item:href",
          "type": "string",
          "values": "url",
          "description": "Generate a new tab with the url provided.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-navbar-item href=\"http://vuesax.com/\">\n  ...\n</vs-navbar-item>\n"
        },
        {
          "name": "item:target",
          "type": "string",
          "values": "html-target",
          "description": "Determine if the tab is a new one or if it replaces the current one.",
          "default": "_blank",
          "link": null,
          "usage": null,
          "code": "<vs-navbar-item target=\"_self\">\n  ...\n</vs-navbar-item>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Add the elements in the center of the component.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-navbar v-model=\"active\">\n  <vs-navbar-item :active=\"active == 'guide'\" id=\"guide\">\n    Guide\n  </vs-navbar-item>\n</vs-navbar>\n"
        },
        {
          "name": "left",
          "type": "slot",
          "values": null,
          "description": "Add the elements on the left side of the component.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #left>\n  <img src=\"/logo2.png\" alt=\"\">\n</template>\n"
        },
        {
          "name": "right",
          "type": "slot",
          "values": null,
          "description": "Add the elements on the right side of the component.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #right>\n  <vs-button flat >Login</vs-button>\n  <vs-button>Get Started</vs-button>\n</template>\n"
        }
      ],
      "NEWS": [
        "name"
      ]
    },
    "regularPath": "/docs/components/Navbar.html",
    "relativePath": "docs/components/Navbar.md",
    "key": "v-019fce2e",
    "path": "/docs/components/Navbar.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "滚动隐藏",
        "slug": "滚动隐藏"
      },
      {
        "level": 2,
        "title": "分组",
        "slug": "分组"
      },
      {
        "level": 2,
        "title": "滚动动态边距",
        "slug": "滚动动态边距"
      },
      {
        "level": 2,
        "title": "方形",
        "slug": "方形"
      },
      {
        "level": 2,
        "title": "无定位条",
        "slug": "无定位条"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "6/20/2020, 12:27:15 AM"
  },
  {
    "title": "日期选择",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "date",
          "description": "定义日期组件的绑定数据",
        },
        {
          "name": "disabledDate",
          "type": "function",
          "description": "定义禁止选择的日期 传入参数为date类型 返回布尔值",
        }
      ],
      "NEWS": [
        "默认",
        "禁用日期",
        "输入框样式"
      ]
    },
    "regularPath": "/docs/components/Datepicker.html",
    "relativePath": "docs/components/Datepicker.md",
    "key": "v-019fce90",
    "path": "/docs/components/Datepicker.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "禁用日期",
        "slug": "禁用日期"
      },
      {
        "level": 2,
        "title": "输入框样式",
        "slug": "输入框样式"
      },
    ],
    "lastUpdated": "6/29/2022, 12:27:15 AM"
  },
  {
    "title": "时间选择",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "date",
          "description": "定义日期组件的绑定数据",
        },
      ],
      "NEWS": [
        "默认",
      ]
    },
    "regularPath": "/docs/components/Timepicker.html",
    "relativePath": "docs/components/Timepicker.md",
    "key": "v-039fce90",
    "path": "/docs/components/Timepicker.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
    ],
    "lastUpdated": "6/29/2022, 16:27:15 PM"
  },
  {
    "title": "消息提示",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "date",
          "description": "定义日期组件的绑定数据",
        },
        {
          "name": "disabledDate",
          "type": "function",
          "description": "定义禁止选择的日期 传入参数为date类型 返回布尔值",
        }
      ],
      "NEWS": [
        "默认",
        "类型",
      ]
    },
    "regularPath": "/docs/components/Message.html",
    "relativePath": "docs/components/Message.md",
    "key": "v-019fde90",
    "path": "/docs/components/Message.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "类型",
        "slug": "类型"
      },
    ],
    "lastUpdated": "6/29/2022, 12:27:15 AM"
  },
  {
    "title": "通知",
    "frontmatter": {
      "PROPS": [
        {
          "name": "title",
          "type": "String",
          "values": "String",
          "description": "Add a title to the notification.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "text",
          "type": "String",
          "values": "String",
          "description": "Add the text to the notification.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "position",
          "type": "String",
          "values": "bottom-right,top-right,top-center,top-left,bottom-left,bottom-center",
          "description": "Change the position of the component.",
          "default": "bottom-right",
          "link": null,
          "usage": "#position",
          "code": "const noti = this.$vs.notification({\n  position: 'top-right',\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "color",
          "type": "String",
          "values": "vuesax colors, rgb, hex",
          "description": "Change the base color of the entire component.",
          "default": null,
          "link": null,
          "usage": "#color",
          "code": "const noti = this.$vs.notification({\n  color: 'primary',\n  title: 'Documentation Vuesax 4.0+',\n  text: 'These documents refer to the latest version of vuesax (4.0+), to see the\n  documents of the previous versions you can do it here 👉 Vuesax 3.x'\n})\n"
        },
        {
          "name": "border",
          "type": "String",
          "values": "vuesax colors, rgb, hex",
          "description": "Add a color border to the notification.",
          "default": null,
          "link": null,
          "usage": "#border",
          "code": "const noti = this.$vs.notification({\n  border: 'success',\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "icon",
          "type": "String",
          "values": "String",
          "description": "Add an icon to the notification.",
          "default": null,
          "link": null,
          "usage": "#icons",
          "code": "const noti = this.$vs.notification({\n  icon: `<i class='bx bxs-time'></i>`,\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "duration",
          "type": "Number, String",
          "values": "Number, none",
          "description": "Determine the time until the notification is hidden (none determines not to hide).",
          "default": "4000 (4s)",
          "link": null,
          "usage": "#duration",
          "code": "const noti = this.$vs.notification({\n  duration: 10000,\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "onClick",
          "type": "function",
          "values": "function",
          "description": "function that is executed by clicking on the notification.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  onClick: () => {\n    console.log('click notification')\n  }\n})\n"
        },
        {
          "name": "buttonClose",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determine if the notification has the close button.",
          "default": true,
          "link": null,
          "usage": null,
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  buttonClose: false\n})\n"
        },
        {
          "name": "flat",
          "type": "Boolean",
          "values": "true,false",
          "description": "Change the notification style to flat.",
          "default": false,
          "link": null,
          "usage": "#flat",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  flat: true\n})\n"
        },
        {
          "name": "onDestroy",
          "type": "function",
          "values": "function",
          "description": "Function that is executed when the notification is destroyed.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  onDestroy: () => {\n    console.log('destroy notification')\n  }\n})\n"
        },
        {
          "name": "sticky",
          "type": "boolean",
          "values": "true,false",
          "description": "Change the position of the notification attached to the nearest corner.",
          "default": false,
          "link": null,
          "usage": "#sticky",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  sticky: true\n})\n"
        },
        {
          "name": "square",
          "type": "boolean",
          "values": "true,false",
          "description": "Determine if the notification is square and remove the border-radius.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  square: true\n})\n"
        },
        {
          "name": "width",
          "type": "String",
          "values": "100%, auto",
          "description": "Determine the width of the notification.",
          "default": "340px",
          "link": null,
          "usage": "#width",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  width: 100%\n})\n"
        },
        {
          "name": "loading",
          "type": "boolean",
          "values": "true,false",
          "description": "Determine if the notification has a loading animation.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  loading: true\n})\n"
        },
        {
          "name": "progress",
          "type": "Number, String",
          "values": "0 - 100, auto",
          "description": "Add a progress bar to the notification.",
          "default": null,
          "link": null,
          "usage": "#progress",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  progress: 'auto'\n})\n"
        },
        {
          "name": "notPadding",
          "type": "Boolean",
          "values": "true,false",
          "description": "Remove padding from notification.",
          "default": "20px",
          "link": null,
          "usage": "#example",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  notPadding: true\n})\n"
        },
        {
          "name": "clickClose",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determine if clicking on the notification closes.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  clickClose: true\n})\n"
        },
        {
          "name": "content",
          "type": "Vue Component",
          "values": "Vnode",
          "description": "Change the content of the notification to the one provided as a value (something similar to a vue slot).",
          "default": null,
          "link": null,
          "usage": "#example",
          "code": "<script>\n  import user from './user.vue'\n  export default {\n    methods: {\n      openNotificationUser() {\n        const noti = this.$vs.notification({\n          duration: 'none',\n          width: 'auto',\n          content: user,\n        })\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "instance.close()",
          "type": "function",
          "values": null,
          "description": "Close the notificationn.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<script>\n  export default {\n    methods: {\n      openNotification() {\n        const noti = this.$vs.notification({\n          duration: 'none',\n          loading: true\n        })\n\n        setTimeout(() => {\n          noti.close()\n        }, 5000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "instance.changeProgress(value)",
          "type": "function",
          "values": "0 - 100",
          "description": "Change the notification progress value after instantiation.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<script>\n  export default {\n    methods: {\n      openNotification() {\n        const noti = this.$vs.notification({\n          title: 'Documentation Vuesax 4.0+',\n          text: `These documents refer to the latest version of vuesax (4.0+),\n          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n          progress: 0\n        })\n\n        setTimeout(() => {\n          noti.changeProgress(50)\n        }, 5000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "instance.setLoading(boolean)",
          "type": "function",
          "values": "true,false",
          "description": "Change the status of loading after instantiating.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<script>\n  export default {\n    methods: {\n      openNotification() {\n        const noti = this.$vs.notification({\n          title: 'Documentation Vuesax 4.0+',\n          text: `These documents refer to the latest version of vuesax (4.0+),\n          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n        })\n\n        setTimeout(() => {\n          noti.setLoading(true)\n        }, 5000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "instance.toggleClass(String)",
          "type": "function",
          "values": "String",
          "description": "Add or remove the last class as a parameter to the notification.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<script>\n  export default {\n    methods: {\n      openNotification() {\n        const noti = this.$vs.notification({\n          classNotification: 'my-class'\n          title: 'Documentation Vuesax 4.0+',\n          text: `These documents refer to the latest version of vuesax (4.0+),\n          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n        })\n\n        setTimeout(() => {\n          noti.toggleClass('new-class')\n        }, 5000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "classNotification",
          "type": "String",
          "values": "String",
          "description": "Add a custom class to the notification.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<script>\n  export default {\n    methods: {\n      openNotification() {\n        const noti = this.$vs.notification({\n          classNotification: 'my-class'\n          title: 'Documentation Vuesax 4.0+',\n          text: `These documents refer to the latest version of vuesax (4.0+),\n          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n        })\n\n        setTimeout(() => {\n          noti.toggleClass('new-class')\n        }, 5000)\n      }\n    }\n  }\n</script>\n"
        }
      ],
      "NEWS": [
        "进度条",
        "持续时间",
        "方形",
        "边框",
        "扁平",
        "加载",
        "粘性样式",
        "自定义宽度",
        "自定义内容"
      ]
    },
    "regularPath": "/docs/components/Notification.html",
    "relativePath": "docs/components/Notification.md",
    "key": "v-2c650c9a",
    "path": "/docs/components/Notification.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "位置",
        "slug": "位置"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "图标",
        "slug": "图标"
      },
      {
        "level": 2,
        "title": "进度条",
        "slug": "进度条"
      },
      {
        "level": 2,
        "title": "持续时间",
        "slug": "持续时间"
      },
      {
        "level": 2,
        "title": "方形",
        "slug": "方形"
      },
      {
        "level": 2,
        "title": "边框",
        "slug": "边框"
      },
      {
        "level": 2,
        "title": "扁平",
        "slug": "扁平"
      },
      {
        "level": 2,
        "title": "加载",
        "slug": "加载"
      },
      {
        "level": 2,
        "title": "自定义宽度",
        "slug": "自定义宽度"
      },
      {
        "level": 2,
        "title": "粘性样式",
        "slug": "粘性样式"
      },
      {
        "level": 2,
        "title": "自定义内容",
        "slug": "自定义内容"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "3/3/2020, 10:21:13 AM"
  },

  {
    "title": "分页",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "Number",
          "values": "Number",
          "description": "Determine the page where the user is.",
          "default": 1,
          "link": null,
          "usage": "#default",
          "code": "<vs-pagination v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "length",
          "type": "Number",
          "values": "Number",
          "description": "It is the total number of pages that the component has.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-pagination v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "color",
          "type": "Vuesax colors, RGB, HEX",
          "values": "String",
          "description": "Change the base color of the component.",
          "default": "primary",
          "link": null,
          "usage": "#color",
          "code": "<vs-pagination color=\"danger\" v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "disabled",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determine if the entire component is in the disabled state.",
          "default": false,
          "link": null,
          "usage": "#disabled",
          "code": "<vs-pagination disabled v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "not-arrows",
          "type": "Boolean",
          "values": "true, false",
          "description": "Remove the arrows (next and back) of the component.",
          "default": false,
          "link": null,
          "usage": "#not-arrows",
          "code": "<vs-pagination not-arrows v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "only-arrows",
          "type": "Boolean",
          "values": "true, false",
          "description": "Remove the items leaving only the arrows (next and back).",
          "default": false,
          "link": null,
          "usage": "#only-arrows",
          "code": "<vs-pagination only-arrows v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "circle",
          "type": "Boolean",
          "values": "true, false",
          "description": "Change the style of the buttons making them completely round.",
          "default": false,
          "link": null,
          "usage": "#circle",
          "code": "<vs-pagination circle v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "true, false",
          "description": "Change the style of the buttons making them totally square.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-pagination square v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "buttons-dotted",
          "type": "Boolean",
          "values": "true, false",
          "description": "Makes the buttons not have the internal number and changes its size.",
          "default": false,
          "link": null,
          "usage": "#buttons-dotted",
          "code": "<vs-pagination buttons-dotted v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "disabled-items",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determine which items are in the disabled state.",
          "default": false,
          "link": null,
          "usage": "#disabled-items",
          "code": "<vs-pagination :disabled-items=\"[3,4,9,10,11,12,19]\" v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "loading-items",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determine which items are in the charging state.",
          "default": false,
          "link": null,
          "usage": "#loading-items",
          "code": "<vs-pagination :loading-items=\"[3,4,9,10,11,12,19]\" v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "not-margin",
          "type": "Boolean",
          "values": "true, false",
          "description": "Change the margin between the items causing them to be fully glued and the radius is removed making them square.",
          "default": false,
          "link": null,
          "usage": "#not-margin",
          "code": "<vs-pagination not-margin v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "progress",
          "type": "Boolean",
          "values": "true, false",
          "description": "Add a progress bar to the component determined by the current page and the total (length) of pages.",
          "default": false,
          "link": null,
          "usage": "#progress",
          "code": "<vs-pagination progress v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "dotted-number",
          "type": "Number",
          "values": "Number",
          "description": "Change the total pages to be added or subtracted by clicking on the points.",
          "default": false,
          "link": null,
          "usage": "#dotted-number",
          "code": "<vs-pagination :dotted-number=\"10\" v-model=\"page\" :length=\"100\" />\n"
        },
        {
          "name": "infinite",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determine if the pagination is infinite.",
          "default": false,
          "link": null,
          "usage": "#infinite",
          "code": "<vs-pagination infinite v-model=\"page\" :length=\"100\" />\n"
        }
      ],
      "SLOTS": [
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Space between the two arrows (next and back).",
          "default": null,
          "link": null,
          "usage": "#slot",
          "code": "<vs-pagination v-model=\"page\" :length=\"20\">\n  <vs-select v-model=\"page\">\n    <vs-option\n      v-for=\"numberPage in 20\"\n      :label=\"numberPage\"\n      :value=\"numberPage\">\n      {{ numberPage }}\n    </vs-option>\n  </vs-select>\n</vs-pagination>\n"
        }
      ],
      "NEWS": [
        "禁用",
        "无切换",
        "只使用切换",
        "圆形",
        "方形",
        "圆点状按钮",
        "禁用指定按钮",
        "加载",
        "无间隔",
        "插槽",
        "进度",
        "自定义快进",
        "无边界"
      ]
    },
    "regularPath": "/docs/components/Pagination.html",
    "relativePath": "docs/components/Pagination.md",
    "key": "v-7e718455",
    "path": "/docs/components/Pagination.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "禁用",
        "slug": "禁用"
      },
      {
        "level": 2,
        "title": "无切换",
        "slug": "无切换"
      },
      {
        "level": 2,
        "title": "只使用切换",
        "slug": "只使用切换"
      },
      {
        "level": 2,
        "title": "圆形",
        "slug": "圆形"
      },
      {
        "level": 2,
        "title": "方形",
        "slug": "方形"
      },
      {
        "level": 2,
        "title": "圆点状按钮",
        "slug": "圆点状按钮"
      },
      {
        "level": 2,
        "title": "禁用指定按钮",
        "slug": "禁用指定按钮"
      },
      {
        "level": 2,
        "title": "加载",
        "slug": "加载"
      },
      {
        "level": 2,
        "title": "无间隔",
        "slug": "无间隔"
      },
      {
        "level": 2,
        "title": "插槽",
        "slug": "插槽"
      },
      {
        "level": 2,
        "title": "进度",
        "slug": "进度"
      },
      {
        "level": 2,
        "title": "自定义快进",
        "slug": "自定义快进"
      },
      {
        "level": 2,
        "title": "无边界",
        "slug": "无边界"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "3/3/2020, 10:21:13 AM"
  },
  {
    "title": "单选框",
    "frontmatter": {
      "PROPS": [
        {
          "name": "color",
          "type": "String",
          "values": "Vuesax Colors, RGB, HEX",
          "description": "Change the color of the radio.",
          "default": "primary",
          "link": null,
          "usage": "#color",
          "code": "<vs-radio success v-model=\"picked\" val=\"2\">\n  Success\n</vs-radio>\n"
        },
        {
          "name": "disabled",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determine if the component is in the disabled state.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-radio disabled v-model=\"picked\" val=\"3\">\n  Option C\n</vs-radio>\n"
        },
        {
          "name": "loading",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determine if the component has a loading animation and is disabled.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<vs-radio loading v-model=\"picked\" val=\"1\">\n  Option 1\n</vs-radio>\n"
        },
        {
          "name": "val",
          "type": "String",
          "values": "String",
          "description": "Determine the value of the radio input.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-radio v-model=\"picked\" val=\"1\">\n  Option A\n</vs-radio>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Add a label to the component.",
          "default": null,
          "link": null,
          "usage": "#label",
          "code": "<vs-radio v-model=\"picked\" val=\"1\">\n  Label\n</vs-radio>\n"
        },
        {
          "name": "icon",
          "type": "slot",
          "values": null,
          "description": "Add an icon inside the radio.",
          "default": null,
          "link": null,
          "usage": "#icon",
          "code": "<vs-radio v-model=\"picked\" val=\"1\">\n  Yen\n  <template #icon>\n    <i class='bx bx-yen' ></i>\n  </template>\n</vs-radio>\n"
        }
      ],
      "NEWS": [
        "加载",
        "图标",
        "label"
      ]
    },
    "regularPath": "/docs/components/Radio.html",
    "relativePath": "docs/components/Radio.md",
    "key": "v-6e3df332",
    "path": "/docs/components/Radio.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "Label",
        "slug": "label"
      },
      {
        "level": 2,
        "title": "加载",
        "slug": "加载"
      },
      {
        "level": 2,
        "title": "图标",
        "slug": "图标"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "2/10/2020, 9:21:50 AM"
  },
  {
    "title": "按钮",
    "frontmatter": {
      "PROPS": [
        {
          "name": "color",
          "type": "String",
          "values": "primary, success, danger, warning, dark, RGB, HEX",
          "description": "Change the color of the component and some of its sub components.",
          "default": "primary",
          "link": "/api/color",
          "usage": "#color",
          "code": "<vs-button\n  color=\"success\"\n>\n  Success\n</vs-button>\n"
        },
        {
          "name": "style button",
          "type": "Prop",
          "values": "flat, border, gradient, transparent, dashed, shadow, relief, floating",
          "description": "Change the style of the component and its states.",
          "default": null,
          "link": null,
          "usage": "#flat",
          "code": "<vs-button\n  flat\n  >\n  Flat\n</vs-button>\n"
        },
        {
          "name": "active",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determine if the component is active and change its style to that state.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-button active >\n  Default\n</vs-button>\n"
        },
        {
          "name": "upload",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determine if the component has the upload status active by changing the style and adding the animation.",
          "default": false,
          "link": null,
          "usage": "#upload",
          "code": "<vs-button upload >\n  <i class='bx bxs-wallet'></i> Wallet\n</vs-button>\n"
        },
        {
          "name": "to",
          "type": "String",
          "values": "url - vue-router",
          "description": "Add the functionality of vue-router to the button, clicking it will redirect to the last route.",
          "default": false,
          "link": null,
          "usage": "#to-href",
          "code": "<vs-button to=\"/\" >\n  Example prop - to\n</vs-button>\n"
        },
        {
          "name": "href",
          "type": "String",
          "values": "href - link",
          "description": "Add an href of an external link to add the functionality by clicking on the component.",
          "default": false,
          "link": null,
          "usage": "#to-href",
          "code": "<vs-button href=\"https://lusaxweb.github.io/vuesax/\" >\n  Example prop - url\n</vs-button>\n"
        },
        {
          "name": "blank",
          "type": "Boolean",
          "values": "true, false",
          "description": "as in an html element `a` determines whether a new window is opened or the current one is replaced.",
          "default": false,
          "link": null,
          "usage": "#to-href",
          "code": "<vs-button blank href=\"https://lusaxweb.github.io/vuesax/\" >\n  Example prop - url\n</vs-button>\n"
        },
        {
          "name": "icon",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determine if the component contains only one icon, by adding this property the component has an equal width and height.",
          "default": false,
          "link": null,
          "usage": "#icon",
          "code": "<vs-button icon >\n  <i class='bx bx-home-alt'></i>\n</vs-button>\n"
        },
        {
          "name": "circle",
          "type": "Boolean",
          "values": "true, false",
          "description": "Change the border radius to give a circle style.",
          "default": false,
          "link": null,
          "usage": "#circle",
          "code": "<vs-button icon circle >\n  <i class='bx bx-home-alt'></i>\n</vs-button>\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "true, false",
          "description": "Change the border radius to give a rectangle style.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-button icon square > // <------\n  <i class='bx bx-home-alt'></i>\n</vs-button>\n"
        },
        {
          "name": "block",
          "type": "Boolean",
          "values": "true, false",
          "description": "Change the width of the component to the possible total determined by the parent element.",
          "default": false,
          "link": null,
          "usage": "#block",
          "code": "<vs-button block >\n  <i class='bx bxs-paint-roll' ></i> Edit Theme\n</vs-button>\n"
        },
        {
          "name": "animationType",
          "type": "Boolean",
          "values": "true, false",
          "description": "Change the type of animation, this property only works if you have the <code> slot </code> animate.",
          "default": false,
          "link": null,
          "usage": "#animate",
          "code": "<vs-button flat color=\"success\" animation-type=\"vertical\" >\n  Message\n  <template v-slot:animate >\n    <i class='bx bx-mail-send' ></i> Send\n  </template>\n</vs-button>\n"
        },
        {
          "name": "animateInactive",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determine if the animation is active for the user when hovering.",
          "default": false,
          "link": null,
          "usage": "#toggle",
          "code": "<vs-button :animate-inactive=\"successFace\" @click=\"handleClickFace\" :loading=\"loadingFace\" color=\"facebook\">\n  <i class='bx bxl-facebook-square' ></i>\n  {{ successFace ? 'Logout' : 'Facebook' }}\n  <template v-slot:animate >\n    <i class='bx bx-user' ></i> Login\n  </template>\n</vs-button>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "animate",
          "type": "slot",
          "values": null,
          "description": "Slot To add the element that will be displayed in the animation.",
          "default": null,
          "link": null,
          "code": "<vs-button >\n  Home\n  <template v-slot:animate >\n    <i class='bx bx-home-alt' ></i>\n  </template>\n</vs-button>\n",
          "usage": "#animated"
        }
      ],
      "NEWS": [
        "加载中",
        "上传",
        "block",
        "animate",
        "floating",
        "social",
        "group",
        "toggle",
        "to-href"
      ]
    },
    "regularPath": "/docs/components/",
    "relativePath": "docs/components/README.md",
    "key": "v-4766403e",
    "path": "/docs/components/",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "扁平",
        "slug": "扁平"
      },
      {
        "level": 2,
        "title": "边框",
        "slug": "边框"
      },
      {
        "level": 2,
        "title": "渐变",
        "slug": "渐变"
      },
      {
        "level": 2,
        "title": "悬浮",
        "slug": "悬浮"
      },
      {
        "level": 2,
        "title": "透明",
        "slug": "透明"
      },
      {
        "level": 2,
        "title": "阴影",
        "slug": "阴影"
      },
      {
        "level": 2,
        "title": "颜色",
        "slug": "颜色"
      },
      {
        "level": 2,
        "title": "图标",
        "slug": "图标"
      },
      {
        "level": 2,
        "title": "带文本的图标按钮",
        "slug": "带文本的图标按钮"
      },
      {
        "level": 2,
        "title": "圆形",
        "slug": "圆形"
      },
      {
        "level": 2,
        "title": "方形",
        "slug": "方形"
      },
      {
        "level": 2,
        "title": "尺寸",
        "slug": "尺寸"
      },
      {
        "level": 2,
        "title": "加载",
        "slug": "加载"
      },
      {
        "level": 2,
        "title": "上传",
        "slug": "上传"
      },
      {
        "level": 2,
        "title": "块级按钮",
        "slug": "块级按钮"
      },
      {
        "level": 2,
        "title": "动效",
        "slug": "动效"
      },
      {
        "level": 2,
        "title": "社交按钮",
        "slug": "社交按钮"
      },
      {
        "level": 2,
        "title": "浮动",
        "slug": "浮动"
      },
      {
        "level": 2,
        "title": "按钮组",
        "slug": "按钮组"
      },
      {
        "level": 2,
        "title": "切换",
        "slug": "切换"
      },
      {
        "level": 2,
        "title": "跳转",
        "slug": "跳转"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "2/10/2020, 9:21:50 AM"
  },
  {
    "title": "下拉选择",
    "frontmatter": {
      "PROPS": [
        {
          "name": "color",
          "type": "String",
          "values": "Main colors of vuesax, RGB, HEX",
          "description": "Change the color of the component.",
          "default": "primary",
          "link": null,
          "usage": "#color",
          "code": "<template>\n  <div class=\"center con-selects\">\n    <vs-select\n      v-for=\"(color, i) in colors\"\n      :key=\"i\"\n      :color=\"color.color\"\n      placeholder=\"Select\"\n      v-model=\"color.value\"\n    >\n      <vs-option label=\"Vuesax\" value=\"1\">\n        Vuesax\n      </vs-option>\n      <vs-option label=\"Vue\" value=\"2\">\n        Vue\n      </vs-option>\n      <vs-option label=\"Javascript\" value=\"3\">\n        Javascript\n      </vs-option>\n      <vs-option label=\"Sass\" value=\"4\">\n        Sass\n      </vs-option>\n      <vs-option label=\"Typescript\" value=\"5\">\n        Typescript\n      </vs-option>\n      <vs-option label=\"Webpack\" value=\"6\">\n        Webpack\n      </vs-option>\n      <vs-option label=\"Nodejs\" value=\"7\">\n        Nodejs\n      </vs-option>\n    </vs-select>\n  </div>\n</template> <script> export default {\n  data:() => ({\n    colors: [\n      {\n        color: 'danger',\n        value: '1'\n      },\n      {\n        color: 'success',\n        value: '2'\n      },\n      {\n        color: 'warn',\n        value: '3'\n      },\n      {\n        color: 'dark',\n        value: '4'\n      },\n      {\n        color: '#7d33ff',\n        value: '5'\n      },\n      {\n        color: 'rgb(59,222,200)',\n        value: '6'\n      },\n\n    ]\n  })\n} </script>\n"
        },
        {
          "name": "loading",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determine if the component is in the loading state and add an animation.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<vs-select\n  placeholder=\"Success\"\n  v-model=\"value1\"\n  loading\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "placeholder",
          "type": "String",
          "values": "String",
          "description": "Add a placeholder to the component.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-select placeholder=\"Select\" v-model=\"value\">\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option disabled label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "label",
          "type": "String",
          "values": "String",
          "description": "Add a label to the composite select.",
          "default": null,
          "link": null,
          "usage": "#label",
          "code": "<vs-select\n  label=\"Label\"\n  v-model=\"value1\"\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "label-placeholder",
          "type": "String",
          "values": "String",
          "description": "Add a placeholder that when in focus or with value becomes a label.",
          "default": null,
          "link": null,
          "usage": "#label",
          "code": "<vs-select\n  label-placeholder=\"Label-placeholder\"\n  v-model=\"value2\"\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "filter",
          "type": "Boolean",
          "values": "true, false",
          "description": "Add the functionality to filter the select options.",
          "default": false,
          "link": null,
          "usage": "#filter",
          "code": "<vs-select\n  filter\n  placeholder=\"Filter\"\n  v-model=\"value\"\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "multiple",
          "type": "Boolean",
          "values": "true, false",
          "description": "Add the functionality of being able to select several options from a select.",
          "default": false,
          "link": null,
          "usage": "#multiple",
          "code": "<vs-select\n  label=\"Multiple\"\n  multiple\n  placeholder=\"Filter\"\n  v-model=\"value\"\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "state",
          "type": "String",
          "values": "Vuesax main colors",
          "description": "Change the state of the component to the color provided.",
          "default": false,
          "link": null,
          "usage": "#state",
          "code": "<vs-select\n  v-for=\"(color, i) in colors\"\n  :key=\"i\"\n  :state=\"color.color\"\n  :label=\"color.color\"\n  placeholder=\"Select\"\n  v-model=\"color.value\"\n  >\n    <vs-option label=\"Vuesax\" value=\"1\">\n      Vuesax\n    </vs-option>\n    <vs-option label=\"Vue\" value=\"2\">\n      Vue\n    </vs-option>\n    <vs-option label=\"Javascript\" value=\"3\">\n      Javascript\n    </vs-option>\n    <vs-option label=\"Sass\" value=\"4\">\n      Sass\n    </vs-option>\n    <vs-option label=\"Typescript\" value=\"5\">\n      Typescript\n    </vs-option>\n    <vs-option label=\"Webpack\" value=\"6\">\n      Webpack\n    </vs-option>\n    <vs-option label=\"Nodejs\" value=\"7\">\n      Nodejs\n    </vs-option>\n    </vs-select>\n  </div>\n</template>\n"
        },
        {
          "name": "disabled",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determine if the component is in the disabled state.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-select\n  disabled\n  placeholder=\"Success\"\n  v-model=\"value1\"\n>\n  <template #message-success>\n    Option Valid\n  </template>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "collapse-chips",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determine if the chips in multiple are reduced to 2 elements.",
          "default": false,
          "link": null,
          "usage": "#multiple",
          "code": "<vs-select\n  label=\"Multiple collapse chips\"\n  filter\n  multiple\n  collapse-chips\n  placeholder=\"Collapse chips\"\n  v-model=\"value3\"\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "message-{color}",
          "type": "slot",
          "values": null,
          "description": "Add a message below the select.",
          "default": null,
          "link": null,
          "usage": "#message",
          "code": "<vs-select\n  placeholder=\"Success\"\n  v-model=\"value1\"\n>\n  <template #message-success>\n    Option Valid\n  </template>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "title",
          "type": "slot",
          "values": null,
          "description": "The vs-option-group component adds a title to the option group.",
          "default": null,
          "link": null,
          "usage": "#group",
          "code": "<vs-select\n  label=\"Group\"\n  placeholder=\"Group\"\n  v-model=\"value1\"\n>\n  <vs-option-group>\n    <div slot=\"title\">\n      Vuejs\n    </div>\n    <vs-option label=\"Vuesax\" value=\"1\">\n      Vuesax\n    </vs-option>\n    <vs-option label=\"Vue\" value=\"2\">\n      Vue\n    </vs-option>\n    <vs-option label=\"Javascript\" value=\"3\">\n      Javascript\n    </vs-option>\n  </vs-option-group>\n  <vs-option-group>\n    <div slot=\"title\">\n      Others\n    </div>\n    <vs-option label=\"Sass\" value=\"4\">\n      Sass\n    </vs-option>\n    <vs-option label=\"Typescript\" value=\"5\">\n      Typescript\n    </vs-option>\n    <vs-option label=\"Webpack\" value=\"6\">\n      Webpack\n    </vs-option>\n    <vs-option label=\"Nodejs\" value=\"7\">\n      Nodejs\n    </vs-option>\n  </vs-option-group>\n</vs-select>\n"
        }
      ],
      "NEWS": [
        "加载",
        "提示",
        "状态",
        "过滤搜索"
      ]
    },
    "regularPath": "/docs/components/Select.html",
    "relativePath": "docs/components/Select.md",
    "key": "v-f59305de",
    "path": "/docs/components/Select.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "Label",
        "slug": "label"
      },
      {
        "level": 2,
        "title": "分组",
        "slug": "分组"
      },
      {
        "level": 2,
        "title": "过滤搜索",
        "slug": "过滤搜索"
      },
      {
        "level": 2,
        "title": "多选",
        "slug": "多选"
      },
      {
        "level": 2,
        "title": "加载",
        "slug": "加载"
      },
      {
        "level": 2,
        "title": "状态",
        "slug": "状态"
      },
      {
        "level": 2,
        "title": "提示",
        "slug": "提示"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "1/30/2020, 3:38:50 PM"
  },
  {
    "title": "输入框",
    "frontmatter": {
      "PROPS": [
        {
          "name": "placeholder",
          "type": "String",
          "values": "String",
          "description": "Add a placeholder to the input.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input v-model=\"value\" placeholder=\"Name\" />\n  </div>\n</template>\n"
        },
        {
          "name": "label",
          "type": "String",
          "values": "String",
          "description": "Add a label above the component.",
          "default": null,
          "link": null,
          "usage": "#label",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      label=\"Name\"\n      v-model=\"value\"\n      placeholder=\"Evan You\"\n    />\n  </div>\n</template>\n"
        },
        {
          "name": "label-placeholder",
          "type": "String",
          "values": "String",
          "description": "Add a placeholder converts to focus on a label.",
          "default": null,
          "link": null,
          "usage": "#label-placeholder",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      label-placeholder=\"Country\"\n      v-model=\"value\"\n    />\n  </div>\n</template>\n"
        },
        {
          "name": "color",
          "type": "string",
          "values": "vuesax colors,RGB,HEX",
          "description": "Change component color.",
          "default": null,
          "link": null,
          "usage": "#color",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      primary\n      v-model=\"value\"\n      placeholder=\"Primary\" />\n\n    <vs-input\n      success\n      v-model=\"value2\"\n      placeholder=\"Success\" />\n\n    <vs-input\n      danger\n      v-model=\"value3\"\n      placeholder=\"Danger\" />\n\n    <vs-input\n      warn\n      v-model=\"value4\"\n      placeholder=\"Warn\" />\n\n    <vs-input\n      dark\n      v-model=\"value5\"\n      placeholder=\"Dark\" />\n\n    <vs-input\n      color=\"#7d33ff\"\n      v-model=\"value6\"\n      placeholder=\"HEX\" />\n\n    <vs-input\n      color=\"rgb(59,222,200)\"\n      v-model=\"value7\"\n      placeholder=\"HEX\" />\n  </div>\n</template>\n"
        },
        {
          "name": "state",
          "type": "String",
          "values": "vuesax colors,RGB,HEX",
          "description": "Change the background color of the component by changing its status.",
          "default": null,
          "link": null,
          "usage": "#state",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      primary\n      v-model=\"value\"\n      state=\"primary\"\n      placeholder=\"Primary\" />\n\n    <vs-input state=\"success\" success v-model=\"value2\" placeholder=\"Success Icon\">\n      <template #icon>\n        <i class='bx bx-user'></i>\n      </template>\n    </vs-input>\n\n    <vs-input state=\"danger\" danger icon-after v-model=\"value2\" placeholder=\"Danger icon after\">\n      <template #icon>\n        <i class='bx bx-mail-send' ></i>\n      </template>\n    </vs-input>\n\n    <vs-input\n      warn\n      state=\"warn\"\n      v-model=\"value4\"\n      placeholder=\"Label Warn\"\n      label=\"Warn\" />\n\n    <vs-input\n      dark\n      state=\"dark\"\n      v-model=\"value5\"\n      label-placeholder=\"Dark\" />\n  </div>\n</template>\n"
        },
        {
          "name": "progress",
          "type": "number",
          "values": "0 - 100",
          "description": "Add a progress bar starting in red and ending in green.",
          "default": null,
          "link": null,
          "usage": "#progress",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      type=\"password\"\n      v-model=\"value\"\n      label-placeholder=\"Password\"\n      :progress=\"getProgress\"\n      :visiblePassword=\"hasVisiblePassword\"\n      icon-after\n      @click-icon=\"hasVisiblePassword = !hasVisiblePassword\">\n      <template #icon>\n        <i v-if=\"!hasVisiblePassword\" class='bx bx-show-alt'></i>\n        <i v-else class='bx bx-hide'></i>\n      </template>\n\n      <template v-if=\"getProgress >= 100\" #message-success>\n        Secure password\n      </template>\n\n    </vs-input>\n  </div>\n</template> <script>\n  export default {\n    data:() => ({\n      value: '',\n      hasVisiblePassword: false\n    }),\n    computed: {\n      getProgress() {\n        let progress = 0\n\n        // at least one number\n\n        if (/\\d/.test(this.value)) {\n          progress += 20\n        }\n\n        // at least one capital letter\n\n        if (/(.*[A-Z].*)/.test(this.value)) {\n          progress += 20\n        }\n\n        // at menons a lowercase\n\n        if (/(.*[a-z].*)/.test(this.value)) {\n          progress += 20\n        }\n\n        // more than 5 digits\n\n        if (this.value.length >= 6) {\n          progress += 20\n        }\n\n        // at least one special character\n\n        if (/[^A-Za-z0-9]/.test(this.value)) {\n          progress += 20\n        }\n\n        return progress\n      }\n    }\n  }\n  </script>\n"
        },
        {
          "name": "loading",
          "type": "boolean",
          "values": "boolean",
          "description": "Add a loading animation to the input.",
          "default": null,
          "link": null,
          "usage": "#loading",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input loading v-model=\"value\" placeholder=\"Name\" />\n  </div>\n</template>\n"
        },
        {
          "name": "type",
          "type": "string",
          "values": "html type",
          "description": "Change the type of input (html values).",
          "default": null,
          "link": null,
          "usage": "#Input-types",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      type=\"text\"\n      v-model=\"value1\"\n      label=\"Text\"\n    />\n    <vs-input\n      type=\"password\"\n      v-model=\"value2\"\n      label=\"Password\"\n    />\n    <vs-input\n      type=\"search\"\n      v-model=\"value3\"\n      label=\"Search\"\n    />\n    <vs-input\n      type=\"number\"\n      v-model=\"value4\"\n      label=\"Number\"\n    />\n    <vs-input\n      type=\"url\"\n      v-model=\"value5\"\n      label=\"Url\"\n    />\n    <vs-input\n      type=\"time\"\n      v-model=\"value6\"\n      label=\"time\"\n    />\n    <vs-input\n      type=\"date\"\n      v-model=\"value7\"\n      label=\"Date\"\n    />\n  </div>\n</template>\n"
        },
        {
          "name": "border",
          "type": "boolean",
          "values": "boolean",
          "description": "Change the style of the component.",
          "default": false,
          "link": null,
          "usage": "#border",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input border v-model=\"value\" placeholder=\"Name\" />\n\n    <vs-input color=\"#7d33ff\" border type=\"password\" v-model=\"value2\" placeholder=\"Password\">\n      <template #icon>\n        <i class='bx bx-lock-open-alt'></i>\n      </template>\n    </vs-input>\n\n    <vs-input border warn type=\"email\" icon-after v-model=\"value3\" label-placeholder=\"Address\">\n      <template #icon>\n        <i class='bx bxl-bitcoin'></i>\n      </template>\n    </vs-input>\n  </div>\n</template>\n"
        },
        {
          "name": "shadow",
          "type": "boolean",
          "values": "boolean",
          "description": "Change the style of the component.",
          "default": false,
          "link": null,
          "usage": "#shadow",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input shadow v-model=\"value\" placeholder=\"Name\" />\n\n    <vs-input color=\"#7d33ff\" shadow type=\"password\" v-model=\"value2\" placeholder=\"Password\">\n      <template #icon>\n        <i class='bx bx-lock-open-alt'></i>\n      </template>\n    </vs-input>\n\n    <vs-input shadow warn type=\"email\" icon-after v-model=\"value3\" label-placeholder=\"Address\">\n      <template #icon>\n        <i class='bx bxl-bitcoin'></i>\n      </template>\n    </vs-input>\n  </div>\n</template>\n"
        },
        {
          "name": "icon-after",
          "type": "boolean",
          "values": "boolean",
          "description": "Put the icon after the input.",
          "default": false,
          "link": null,
          "usage": "#icon",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input type=\"password\" icon-after v-model=\"value2\" placeholder=\"Password\">\n      <template #icon>\n        <i class='bx bx-lock-open-alt'></i>\n      </template>\n    </vs-input>\n  </div>\n</template>\n"
        },
        {
          "name": "visible-password",
          "type": "boolean",
          "values": "boolean",
          "description": "If the input is of the password type, it is modified to show the password.",
          "default": false,
          "link": null,
          "usage": "#progress",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      type=\"password\"\n      v-model=\"value\"\n      label-placeholder=\"Password\"\n      :progress=\"getProgress\"\n      :visiblePassword=\"hasVisiblePassword\"\n      icon-after\n      @click-icon=\"hasVisiblePassword = !hasVisiblePassword\">\n      <template #icon>\n        <i v-if=\"!hasVisiblePassword\" class='bx bx-show-alt'></i>\n        <i v-else class='bx bx-hide'></i>\n      </template>\n\n      <template v-if=\"getProgress >= 100\" #message-success>\n        Secure password\n      </template>\n\n    </vs-input>\n  </div>\n</template>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "icon",
          "type": "Slot",
          "values": null,
          "description": "Add an icon to the input.",
          "default": null,
          "link": null,
          "usage": "#icon",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input v-model=\"value1\" placeholder=\"User name\">\n      <template #icon>\n        <i class='bx bx-user'></i>\n      </template>\n    </vs-input>\n\n    <vs-input type=\"password\" icon-after v-model=\"value2\" placeholder=\"Password\">\n      <template #icon>\n        <i class='bx bx-lock-open-alt'></i>\n      </template>\n    </vs-input>\n  </div>\n</template>\n"
        },
        {
          "name": "message",
          "type": "Slot",
          "values": null,
          "description": "Add an informative text below the input.",
          "default": null,
          "link": null,
          "usage": "#message",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input v-model=\"value1\" placeholder=\"Email\">\n      <template #message-success>\n        Email Valid\n      </template>\n    </vs-input>\n\n    <vs-input v-model=\"value2\" placeholder=\"Name\">\n      <template #message-danger>\n        Required\n      </template>\n    </vs-input>\n\n    <vs-input type=\"password\" v-model=\"value3\" placeholder=\"Password\">\n      <template #message-warn>\n        Insecure password\n      </template>\n    </vs-input>\n\n    <vs-input v-model=\"value4\" label=\"Example Regex Validation\" placeholder=\"vuesax@gmail.com\">\n      <template v-if=\"validEmail\" #message-success>\n        Email Valid\n      </template>\n      <template v-if=\"!validEmail && value4 !== ''\" #message-danger>\n        Email Invalid\n      </template>\n    </vs-input>\n  </div>\n</template>\n"
        }
      ],
      "NEWS": [
        "state",
        "progress",
        "loading",
        "border",
        "shadow",
        "message"
      ]
    },
    "regularPath": "/docs/components/Input.html",
    "relativePath": "docs/components/Input.md",
    "key": "v-4990bb87",
    "path": "/docs/components/Input.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "Label",
        "slug": "label"
      },
      {
        "level": 2,
        "title": "Label Placeholder",
        "slug": "label-placeholder"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "图标",
        "slug": "图标"
      },
      {
        "level": 2,
        "title": "提示信息",
        "slug": "提示信息"
      },
      {
        "level": 2,
        "title": "状态",
        "slug": "状态"
      },
      {
        "level": 2,
        "title": "进度",
        "slug": "进度"
      },
      {
        "level": 2,
        "title": "加载",
        "slug": "加载"
      },
      {
        "level": 2,
        "title": "类型",
        "slug": "类型"
      },
      {
        "level": 2,
        "title": "边框",
        "slug": "边框"
      },
      {
        "level": 2,
        "title": "阴影",
        "slug": "阴影"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "1/18/2020, 10:03:45 PM"
  },
  {
    "title": "开关",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "boolean, Array",
          "values": "boolean, Array",
          "description": "Determine the value of the component and if it is an array add or remove the value.",
          "default": null,
          "link": null,
          "usage": "#dafault",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch v-model=\"active\" />\n    <vs-switch v-model=\"active2\" />\n    <vs-switch v-model=\"active3\" disabled />\n  </div>\n</template>\n"
        },
        {
          "name": "val",
          "type": "string",
          "values": "string",
          "description": "Change the default value of boolean to the string to use it being an array on v-model.",
          "default": null,
          "link": null,
          "usage": "#array-value",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch val=\"html\" v-model=\"options\">\n      Html\n    </vs-switch>\n    <vs-switch val=\"css\" v-model=\"options\">\n      Css\n    </vs-switch>\n    <vs-switch val=\"javascript\" v-model=\"options\">\n      Javascript\n    </vs-switch>\n    <vs-switch val=\"vue\" v-model=\"options\">\n      Vue\n    </vs-switch>\n    <vs-switch val=\"vuesax\" v-model=\"options\">\n      Vuesax\n    </vs-switch>\n\n    <span class=\"data\">\n      {{ options }}\n    </span>\n  </div>\n</template>\n"
        },
        {
          "name": "color",
          "type": "String",
          "values": "Vuesax main colors, RGB y HEX",
          "description": "Change the color of the component when it is in active state.",
          "default": "primary",
          "link": null,
          "usage": "#color",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch v-model=\"active1\" />\n    <vs-switch success v-model=\"active2\" />\n    <vs-switch danger v-model=\"active3\" />\n    <vs-switch warn v-model=\"active4\" />\n    <vs-switch dark v-model=\"active5\" />\n    <vs-switch color=\"#7d33ff\" v-model=\"active6\" />\n    <vs-switch color=\"rgb(59,222,200)\" v-model=\"active7\" />\n  </div>\n</template>\n"
        },
        {
          "name": "loading",
          "type": "boolean",
          "values": "true, false",
          "description": "Add a loading animation to the component.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch v-model=\"activeLoading\">\n      Active Loading\n    </vs-switch>\n    <vs-switch :loading=\"activeLoading\" v-model=\"active2\" />\n  </div>\n</template> <script> export default {\n  data:() => ({\n    activeLoading: true,\n    active2: false\n  }),\n} </script>\n"
        },
        {
          "name": "indeterminate",
          "type": "boolean",
          "values": "true,false",
          "description": "Determine if the component is in an undetermined state (being in this state is disabled).",
          "default": false,
          "link": null,
          "usage": "#indeterminate",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch indeterminate v-model=\"active\" />\n    <vs-switch indeterminate v-model=\"active2\" />\n    <vs-switch indeterminate v-model=\"active3\" disabled />\n  </div>\n</template>\n"
        },
        {
          "name": "Square",
          "type": "Boolean",
          "values": "true,false",
          "description": "Change the style of the component from circular to square.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch square v-model=\"active\" />\n    <vs-switch square v-model=\"active2\" />\n    <vs-switch square v-model=\"active3\" disabled />\n  </div>\n</template>\n"
        },
        {
          "name": "icon",
          "type": "boolean",
          "values": "true,false",
          "description": "Change the style of the circle by making it transparent (used when adding the slot = \"circle\").",
          "default": false,
          "link": null,
          "usage": "#icons",
          "code": "<vs-switch color=\"#7d33ff\" icon v-model=\"active6\">\n  <template #circle>\n      <i v-if=\"active6\" class='bx bxl-instagram-alt'></i>\n      <i v-else class='bx bxl-instagram' ></i>\n  </template>\n</vs-switch>\n"
        },
        {
          "name": "notValue",
          "type": "String",
          "values": "String",
          "description": "Determine the return value of the component when inactive.",
          "default": null,
          "link": null,
          "usage": null,
          "code": null
        }
      ],
      "SLOTS": [
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Add text within the component.",
          "default": null,
          "link": "/api/slot",
          "usage": "#text",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch v-model=\"active\">\n      Suscribe\n    </vs-switch>\n    <vs-switch v-model=\"active2\">\n      <template #off>\n          Off\n      </template>\n      <template #on>\n          On\n      </template>\n    </vs-switch>\n    <vs-switch v-model=\"active3\">\n      <template #off>\n          default\n      </template>\n      <template #on>\n          Premium\n      </template>\n    </vs-switch>\n  </div>\n</template>\n"
        },
        {
          "name": "on",
          "type": "slot",
          "values": null,
          "description": "Add text within the component when it is in active state.",
          "default": null,
          "link": "/api/slot",
          "usage": "#icons",
          "code": "<vs-switch v-model=\"active1\">\n  <template #off>\n      <i class='bx bxs-volume-mute' ></i>\n  </template>\n  <template #on>\n      <i class='bx bxs-volume-full' ></i>\n  </template>\n</vs-switch>\n"
        },
        {
          "name": "off",
          "type": "slot",
          "values": null,
          "description": "Add text within the component when it is in idle state.",
          "default": null,
          "link": "/api/slot",
          "usage": "#icons",
          "code": "<vs-switch v-model=\"active1\">\n  <template #off>\n      <i class='bx bxs-volume-mute' ></i>\n  </template>\n  <template #on>\n      <i class='bx bxs-volume-full' ></i>\n  </template>\n</vs-switch>\n"
        },
        {
          "name": "circle",
          "type": "slot",
          "values": null,
          "description": "Add an icon to the circle within the component.",
          "default": null,
          "link": "/api/slot",
          "usage": "#icons",
          "code": "<vs-switch color=\"#7d33ff\" icon v-model=\"active6\">\n  <template #circle>\n      <i v-if=\"active6\" class='bx bxl-instagram-alt'></i>\n      <i v-else class='bx bxl-instagram' ></i>\n  </template>\n</vs-switch>\n"
        }
      ],
      "NEWS": [
        "方形",
        "不确定值",
        "加载",
        "数组"
      ]
    },
    "regularPath": "/docs/components/Switch.html",
    "relativePath": "docs/components/Switch.md",
    "key": "v-21cbd4a1",
    "path": "/docs/components/Switch.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "文本",
        "slug": "文本"
      },
      {
        "level": 2,
        "title": "图标",
        "slug": "图标"
      },
      {
        "level": 2,
        "title": "数组",
        "slug": "数组"
      },
      {
        "level": 2,
        "title": "加载",
        "slug": "加载"
      },
      {
        "level": 2,
        "title": "不确定值",
        "slug": "不确定值"
      },
      {
        "level": 2,
        "title": "方形",
        "slug": "方形"
      },
      {
        "level": 2,
        "title": "例子",
        "slug": "例子"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "1/25/2020, 4:21:03 AM"
  },
  {
    "title": "侧边栏",
    "frontmatter": {
      "PROPS": [
        {
          "name": "open",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determines if the component is visible.",
          "default": false,
          "link": null,
          "usage": "#open",
          "code": ":open.sync=\"activeSidebar\"\n"
        },
        {
          "name": "v-model",
          "type": "String",
          "values": "id",
          "description": "Determines the item that is in active status.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "v-model=\"active\"\n"
        },
        {
          "name": "absolute",
          "type": "boolean",
          "values": "true,false",
          "description": "Determine if the component is of absolute position.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-sidebar\n  absolute\n  v-model=\"active\"\n  :open.sync=\"activeSidebar\"\n  >\n"
        },
        {
          "name": "relative",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determine if the component is relative position.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-sidebar\n  relative\n  v-model=\"active\"\n  :open.sync=\"activeSidebar\"\n  >\n"
        },
        {
          "name": "reduce",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determine if the component is in a reduced state with a width of 50px.",
          "default": false,
          "link": null,
          "usage": "#reduce",
          "code": "<vs-sidebar\n  absolute\n  reduce\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "hover-expand",
          "type": "Boolean",
          "values": "true,false",
          "description": "Adds the functionality to expand when the user enters inside the sidebar and vice versa.",
          "default": false,
          "link": null,
          "usage": "#hover-expand",
          "code": "<vs-sidebar\n  absolute\n  reduce\n  hover-expand\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determine if the component has no border radius",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar\n  square\n  absolute\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "notShadow",
          "type": "Boolean",
          "values": "true,false",
          "description": "Remove the shadow from the sidebar",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar\n  not-shadow\n  absolute\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "background",
          "type": "String",
          "values": "Vuesax Colors, RGB, HEX",
          "description": "Change the background color of the sidebar",
          "default": false,
          "link": null,
          "usage": "#color",
          "code": "<vs-sidebar\n  background=\"primary\"\n  absolute\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "textWhite",
          "type": "Boolean",
          "values": "true,false",
          "description": "Change the text color to white",
          "default": false,
          "link": null,
          "usage": "#color",
          "code": "<vs-sidebar\n  text-white\n  background=\"primary\"\n  absolute\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "notLineActive",
          "type": "Boolean",
          "values": "true,false",
          "description": "Remove the active line from items",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar\n  not-line-active\n  absolute\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "vs-sidebar-item:to",
          "type": "String",
          "values": "url",
          "description": "Generate a new vue-router route",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar-item\n  to=\"/\"\n>\n"
        },
        {
          "name": "vs-sidebar-item:href",
          "type": "String",
          "values": "url",
          "description": "Generate a new route",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar-item\n  href=\"http://vuesax.com/\"\n>\n"
        },
        {
          "name": "right",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determines if the component is positioned to the right",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar right>\n  ...\n</vs-sidebar>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "logo",
          "type": "slot",
          "values": null,
          "description": "Add elements on top of the entire sidebar.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #logo>\n  ...\n</template>\n"
        },
        {
          "name": "footer",
          "type": "slot",
          "values": null,
          "description": "Add the elements at the bottom of the sidebar.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #footer>\n  ...\n</template>\n"
        },
        {
          "name": "header",
          "type": "slot",
          "values": null,
          "description": "Add the elements below the logo and above the items.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<template #header>\n  ...\n</template>\n"
        },
        {
          "name": "vs-sidebar-item#icon",
          "type": "slot",
          "values": null,
          "description": "It is the space to add the icon or a representative letter.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #icon>\n  <i class='bx bx-home' ></i>\n</template>\n"
        }
      ],
      "NEWS": [
        "name"
      ]
    },
    "regularPath": "/docs/components/Sidebar.html",
    "relativePath": "docs/components/Sidebar.md",
    "key": "v-59941d07",
    "path": "/docs/components/Sidebar.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "分组",
        "slug": "分组"
      },
      {
        "level": 2,
        "title": "收缩",
        "slug": "收缩"
      },
      {
        "level": 2,
        "title": "悬浮展开",
        "slug": "悬浮展开"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "展开隐藏",
        "slug": "展开隐藏"
      },
      {
        "level": 2,
        "title": "右侧展示",
        "slug": "右侧展示"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "9/30/2020, 5:58:17 AM"
  },
  {
    "title": "文字提示",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "boolean",
          "values": "true,false",
          "description": "Determination if the component is active (visible).",
          "default": false,
          "link": null,
          "usage": "#content",
          "code": null
        },
        {
          "name": "color",
          "type": "String",
          "values": "Vuesax colors, RGB, HEX",
          "description": "Change the color of the tooltip.",
          "default": "text",
          "link": null,
          "usage": "#color",
          "code": "<vs-tooltip primary>\n  <vs-button flat>\n    Primary\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "left, right, bottom",
          "type": "Boolean",
          "values": "true,false",
          "description": "Change the position of the tooltip.",
          "default": "top",
          "link": null,
          "usage": "#position",
          "code": "<vs-tooltip left>\n  <vs-button border>\n    left\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "border",
          "type": "Boolean",
          "values": "true,false",
          "description": "Change the style of the tooltip by adding a border.",
          "default": "primary",
          "link": null,
          "usage": "#border",
          "code": "<vs-tooltip border>\n  <vs-button transparent>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "border-thick",
          "type": "Boolean",
          "values": "true,false",
          "description": "Change the style of the tooltip by adding a thick border only at the arrow position.",
          "default": false,
          "link": null,
          "usage": "#border",
          "code": "<vs-tooltip color=\"#7d33ff\" border-thick>\n  <vs-button color=\"#7d33ff\" transparent>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "trie,false",
          "description": "Determine if the tooltip is rectangular without border-radius.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-tooltip square>\n  <vs-button square flat>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "circle",
          "type": "boolean",
          "values": "true,false",
          "description": "Change the border radius to 20px so that if it is a single line of text the corners are circular.",
          "default": false,
          "link": null,
          "usage": "#circle",
          "code": "<vs-tooltip circle>\n  <vs-button circle flat>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "shadow",
          "type": "boolean",
          "values": "true,false",
          "description": "Change the style of the tooltip by adding a shadow and changing the background.",
          "default": false,
          "link": null,
          "usage": "#shadow",
          "code": "<vs-tooltip shadow>\n  <vs-button flat>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "not-arrow",
          "type": "boolean",
          "values": "true,false",
          "description": "Remove the arrow from the tooltip.",
          "default": false,
          "link": null,
          "usage": "#not-arrow",
          "code": "<vs-tooltip not-arrow left>\n  <vs-button border>\n    left not-arrow\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "not-hover",
          "type": "boolean",
          "values": "true,false",
          "description": "The default tooltip is generated by doing hover on the parent element, that functionality is removed and no longer appears or disappears when doing hover.",
          "default": false,
          "link": null,
          "usage": "#content",
          "code": "<vs-tooltip bottom shadow not-hover v-model=\"activeTooltip1\">\n  <vs-button danger @click=\"activeTooltip1=!activeTooltip1\">\n    Click Delete User\n  </vs-button>\n  <template #tooltip>\n    <div class=\"content-tooltip\">\n      <h4 class=\"center\">\n        Confirm\n      </h4>\n      <p>\n        You are sure to delete this user, by doing so you cannot recover the data\n      </p>\n      <footer>\n        <vs-button @click=\"activeTooltip1=false\" danger block>\n          Delete\n        </vs-button>\n        <vs-button @click=\"activeTooltip1=false\" transparent dark block>\n          Cancel\n        </vs-button>\n      </footer>\n    </div>\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "interactivity",
          "type": "boolean",
          "values": "true,false",
          "description": "Determine if the tooltip is interactive and makes it possible to click without automatically hiding.",
          "default": false,
          "link": null,
          "usage": "#content",
          "code": "<vs-tooltip shadow interactivity>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-5.png\" alt=\"\">\n  </vs-avatar>\n  <template #tooltip>\n    <div class=\"content-tooltip\">\n      <div class=\"body\">\n        <div class=\"text\">\n            Cosed Tasks\n          <span>\n          89\n          </span>\n        </div>\n        <vs-avatar circle size=\"80\" @click=\"activeTooltip1=!activeTooltip1\">\n          <img src=\"/avatars/avatar-5.png\" alt=\"\">\n        </vs-avatar>\n        <div class=\"text\">\n            Open Tasks\n          <span>\n          8\n          </span>\n        </div>\n      </div>\n      <footer>\n        <vs-button circle icon border>\n          <i class='bx bxs-share-alt'></i>\n        </vs-button>\n        <vs-button circle>\n          Message\n        </vs-button>\n        <vs-button circle icon border>\n          <i class='bx bx-like' ></i>\n        </vs-button>\n      </footer>\n    </div>\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "loading",
          "type": "boolean",
          "values": "true,false",
          "description": "Determine if the tooltip has a loading style and animation.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<template>\n  <div class=\"center\">\n    <vs-tooltip loading>\n      <vs-button flat>\n        Do hover here loading\n      </vs-button>\n      <template #tooltip>\n        This is a beautiful button\n      </template>\n    </vs-tooltip>\n    <vs-tooltip loading>\n      <vs-button flat>\n        Do hover here loading\n      </vs-button>\n      <template #tooltip></template>\n    </vs-tooltip>\n  </div>\n</template>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Add the trigger element of the tooltip.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-tooltip>\n  <vs-button flat>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "tooltip",
          "type": "slot",
          "values": null,
          "description": "It is the content that will go inside the tooltip.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-tooltip>\n  <vs-button flat>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        }
      ],
      "NEWS": [
        "边框",
        "方形",
        "圆形",
        "阴影",
        "无箭头",
        "加载",
        "自定义内容"
      ]
    },
    "regularPath": "/docs/components/Tooltip.html",
    "relativePath": "docs/components/Tooltip.md",
    "key": "v-c698dd32",
    "path": "/docs/components/Tooltip.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "位置",
        "slug": "位置"
      },
      {
        "level": 2,
        "title": "色彩",
        "slug": "色彩"
      },
      {
        "level": 2,
        "title": "边框",
        "slug": "边框"
      },
      {
        "level": 2,
        "title": "方形",
        "slug": "方形"
      },
      {
        "level": 2,
        "title": "圆形",
        "slug": "圆形"
      },
      {
        "level": 2,
        "title": "阴影",
        "slug": "阴影"
      },
      {
        "level": 2,
        "title": "无箭头",
        "slug": "无箭头"
      },
      {
        "level": 2,
        "title": "加载",
        "slug": "加载"
      },
      {
        "level": 2,
        "title": "自定义内容",
        "slug": "自定义内容"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "3/3/2020, 10:21:13 AM"
  },
  {
    "title": "Directives",
    "frontmatter": {},
    "regularPath": "/docs/directives/",
    "relativePath": "docs/directives/README.md",
    "key": "v-15533b62",
    "path": "/docs/directives/",
    "lastUpdated": "11/7/2019, 10:56:15 AM"
  },
  {
    "title": "表格",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "object, array",
          "values": "object, array",
          "description": "Determines the table values ​​that are selected.",
          "default": null,
          "link": null,
          "usage": "#single-selected",
          "code": "<vs-table v-model=\"selected\">\n"
        },
        {
          "name": "striped",
          "type": "Boolean",
          "values": "true,false",
          "description": "Add stripes to the gray tr.",
          "default": null,
          "link": null,
          "usage": "#striped",
          "code": "<vs-table striped>\n"
        },
        {
          "name": "vs-tr:data",
          "type": "object",
          "values": "object",
          "description": "when the functionality of selected is needed this property is needed since it is the object that is passed to the v-model.",
          "default": null,
          "link": null,
          "usage": "#single-selected",
          "code": "<vs-tr\n  :key=\"i\"\n  v-for=\"(tr, i) in users\"\n  :data=\"tr\"\n  :is-selected=\"selected == tr\"\n>\n  ...\n</vs-tr>\n"
        },
        {
          "name": "vs-tr:is-selected",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determines if the component is in the selected state.",
          "default": false,
          "link": null,
          "usage": "#single-selected",
          "code": "<vs-tr\n  :key=\"i\"\n  v-for=\"(tr, i) in users\"\n  :data=\"tr\"\n  :is-selected=\"selected == tr\"\n>\n  ...\n</vs-tr>\n"
        },
        {
          "name": "vs-td:edit",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determine if the element is editable by adding underline and the pointer cursor.",
          "default": false,
          "link": null,
          "usage": "#edit-data",
          "code": "<vs-td edit @click=\"edit = tr, editProp = 'name', editActive = true\">\n  {{ tr.name }}\n</vs-td>\n"
        },
        {
          "name": "vs-th:sort",
          "type": "Boolean",
          "values": "true,false",
          "description": "Add the sort arrows to the corresponding th.",
          "default": false,
          "link": null,
          "usage": "#search-and-sort",
          "code": "<vs-th sort @click=\"users = $vs.sortData($event ,users, 'name')\">\n  Name\n</vs-th>\n"
        },
        {
          "name": "vs-tr:color",
          "type": "String, vuesax colors",
          "values": "color, vuesax colors",
          "description": "Change the color of the tr.",
          "default": null,
          "link": null,
          "usage": "#state",
          "code": "<vs-tr\n  :key=\"i\"\n  v-for=\"(tr, i) in users\"\n  :data=\"tr\"\n  :danger=\"tr.id == 3\"\n  :success=\"tr.id == 5\"\n  :primary=\"tr.id == 8\"\n  :warn=\"tr.id == 9\"\n>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "header",
          "type": "slot",
          "values": null,
          "description": "Space to put an element at the top of the table such as the input search.",
          "default": null,
          "link": null,
          "usage": "#search-and-sort",
          "code": "<template #header>\n  ...\n</template>\n"
        },
        {
          "name": "thead",
          "type": "slot",
          "values": null,
          "description": "Space representing thead element of the table where the `vs-th` components will be placed.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #thead>\n  <vs-tr>\n    <vs-th>\n      Name\n    </vs-th>\n    <vs-th>\n      Email\n    </vs-th>\n    <vs-th>\n      Id\n    </vs-th>\n  </vs-tr>\n</template>\n"
        },
        {
          "name": "tbody",
          "type": "slot",
          "values": null,
          "description": "Represents the tbody element in the table and here we will put the `vs-tr` components.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #tbody>\n  <vs-tr\n    :key=\"i\"\n    v-for=\"(tr, i) in users\"\n    :data=\"tr\"\n  >\n    <vs-td>\n      {{ tr.name }}\n    </vs-td>\n    <vs-td>\n    {{ tr.email }}\n    </vs-td>\n    <vs-td>\n    {{ tr.id }}\n    </vs-td>\n  </vs-tr>\n</template>\n"
        },
        {
          "name": "vs-tr:#expand",
          "type": "slot",
          "values": null,
          "description": "Represents the interior of the tr when it is expanded.",
          "default": null,
          "link": null,
          "usage": "#expand",
          "code": "<template #expand>\n  <div class=\"con-content\">\n    <div>\n      <vs-avatar>\n        <img :src=\"`/avatars/avatar-${i + 1}.png`\" alt=\"\">\n      </vs-avatar>\n      <p>\n        {{ tr.name }}\n      </p>\n    </div>\n    <div>\n      <vs-button flat icon>\n        <i class='bx bx-lock-open-alt' ></i>\n      </vs-button>\n      <vs-button flat icon>\n        Send Email\n      </vs-button>\n      <vs-button border danger>\n        Remove User\n      </vs-button>\n    </div>\n  </div>\n</template>\n"
        },
        {
          "name": "notFound",
          "type": "slot",
          "values": null,
          "description": "Change the item to display when there are no items in the table.",
          "default": null,
          "link": null,
          "usage": "#search",
          "code": "<template #notFound>\n  Not Found\n</template>\n"
        }
      ],
      "NEWS": [
        "函数"
      ]
    },
    "regularPath": "/docs/components/Table.html",
    "relativePath": "docs/components/Table.md",
    "key": "v-08cebf07",
    "path": "/docs/components/Table.html",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "条纹",
        "slug": "条纹"
      },
      {
        "level": 2,
        "title": "状态",
        "slug": "状态"
      },
      {
        "level": 2,
        "title": "分页",
        "slug": "分页"
      },
      {
        "level": 2,
        "title": "单行选择",
        "slug": "单行选择"
      },
      {
        "level": 2,
        "title": "多选",
        "slug": "多选"
      },
      {
        "level": 2,
        "title": "可展开",
        "slug": "可展开"
      },
      {
        "level": 2,
        "title": "编辑数据",
        "slug": "编辑数据"
      },
      {
        "level": 2,
        "title": "搜索排序",
        "slug": "搜索排序"
      },
      {
        "level": 2,
        "title": "组合使用",
        "slug": "组合使用"
      },
      {
        "level": 2,
        "title": "函数",
        "slug": "函数"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "6/18/2020, 6:56:36 PM"
  },
  {
    "title": "Functions",
    "frontmatter": {},
    "regularPath": "/docs/functions/",
    "relativePath": "docs/functions/README.md",
    "key": "v-5b8f5f04",
    "path": "/docs/functions/",
    "lastUpdated": "11/7/2019, 10:56:15 AM"
  },
  {
    "title": "简介",
    "frontmatter": {},
    "regularPath": "/docs/guide/",
    "relativePath": "docs/guide/README.md",
    "key": "v-bd6dcf38",
    "path": "/docs/guide/",
    "headers": [
      {
        "level": 2,
        "title": "什么是 Lucid",
        "slug": "什么是-lucid"
      },
      {
        "level": 2,
        "title": "为什么选择 Lucid",
        "slug": "为什么选择-lucid"
      },
      {
        "level": 2,
        "title": "怎么使用",
        "slug": "怎么使用"
      },
      {
        "level": 2,
        "title": "特性",
        "slug": "特性"
      }
    ],
    "lastUpdated": "2/14/2020, 9:08:22 PM"
  },
  {
    "title": "Configuration",
    "frontmatter": {},
    "regularPath": "/docs/guide/configuration.html",
    "relativePath": "docs/guide/configuration.md",
    "key": "v-f2159f16",
    "path": "/docs/guide/configuration.html",
    "headers": [
      {
        "level": 2,
        "title": "Instance Config",
        "slug": "instance-config"
      }
    ],
    "lastUpdated": "11/7/2019, 10:56:15 AM"
  },
  {
    "title": "Migration",
    "frontmatter": {},
    "regularPath": "/docs/guide/migration.html",
    "relativePath": "docs/guide/migration.md",
    "key": "v-4cad0176",
    "path": "/docs/guide/migration.html",
    "lastUpdated": "11/7/2019, 10:56:15 AM"
  },
  {
    "title": "快速上手",
    "frontmatter": {},
    "regularPath": "/docs/guide/gettingStarted.html",
    "relativePath": "docs/guide/gettingStarted.md",
    "key": "v-0e26fba7",
    "path": "/docs/guide/gettingStarted.html",
    "headers": [
      {
        "level": 2,
        "title": "安装",
        "slug": "安装"
      },
      {
        "level": 2,
        "title": "NPM",
        "slug": "npm"
      },
      {
        "level": 2,
        "title": "使用",
        "slug": "使用"
      },
      {
        "level": 2,
        "title": "单组件按需引入",
        "slug": "单组件按需引入"
      },
      {
        "level": 2,
        "title": "CDN",
        "slug": "cdn"
      }
    ],
    "lastUpdated": "6/18/2020, 6:56:36 PM"
  },
  {
    "title": "网格",
    "frontmatter": {},
    "regularPath": "/docs/layout/",
    "relativePath": "docs/layout/README.md",
    "key": "v-6f7c2ad4",
    "path": "/docs/layout/",
    "headers": [
      {
        "level": 2,
        "title": "默认",
        "slug": "默认"
      },
      {
        "level": 2,
        "title": "偏移",
        "slug": "偏移"
      },
      {
        "level": 2,
        "title": "水平对齐",
        "slug": "水平对齐"
      },
      {
        "level": 2,
        "title": "垂直对齐",
        "slug": "垂直对齐"
      },
      {
        "level": 2,
        "title": "排序",
        "slug": "排序"
      },
      {
        "level": 2,
        "title": "响应式",
        "slug": "响应式"
      }
    ],
    "lastUpdated": "6/18/2020, 7:13:20 PM"
  },
  // {
  //   "title": "Vuesax + Nuxtjs",
  //   "frontmatter": {},
  //   "regularPath": "/docs/guide/nuxt.html",
  //   "relativePath": "docs/guide/nuxt.md",
  //   "key": "v-a090e632",
  //   "path": "/docs/guide/nuxt.html",
  //   "headers": [
  //     {
  //       "level": 2,
  //       "title": "Installation",
  //       "slug": "installation"
  //     },
  //     {
  //       "level": 2,
  //       "title": "Version",
  //       "slug": "version"
  //     },
  //     {
  //       "level": 2,
  //       "title": "Test a component",
  //       "slug": "test-a-component"
  //     },
  //     {
  //       "level": 3,
  //       "title": "Add a component",
  //       "slug": "add-a-component"
  //     },
  //     {
  //       "level": 2,
  //       "title": "Tips",
  //       "slug": "tips"
  //     }
  //   ],
  //   "lastUpdated": "6/18/2020, 6:56:36 PM"
  // },
  {
    "title": "Font",
    "frontmatter": {},
    "regularPath": "/docs/theme/font.html",
    "relativePath": "docs/theme/font.md",
    "key": "v-dce5a972",
    "path": "/docs/theme/font.html",
    "lastUpdated": "11/7/2019, 10:56:15 AM"
  },
  {
    "title": "Generate",
    "frontmatter": {},
    "regularPath": "/docs/theme/generate.html",
    "relativePath": "docs/theme/generate.md",
    "key": "v-7c01aef2",
    "path": "/docs/theme/generate.html",
    "headers": [
      {
        "level": 2,
        "title": "change default Colors",
        "slug": "change-default-colors"
      }
    ],
    "lastUpdated": "11/7/2019, 10:56:15 AM"
  },
  {
    "title": "Icons",
    "frontmatter": {},
    "regularPath": "/docs/theme/icons.html",
    "relativePath": "docs/theme/icons.md",
    "key": "v-241ae6d3",
    "path": "/docs/theme/icons.html",
    "lastUpdated": "11/7/2019, 10:56:15 AM"
  },
  {
    "frontmatter": {
      "docsHome": true
    },
    "regularPath": "/en/docs/",
    "relativePath": "en/docs/README.md",
    "key": "v-236d99cc",
    "path": "/en/docs/",
    "lastUpdated": "13/1/2020 19:32:50"
  },
  // {
  //   "title": "Vuesax Ecosystem",
  //   "frontmatter": {},
  //   "regularPath": "/ecosystem/",
  //   "relativePath": "ecosystem/README.md",
  //   "key": "v-48743552",
  //   "path": "/ecosystem/",
  //   "headers": [
  //     {
  //       "level": 2,
  //       "title": "Discord",
  //       "slug": "discord"
  //     },
  //     {
  //       "level": 2,
  //       "title": "Github",
  //       "slug": "github"
  //     },
  //     {
  //       "level": 2,
  //       "title": "twitter",
  //       "slug": "twitter"
  //     },
  //     {
  //       "level": 2,
  //       "title": "Patreon",
  //       "slug": "patreon"
  //     }
  //   ],
  //   "lastUpdated": "11/7/2019, 10:56:15 AM"
  // },
  {
    "title": "Home",
    "frontmatter": {
      "home": true,
      "heroText": "<b>Vuesax</b> Marco <br/> de components creados con <a target=\"_blank\" href=\"https://vuejs.org/\" >Vuejs</a>",
      "tagline": "Nos encanta lo que hacemos, déjenos ayudarlo a crear lo que usted ama.",
      "actionText": "Empezar",
      "actionLink": "/en/docs/guide/",
      "suscribe": "<b>Suscribirse</b> a nuestro <br> boletín semanal",
      "premiumThemes": {
        "title": "<b>Vuesax</b> Temas Premium",
        "details": "Cree proyectos geniales con un mayor ahorro de tiempo y trabaje con los temas creados con Vuesax"
      },
      "features": [
        {
          "title": "<b>Componentes Reutilizables</b> y fáciles de implementar",
          "details": "Con <b>Vuesax</b> puedes usar cualquier componente con pocas líneas de código <br> y con gran personalización, y lo mas importante, muy fácil de usar y entender.",
          "action": "/en/docs/components/",
          "actionText": "Componentes"
        },
        {
          "title": "Necesitas soporte para aplicaciones o Páginas <b>Responsive</b>?",
          "details": "Los componentes de Vuesax tienen soporte para responsive y se adaptan a cada tipo de tamaño, aparte de que puedes usar fácilmente los componentes de grid para generar <b>cambios visuales en base al tamaño de la pantalla</b> ya sea un <b>teléfono</b>, <b>tablet</b> o <b>desktop</b>.",
          "action": "/en/docs/layout/",
          "actionText": "Cuadrícula de diseño"
        },
        {
          "title": "<b>Vuesax</b> esta para ayudarte a crear tus ideas y desarrollar esos <b>proyectos geniales</b>",
          "details": "Tienes una idea? o algún proyecto para un cliente, Vuesax te puede ayudar a <b>crear mas rápido y trabajar menos</b> dándote todo lo necesario para implementar una interfaz desde lo mas simple hasta la mas compleja.",
          "action": "/en/docs/guide/gettingStarted/",
          "actionText": "Empezar"
        },
        {
          "title": "<b>Diseño<b> único y hermoso",
          "details": "<b>Nuestros diseños son únicos</b> para cada componente y no están anclados a ninguna tendencia visual o reglas de diseño, lo que nos hace únicos y a por supuesto a tus proyectos también.",
          "action": null,
          "actionText": null
        }
      ]
    },
    "regularPath": "/en/",
    "relativePath": "en/README.md",
    "key": "v-21012fa4",
    "path": "/en/",
    "lastUpdated": "25/1/2020 4:21:03"
  },
  {
    "title": "branding",
    "frontmatter": {
      "branding": true
    },
    "regularPath": "/en/branding/",
    "relativePath": "en/branding/README.md",
    "key": "v-4b95a91a",
    "path": "/en/branding/",
    "lastUpdated": "23/1/2020 0:28:16"
  },
  {
    "title": "animations",
    "frontmatter": {},
    "regularPath": "/en/docs/animations/",
    "relativePath": "en/docs/animations/README.md",
    "key": "v-7a4f5524",
    "path": "/en/docs/animations/",
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Alert",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "boolean",
          "values": "boolean",
          "description": "determina si el componente se encuentra visible.",
          "default": true,
          "link": null,
          "code": "<template>\n  <vs-button flat @click=\"active=!active\">\n    {{ active ? 'Close Alert' : 'Open Alert' }}\n  </vs-button>\n\n  <vs-alert closable v-model=\"active\">\n    <template #title>\n      Vuesax Framework\n    </template>\n    Vuesax (pronunciado / vjusacksː /, como view sacks) en un <b>framework de componentes UI</b> \n    creado con <a href=\"https://vuejs.org/\">Vuejs</a> para hacer proyectos fácilmente y con un \n    estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de \n    desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente \n    su enfoque visual al usuario final\n  </vs-alert>\n</template>\n<script>\n  export default {\n    data:() => ({\n      active: true,\n    })\n  }\n</script>\n",
          "usage": "#closable"
        },
        {
          "name": "color",
          "type": "String",
          "values": "primary, success, danger, warning, dark, RGB, HEX",
          "description": "Cambia el color del componente y algunos de sus sub componentes.",
          "default": "primary",
          "link": null,
          "usage": "#color",
          "code": "<vs-alert color=\"success\">\n  <template #title>\n    Vuesax Framework\n  </template>\n  Vuesax (pronunciado / vjusacksː /, como view sacks) en un <b>framework de componentes UI</b> \n  creado con <a href=\"https://vuejs.org/\">Vuejs</a> para hacer proyectos fácilmente y con un \n  estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de \n  desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente \n  su enfoque visual al usuario final\n</vs-alert>\n"
        },
        {
          "name": "type",
          "type": "boolean",
          "values": "solid, border, shadow,gradient,relief",
          "description": "cambia el estilo de todo el alert.",
          "default": "default",
          "link": null,
          "usage": "#solid",
          "code": "<vs-alert solid>\n  <template #title>\n    Vuesax Framework\n  </template>\n  Vuesax (pronunciado / vjusacksː /, como view sacks) en un <b>framework de componentes UI</b> \n  creado con <a href=\"https://vuejs.org/\">Vuejs</a> para hacer proyectos fácilmente y con\n  un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de\n  desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente \n  su enfoque visual al usuario final\n</vs-alert>\n"
        },
        {
          "name": "hidden-content",
          "type": "boolean",
          "values": "boolean",
          "description": "con esta propiedad puedes ocultar el contenido de el alert.",
          "default": false,
          "link": null,
          "usage": "#hidden-content",
          "code": "<template>\n  <vs-alert :hidden-content=\"true\" >\n    <template #title>\n      Vuesax Framework\n    </template>\n    Vuesax (pronunciado / vjusacksː /, como view sacks) en un <b>framework de componentes UI</b> \n    creado con <a href=\"https://vuejs.org/\">Vuejs</a> para hacer proyectos fácilmente y con\n    un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de\n    desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente \n    su enfoque visual al usuario final\n  </vs-alert>\n</template>\n"
        },
        {
          "name": "page",
          "type": "Number",
          "values": "Number",
          "description": "determina la pagina que esta activa (esta propiedad va unida con los slots=\"page-{n}\").",
          "default": null,
          "link": null,
          "usage": "#pagination",
          "code": "<template>\n  <vs-alert :page=\"1\" >\n    <template #title>\n      Vuesax Framework\n    </template>\n\n    <template #page-1>\n      Pagina 1 - esta pagina en un slot y aquí adentro puedes agregar ya sea texto, \n      elementos html o componentes\n    </template>\n\n    <template #page-2>\n      Pagina 2 - En esta otra pagina puedes poner también lo que necesites \n      y en dinámico osea que puedes agregar cuantas paginas necesites\n    </template>\n\n    <template #page-3>\n      Pagina 3 - esta en la ultima pagina de el ejemplo\n    </template>\n  </vs-alert>\n</template>\n"
        },
        {
          "name": "progress",
          "type": "Number",
          "values": "0 - 100",
          "description": "agrega una barra de progreso al alert y el valor en el porcentaje de ancho.",
          "default": null,
          "link": null,
          "usage": "#progress-bar",
          "code": "<vs-alert progress=\"70\">\n  <template #title>\n    Vuesax Framework\n  </template>\n  Vuesax (pronunciado / vjusacksː /, como view sacks) en un <b>framework de componentes UI</b> \n  creado con <a href=\"https://vuejs.org/\">Vuejs</a> para hacer proyectos fácilmente y con un estilo \n  único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador \n  desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual \n  al usuario final\n</vs-alert>\n"
        },
        {
          "name": "closable",
          "type": "boolean",
          "values": "boolean",
          "description": "agrega un botón para poder cerrar el alert (en necesario el uso de v-model).",
          "default": false,
          "link": null,
          "usage": "#closable",
          "code": "<template>\n  <vs-button flat @click=\"active=!active\">\n    {{ active ? 'Close Alert' : 'Open Alert' }}\n  </vs-button>\n\n  <vs-alert closable v-model=\"active\">\n    <template #title>\n      Vuesax Framework\n    </template>\n    Vuesax (pronunciado / vjusacksː /, como view sacks) en un <b>framework de componentes UI</b> \n    creado con <a href=\"https://vuejs.org/\">Vuejs</a> para hacer proyectos fácilmente y con un \n    estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de \n    desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente \n    su enfoque visual al usuario final\n  </vs-alert>\n</template>\n<script>\n  export default {\n    data:() => ({\n      active: true,\n    })\n  }\n</script>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "icon",
          "type": "slot",
          "values": null,
          "description": "agrega un icono al alert.",
          "default": null,
          "link": null,
          "usage": "#icon",
          "code": "<template>\n  <vs-alert>\n    <template #icon>\n      <i class='bx bxs-chat'></i>\n    </template>\n    <template #title>\n      Vuesax Alert Icon\n    </template>\n    Vuesax (pronunciado / vjusacksː /, como view sacks) en un <b>framework de componentes UI</b> \n    creado con <a href=\"https://vuejs.org/\">Vuejs</a> para hacer proyectos fácilmente y con\n    un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de\n    desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente \n    su enfoque visual al usuario final\n  </vs-alert>\n</template>\n"
        },
        {
          "name": "title",
          "type": "slot",
          "values": null,
          "description": "Agrega un titulo al alert.",
          "default": null,
          "link": null,
          "usage": "#title",
          "code": "<template>\n  <div class=\"center\">\n    <vs-alert>\n      <template #title>\n        Vuesax Alert Title\n      </template>\n      Vuesax (pronunciado / vjusacksː /, como view sacks) en un <b>framework de componentes UI</b> \n      creado con <a href=\"https://vuejs.org/\">Vuejs</a> para hacer proyectos fácilmente y con\n      un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de\n      desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente \n      su enfoque visual al usuario final\n    </vs-alert>\n  </div>\n</template>\n"
        },
        {
          "name": "page-{n}",
          "type": "slot",
          "values": "(page-1 - page-{n})",
          "description": "Agrega las paginas al componente alert si en la pagina uno seria (slot=\"page-1\").",
          "default": null,
          "link": null,
          "usage": "#pagination",
          "code": "<template>\n  <vs-alert :page.sync=\"page\" >\n    <template #title>\n      Vuesax Framework\n    </template>\n\n    <template #page-1>\n      Pagina 1 - esta pagina en un slot y aquí adentro puedes agregar ya sea texto, \n      elementos html o componentes\n    </template>\n\n    <template #page-2>\n      Pagina 2 - En esta otra pagina puedes poner también lo que necesites \n      y en dinámico osea que puedes agregar cuantas paginas necesites\n    </template>\n\n    <template #page-3>\n      Pagina 3 - esta en la ultima pagina de el ejemplo\n    </template>\n  </vs-alert>\n</template>\n"
        },
        {
          "name": "animate",
          "type": "slot",
          "values": null,
          "description": "texto descriptivo.",
          "default": null,
          "link": "/api/slot",
          "usage": "#animated",
          "code": "código...\n"
        },
        {
          "name": "footer",
          "type": "slot",
          "values": null,
          "description": "Agrega un footer al componente alert.",
          "default": null,
          "link": null,
          "usage": "#footer",
          "code": "<vs-alert>\n  <template #title>\n    Vuesax Framework\n  </template>\n  Vuesax (pronunciado / vjusacksː /, como view sacks) en un <b>framework de componentes UI</b> \n  creado con <a href=\"https://vuejs.org/\">Vuejs</a> para hacer proyectos fácilmente y con un estilo \n  único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador \n  desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual \n  al usuario final\n  <template #footer>\n    <vs-button flat>\n      Cancel\n    </vs-button>\n    <vs-button>\n      Accept\n    </vs-button>\n  </template>\n</vs-alert>\n"
        }
      ],
      "NEWS": [
        "solid",
        "border",
        "shadow",
        "gradient",
        "relief",
        "animate",
        "hidden-content",
        "pagination",
        "footer",
        "progress-bar",
        "time-close"
      ]
    },
    "regularPath": "/en/docs/components/Alert.html",
    "relativePath": "en/docs/components/Alert.md",
    "key": "v-61a91ce7",
    "path": "/en/docs/components/Alert.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Solid",
        "slug": "solid"
      },
      {
        "level": 2,
        "title": "Border",
        "slug": "border"
      },
      {
        "level": 2,
        "title": "Shadow",
        "slug": "shadow"
      },
      {
        "level": 2,
        "title": "Gradient",
        "slug": "gradient"
      },
      {
        "level": 2,
        "title": "Relief",
        "slug": "relief"
      },
      {
        "level": 2,
        "title": "Animate",
        "slug": "animate"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Icon",
        "slug": "icon"
      },
      {
        "level": 2,
        "title": "Title",
        "slug": "title"
      },
      {
        "level": 2,
        "title": "Hidden Content",
        "slug": "hidden-content"
      },
      {
        "level": 2,
        "title": "Pagination",
        "slug": "pagination"
      },
      {
        "level": 2,
        "title": "footer",
        "slug": "footer"
      },
      {
        "level": 2,
        "title": "Progress bar",
        "slug": "progress-bar"
      },
      {
        "level": 2,
        "title": "Closable",
        "slug": "closable"
      },
      {
        "level": 2,
        "title": "Time Close",
        "slug": "time-close"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Avatar",
    "frontmatter": {
      "PROPS": [
        {
          "name": "color",
          "type": "String",
          "values": "Vuesax Colors, RGB, HEX",
          "description": "Cambia el color de el componente.",
          "default": "gray-2",
          "link": null,
          "usage": "#color",
          "code": "<vs-avatar color=\"#7d33ff\">\n  <template #text>\n    HEX\n  </template>\n</vs-avatar> <vs-avatar color=\"rgb(59,222,200)\">\n  <template #text>\n    RGB\n  </template>\n</vs-avatar>\n"
        },
        {
          "name": "size",
          "type": "Number",
          "values": "Number",
          "description": "Cambia el tamaño de el componente avatar.",
          "default": 44,
          "link": null,
          "usage": "#size",
          "code": "<template>\n  <div class=\"center con-avatars\">\n    <vs-avatar size=\"30\">\n      <template #text>\n        Lily\n      </template>\n    </vs-avatar>\n    <vs-avatar size=\"40\">\n      <template #text>\n        Evan You\n      </template>\n    </vs-avatar>\n    <vs-avatar>\n        <i class='bx bx-user'></i>\n    </vs-avatar>\n    <vs-avatar size=\"60\" primary badge badge-color=\"danger\">\n        <i class='bx bxs-hot' ></i>\n    </vs-avatar>\n    <vs-avatar size=\"70\" badge badge-color=\"success\">\n      <img src=\"/avatars/avatar-4.png\" alt=\"\">\n    </vs-avatar>\n  </div>\n</template>\n"
        },
        {
          "name": "badge",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determina si el badge esta activo.",
          "default": false,
          "link": null,
          "usage": "#badge",
          "code": "<template>\n  <div class=\"center con-avatars\">\n    <vs-avatar badge>\n      <img src=\"/avatars/avatar-5.png\" alt=\"\">\n    </vs-avatar>\n    <vs-avatar badge badge-color=\"danger\">\n      <img src=\"/avatars/avatar-6.png\" alt=\"\">\n    </vs-avatar>\n    <vs-avatar badge badge-color=\"success\">\n      <img src=\"/avatars/avatar-2.png\" alt=\"\">\n      <template #badge>\n        28\n      </template>\n    </vs-avatar>\n    <vs-avatar badge badge-color=\"warn\">\n      <img src=\"/avatars/avatar-8.png\" alt=\"\">\n      <template #badge>\n        <i class='bx bxs-bell-off' ></i>\n      </template>\n    </vs-avatar>\n    <vs-avatar writing badge badge-color=\"primary\">\n      <img src=\"/avatars/avatar-3.png\" alt=\"\">\n    </vs-avatar>\n    <vs-avatar badge-position=\"top-right\" badge badge-color=\"#7d33ff\">\n      <img src=\"/avatars/avatar-1.png\" alt=\"\">\n    </vs-avatar>\n  </div>\n</template>\n"
        },
        {
          "name": "badge-color",
          "type": "String",
          "values": "Vuesax colors,RGB,HEX",
          "description": "Cambia el color de el badge dentro de el avatar.",
          "default": "primary",
          "link": null,
          "usage": "#badge",
          "code": "<vs-avatar badge badge-color=\"danger\">\n  <img src=\"/avatars/avatar-6.png\" alt=\"\">\n</vs-avatar>\n"
        },
        {
          "name": "circle",
          "type": "Boolean",
          "values": "true, false",
          "description": "Cambia el estilo de el avatar haciendolo circular.",
          "default": false,
          "link": null,
          "usage": "#circle",
          "code": "<vs-avatar circle>\n  <template #text>\n    Joel\n  </template>\n</vs-avatar>\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "true, false",
          "description": "Cambia el estilo de el avatar haciéndolo cuadrado.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-avatar square>\n  <template #text>\n    Joel\n  </template>\n</vs-avatar>\n"
        },
        {
          "name": "writing",
          "type": "Boolean",
          "values": "true,false",
          "description": "agrega una animación al badge de escritura.",
          "default": false,
          "link": null,
          "usage": "#badge",
          "code": "<vs-avatar writing badge badge-color=\"primary\">\n  <img src=\"/avatars/avatar-3.png\" alt=\"\">\n</vs-avatar>\n"
        },
        {
          "name": "history",
          "type": "Boolean",
          "values": "true,false",
          "description": "Agrega un borde al avatar.",
          "default": "gray-2",
          "link": null,
          "usage": "#history",
          "code": "<vs-avatar history history-gradient>\n  <img src=\"/avatars/avatar-5.png\" alt=\"\">\n</vs-avatar>\n"
        },
        {
          "name": "history-gradient",
          "type": "Boolean",
          "values": "true,false",
          "description": "Cambia el color de el borde a un gradient.",
          "default": false,
          "link": null,
          "usage": "#history",
          "code": "<vs-avatar history history-gradient>\n  <img src=\"/avatars/avatar-5.png\" alt=\"\">\n</vs-avatar>\n"
        },
        {
          "name": "loading",
          "type": "Boolean",
          "values": "true,false",
          "description": "Agrega un animación de cargando al avatar.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<vs-avatar loading badge>\n  <img src=\"/avatars/avatar-5.png\" alt=\"\">\n</vs-avatar>\n"
        },
        {
          "name": "max",
          "type": "number",
          "values": "number",
          "description": "(vs-avatar-group) determina cuantos avatars se encuentran visibles.",
          "default": null,
          "link": null,
          "usage": "#group",
          "code": "<vs-avatar-group max=\"7\">\n  <vs-avatar>\n    <img src=\"/avatars/avatar-1.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-6.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-2.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-7.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-3.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-8.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-4.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-9.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-5.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-10.png\" alt=\"\">\n  </vs-avatar>\n</vs-avatar-group>\n"
        },
        {
          "name": "float",
          "type": "Boolean",
          "values": "true,false",
          "description": "(vs-avatar-group) cambia la forma en que se componen los avatar poniendo uno al lado de el otro.",
          "default": false,
          "link": null,
          "usage": "#group",
          "code": "<vs-avatar-group float max=\"8\">\n  <vs-avatar>\n    <img src=\"/avatars/avatar-1.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-6.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-2.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-7.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-3.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-8.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-4.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-9.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-5.png\" alt=\"\">\n  </vs-avatar>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-10.png\" alt=\"\">\n  </vs-avatar>\n  </vs-avatar-group>\n"
        },
        {
          "name": "pointer",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si el avatar tiene un cursor pointer.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-avatar pointer >\n  <img src=\"/avatars/avatar-10.png\" alt=\"\">\n</vs-avatar>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "text",
          "type": "slot",
          "values": null,
          "description": "Agrega un texto dentro de el componente avatar.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-avatar>\n  <template #text>\n    Lily\n  </template>\n</vs-avatar>\n"
        },
        {
          "name": "badge",
          "type": "slot",
          "values": null,
          "description": "Agrega al badge todo lo que este dentro de el slot, comúnmente se usa para números y un icono.",
          "default": null,
          "link": null,
          "usage": "#badge",
          "code": "<vs-avatar badge badge-color=\"success\">\n  <img src=\"/avatars/avatar-2.png\" alt=\"\">\n  <template #badge>\n    28\n  </template>\n</vs-avatar>\n"
        },
        {
          "name": "icons",
          "type": "slot",
          "values": null,
          "description": "Agrega un espacio para poner iconos al lado de el avatar.",
          "default": null,
          "link": null,
          "usage": "#icons",
          "code": "<vs-avatar>\n  <img src=\"/avatars/avatar-1.png\" alt=\"\">\n  <template #icons>\n    <i class='bx bxl-facebook-square' ></i>\n    <i class='bx bxl-github' ></i>\n    <i class='bx bxl-twitter' ></i>\n  </template>\n</vs-avatar>\n"
        }
      ],
      "NEWS": [
        "circle",
        "square",
        "history",
        "icons",
        "group",
        "loading"
      ]
    },
    "regularPath": "/en/docs/components/Avatar.html",
    "relativePath": "en/docs/components/Avatar.md",
    "key": "v-5d1695c7",
    "path": "/en/docs/components/Avatar.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Size",
        "slug": "size"
      },
      {
        "level": 2,
        "title": "Badge",
        "slug": "badge"
      },
      {
        "level": 2,
        "title": "Auto font and split",
        "slug": "auto-font-and-split"
      },
      {
        "level": 2,
        "title": "Circle",
        "slug": "circle"
      },
      {
        "level": 2,
        "title": "Square",
        "slug": "square"
      },
      {
        "level": 2,
        "title": "History",
        "slug": "history"
      },
      {
        "level": 2,
        "title": "Icon",
        "slug": "icon"
      },
      {
        "level": 2,
        "title": "Loading",
        "slug": "loading"
      },
      {
        "level": 2,
        "title": "Icons",
        "slug": "icons"
      },
      {
        "level": 2,
        "title": "Group",
        "slug": "group"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "10/2/2020 9:21:50"
  },
  {
    "title": "Card",
    "frontmatter": {
      "PROPS": [
        {
          "name": "type",
          "type": "String",
          "values": "1,2,3,4,5",
          "description": "Cambia el estilo de la carta y la posision de los elementos internos.",
          "default": null,
          "link": null,
          "usage": "#type-2",
          "code": "<vs-card type=\"2\">\n  <template #title>\n    <h3>Pot with a plant</h3>\n  </template>\n  <template #img>\n    <img src=\"/foto6.png\" alt=\"\">\n  </template>\n  <template #text>\n    <p>\n      Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n    </p>\n  </template>\n  <template #interactions>\n    <vs-button danger icon>\n      <i class='bx bx-heart'></i>\n    </vs-button>\n    <vs-button class=\"btn-chat\" shadow primary>\n      <i class='bx bx-chat' ></i>\n      <span class=\"span\">\n        54\n      </span>\n    </vs-button>\n  </template>\n</vs-card>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "text",
          "type": "slot",
          "values": null,
          "description": "agrega texto a la card en la sección determinada por el tipo de card.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #text>\n  <p>\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n  </p>\n</template>\n"
        },
        {
          "name": "title",
          "type": "slot",
          "values": null,
          "description": "agrega el titulo a la card en la sección determinada por el tipo de card.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #title>\n  <h3>Pot with a plant</h3>\n</template>\n"
        },
        {
          "name": "buttons",
          "type": "slot",
          "values": null,
          "description": "agrega los botones a la card en la sección determinada por el tipo de card.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #buttons>\n  <vs-button class=\"btn-chat\" shadow primary>\n    <i class='bx bx-chat' ></i>\n    <span class=\"span\">\n      54\n    </span>\n  </vs-button>\n</template>\n"
        },
        {
          "name": "interactions",
          "type": "slot",
          "values": null,
          "description": "agrega las interacciones a la card en la sección determinada por el tipo de card.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #interactions>\n  <vs-button danger icon>\n    <i class='bx bx-heart'></i>\n  </vs-button>\n  <vs-button class=\"btn-chat\" shadow primary>\n    <i class='bx bx-chat' ></i>\n    <span class=\"span\">\n      54\n    </span>\n  </vs-button>\n</template>\n"
        },
        {
          "name": "img",
          "type": "slot",
          "values": null,
          "description": "agrega la imagen o video a la card en la sección determinada por el tipo de card.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #img>\n  <img :src=\"`/foto5.png`\" alt=\"\">\n</template>\n"
        }
      ],
      "NEWS": [
        "name"
      ]
    },
    "regularPath": "/en/docs/components/Card.html",
    "relativePath": "en/docs/components/Card.md",
    "key": "v-0fba7467",
    "path": "/en/docs/components/Card.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "type 2",
        "slug": "type-2"
      },
      {
        "level": 2,
        "title": "type 3",
        "slug": "type-3"
      },
      {
        "level": 2,
        "title": "type 4",
        "slug": "type-4"
      },
      {
        "level": 2,
        "title": "type 5",
        "slug": "type-5"
      },
      {
        "level": 2,
        "title": "group",
        "slug": "group"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "20/9/2020 20:36:51"
  },
  {
    "title": "Checkbox",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "boolean, string, array",
          "values": "boolean, string, array",
          "description": "determina el valor de el checkbox y anclaje de datos.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox v-model=\"option\">\n      Option\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "color",
          "type": "string",
          "values": "vuesax colors, RGB, HEX",
          "description": "Cambia el color de el componente.",
          "default": false,
          "link": null,
          "usage": "#color",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox v-model=\"option1\">\n      Primary\n    </vs-checkbox>\n    <vs-checkbox success v-model=\"option2\">\n      Success\n    </vs-checkbox>\n    <vs-checkbox danger v-model=\"option3\">\n      Danger\n    </vs-checkbox>\n    <vs-checkbox warn v-model=\"option4\">\n      warning\n    </vs-checkbox>\n    <vs-checkbox dark v-model=\"option5\">\n      dark\n    </vs-checkbox>\n    <vs-checkbox color=\"#7d33ff\" v-model=\"option6\">\n      dark\n    </vs-checkbox>\n    <vs-checkbox color=\"rgb(59,222,200)\" v-model=\"option7\">\n      RGB\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "val",
          "type": "string, object",
          "values": "string, object",
          "description": "determina el valor de el input al estar en checked.",
          "default": true,
          "link": null,
          "usage": "#string-value",
          "code": "<template>\n  <div class=\"center con-checkbox\">\n    <vs-checkbox val=\"automatically\" v-model=\"option\">\n      Save data automatically\n    </vs-checkbox>\n\n    <span class=\"data\">\n      {{ option ? option : 'null'}}\n    </span>\n  </div>\n</template>\n"
        },
        {
          "name": "loading",
          "type": "boolean",
          "values": "true, false",
          "description": "Agrega una animación de loading y deshabilita el input.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<template>\n  <div class=\"center con-checkbox\">\n    <vs-checkbox loading v-model=\"option\">\n      Loading checked\n    </vs-checkbox>\n    <vs-checkbox loading v-model=\"option2\">\n      Loading unchecked\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "line-through",
          "type": "boolean",
          "values": "true, false",
          "description": "Agrega una linea en el centro de el label cuando esta en checked .",
          "default": false,
          "link": null,
          "usage": "#linethrough",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox line-through v-model=\"option\">\n      Option\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "indeterminate",
          "type": "boolean",
          "values": "true, false",
          "description": "Cambia el icono por defecto de el checkbox a una linea que representa dato indeterminado.",
          "default": false,
          "link": null,
          "usage": "#Indeterminate",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox indeterminate v-model=\"option\">\n      Option\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "label-before",
          "type": "boolean",
          "values": "true, false",
          "description": "Cambia la posición del label.",
          "default": false,
          "link": null,
          "usage": "#label",
          "code": "<vs-checkbox label-before v-model=\"option2\">\n  Label Before\n</vs-checkbox>\n"
        },
        {
          "name": "checked",
          "type": "boolean",
          "values": "true, false",
          "description": "determina si el componente inicialmente esta en check (esto hace que cambie la propiedad computada en v-model a true).",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-checkbox label-before v-model=\"option2\">\n  Label Before\n</vs-checkbox>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "icon",
          "type": "slot",
          "values": null,
          "description": "Cambia el icono del componente.",
          "default": null,
          "link": null,
          "usage": "#icon",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox v-model=\"option1\">\n      <template #icon>\n        <i class='bx bx-check' ></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox success v-model=\"option2\">\n      <template #icon>\n        <i class='bx bx-check-double'></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox danger v-model=\"option3\">\n      <template #icon>\n        <i class='bx bx-x'></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox warn v-model=\"option4\">\n      <template #icon>\n        <i class='bx bxs-shield'></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox dark v-model=\"option5\">\n      <template #icon>\n        <i class='bx bxs-heart' ></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox color=\"#7d33ff\" v-model=\"option6\">\n      <template #icon>\n        <i class='bx bx-brightness' ></i>\n      </template>\n    </vs-checkbox>\n    <vs-checkbox color=\"rgb(59,222,200)\" v-model=\"option7\">\n      <template #icon>\n        <i class='bx bxs-paint' ></i>\n      </template>\n    </vs-checkbox>\n  </div>\n</template>\n"
        },
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Agrega un label al componente.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template>\n  <div class=\"center\">\n    <vs-checkbox v-model=\"option\">\n      Option\n    </vs-checkbox>\n  </div>\n</template>\n"
        }
      ],
      "NEWS": [
        "indeterminate",
        "loading",
        "linethrough"
      ]
    },
    "regularPath": "/en/docs/components/Checkbox.html",
    "relativePath": "en/docs/components/Checkbox.md",
    "key": "v-194f6ac7",
    "path": "/en/docs/components/Checkbox.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Boolean Value",
        "slug": "boolean-value"
      },
      {
        "level": 2,
        "title": "String Value",
        "slug": "string-value"
      },
      {
        "level": 2,
        "title": "Array Value",
        "slug": "array-value"
      },
      {
        "level": 2,
        "title": "Array Object values",
        "slug": "array-object-values"
      },
      {
        "level": 2,
        "title": "Icon",
        "slug": "icon"
      },
      {
        "level": 2,
        "title": "Label",
        "slug": "label"
      },
      {
        "level": 2,
        "title": "Loading",
        "slug": "loading"
      },
      {
        "level": 2,
        "title": "LineThrough",
        "slug": "linethrough"
      },
      {
        "level": 2,
        "title": "Indeterminate",
        "slug": "indeterminate"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "10/2/2020 9:21:50"
  },
  {
    "title": "配色",
    "frontmatter": {},
    "regularPath": "/docs/theme/",
    "relativePath": "docs/theme/README.md",
    "key": "v-5320aa44",
    "path": "/docs/theme/",
    "headers": [
      {
        "level": 2,
        "title": "默认配色",
        "slug": "默认配色"
      },
      {
        "level": 2,
        "title": "自定义主题色",
        "slug": "自定义主题色"
      },
      {
        "level": 2,
        "title": "javascript",
        "slug": "javascript"
      },
      {
        "level": 2,
        "title": "css",
        "slug": "css"
      },
      {
        "level": 2,
        "title": "使用函数",
        "slug": "使用函数"
      }
    ],
    "lastUpdated": "10/2/2020, 7:07:35 PM"
  },
  {
    "title": "Input",
    "frontmatter": {
      "PROPS": [
        {
          "name": "placeholder",
          "type": "String",
          "values": "String",
          "description": "Agrega un placeholder al input.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input v-model=\"value\" placeholder=\"Name\" />\n  </div>\n</template>\n"
        },
        {
          "name": "label",
          "type": "String",
          "values": "String",
          "description": "Agrega un label arriba del componente.",
          "default": null,
          "link": null,
          "usage": "#label",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      label=\"Name\"\n      v-model=\"value\"\n      placeholder=\"Evan You\"\n    />\n  </div>\n</template>\n"
        },
        {
          "name": "label-placeholder",
          "type": "String",
          "values": "String",
          "description": "Agrega un placeholder convierte al estar en focus en un label.",
          "default": null,
          "link": null,
          "usage": "#label-placeholder",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      label-placeholder=\"Country\"\n      v-model=\"value\"\n    />\n  </div>\n</template>\n"
        },
        {
          "name": "color",
          "type": "string",
          "values": "vuesax colors,RGB,HEX",
          "description": "Cambia el color del componente.",
          "default": null,
          "link": null,
          "usage": "#color",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      primary\n      v-model=\"value\"\n      placeholder=\"Primary\" />\n\n    <vs-input\n      success\n      v-model=\"value2\"\n      placeholder=\"Success\" />\n\n    <vs-input\n      danger\n      v-model=\"value3\"\n      placeholder=\"Danger\" />\n\n    <vs-input\n      warn\n      v-model=\"value4\"\n      placeholder=\"Warn\" />\n\n    <vs-input\n      dark\n      v-model=\"value5\"\n      placeholder=\"Dark\" />\n\n    <vs-input\n      color=\"#7d33ff\"\n      v-model=\"value6\"\n      placeholder=\"HEX\" />\n\n    <vs-input\n      color=\"rgb(59,222,200)\"\n      v-model=\"value7\"\n      placeholder=\"HEX\" />\n  </div>\n</template>\n"
        },
        {
          "name": "state",
          "type": "String",
          "values": "vuesax colors,RGB,HEX",
          "description": "Cambia el color de fondo de el componente cambiando su estado.",
          "default": null,
          "link": null,
          "usage": "#state",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      primary\n      v-model=\"value\"\n      state=\"primary\"\n      placeholder=\"Primary\" />\n\n    <vs-input state=\"success\" success v-model=\"value2\" placeholder=\"Success Icon\">\n      <template #icon>\n        <i class='bx bx-user'></i>\n      </template>\n    </vs-input>\n\n    <vs-input state=\"danger\" danger icon-after v-model=\"value2\" placeholder=\"Danger icon after\">\n      <template #icon>\n        <i class='bx bx-mail-send' ></i>\n      </template>\n    </vs-input>\n\n    <vs-input\n      warn\n      state=\"warn\"\n      v-model=\"value4\"\n      placeholder=\"Label Warn\"\n      label=\"Warn\" />\n\n    <vs-input\n      dark\n      state=\"dark\"\n      v-model=\"value5\"\n      label-placeholder=\"Dark\" />\n  </div>\n</template>\n"
        },
        {
          "name": "progress",
          "type": "number",
          "values": "0 - 100",
          "description": "Agrega una barra de progreso iniciando en rojo y terminando en verde.",
          "default": null,
          "link": null,
          "usage": "#progress",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      type=\"password\"\n      v-model=\"value\"\n      label-placeholder=\"Password\"\n      :progress=\"getProgress\"\n      :visiblePassword=\"hasVisiblePassword\"\n      icon-after\n      @click-icon=\"hasVisiblePassword = !hasVisiblePassword\">\n      <template #icon>\n        <i v-if=\"!hasVisiblePassword\" class='bx bx-show-alt'></i>\n        <i v-else class='bx bx-hide'></i>\n      </template>\n\n      <template v-if=\"getProgress >= 100\" #message-success>\n        Secure password\n      </template>\n\n    </vs-input>\n  </div>\n</template> <script>\n  export default {\n    data:() => ({\n      value: '',\n      hasVisiblePassword: false\n    }),\n    computed: {\n      getProgress() {\n        let progress = 0\n\n        // at least one number\n\n        if (/\\d/.test(this.value)) {\n          progress += 20\n        }\n\n        // at least one capital letter\n\n        if (/(.*[A-Z].*)/.test(this.value)) {\n          progress += 20\n        }\n\n        // at menons a lowercase\n\n        if (/(.*[a-z].*)/.test(this.value)) {\n          progress += 20\n        }\n\n        // more than 5 digits\n\n        if (this.value.length >= 6) {\n          progress += 20\n        }\n\n        // at least one special character\n\n        if (/[^A-Za-z0-9]/.test(this.value)) {\n          progress += 20\n        }\n\n        return progress\n      }\n    }\n  }\n  </script>\n"
        },
        {
          "name": "loading",
          "type": "boolean",
          "values": "boolean",
          "description": "agrega una animación de loading al input.",
          "default": null,
          "link": null,
          "usage": "#loading",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input loading v-model=\"value\" placeholder=\"Name\" />\n  </div>\n</template>\n"
        },
        {
          "name": "type",
          "type": "string",
          "values": "html type",
          "description": "Cambia el tipo de input (valores html).",
          "default": null,
          "link": null,
          "usage": "#input-types",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      type=\"text\"\n      v-model=\"value1\"\n      label=\"Text\"\n    />\n    <vs-input\n      type=\"password\"\n      v-model=\"value2\"\n      label=\"Password\"\n    />\n    <vs-input\n      type=\"search\"\n      v-model=\"value3\"\n      label=\"Search\"\n    />\n    <vs-input\n      type=\"number\"\n      v-model=\"value4\"\n      label=\"Number\"\n    />\n    <vs-input\n      type=\"url\"\n      v-model=\"value5\"\n      label=\"Url\"\n    />\n    <vs-input\n      type=\"time\"\n      v-model=\"value6\"\n      label=\"time\"\n    />\n    <vs-input\n      type=\"date\"\n      v-model=\"value7\"\n      label=\"Date\"\n    />\n  </div>\n</template>\n"
        },
        {
          "name": "border",
          "type": "boolean",
          "values": "boolean",
          "description": "Cambia el estilo de el componente.",
          "default": false,
          "link": null,
          "usage": "#border",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input border v-model=\"value\" placeholder=\"Name\" />\n\n    <vs-input color=\"#7d33ff\" border type=\"password\" v-model=\"value2\" placeholder=\"Password\">\n      <template #icon>\n        <i class='bx bx-lock-open-alt'></i>\n      </template>\n    </vs-input>\n\n    <vs-input border warn type=\"email\" icon-after v-model=\"value3\" label-placeholder=\"Address\">\n      <template #icon>\n        <i class='bx bxl-bitcoin'></i>\n      </template>\n    </vs-input>\n  </div>\n</template>\n"
        },
        {
          "name": "shadow",
          "type": "boolean",
          "values": "boolean",
          "description": "Cambia el estilo de el componente.",
          "default": false,
          "link": null,
          "usage": "#shadow",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input shadow v-model=\"value\" placeholder=\"Name\" />\n\n    <vs-input color=\"#7d33ff\" shadow type=\"password\" v-model=\"value2\" placeholder=\"Password\">\n      <template #icon>\n        <i class='bx bx-lock-open-alt'></i>\n      </template>\n    </vs-input>\n\n    <vs-input shadow warn type=\"email\" icon-after v-model=\"value3\" label-placeholder=\"Address\">\n      <template #icon>\n        <i class='bx bxl-bitcoin'></i>\n      </template>\n    </vs-input>\n  </div>\n</template>\n"
        },
        {
          "name": "icon-after",
          "type": "boolean",
          "values": "boolean",
          "description": "Pone el icono después de el input.",
          "default": false,
          "link": null,
          "usage": "#icon",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input type=\"password\" icon-after v-model=\"value2\" placeholder=\"Password\">\n      <template #icon>\n        <i class='bx bx-lock-open-alt'></i>\n      </template>\n    </vs-input>\n  </div>\n</template>\n"
        },
        {
          "name": "visible-password",
          "type": "boolean",
          "values": "boolean",
          "description": "Si el input en de tipo password se modifica para mostrar la contraseña.",
          "default": false,
          "link": null,
          "usage": "#progress",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input\n      type=\"password\"\n      v-model=\"value\"\n      label-placeholder=\"Password\"\n      :progress=\"getProgress\"\n      :visiblePassword=\"hasVisiblePassword\"\n      icon-after\n      @click-icon=\"hasVisiblePassword = !hasVisiblePassword\">\n      <template #icon>\n        <i v-if=\"!hasVisiblePassword\" class='bx bx-show-alt'></i>\n        <i v-else class='bx bx-hide'></i>\n      </template>\n\n      <template v-if=\"getProgress >= 100\" #message-success>\n        Secure password\n      </template>\n\n    </vs-input>\n  </div>\n</template>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "icon",
          "type": "Slot",
          "values": null,
          "description": "Agrega un icono al input.",
          "default": null,
          "link": null,
          "usage": "#icon",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input v-model=\"value1\" placeholder=\"User name\">\n      <template #icon>\n        <i class='bx bx-user'></i>\n      </template>\n    </vs-input>\n\n    <vs-input type=\"password\" icon-after v-model=\"value2\" placeholder=\"Password\">\n      <template #icon>\n        <i class='bx bx-lock-open-alt'></i>\n      </template>\n    </vs-input>\n  </div>\n</template>\n"
        },
        {
          "name": "message",
          "type": "Slot",
          "values": null,
          "description": "Agrega un texto informativo debajo de el input.",
          "default": null,
          "link": null,
          "usage": "#message",
          "code": "<template>\n  <div class=\"center content-inputs\">\n    <vs-input v-model=\"value1\" placeholder=\"Email\">\n      <template #message-success>\n        Email Valid\n      </template>\n    </vs-input>\n\n    <vs-input v-model=\"value2\" placeholder=\"Name\">\n      <template #message-danger>\n        Required\n      </template>\n    </vs-input>\n\n    <vs-input type=\"password\" v-model=\"value3\" placeholder=\"Password\">\n      <template #message-warn>\n        Insecure password\n      </template>\n    </vs-input>\n\n    <vs-input v-model=\"value4\" label=\"Example Regex Validation\" placeholder=\"vuesax@gmail.com\">\n      <template v-if=\"validEmail\" #message-success>\n        Email Valid\n      </template>\n      <template v-if=\"!validEmail && value4 !== ''\" #message-danger>\n        Email Invalid\n      </template>\n    </vs-input>\n  </div>\n</template>\n"
        }
      ],
      "NEWS": [
        "state",
        "progress",
        "loading",
        "border",
        "shadow",
        "messages"
      ]
    },
    "regularPath": "/en/docs/components/Input.html",
    "relativePath": "en/docs/components/Input.md",
    "key": "v-b1f94aea",
    "path": "/en/docs/components/Input.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Label",
        "slug": "label"
      },
      {
        "level": 2,
        "title": "Label Placeholder",
        "slug": "label-placeholder"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "icon",
        "slug": "icon"
      },
      {
        "level": 2,
        "title": "Message",
        "slug": "message"
      },
      {
        "level": 2,
        "title": "State",
        "slug": "state"
      },
      {
        "level": 2,
        "title": "Progress",
        "slug": "progress"
      },
      {
        "level": 2,
        "title": "Loading",
        "slug": "loading"
      },
      {
        "level": 2,
        "title": "Input types",
        "slug": "input-types"
      },
      {
        "level": 2,
        "title": "Border",
        "slug": "border"
      },
      {
        "level": 2,
        "title": "Shadow",
        "slug": "shadow"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "18/1/2020 22:03:45"
  },
  {
    "title": "Loading",
    "frontmatter": {
      "PROPS": [
        {
          "name": "type",
          "type": "String",
          "values": "waves, corners, border, points, square, gradient, rectangle, circles, square-rotate, scale",
          "description": "cambia la animación de el loading.",
          "default": "default",
          "link": null,
          "usage": "#type",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          type: 'waves'\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "color",
          "type": "String",
          "values": "Todos los colores de vuesax (RGB y HEX)",
          "description": "cambia el color de la animación de el loading.",
          "default": "primary",
          "link": "/theme/",
          "usage": "#color",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          color: '#000'\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "background",
          "type": "String",
          "values": "Todos los colores de vuesax (RGB y HEX)",
          "description": "Cambia el color de el fondo de el loading.",
          "default": "#fff",
          "link": "/theme/",
          "usage": "#background",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          background: 'danger',\n          color: '#fff'\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "text",
          "type": "String",
          "values": "String",
          "description": "Agrega un texto debajo de la animación de el loading.",
          "default": null,
          "link": null,
          "usage": "#text",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          text: 'Loading...',\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "percent",
          "type": "String",
          "values": "(0% - 100%)",
          "description": "Agrega un texto de porcentaje adentro de el loading.",
          "default": null,
          "link": null,
          "usage": "#percent",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          percent: '67%',\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "progress",
          "type": "String || Number",
          "values": "(0 - 100)",
          "description": "Agrega una barra de progreso al loading y el progreso seria el valor.",
          "default": null,
          "link": null,
          "usage": "#progress",
          "code": "código...\n"
        },
        {
          "name": "target",
          "type": "String || html || ref",
          "values": "String || html || ref",
          "description": "Determina el padre de el loading donde se va a instanciar.",
          "default": null,
          "link": null,
          "usage": "#target",
          "code": "<template>\n  <div class=\"center\">\n    <div class=\"con-btns\">\n      <vs-button dark flat @click=\"openLoading\">Open Loading <b>Target</b></vs-button>\n    </div>\n\n    <div ref=\"content\" class=\"content-div\">\n      Soy el contenedor <br> del <b>loading</b>\n    </div>\n  </div>\n</template> <script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          target: this.$refs.content\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "opacity",
          "type": "String || Number",
          "values": "(0 - 1)",
          "description": "Cambia la opacidad de el background.",
          "default": "0.6",
          "link": null,
          "usage": "#target",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          opacity: 1,\n          color: 'dark'\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "scale",
          "type": "String || Number",
          "values": "(0 - 1)",
          "description": "Cambia el tamaño de la animación de el loading.",
          "default": "1",
          "link": null,
          "usage": "#target",
          "code": "<script>\n  export default {\n    methods: {\n      openLoading() {\n        const loading = this.$vs.loading({\n          scale: '0.4',\n          color: 'dark'\n        })\n        setTimeout(() => {\n          loading.close()\n        }, 3000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "changePercent()",
          "type": "function",
          "values": "String",
          "description": "Cambia el valor de el percent después de instanciar el loading.",
          "default": null,
          "link": null,
          "usage": "#percent",
          "code": "<script>\n  export default {\n    data: () => ({\n      percent: 0\n    }),\n    methods: {\n      openLoading() {\n\n        const loading = this.$vs.loading({\n          percent: this.percent\n        })\n        const interval = setInterval(() => {\n          if (this.percent <= 100) {\n            loading.changePercent(`${this.percent++}%`)\n          }\n        }, 40)\n        setTimeout(() => {\n          loading.close()\n          clearInterval(interval)\n          this.percent = 0\n        }, 4800)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "changeProgress()",
          "type": "function",
          "values": "String",
          "description": "Cambia el valor de el progress después de instanciar el loading.",
          "default": null,
          "link": null,
          "usage": "#progress",
          "code": "<script>\n  export default {\n    data: () => ({\n      progress: 0\n    }),\n    methods: {\n      openLoading() {\n\n        const loading = this.$vs.loading({\n          progress: 0\n        })\n        const interval = setInterval(() => {\n          if (this.progress <= 100) {\n            loading.changeProgress(this.progress++)\n          }\n        }, 40)\n        setTimeout(() => {\n          loading.close()\n          clearInterval(interval)\n          this.progress = 0\n        }, 4100)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "changeText()",
          "type": "function",
          "values": "String",
          "description": "Cambia el valor de la propiedad text después de instanciar el loading.",
          "default": null,
          "link": null,
          "usage": null,
          "code": null
        }
      ],
      "UPDATE": [
        "type"
      ],
      "NEWS": [
        "text",
        "percent",
        "progress",
        "target"
      ]
    },
    "regularPath": "/en/docs/components/Loading.html",
    "relativePath": "en/docs/components/Loading.md",
    "key": "v-4da3b827",
    "path": "/en/docs/components/Loading.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Type",
        "slug": "type"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Background",
        "slug": "background"
      },
      {
        "level": 2,
        "title": "Text",
        "slug": "text"
      },
      {
        "level": 2,
        "title": "Percent",
        "slug": "percent"
      },
      {
        "level": 2,
        "title": "Progress",
        "slug": "progress"
      },
      {
        "level": 2,
        "title": "Target",
        "slug": "target"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "30/9/2020 5:58:17"
  },
  {
    "title": "Select",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si el dialog en visible o esta oculto.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-dialog v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "not-center",
          "type": "boolean",
          "values": "true.false",
          "description": "Por defecto el header centra los elementos, con esta propiedad se elimina el centrado.",
          "default": false,
          "link": null,
          "usage": "#type",
          "code": "<vs-dialog not-center v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "width",
          "type": "String",
          "values": "px",
          "description": "Determina el ancho de el dialog.",
          "default": null,
          "link": null,
          "usage": "#type",
          "code": "<vs-dialog width=\"550px\" v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "loading",
          "type": "Boolean",
          "values": "true,false",
          "description": "Agrega una animación de cargando al dialog.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<vs-dialog loading v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "not-close",
          "type": "Boolean",
          "values": "true,false",
          "description": "Elimina el botón de close de el dialog.",
          "default": false,
          "link": null,
          "usage": "#not-close",
          "code": "<vs-dialog not-close v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "scroll",
          "type": "Boolean",
          "values": "true,false",
          "description": "Hace que el contenido tenga un máximo de alto y da posibilidad a si se desborda el contenido agregar scroll.",
          "default": false,
          "link": null,
          "usage": "#scroll",
          "code": "<vs-dialog scroll v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "overflow-hidden",
          "type": "Boolean",
          "values": "true,false",
          "description": "Al abrirse el dialog se elimina el scroll de la pagina.",
          "default": false,
          "link": null,
          "usage": "#overflow-hidden-body",
          "code": "<vs-dialog overflow-hidden v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "auto-width",
          "type": "Boolean",
          "values": "true,false",
          "description": "Hace que el dialog tenga un ancho automático a su contenido.",
          "default": false,
          "link": null,
          "usage": "#scroll",
          "code": "<vs-dialog auto-width v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "not-padding",
          "type": "Boolean",
          "values": "true,false",
          "description": "Elimina el padding de los elementos base de el dialog.",
          "default": false,
          "link": null,
          "usage": "#not-padding",
          "code": "<vs-dialog not-padding v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "full-screen",
          "type": "Boolean",
          "values": "true,false",
          "description": "Hace que el dialog tenga el tamaño de la ventana.",
          "default": false,
          "link": null,
          "usage": "#full-screen",
          "code": "<vs-dialog full-screen v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "blur",
          "type": "Boolean",
          "values": "true,false",
          "description": "Hace que todos los elementos tengan blur al abrirse el dialog.",
          "default": false,
          "link": null,
          "usage": "#blur",
          "code": "<vs-dialog blur v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "true,false",
          "description": "Elimina el border radius de el dialog.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-dialog square v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "prevent-close",
          "type": "Boolean",
          "values": "true,false",
          "description": "Hace que el dialog no se pueda cerrar dando click afuera o pulsando la tecla esc.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-dialog prevent-close v-model=\"active\">\n  ...\n</vs-dialog>\n"
        },
        {
          "name": "v-on:close",
          "type": "Methods",
          "values": "function",
          "description": "función de retorno al cerrar el dialog.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<vs-dialog @close=\"handleClose\" v-model=\"active\">\n  ...\n</vs-dialog>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "slot name",
          "type": "slot",
          "values": null,
          "description": "texto descriptivo.",
          "default": null,
          "link": null,
          "usage": "#animated",
          "code": "...\n"
        }
      ],
      "NEWS": [
        "name"
      ]
    },
    "regularPath": "/en/docs/components/Dialog.html",
    "relativePath": "en/docs/components/Dialog.md",
    "key": "v-6a05f767",
    "path": "/en/docs/components/Dialog.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Type",
        "slug": "type"
      },
      {
        "level": 2,
        "title": "loading",
        "slug": "loading"
      },
      {
        "level": 2,
        "title": "Not close",
        "slug": "not-close"
      },
      {
        "level": 2,
        "title": "Scroll",
        "slug": "scroll"
      },
      {
        "level": 2,
        "title": "Overflow Hidden Body",
        "slug": "overflow-hidden-body"
      },
      {
        "level": 2,
        "title": "Not Padding",
        "slug": "not-padding"
      },
      {
        "level": 2,
        "title": "Nested Dialogs",
        "slug": "nested-dialogs"
      },
      {
        "level": 2,
        "title": "full Screen",
        "slug": "full-screen"
      },
      {
        "level": 2,
        "title": "blur",
        "slug": "blur"
      },
      {
        "level": 2,
        "title": "Square",
        "slug": "square"
      },
      {
        "level": 2,
        "title": "Prevent Close",
        "slug": "prevent-close"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "30/9/2020 5:58:17"
  },
  {
    "title": "Navbar",
    "frontmatter": {
      "PROPS": [
        {
          "name": "fixed",
          "type": "boolean",
          "values": "true,false",
          "description": "Define si el componente esta fijo en la pantalla.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-navbar fixed>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "shadow",
          "type": "boolean",
          "values": "true,false",
          "description": "Agrega una sombre al componente.",
          "default": "primary",
          "link": null,
          "usage": null,
          "code": "<vs-navbar shadow>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "shadowScroll",
          "type": "boolean",
          "values": "true,false",
          "description": "Agrega la funcionalidad de agregar shadow al componente cuando el scrollTop en mas de 0.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-navbar shadow-scroll>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "hideScroll",
          "type": "boolean",
          "values": "true,false",
          "description": "Agrega la funcionalidad de ocultar y mostrar el componente en base a si se baja o sube el scroll.",
          "default": false,
          "link": null,
          "usage": "#hide-scroll",
          "code": "<vs-navbar hide-scroll>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "textWhite",
          "type": "boolean",
          "values": "true,false",
          "description": "Cambia el color de texto de los items a blanco.",
          "default": false,
          "link": null,
          "usage": "#color",
          "code": "<vs-navbar text-white>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "square",
          "type": "boolean",
          "values": "true,false",
          "description": "Cambia el border radius a 0 haciendo el componente cuadrado.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-navbar square>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "paddingScroll",
          "type": "boolean",
          "values": "true,false",
          "description": "determina si el componente tiene padding y al usuario hacer scroll se elimina haciendo un efecto.",
          "default": false,
          "link": null,
          "usage": "#padding-scroll",
          "code": "<vs-navbar padding-scroll>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "notLine",
          "type": "boolean",
          "values": "true,false",
          "description": "Elimina la linea de active en el componente.",
          "default": false,
          "link": null,
          "usage": "#not-line",
          "code": "<vs-navbar not-line>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "leftCollapsed",
          "type": "boolean",
          "values": "true,false",
          "description": "Agrega la funcionalidad de que cuando los elementos de este slot no puedan estar correctamente se eliminen visualmente.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-navbar left-collapsed>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "centerCollapsed",
          "type": "boolean",
          "values": "true,false",
          "description": "Agrega la funcionalidad de que cuando los elementos de este slot no puedan estar correctamente se eliminen visualmente.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-navbar center-collapsed>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "rightCollapsed",
          "type": "boolean",
          "values": "true,false",
          "description": "Agrega la funcionalidad de que cuando los elementos de este slot no puedan estar correctamente se eliminen visualmente.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-navbar right-collapsed>\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "targetScroll",
          "type": "boolean",
          "values": "true,false",
          "description": "Determina el elemento al que se le va a solicitar el evento scroll.",
          "default": "document",
          "link": null,
          "usage": "#padding-scroll",
          "code": "<vs-navbar padding-scroll=\"#my-element\">\n  ...\n</vs-navbar>\n"
        },
        {
          "name": "item:active",
          "type": "boolean",
          "values": "true,false",
          "description": "determina si el componente esta en estado de activo.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-navbar-item active>\n  ...\n</vs-navbar-item>\n"
        },
        {
          "name": "item:to",
          "type": "string",
          "values": "url",
          "description": "Usa vue-router para generar una nueva vista en base al string proporcionado.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-navbar-item to=\"/\">\n  ...\n</vs-navbar-item>\n"
        },
        {
          "name": "item:id",
          "type": "string",
          "values": "id",
          "description": "Es el id que se usa para cambiar el valor de el v-model de el componente padre y asi poder determinar el estado de active en base a la interacción de el usuario.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-navbar-item id=\"myIdItem\">\n  ...\n</vs-navbar-item>\n"
        },
        {
          "name": "item:href",
          "type": "string",
          "values": "url",
          "description": "Genera una nueva pestaña con la url proporcionada.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-navbar-item href=\"http://vuesax.com/\">\n  ...\n</vs-navbar-item>\n"
        },
        {
          "name": "item:target",
          "type": "string",
          "values": "html-target",
          "description": "Determina si la pestaña en una nueva o si remplaza la actual.",
          "default": "_blank",
          "link": null,
          "usage": null,
          "code": "<vs-navbar-item target=\"_self\">\n  ...\n</vs-navbar-item>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Agrega los elementos en el centro de el componente.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-navbar v-model=\"active\">\n  <vs-navbar-item :active=\"active == 'guide'\" id=\"guide\">\n    Guide\n  </vs-navbar-item>\n</vs-navbar>\n"
        },
        {
          "name": "left",
          "type": "slot",
          "values": null,
          "description": "Agrega los elementos en la parte izquierda de el componente.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #left>\n  <img src=\"/logo2.png\" alt=\"\">\n</template>\n"
        },
        {
          "name": "right",
          "type": "slot",
          "values": null,
          "description": "Agrega los elementos en la parte derecha de el componente.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #right>\n  <vs-button flat >Login</vs-button>\n  <vs-button>Get Started</vs-button>\n</template>\n"
        }
      ],
      "NEWS": [
        "name"
      ]
    },
    "regularPath": "/en/docs/components/Navbar.html",
    "relativePath": "en/docs/components/Navbar.md",
    "key": "v-47e04267",
    "path": "/en/docs/components/Navbar.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Hide scroll",
        "slug": "hide-scroll"
      },
      {
        "level": 2,
        "title": "Group",
        "slug": "group"
      },
      {
        "level": 2,
        "title": "Padding Scroll",
        "slug": "padding-scroll"
      },
      {
        "level": 2,
        "title": "Square",
        "slug": "square"
      },
      {
        "level": 2,
        "title": "Not line",
        "slug": "not-line"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "20/6/2020 0:27:15"
  },
  {
    "title": "Notification",
    "frontmatter": {
      "PROPS": [
        {
          "name": "title",
          "type": "String",
          "values": "String",
          "description": "Agrega un titulo a la notificación.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "text",
          "type": "String",
          "values": "String",
          "description": "Agrega el texto a la notificación.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "position",
          "type": "String",
          "values": "bottom-right,top-right,top-center,top-left,bottom-left,bottom-center",
          "description": "Cambia la position de el componente.",
          "default": "bottom-right",
          "link": null,
          "usage": "#position",
          "code": "const noti = this.$vs.notification({\n  position: 'top-right',\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "color",
          "type": "String",
          "values": "vuesax colors, rgb, hex",
          "description": "Cambia el color base de todo el componente.",
          "default": null,
          "link": null,
          "usage": "#color",
          "code": "const noti = this.$vs.notification({\n  color: 'primary',\n  title: 'Documentation Vuesax 4.0+',\n  text: 'These documents refer to the latest version of vuesax (4.0+), to see the\n  documents of the previous versions you can do it here 👉 Vuesax 3.x'\n})\n"
        },
        {
          "name": "border",
          "type": "String",
          "values": "vuesax colors, rgb, hex",
          "description": "Agrega un border de color a la notificación.",
          "default": null,
          "link": null,
          "usage": "#border",
          "code": "const noti = this.$vs.notification({\n  border: 'success',\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "icon",
          "type": "String",
          "values": "String",
          "description": "Agrega un icono a la notificación.",
          "default": null,
          "link": null,
          "usage": "#icons",
          "code": "const noti = this.$vs.notification({\n  icon: `<i class='bx bxs-time'></i>`,\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "duration",
          "type": "Number, String",
          "values": "Number, none",
          "description": "Determina el tiempo hasta que la notificación se oculte (none determina el no ocultarse).",
          "default": "4000 (4s)",
          "link": null,
          "usage": "#duration",
          "code": "const noti = this.$vs.notification({\n  duration: 10000,\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`\n})\n"
        },
        {
          "name": "onClick",
          "type": "function",
          "values": "function",
          "description": "función que se ejecuta el hacerse click en la notificación.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  onClick: () => {\n    console.log('click notification')\n  }\n})\n"
        },
        {
          "name": "buttonClose",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si la notificación tiene el botón de close.",
          "default": true,
          "link": null,
          "usage": null,
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  buttonClose: false\n})\n"
        },
        {
          "name": "flat",
          "type": "Boolean",
          "values": "true,false",
          "description": "Cambia el estilo de la notificación a flat.",
          "default": false,
          "link": null,
          "usage": "#flat",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  flat: true\n})\n"
        },
        {
          "name": "onDestroy",
          "type": "function",
          "values": "function",
          "description": "Función que se ejecuta al destruirse la notificación.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  onDestroy: () => {\n    console.log('destroy notification')\n  }\n})\n"
        },
        {
          "name": "sticky",
          "type": "boolean",
          "values": "true,false",
          "description": "Cambia la posición de la notificación pegada a la esquina mas cercana.",
          "default": false,
          "link": null,
          "usage": "#sticky",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  sticky: true\n})\n"
        },
        {
          "name": "square",
          "type": "boolean",
          "values": "true,false",
          "description": "Determina si la notificación en cuadrada y elimina los border-radius.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  square: true\n})\n"
        },
        {
          "name": "width",
          "type": "String",
          "values": "100%, auto",
          "description": "Determina el ancho de la notificación.",
          "default": "340px",
          "link": null,
          "usage": "#width",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  width: 100%\n})\n"
        },
        {
          "name": "loading",
          "type": "boolean",
          "values": "true,false",
          "description": "Determina si la notificación tiene una animación de cargando.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  loading: true\n})\n"
        },
        {
          "name": "progress",
          "type": "Number, String",
          "values": "0 - 100, auto",
          "description": "Agrega una barra de progreso a la notificación.",
          "default": null,
          "link": null,
          "usage": "#progress",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  progress: 'auto'\n})\n"
        },
        {
          "name": "notPadding",
          "type": "Boolean",
          "values": "true,false",
          "description": "Elimina de la notificación el padding.",
          "default": "20px",
          "link": null,
          "usage": "#example",
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  notPadding: true\n})\n"
        },
        {
          "name": "clickClose",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si al hacer click en la notificación se cierra.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "const noti = this.$vs.notification({\n  title: 'Documentation Vuesax 4.0+',\n  text: `These documents refer to the latest version of vuesax (4.0+),\n  to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n  clickClose: true\n})\n"
        },
        {
          "name": "content",
          "type": "Vue Component",
          "values": "Vnode",
          "description": "Cambia el contenido de la notificación por el proporcionado como valor (algo parecido a un slot de vue).",
          "default": null,
          "link": null,
          "usage": "#example",
          "code": "<script>\n  import user from './user.vue'\n  export default {\n    methods: {\n      openNotificationUser() {\n        const noti = this.$vs.notification({\n          duration: 'none',\n          width: 'auto',\n          content: user,\n        })\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "instance.close()",
          "type": "function",
          "values": null,
          "description": "Cierra la notificación.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<script>\n  export default {\n    methods: {\n      openNotification() {\n        const noti = this.$vs.notification({\n          duration: 'none',\n          loading: true\n        })\n\n        setTimeout(() => {\n          noti.close()\n        }, 5000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "instance.changeProgress(value)",
          "type": "function",
          "values": "0 - 100",
          "description": "Cambia el valor de progreso de la notificación después de instanciar.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<script>\n  export default {\n    methods: {\n      openNotification() {\n        const noti = this.$vs.notification({\n          title: 'Documentation Vuesax 4.0+',\n          text: `These documents refer to the latest version of vuesax (4.0+),\n          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n          progress: 0\n        })\n\n        setTimeout(() => {\n          noti.changeProgress(50)\n        }, 5000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "instance.setLoading(boolean)",
          "type": "function",
          "values": "true,false",
          "description": "Cambia el estado de loading después de instanciar.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<script>\n  export default {\n    methods: {\n      openNotification() {\n        const noti = this.$vs.notification({\n          title: 'Documentation Vuesax 4.0+',\n          text: `These documents refer to the latest version of vuesax (4.0+),\n          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n        })\n\n        setTimeout(() => {\n          noti.setLoading(true)\n        }, 5000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "instance.toggleClass(String)",
          "type": "function",
          "values": "String",
          "description": "Agrega o elimina la clase pasada como parámetro a la notificación.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<script>\n  export default {\n    methods: {\n      openNotification() {\n        const noti = this.$vs.notification({\n          classNotification: 'my-class'\n          title: 'Documentation Vuesax 4.0+',\n          text: `These documents refer to the latest version of vuesax (4.0+),\n          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n        })\n\n        setTimeout(() => {\n          noti.toggleClass('new-class')\n        }, 2000)\n      }\n    }\n  }\n</script>\n"
        },
        {
          "name": "classNotification",
          "type": "String",
          "values": "String",
          "description": "Agrega una clase personalizada a la notificación.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<script>\n  export default {\n    methods: {\n      openNotification() {\n        const noti = this.$vs.notification({\n          classNotification: 'my-class'\n          title: 'Documentation Vuesax 4.0+',\n          text: `These documents refer to the latest version of vuesax (4.0+),\n          to see the documents of the previous versions you can do it here 👉 Vuesax3.x`,\n        })\n\n        setTimeout(() => {\n          noti.toggleClass('new-class')\n        }, 2000)\n      }\n    }\n  }\n</script>\n"
        }
      ],
      "NEWS": [
        "progress",
        "duration",
        "square",
        "border",
        "flat",
        "loading",
        "sticky",
        "width",
        "example"
      ]
    },
    "regularPath": "/en/docs/components/Notification.html",
    "relativePath": "en/docs/components/Notification.md",
    "key": "v-4893e647",
    "path": "/en/docs/components/Notification.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Position",
        "slug": "position"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Icons",
        "slug": "icons"
      },
      {
        "level": 2,
        "title": "Progress",
        "slug": "progress"
      },
      {
        "level": 2,
        "title": "Duration",
        "slug": "duration"
      },
      {
        "level": 2,
        "title": "Square",
        "slug": "square"
      },
      {
        "level": 2,
        "title": "Border",
        "slug": "border"
      },
      {
        "level": 2,
        "title": "Flat",
        "slug": "flat"
      },
      {
        "level": 2,
        "title": "Loading",
        "slug": "loading"
      },
      {
        "level": 2,
        "title": "Width",
        "slug": "width"
      },
      {
        "level": 2,
        "title": "Sticky",
        "slug": "sticky"
      },
      {
        "level": 2,
        "title": "Example",
        "slug": "example"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "3/3/2020 10:21:13"
  },
  {
    "title": "Pagination",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "Number",
          "values": "Number",
          "description": "Determina la pagina en la que se encuentra el usuario.",
          "default": 1,
          "link": null,
          "usage": "#default",
          "code": "<vs-pagination v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "length",
          "type": "Number",
          "values": "Number",
          "description": "Es el numero total de paginas que tiene el componente.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-pagination v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "color",
          "type": "Vuesax colors, RGB, HEX",
          "values": "String",
          "description": "Cambia el color base de el componente.",
          "default": "primary",
          "link": null,
          "usage": "#color",
          "code": "<vs-pagination color=\"danger\" v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "disabled",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determina si todo el componente se encuentra en estado de disabled.",
          "default": false,
          "link": null,
          "usage": "#disabled",
          "code": "<vs-pagination disabled v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "not-arrows",
          "type": "Boolean",
          "values": "true, false",
          "description": "Remueve las flechas (siguiente y atrás) de el componente.",
          "default": false,
          "link": null,
          "usage": "#not-arrows",
          "code": "<vs-pagination not-arrows v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "only-arrows",
          "type": "Boolean",
          "values": "true, false",
          "description": "Remueve los items dejando solo las flechas (siguiente y atrás).",
          "default": false,
          "link": null,
          "usage": "#only-arrows",
          "code": "<vs-pagination only-arrows v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "circle",
          "type": "Boolean",
          "values": "true, false",
          "description": "Cambia el estilo de los botones haciéndolos totalmente redondos.",
          "default": false,
          "link": null,
          "usage": "#circle",
          "code": "<vs-pagination circle v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "true, false",
          "description": "Cambia el estilo de los botones haciéndolos totalmente cuadrados.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-pagination square v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "buttons-dotted",
          "type": "Boolean",
          "values": "true, false",
          "description": "Hace que los botones no tengan el numero interno y cambia su tamaño.",
          "default": false,
          "link": null,
          "usage": "#buttons-dotted",
          "code": "<vs-pagination buttons-dotted v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "disabled-items",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determina cuales elementos se encuentran en estado de disabled.",
          "default": false,
          "link": null,
          "usage": "#disabled-items",
          "code": "<vs-pagination :disabled-items=\"[3,4,9,10,11,12,19]\" v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "loading-items",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determina cuales elementos se encuentran en estado de cargando.",
          "default": false,
          "link": null,
          "usage": "#loading-items",
          "code": "<vs-pagination :loading-items=\"[3,4,9,10,11,12,19]\" v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "not-margin",
          "type": "Boolean",
          "values": "true, false",
          "description": "Cambia el margin entre los items haciendo que estén totalmente pegados y se elimina el radius haciéndolos cuadrados.",
          "default": false,
          "link": null,
          "usage": "#not-margin",
          "code": "<vs-pagination not-margin v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "progress",
          "type": "Boolean",
          "values": "true, false",
          "description": "Agrega una barra de progreso al componente determinada por la pagina actual y el total (length) de paginas.",
          "default": false,
          "link": null,
          "usage": "#progress",
          "code": "<vs-pagination progress v-model=\"page\" :length=\"20\" />\n"
        },
        {
          "name": "dotted-number",
          "type": "Number",
          "values": "Number",
          "description": "Cambia el total de paginas que se van a agregar o restar al darle click a los puntos.",
          "default": false,
          "link": null,
          "usage": "#dotted-number",
          "code": "<vs-pagination :dotted-number=\"10\" v-model=\"page\" :length=\"100\" />\n"
        },
        {
          "name": "infinite",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si la pagination en infinita.",
          "default": false,
          "link": null,
          "usage": "#infinite",
          "code": "<vs-pagination infinite v-model=\"page\" :length=\"100\" />\n"
        }
      ],
      "SLOTS": [
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Espacio entre las dos flechas (siguiente y atrás).",
          "default": null,
          "link": null,
          "usage": "#slot",
          "code": "<vs-pagination v-model=\"page\" :length=\"20\">\n  <vs-select v-model=\"page\">\n    <vs-option\n      v-for=\"numberPage in 20\"\n      :label=\"numberPage\"\n      :value=\"numberPage\">\n      {{ numberPage }}\n    </vs-option>\n  </vs-select>\n</vs-pagination>\n"
        }
      ],
      "NEWS": [
        "disabled",
        "not-arrows",
        "only-arrows",
        "circle",
        "square",
        "buttons-dotted",
        "disabled-items",
        "loading-items",
        "not-margin",
        "slot",
        "progress",
        "dotted-number",
        "infinite"
      ]
    },
    "regularPath": "/en/docs/components/Pagination.html",
    "relativePath": "en/docs/components/Pagination.md",
    "key": "v-3c82e5b2",
    "path": "/en/docs/components/Pagination.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Disabled",
        "slug": "disabled"
      },
      {
        "level": 2,
        "title": "Not Arrows",
        "slug": "not-arrows"
      },
      {
        "level": 2,
        "title": "Only Arrows",
        "slug": "only-arrows"
      },
      {
        "level": 2,
        "title": "Circle",
        "slug": "circle"
      },
      {
        "level": 2,
        "title": "Square",
        "slug": "square"
      },
      {
        "level": 2,
        "title": "Buttons Dotted",
        "slug": "buttons-dotted"
      },
      {
        "level": 2,
        "title": "Disabled Items",
        "slug": "disabled-items"
      },
      {
        "level": 2,
        "title": "Loading Items",
        "slug": "loading-items"
      },
      {
        "level": 2,
        "title": "Not Margin",
        "slug": "not-margin"
      },
      {
        "level": 2,
        "title": "Slot",
        "slug": "slot"
      },
      {
        "level": 2,
        "title": "Progress",
        "slug": "progress"
      },
      {
        "level": 2,
        "title": "Dotted Number",
        "slug": "dotted-number"
      },
      {
        "level": 2,
        "title": "Infinite",
        "slug": "infinite"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "3/3/2020 10:21:13"
  },
  {
    "title": "Radio",
    "frontmatter": {
      "PROPS": [
        {
          "name": "color",
          "type": "String",
          "values": "Vuesax Colors, RGB, HEX",
          "description": "Cambia el color de el radio.",
          "default": "primary",
          "link": null,
          "usage": "#color",
          "code": "<vs-radio success v-model=\"picked\" val=\"2\">\n  Success\n</vs-radio>\n"
        },
        {
          "name": "disabled",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si el componente se encuentra en estado disabled.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-radio disabled v-model=\"picked\" val=\"3\">\n  Option C\n</vs-radio>\n"
        },
        {
          "name": "loading",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si el componente tiene una animación de cargando y se encuentra en disabled.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<vs-radio loading v-model=\"picked\" val=\"1\">\n  Option 1\n</vs-radio>\n"
        },
        {
          "name": "val",
          "type": "String",
          "values": "String",
          "description": "Determina el valor de el input radio.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-radio v-model=\"picked\" val=\"1\">\n  Option A\n</vs-radio>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Agrega un label al componente.",
          "default": null,
          "link": null,
          "usage": "#label",
          "code": "<vs-radio v-model=\"picked\" val=\"1\">\n  Label\n</vs-radio>\n"
        },
        {
          "name": "icon",
          "type": "slot",
          "values": null,
          "description": "Agrega un icono dentro de el radio.",
          "default": null,
          "link": null,
          "usage": "#icon",
          "code": "<vs-radio v-model=\"picked\" val=\"1\">\n  Yen\n  <template #icon>\n    <i class='bx bx-yen' ></i>\n  </template>\n</vs-radio>\n"
        }
      ],
      "NEWS": [
        "loading",
        "icon",
        "label"
      ]
    },
    "regularPath": "/en/docs/components/Radio.html",
    "relativePath": "en/docs/components/Radio.md",
    "key": "v-49e0e2e9",
    "path": "/en/docs/components/Radio.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Label",
        "slug": "label"
      },
      {
        "level": 2,
        "title": "Loading",
        "slug": "loading"
      },
      {
        "level": 2,
        "title": "Icon",
        "slug": "icon"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "10/2/2020 9:21:50"
  },
  {
    "title": "Button",
    "frontmatter": {
      "PROPS": [
        {
          "name": "color",
          "type": "String",
          "values": "primary, success, danger, warning, dark, RGB, HEX",
          "description": "Cambia el color del componente y algunos de sus sub componentes.",
          "default": "primary",
          "link": "/api/color",
          "usage": "#color",
          "code": "<vs-button\n  color=\"success\" \n>\n  Success\n</vs-button>\n"
        },
        {
          "name": "style button",
          "type": "Prop",
          "values": "flat, border, gradient, transparent, dashed, shadow, relief, floating",
          "description": "Cambia el estilo del componente y de sus estados.",
          "default": null,
          "link": null,
          "usage": "#flat",
          "code": "<vs-button\n  flat\n  >\n  Flat\n</vs-button>\n"
        },
        {
          "name": "active",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determina si el componente esta activo y cambia su estilo a ese estado.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-button active >\n  Default\n</vs-button>\n"
        },
        {
          "name": "upload",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determina si el componente tiene activo el estado de upload cambiando el estilo y agregando la animación.",
          "default": false,
          "link": null,
          "usage": "#upload",
          "code": "<vs-button upload >\n  <i class='bx bxs-wallet'></i> Wallet\n</vs-button>\n"
        },
        {
          "name": "to",
          "type": "String",
          "values": "url - vue-router",
          "description": "Agrega la funcionalidad de vue-router al botón, al hacer click se va a redirigir a la ruta pasada.",
          "default": false,
          "link": null,
          "usage": "#to-href",
          "code": "<vs-button to=\"/\" >\n  Example prop - to\n</vs-button>\n"
        },
        {
          "name": "href",
          "type": "String",
          "values": "href - link",
          "description": "Agrega un href de un link externo para agregar la funcionalidad al hacer click en el componente.",
          "default": false,
          "link": null,
          "usage": "#to-href",
          "code": "<vs-button href=\"https://lusaxweb.github.io/vuesax/\" >\n  Example prop - url\n</vs-button>\n"
        },
        {
          "name": "blank",
          "type": "Boolean",
          "values": "true, false",
          "description": "como en un elemento html `a` determina si se abre una nueva ventana o se sustituye la actual.",
          "default": false,
          "link": null,
          "usage": "#to-href",
          "code": "<vs-button blank href=\"https://lusaxweb.github.io/vuesax/\" >\n  Example prop - url\n</vs-button>\n"
        },
        {
          "name": "icon",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determina si el componente contiene solo un icono, al agregar esta propiedad el componente tiene un ancho y alto igual.",
          "default": false,
          "link": null,
          "usage": "#icon",
          "code": "<vs-button icon >\n  <i class='bx bx-home-alt'></i>\n</vs-button>\n"
        },
        {
          "name": "circle",
          "type": "Boolean",
          "values": "true, false",
          "description": "Cambia el border-radius para dar un estilo de circulo.",
          "default": false,
          "link": null,
          "usage": "#circle",
          "code": "<vs-button icon circle >\n  <i class='bx bx-home-alt'></i>\n</vs-button>\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "true, false",
          "description": "Cambia el border-radius para dar un estilo de rectángulo.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-button icon square > // <------\n  <i class='bx bx-home-alt'></i>\n</vs-button>\n"
        },
        {
          "name": "block",
          "type": "Boolean",
          "values": "true, false",
          "description": "Cambia el ancho del componente al total posible determinado por el elemento padre.",
          "default": false,
          "link": null,
          "usage": "#block",
          "code": "<vs-button block >\n  <i class='bx bxs-paint-roll' ></i> Edit Theme\n</vs-button>\n"
        },
        {
          "name": "animationType",
          "type": "Boolean",
          "values": "true, false",
          "description": "Cambia el tipo de animacion, esta propiedad solo funciona si se tiene el <code>slot</code> animate.",
          "default": false,
          "link": null,
          "usage": "#animate",
          "code": "<vs-button flat color=\"success\" animation-type=\"vertical\" >\n  Message\n  <template v-slot:animate >\n    <i class='bx bx-mail-send' ></i> Send\n  </template>\n</vs-button>\n"
        },
        {
          "name": "animateInactive",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determina si la animación esta activa para el usuario al hacer hover.",
          "default": false,
          "link": null,
          "usage": "#toggle",
          "code": "<vs-button :animate-inactive=\"successFace\" @click=\"handleClickFace\" :loading=\"loadingFace\" color=\"facebook\">\n  <i class='bx bxl-facebook-square' ></i>\n  {{ successFace ? 'Logout' : 'Facebook' }}\n  <template v-slot:animate >\n    <i class='bx bx-user' ></i> Login\n  </template>\n</vs-button>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "animate",
          "type": "slot",
          "values": null,
          "description": "Slot Para agregar el elemento que se visualizara en la animacion.",
          "default": null,
          "link": null,
          "code": "<vs-button >\n  Home\n  <template v-slot:animate >\n    <i class='bx bx-home-alt' ></i>\n  </template>\n</vs-button>\n",
          "usage": "#animated"
        }
      ],
      "NEWS": [
        "loading",
        "upload",
        "block",
        "animate",
        "floating",
        "social",
        "group",
        "toggle",
        "to-href"
      ]
    },
    "regularPath": "/en/docs/components/",
    "relativePath": "en/docs/components/README.md",
    "key": "v-383a2878",
    "path": "/en/docs/components/",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Flat",
        "slug": "flat"
      },
      {
        "level": 2,
        "title": "Border",
        "slug": "border"
      },
      {
        "level": 2,
        "title": "Gradient",
        "slug": "gradient"
      },
      {
        "level": 2,
        "title": "Relief",
        "slug": "relief"
      },
      {
        "level": 2,
        "title": "Transparent",
        "slug": "transparent"
      },
      {
        "level": 2,
        "title": "Shadow",
        "slug": "shadow"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Icon",
        "slug": "icon"
      },
      {
        "level": 2,
        "title": "Icon - Text",
        "slug": "icon-text"
      },
      {
        "level": 2,
        "title": "Circle",
        "slug": "circle"
      },
      {
        "level": 2,
        "title": "Square",
        "slug": "square"
      },
      {
        "level": 2,
        "title": "Size",
        "slug": "size"
      },
      {
        "level": 2,
        "title": "Loading",
        "slug": "loading"
      },
      {
        "level": 2,
        "title": "Upload",
        "slug": "upload"
      },
      {
        "level": 2,
        "title": "Block",
        "slug": "block"
      },
      {
        "level": 2,
        "title": "Animate",
        "slug": "animate"
      },
      {
        "level": 2,
        "title": "Social",
        "slug": "social"
      },
      {
        "level": 2,
        "title": "Floating",
        "slug": "floating"
      },
      {
        "level": 2,
        "title": "Group",
        "slug": "group"
      },
      {
        "level": 2,
        "title": "Toggle",
        "slug": "toggle"
      },
      {
        "level": 2,
        "title": "To - href",
        "slug": "to-href"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Select",
    "frontmatter": {
      "PROPS": [
        {
          "name": "color",
          "type": "String",
          "values": "Colores principales de vuesax, RGB, HEX",
          "description": "Cambia el color de el componente.",
          "default": "primary",
          "link": null,
          "usage": "#color",
          "code": "<template>\n  <div class=\"center con-selects\">\n    <vs-select\n      v-for=\"(color, i) in colors\"\n      :key=\"i\"\n      :color=\"color.color\"\n      placeholder=\"Select\"\n      v-model=\"color.value\"\n    >\n      <vs-option label=\"Vuesax\" value=\"1\">\n        Vuesax\n      </vs-option>\n      <vs-option label=\"Vue\" value=\"2\">\n        Vue\n      </vs-option>\n      <vs-option label=\"Javascript\" value=\"3\">\n        Javascript\n      </vs-option>\n      <vs-option label=\"Sass\" value=\"4\">\n        Sass\n      </vs-option>\n      <vs-option label=\"Typescript\" value=\"5\">\n        Typescript\n      </vs-option>\n      <vs-option label=\"Webpack\" value=\"6\">\n        Webpack\n      </vs-option>\n      <vs-option label=\"Nodejs\" value=\"7\">\n        Nodejs\n      </vs-option>\n    </vs-select>\n  </div>\n</template> <script> export default {\n  data:() => ({\n    colors: [\n      {\n        color: 'danger',\n        value: '1'\n      },\n      {\n        color: 'success',\n        value: '2'\n      },\n      {\n        color: 'warn',\n        value: '3'\n      },\n      {\n        color: 'dark',\n        value: '4'\n      },\n      {\n        color: '#7d33ff',\n        value: '5'\n      },\n      {\n        color: 'rgb(59,222,200)',\n        value: '6'\n      },\n\n    ]\n  })\n} </script>\n"
        },
        {
          "name": "loading",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determina si el componente se encuentra en estado loading y agrega una animación.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<vs-select\n  placeholder=\"Success\"\n  v-model=\"value1\"\n  loading\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "placeholder",
          "type": "String",
          "values": "String",
          "description": "Agrega un placeholder al componente.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-select placeholder=\"Select\" v-model=\"value\">\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option disabled label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "label",
          "type": "String",
          "values": "String",
          "description": "Agrega un label al componete select.",
          "default": null,
          "link": null,
          "usage": "#label",
          "code": "<vs-select\n  label=\"Label\"\n  v-model=\"value1\"\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "label-placeholder",
          "type": "String",
          "values": "String",
          "description": "Agrega un placeholder que al estar en focus o con valor se convierte en un label.",
          "default": null,
          "link": null,
          "usage": "#label",
          "code": "<vs-select\n  label-placeholder=\"Label-placeholder\"\n  v-model=\"value2\"\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "filter",
          "type": "Boolean",
          "values": "true, false",
          "description": "Agrega la funcionalidad de filtrar las opciones de el select.",
          "default": false,
          "link": null,
          "usage": "#filter",
          "code": "<vs-select\n  filter\n  placeholder=\"Filter\"\n  v-model=\"value\"\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "multiple",
          "type": "Boolean",
          "values": "true, false",
          "description": "Agrega la funcionalidad de poder seleccionar varias opciones de un select.",
          "default": false,
          "link": null,
          "usage": "#multiple",
          "code": "<vs-select\n  label=\"Multiple\"\n  multiple\n  placeholder=\"Filter\"\n  v-model=\"value\"\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "state",
          "type": "String",
          "values": "Colores principales de Vuesax",
          "description": "Cambia el estado de el componete al color proporcionado.",
          "default": false,
          "link": null,
          "usage": "#state",
          "code": "<vs-select\n  v-for=\"(color, i) in colors\"\n  :key=\"i\"\n  :state=\"color.color\"\n  :label=\"color.color\"\n  placeholder=\"Select\"\n  v-model=\"color.value\"\n  >\n    <vs-option label=\"Vuesax\" value=\"1\">\n      Vuesax\n    </vs-option>\n    <vs-option label=\"Vue\" value=\"2\">\n      Vue\n    </vs-option>\n    <vs-option label=\"Javascript\" value=\"3\">\n      Javascript\n    </vs-option>\n    <vs-option label=\"Sass\" value=\"4\">\n      Sass\n    </vs-option>\n    <vs-option label=\"Typescript\" value=\"5\">\n      Typescript\n    </vs-option>\n    <vs-option label=\"Webpack\" value=\"6\">\n      Webpack\n    </vs-option>\n    <vs-option label=\"Nodejs\" value=\"7\">\n      Nodejs\n    </vs-option>\n    </vs-select>\n  </div>\n</template>\n"
        },
        {
          "name": "disabled",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determina si el componente se encuentra en estado de disabled.",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-select\n  disabled\n  placeholder=\"Success\"\n  v-model=\"value1\"\n>\n  <template #message-success>\n    Option Valid\n  </template>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "collapse-chips",
          "type": "Boolean",
          "values": "true, false",
          "description": "Determina si los chips en multiple se reducen a 2 elementos.",
          "default": false,
          "link": null,
          "usage": "#multiple",
          "code": "<vs-select\n  label=\"Multiple collapse chips\"\n  filter\n  multiple\n  collapse-chips\n  placeholder=\"Collapse chips\"\n  v-model=\"value3\"\n>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "message-{color}",
          "type": "slot",
          "values": null,
          "description": "Agrega un mensaje debajo de el select.",
          "default": null,
          "link": null,
          "usage": "#message",
          "code": "<vs-select\n  placeholder=\"Success\"\n  v-model=\"value1\"\n>\n  <template #message-success>\n    Option Valid\n  </template>\n  <vs-option label=\"Vuesax\" value=\"1\">\n    Vuesax\n  </vs-option>\n  <vs-option label=\"Vue\" value=\"2\">\n    Vue\n  </vs-option>\n  <vs-option label=\"Javascript\" value=\"3\">\n    Javascript\n  </vs-option>\n  <vs-option label=\"Sass\" value=\"4\">\n    Sass\n  </vs-option>\n  <vs-option label=\"Typescript\" value=\"5\">\n    Typescript\n  </vs-option>\n  <vs-option label=\"Webpack\" value=\"6\">\n    Webpack\n  </vs-option>\n  <vs-option label=\"Nodejs\" value=\"7\">\n    Nodejs\n  </vs-option>\n</vs-select>\n"
        },
        {
          "name": "title",
          "type": "slot",
          "values": null,
          "description": "Al componente vs-option-group le agrega un titulo al grupo de opciones.",
          "default": null,
          "link": null,
          "usage": "#group",
          "code": "<vs-select\n  label=\"Group\"\n  placeholder=\"Group\"\n  v-model=\"value1\"\n>\n  <vs-option-group>\n    <div slot=\"title\">\n      Vuejs\n    </div>\n    <vs-option label=\"Vuesax\" value=\"1\">\n      Vuesax\n    </vs-option>\n    <vs-option label=\"Vue\" value=\"2\">\n      Vue\n    </vs-option>\n    <vs-option label=\"Javascript\" value=\"3\">\n      Javascript\n    </vs-option>\n  </vs-option-group>\n  <vs-option-group>\n    <div slot=\"title\">\n      Others\n    </div>\n    <vs-option label=\"Sass\" value=\"4\">\n      Sass\n    </vs-option>\n    <vs-option label=\"Typescript\" value=\"5\">\n      Typescript\n    </vs-option>\n    <vs-option label=\"Webpack\" value=\"6\">\n      Webpack\n    </vs-option>\n    <vs-option label=\"Nodejs\" value=\"7\">\n      Nodejs\n    </vs-option>\n  </vs-option-group>\n</vs-select>\n"
        }
      ],
      "NEWS": [
        "loading",
        "message",
        "state",
        "filter"
      ]
    },
    "regularPath": "/en/docs/components/Select.html",
    "relativePath": "en/docs/components/Select.md",
    "key": "v-519c8a32",
    "path": "/en/docs/components/Select.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Label",
        "slug": "label"
      },
      {
        "level": 2,
        "title": "Group",
        "slug": "group"
      },
      {
        "level": 2,
        "title": "Filter",
        "slug": "filter"
      },
      {
        "level": 2,
        "title": "Multiple",
        "slug": "multiple"
      },
      {
        "level": 2,
        "title": "Loading",
        "slug": "loading"
      },
      {
        "level": 2,
        "title": "State",
        "slug": "state"
      },
      {
        "level": 2,
        "title": "Message",
        "slug": "message"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "30/1/2020 15:38:50"
  },
  {
    "title": "Switch",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "boolean, Array",
          "values": "boolean, Array",
          "description": "Determina el valor de el componente y si en un array agrega o elimina el valor.",
          "default": null,
          "link": null,
          "usage": "#dafault",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch v-model=\"active\" />\n    <vs-switch v-model=\"active2\" />\n    <vs-switch v-model=\"active3\" disabled />\n  </div>\n</template>\n"
        },
        {
          "name": "val",
          "type": "string",
          "values": "string",
          "description": "Cambia el valor por defecto de boolean al string para usarlo el ser un array el v-model.",
          "default": null,
          "link": null,
          "usage": "#array-value",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch val=\"html\" v-model=\"options\">\n      Html\n    </vs-switch>\n    <vs-switch val=\"css\" v-model=\"options\">\n      Css\n    </vs-switch>\n    <vs-switch val=\"javascript\" v-model=\"options\">\n      Javascript\n    </vs-switch>\n    <vs-switch val=\"vue\" v-model=\"options\">\n      Vue\n    </vs-switch>\n    <vs-switch val=\"vuesax\" v-model=\"options\">\n      Vuesax\n    </vs-switch>\n\n    <span class=\"data\">\n      {{ options }}\n    </span>\n  </div>\n</template>\n"
        },
        {
          "name": "color",
          "type": "String",
          "values": "Colores principales de vuesax, RGB y HEX",
          "description": "Cambia el color de el componente cuando esta en estado de activo.",
          "default": "primary",
          "link": null,
          "usage": "#color",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch v-model=\"active1\" />\n    <vs-switch success v-model=\"active2\" />\n    <vs-switch danger v-model=\"active3\" />\n    <vs-switch warn v-model=\"active4\" />\n    <vs-switch dark v-model=\"active5\" />\n    <vs-switch color=\"#7d33ff\" v-model=\"active6\" />\n    <vs-switch color=\"rgb(59,222,200)\" v-model=\"active7\" />\n  </div>\n</template>\n"
        },
        {
          "name": "loading",
          "type": "boolean",
          "values": "true, false",
          "description": "Agrega una animación de cargando al componete.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch v-model=\"activeLoading\">\n      Active Loading\n    </vs-switch>\n    <vs-switch :loading=\"activeLoading\" v-model=\"active2\" />\n  </div>\n</template> <script> export default {\n  data:() => ({\n    activeLoading: true,\n    active2: false\n  }),\n} </script>\n"
        },
        {
          "name": "indeterminate",
          "type": "boolean",
          "values": "true,false",
          "description": "Determina si el componente se encuentra en un estado de indeterminado (al estar en este estado se encuentra en disabled).",
          "default": false,
          "link": null,
          "usage": "#indeterminate",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch indeterminate v-model=\"active\" />\n    <vs-switch indeterminate v-model=\"active2\" />\n    <vs-switch indeterminate v-model=\"active3\" disabled />\n  </div>\n</template>\n"
        },
        {
          "name": "Square",
          "type": "Boolean",
          "values": "true,false",
          "description": "Cambia el estilo de el componente de circular a cuadrado.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch square v-model=\"active\" />\n    <vs-switch square v-model=\"active2\" />\n    <vs-switch square v-model=\"active3\" disabled />\n  </div>\n</template>\n"
        },
        {
          "name": "icon",
          "type": "boolean",
          "values": "true,false",
          "description": "Cambia el estilo de el circulo volviéndolo transparente (se usa cuando se agrega el slot=\"circle\").",
          "default": false,
          "link": null,
          "usage": "#icons",
          "code": "<vs-switch color=\"#7d33ff\" icon v-model=\"active6\">\n  <template #circle>\n      <i v-if=\"active6\" class='bx bxl-instagram-alt'></i>\n      <i v-else class='bx bxl-instagram' ></i>\n  </template>\n</vs-switch>\n"
        },
        {
          "name": "notValue",
          "type": "String",
          "values": "String",
          "description": "Determina el valor de retorno de el componente al estar inactivo.",
          "default": null,
          "link": null,
          "usage": null,
          "code": null
        }
      ],
      "SLOTS": [
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Agrega un texto dentro de el componente.",
          "default": null,
          "link": "/api/slot",
          "usage": "#text",
          "code": "<template>\n  <div class=\"center con-switch\">\n    <vs-switch v-model=\"active\">\n      Suscribe\n    </vs-switch>\n    <vs-switch v-model=\"active2\">\n      <template #off>\n          Off\n      </template>\n      <template #on>\n          On\n      </template>\n    </vs-switch>\n    <vs-switch v-model=\"active3\">\n      <template #off>\n          default\n      </template>\n      <template #on>\n          Premium\n      </template>\n    </vs-switch>\n  </div>\n</template>\n"
        },
        {
          "name": "on",
          "type": "slot",
          "values": null,
          "description": "Agrega un texto dentro de el componente cuando esta en estado activo.",
          "default": null,
          "link": "/api/slot",
          "usage": "#icons",
          "code": "<vs-switch v-model=\"active1\">\n  <template #off>\n      <i class='bx bxs-volume-mute' ></i>\n  </template>\n  <template #on>\n      <i class='bx bxs-volume-full' ></i>\n  </template>\n</vs-switch>\n"
        },
        {
          "name": "off",
          "type": "slot",
          "values": null,
          "description": "Agrega un texto dentro de el componente cuando esta en estado inactivo.",
          "default": null,
          "link": "/api/slot",
          "usage": "#icons",
          "code": "<vs-switch v-model=\"active1\">\n  <template #off>\n      <i class='bx bxs-volume-mute' ></i>\n  </template>\n  <template #on>\n      <i class='bx bxs-volume-full' ></i>\n  </template>\n</vs-switch>\n"
        },
        {
          "name": "circle",
          "type": "slot",
          "values": null,
          "description": "Agrega un icono al circulo dentro de el componente.",
          "default": null,
          "link": "/api/slot",
          "usage": "#icons",
          "code": "<vs-switch color=\"#7d33ff\" icon v-model=\"active6\">\n  <template #circle>\n      <i v-if=\"active6\" class='bx bxl-instagram-alt'></i>\n      <i v-else class='bx bxl-instagram' ></i>\n  </template>\n</vs-switch>\n"
        }
      ],
      "NEWS": [
        "square",
        "indeterminate",
        "loading",
        "array-value"
      ]
    },
    "regularPath": "/en/docs/components/Switch.html",
    "relativePath": "en/docs/components/Switch.md",
    "key": "v-c7e86032",
    "path": "/en/docs/components/Switch.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Text",
        "slug": "text"
      },
      {
        "level": 2,
        "title": "Icons",
        "slug": "icons"
      },
      {
        "level": 2,
        "title": "Array Value",
        "slug": "array-value"
      },
      {
        "level": 2,
        "title": "Loading",
        "slug": "loading"
      },
      {
        "level": 2,
        "title": "Indeterminate",
        "slug": "indeterminate"
      },
      {
        "level": 2,
        "title": "Square",
        "slug": "square"
      },
      {
        "level": 2,
        "title": "Example",
        "slug": "example"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "25/1/2020 4:21:03"
  },
  {
    "title": "Sidebar",
    "frontmatter": {
      "PROPS": [
        {
          "name": "open",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si el componente en visible.",
          "default": false,
          "link": null,
          "usage": "#open",
          "code": ":open.sync=\"activeSidebar\"\n"
        },
        {
          "name": "v-model",
          "type": "String",
          "values": "id",
          "description": "Determina el item que se encuentra en estado activo.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "v-model=\"active\"\n"
        },
        {
          "name": "absolute",
          "type": "boolean",
          "values": "true,false",
          "description": "Determina si el componente en de position absoluta.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-sidebar\n  absolute\n  v-model=\"active\"\n  :open.sync=\"activeSidebar\"\n  >\n"
        },
        {
          "name": "relative",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si el componente en de posición relativa.",
          "default": false,
          "link": null,
          "usage": "#default",
          "code": "<vs-sidebar\n  relative\n  v-model=\"active\"\n  :open.sync=\"activeSidebar\"\n  >\n"
        },
        {
          "name": "reduce",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si el componente esta en estado reducido con un ancho de 50px.",
          "default": false,
          "link": null,
          "usage": "#reduce",
          "code": "<vs-sidebar\n  absolute\n  reduce\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "hover-expand",
          "type": "Boolean",
          "values": "true,false",
          "description": "Agrega la funcionalidad de expandir cuando el usuario entra dentro de el sidebar y viceversa.",
          "default": false,
          "link": null,
          "usage": "#hover-expand",
          "code": "<vs-sidebar\n  absolute\n  reduce\n  hover-expand\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si el componente no tiene border radius",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar\n  square\n  absolute\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "notShadow",
          "type": "Boolean",
          "values": "true,false",
          "description": "Elimina el shadow de el sidebar",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar\n  not-shadow\n  absolute\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "background",
          "type": "String",
          "values": "Vuesax Colors, RGB, HEX",
          "description": "Cambia el color de fondo de el sidebar",
          "default": false,
          "link": null,
          "usage": "#color",
          "code": "<vs-sidebar\n  background=\"primary\"\n  absolute\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "textWhite",
          "type": "Boolean",
          "values": "true,false",
          "description": "Cambia el color de el texto a blanco",
          "default": false,
          "link": null,
          "usage": "#color",
          "code": "<vs-sidebar\n  text-white\n  background=\"primary\"\n  absolute\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "notLineActive",
          "type": "Boolean",
          "values": "true,false",
          "description": "Elimina la linea de el active de los items",
          "default": false,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar\n  not-line-active\n  absolute\n  v-model=\"active\"\n  open\n>\n"
        },
        {
          "name": "vs-sidebar-item:to",
          "type": "String",
          "values": "url",
          "description": "Genera una nueva ruta de vue-router",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar-item\n  to=\"/\"\n>\n"
        },
        {
          "name": "vs-sidebar-item:href",
          "type": "String",
          "values": "url",
          "description": "Genera una nueva ruta",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar-item\n  href=\"http://vuesax.com/\"\n>\n"
        },
        {
          "name": "right",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si el componente se posiciona hacia la derecha",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<vs-sidebar right>\n  ...\n</vs-sidebar>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "logo",
          "type": "slot",
          "values": null,
          "description": "Agrega los elementos en la parte superior de todo el sidebar.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #logo>\n  ...\n</template>\n"
        },
        {
          "name": "footer",
          "type": "slot",
          "values": null,
          "description": "Agrega los elementos en la parte inferior de el sidebar.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #footer>\n  ...\n</template>\n"
        },
        {
          "name": "header",
          "type": "slot",
          "values": null,
          "description": "Agrega los elementos debajo de el logo y sobre los items.",
          "default": null,
          "link": null,
          "usage": null,
          "code": "<template #header>\n  ...\n</template>\n"
        },
        {
          "name": "vs-sidebar-item#icon",
          "type": "slot",
          "values": null,
          "description": "Es el espacio para agregar el icono o una letra representativa.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #icon>\n  <i class='bx bx-home' ></i>\n</template>\n"
        }
      ],
      "NEWS": [
        "name"
      ]
    },
    "regularPath": "/en/docs/components/Sidebar.html",
    "relativePath": "en/docs/components/Sidebar.md",
    "key": "v-0f7d83e7",
    "path": "/en/docs/components/Sidebar.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Group",
        "slug": "group"
      },
      {
        "level": 2,
        "title": "Reduce",
        "slug": "reduce"
      },
      {
        "level": 2,
        "title": "Hover expand",
        "slug": "hover-expand"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Open",
        "slug": "open"
      },
      {
        "level": 2,
        "title": "Position Right",
        "slug": "position-right"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "30/9/2020 5:58:17"
  },
  {
    "title": "Tooltip",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "boolean",
          "values": "true,false",
          "description": "Determina si el componente se encuentra activo (visible).",
          "default": false,
          "link": null,
          "usage": "#content",
          "code": null
        },
        {
          "name": "color",
          "type": "String",
          "values": "Vuesax colors, RGB, HEX",
          "description": "Cambia el color de el tooltip.",
          "default": "text",
          "link": null,
          "usage": "#color",
          "code": "<vs-tooltip primary>\n  <vs-button flat>\n    Primary\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "left, right, bottom",
          "type": "Boolean",
          "values": "true,false",
          "description": "Cambia la position de el tooltip.",
          "default": "top",
          "link": null,
          "usage": "#position",
          "code": "<vs-tooltip left>\n  <vs-button border>\n    left\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "border",
          "type": "Boolean",
          "values": "true,false",
          "description": "Cambia el estilo de el tooltip agregando un borde.",
          "default": "primary",
          "link": null,
          "usage": "#border",
          "code": "<vs-tooltip border>\n  <vs-button transparent>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "border-thick",
          "type": "Boolean",
          "values": "true,false",
          "description": "Cambia el estilo de el tooltip agregando un borde grueso solo en la posición de la flecha.",
          "default": false,
          "link": null,
          "usage": "#border",
          "code": "<vs-tooltip color=\"#7d33ff\" border-thick>\n  <vs-button color=\"#7d33ff\" transparent>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "square",
          "type": "Boolean",
          "values": "trie,false",
          "description": "Determina si el tooltip en rectangular sin border-radius.",
          "default": false,
          "link": null,
          "usage": "#square",
          "code": "<vs-tooltip square>\n  <vs-button square flat>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "circle",
          "type": "boolean",
          "values": "true,false",
          "description": "Cambia el border radius a 20px haciendo que si en una sola linea de texto sea circular las esquinas.",
          "default": false,
          "link": null,
          "usage": "#circle",
          "code": "<vs-tooltip circle>\n  <vs-button circle flat>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "shadow",
          "type": "boolean",
          "values": "true,false",
          "description": "Cambia el estilo de el tooltip agregando un shadow y cambiando el fondo.",
          "default": false,
          "link": null,
          "usage": "#shadow",
          "code": "<vs-tooltip shadow>\n  <vs-button flat>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "not-arrow",
          "type": "boolean",
          "values": "true,false",
          "description": "Elimina la flecha de el tooltip.",
          "default": false,
          "link": null,
          "usage": "#not-arrow",
          "code": "<vs-tooltip not-arrow left>\n  <vs-button border>\n    left not-arrow\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "not-hover",
          "type": "boolean",
          "values": "true,false",
          "description": "El tooltip por defecto se genera el hacer hover en el elemento padre, esa funcionalidad se elimina y ya no aparece o desaparece al hacer hover.",
          "default": false,
          "link": null,
          "usage": "#content",
          "code": "<vs-tooltip bottom shadow not-hover v-model=\"activeTooltip1\">\n  <vs-button danger @click=\"activeTooltip1=!activeTooltip1\">\n    Click Delete User\n  </vs-button>\n  <template #tooltip>\n    <div class=\"content-tooltip\">\n      <h4 class=\"center\">\n        Confirm\n      </h4>\n      <p>\n        You are sure to delete this user, by doing so you cannot recover the data\n      </p>\n      <footer>\n        <vs-button @click=\"activeTooltip1=false\" danger block>\n          Delete\n        </vs-button>\n        <vs-button @click=\"activeTooltip1=false\" transparent dark block>\n          Cancel\n        </vs-button>\n      </footer>\n    </div>\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "interactivity",
          "type": "boolean",
          "values": "true,false",
          "description": "Determina si el tooltip en interactivo y hace que puedas hacer click sin que se oculte automáticamente.",
          "default": false,
          "link": null,
          "usage": "#content",
          "code": "<vs-tooltip shadow interactivity>\n  <vs-avatar>\n    <img src=\"/avatars/avatar-5.png\" alt=\"\">\n  </vs-avatar>\n  <template #tooltip>\n    <div class=\"content-tooltip\">\n      <div class=\"body\">\n        <div class=\"text\">\n            Cosed Tasks\n          <span>\n          89\n          </span>\n        </div>\n        <vs-avatar circle size=\"80\" @click=\"activeTooltip1=!activeTooltip1\">\n          <img src=\"/avatars/avatar-5.png\" alt=\"\">\n        </vs-avatar>\n        <div class=\"text\">\n            Open Tasks\n          <span>\n          8\n          </span>\n        </div>\n      </div>\n      <footer>\n        <vs-button circle icon border>\n          <i class='bx bxs-share-alt'></i>\n        </vs-button>\n        <vs-button circle>\n          Message\n        </vs-button>\n        <vs-button circle icon border>\n          <i class='bx bx-like' ></i>\n        </vs-button>\n      </footer>\n    </div>\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "loading",
          "type": "boolean",
          "values": "true,false",
          "description": "Determina si el tooltip tiene un estilo y animación de loading.",
          "default": false,
          "link": null,
          "usage": "#loading",
          "code": "<template>\n  <div class=\"center\">\n    <vs-tooltip loading>\n      <vs-button flat>\n        Do hover here loading\n      </vs-button>\n      <template #tooltip>\n        This is a beautiful button\n      </template>\n    </vs-tooltip>\n    <vs-tooltip loading>\n      <vs-button flat>\n        Do hover here loading\n      </vs-button>\n      <template #tooltip></template>\n    </vs-tooltip>\n  </div>\n</template>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "default",
          "type": "slot",
          "values": null,
          "description": "Agrega el elemento disparador de el tooltip.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-tooltip>\n  <vs-button flat>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        },
        {
          "name": "tooltip",
          "type": "slot",
          "values": null,
          "description": "Es el contenido que va a ir dentro de el tooltip.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<vs-tooltip>\n  <vs-button flat>\n    Do hover here\n  </vs-button>\n  <template #tooltip>\n    This is a beautiful button\n  </template>\n</vs-tooltip>\n"
        }
      ],
      "NEWS": [
        "border",
        "square",
        "circle",
        "shadow",
        "not-arrow",
        "loading",
        "content"
      ]
    },
    "regularPath": "/en/docs/components/Tooltip.html",
    "relativePath": "en/docs/components/Tooltip.md",
    "key": "v-30351199",
    "path": "/en/docs/components/Tooltip.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Position",
        "slug": "position"
      },
      {
        "level": 2,
        "title": "Color",
        "slug": "color"
      },
      {
        "level": 2,
        "title": "Border",
        "slug": "border"
      },
      {
        "level": 2,
        "title": "Square",
        "slug": "square"
      },
      {
        "level": 2,
        "title": "Circle",
        "slug": "circle"
      },
      {
        "level": 2,
        "title": "Shadow",
        "slug": "shadow"
      },
      {
        "level": 2,
        "title": "Not Arrow",
        "slug": "not-arrow"
      },
      {
        "level": 2,
        "title": "Loading",
        "slug": "loading"
      },
      {
        "level": 2,
        "title": "Content",
        "slug": "content"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "3/3/2020 10:21:13"
  },
  {
    "title": "Directives",
    "frontmatter": {},
    "regularPath": "/en/docs/directives/",
    "relativePath": "en/docs/directives/README.md",
    "key": "v-4b6c7504",
    "path": "/en/docs/directives/",
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Functions",
    "frontmatter": {},
    "regularPath": "/en/docs/functions/",
    "relativePath": "en/docs/functions/README.md",
    "key": "v-20d7bdc2",
    "path": "/en/docs/functions/",
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Getting Started",
    "frontmatter": {},
    "regularPath": "/en/docs/guide/gettingStarted.html",
    "relativePath": "en/docs/guide/gettingStarted.md",
    "key": "v-5e088a0d",
    "path": "/en/docs/guide/gettingStarted.html",
    "headers": [
      {
        "level": 2,
        "title": "Installation",
        "slug": "installation"
      },
      {
        "level": 2,
        "title": "NPM",
        "slug": "npm"
      },
      {
        "level": 2,
        "title": "Uso",
        "slug": "uso"
      },
      {
        "level": 2,
        "title": "Componentes individuales (bajo demanda)",
        "slug": "componentes-individuales-bajo-demanda"
      },
      {
        "level": 2,
        "title": "CDN",
        "slug": "cdn"
      }
    ],
    "lastUpdated": "10/2/2020 9:21:50"
  },
  {
    "title": "Table",
    "frontmatter": {
      "PROPS": [
        {
          "name": "v-model",
          "type": "object, array",
          "values": "object, array",
          "description": "determina los valores de la tabla que están seleccionados.",
          "default": null,
          "link": null,
          "usage": "#single-selected",
          "code": "<vs-table v-model=\"selected\">\n"
        },
        {
          "name": "striped",
          "type": "Boolean",
          "values": "true,false",
          "description": "Agrega franjas a los tr de color gris.",
          "default": null,
          "link": null,
          "usage": "#striped",
          "code": "<vs-table striped>\n"
        },
        {
          "name": "vs-tr:data",
          "type": "object",
          "values": "object",
          "description": "cuando se necesita la funcionalidad de selected se necesita esta propiedad ya que en el objeto que se pasa al v-model.",
          "default": null,
          "link": null,
          "usage": "#single-selected",
          "code": "<vs-tr\n  :key=\"i\"\n  v-for=\"(tr, i) in users\"\n  :data=\"tr\"\n  :is-selected=\"selected == tr\"\n>\n  ...\n</vs-tr>\n"
        },
        {
          "name": "vs-tr:is-selected",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si el componente esta en el estado de selected.",
          "default": false,
          "link": null,
          "usage": "#single-selected",
          "code": "<vs-tr\n  :key=\"i\"\n  v-for=\"(tr, i) in users\"\n  :data=\"tr\"\n  :is-selected=\"selected == tr\"\n>\n  ...\n</vs-tr>\n"
        },
        {
          "name": "vs-td:edit",
          "type": "Boolean",
          "values": "true,false",
          "description": "Determina si el elemento en editable agregando underline y el cursor pointer.",
          "default": false,
          "link": null,
          "usage": "#edit-data",
          "code": "<vs-td edit @click=\"edit = tr, editProp = 'name', editActive = true\">\n  {{ tr.name }}\n</vs-td>\n"
        },
        {
          "name": "vs-th:sort",
          "type": "Boolean",
          "values": "true,false",
          "description": "Agrega las flechas de sort al th correspondiente.",
          "default": false,
          "link": null,
          "usage": "#search-and-sort",
          "code": "<vs-th sort @click=\"users = $vs.sortData($event ,users, 'name')\">\n  Name\n</vs-th>\n"
        },
        {
          "name": "vs-tr:color",
          "type": "String, vuesax colors",
          "values": "color, vuesax colors",
          "description": "Cambia el color de el tr.",
          "default": null,
          "link": null,
          "usage": "#state",
          "code": "<vs-tr\n  :key=\"i\"\n  v-for=\"(tr, i) in users\"\n  :data=\"tr\"\n  :danger=\"tr.id == 3\"\n  :success=\"tr.id == 5\"\n  :primary=\"tr.id == 8\"\n  :warn=\"tr.id == 9\"\n>\n"
        }
      ],
      "SLOTS": [
        {
          "name": "header",
          "type": "slot",
          "values": null,
          "description": "espacio para poner algún elemento en la parte superior de la tabla como por ejemplo el input search.",
          "default": null,
          "link": null,
          "usage": "#search-and-sort",
          "code": "<template #header>\n  ...\n</template>\n"
        },
        {
          "name": "thead",
          "type": "slot",
          "values": null,
          "description": "espacio que representa el elemento thead de la tabla donde se pondrán los componentes `vs-th`.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #thead>\n  <vs-tr>\n    <vs-th>\n      Name\n    </vs-th>\n    <vs-th>\n      Email\n    </vs-th>\n    <vs-th>\n      Id\n    </vs-th>\n  </vs-tr>\n</template>\n"
        },
        {
          "name": "tbody",
          "type": "slot",
          "values": null,
          "description": "Representa el elemento tbody en la tabla y aquí se pondrán los componentes `vs-tr`.",
          "default": null,
          "link": null,
          "usage": "#default",
          "code": "<template #tbody>\n  <vs-tr\n    :key=\"i\"\n    v-for=\"(tr, i) in users\"\n    :data=\"tr\"\n  >\n    <vs-td>\n      {{ tr.name }}\n    </vs-td>\n    <vs-td>\n    {{ tr.email }}\n    </vs-td>\n    <vs-td>\n    {{ tr.id }}\n    </vs-td>\n  </vs-tr>\n</template>\n"
        },
        {
          "name": "vs-tr:#expand",
          "type": "slot",
          "values": null,
          "description": "Representa el interior de el tr cuando esta expandido.",
          "default": null,
          "link": null,
          "usage": "#expand",
          "code": "<template #expand>\n  <div class=\"con-content\">\n    <div>\n      <vs-avatar>\n        <img :src=\"`/avatars/avatar-${i + 1}.png`\" alt=\"\">\n      </vs-avatar>\n      <p>\n        {{ tr.name }}\n      </p>\n    </div>\n    <div>\n      <vs-button flat icon>\n        <i class='bx bx-lock-open-alt' ></i>\n      </vs-button>\n      <vs-button flat icon>\n        Send Email\n      </vs-button>\n      <vs-button border danger>\n        Remove User\n      </vs-button>\n    </div>\n  </div>\n</template>\n"
        },
        {
          "name": "notFound",
          "type": "slot",
          "values": null,
          "description": "Cambia el elemento a mostrar cuando no hay elementos en la tabla.",
          "default": null,
          "link": null,
          "usage": "#search",
          "code": "<template #notFound>\n  Not Found\n</template>\n"
        }
      ],
      "NEWS": [
        "name"
      ]
    },
    "regularPath": "/en/docs/components/Table.html",
    "relativePath": "en/docs/components/Table.md",
    "key": "v-c871f4fa",
    "path": "/en/docs/components/Table.html",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Striped",
        "slug": "striped"
      },
      {
        "level": 2,
        "title": "State",
        "slug": "state"
      },
      {
        "level": 2,
        "title": "Pagination",
        "slug": "pagination"
      },
      {
        "level": 2,
        "title": "Single Selected",
        "slug": "single-selected"
      },
      {
        "level": 2,
        "title": "Multiple Selected",
        "slug": "multiple-selected"
      },
      {
        "level": 2,
        "title": "Expandable data",
        "slug": "expandable-data"
      },
      {
        "level": 2,
        "title": "Edit data",
        "slug": "edit-data"
      },
      {
        "level": 2,
        "title": "Search and sort",
        "slug": "search-and-sort"
      },
      {
        "level": 2,
        "title": "Miscellaneous",
        "slug": "miscellaneous"
      },
      {
        "level": 2,
        "title": "Functions",
        "slug": "functions"
      },
      {
        "level": 2,
        "title": "API",
        "slug": "api"
      }
    ],
    "lastUpdated": "18/6/2020 18:56:36"
  },
  {
    "title": "Migration",
    "frontmatter": {},
    "regularPath": "/en/docs/guide/migration.html",
    "relativePath": "en/docs/guide/migration.md",
    "key": "v-660713a7",
    "path": "/en/docs/guide/migration.html",
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Vuesax + Nuxtjs",
    "frontmatter": {},
    "regularPath": "/en/docs/guide/nuxt.html",
    "relativePath": "en/docs/guide/nuxt.md",
    "key": "v-2e2f4c01",
    "path": "/en/docs/guide/nuxt.html",
    "headers": [
      {
        "level": 2,
        "title": "Instalación",
        "slug": "instalacion"
      },
      {
        "level": 2,
        "title": "Version",
        "slug": "version"
      },
      {
        "level": 2,
        "title": "Probar un componente",
        "slug": "probar-un-componente"
      },
      {
        "level": 3,
        "title": "Agregar un componente",
        "slug": "agregar-un-componente"
      },
      {
        "level": 2,
        "title": "Tips",
        "slug": "tips"
      }
    ],
    "lastUpdated": "18/6/2020 18:56:36"
  },
  {
    "title": "Grid",
    "frontmatter": {},
    "regularPath": "/en/docs/layout/",
    "relativePath": "en/docs/layout/README.md",
    "key": "v-75120b78",
    "path": "/en/docs/layout/",
    "headers": [
      {
        "level": 2,
        "title": "Default",
        "slug": "default"
      },
      {
        "level": 2,
        "title": "Offset",
        "slug": "offset"
      },
      {
        "level": 2,
        "title": "Flex Justify",
        "slug": "flex-justify"
      },
      {
        "level": 2,
        "title": "Flex Align",
        "slug": "flex-align"
      },
      {
        "level": 2,
        "title": "Flex Order",
        "slug": "flex-order"
      },
      {
        "level": 2,
        "title": "Responsive",
        "slug": "responsive"
      }
    ],
    "lastUpdated": "18/6/2020 18:56:36"
  },
  {
    "title": "Colors",
    "frontmatter": {},
    "regularPath": "/en/docs/theme/",
    "relativePath": "en/docs/theme/README.md",
    "key": "v-b0dd4534",
    "path": "/en/docs/theme/",
    "headers": [
      {
        "level": 2,
        "title": "Colores Predeterminados",
        "slug": "colores-predeterminados"
      },
      {
        "level": 2,
        "title": "Customize Theme Colors",
        "slug": "customize-theme-colors"
      },
      {
        "level": 2,
        "title": "javascript",
        "slug": "javascript"
      },
      {
        "level": 2,
        "title": "css",
        "slug": "css"
      },
      {
        "level": 2,
        "title": "VS Function",
        "slug": "vs-function"
      }
    ],
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Font",
    "frontmatter": {},
    "regularPath": "/en/docs/theme/font.html",
    "relativePath": "en/docs/theme/font.md",
    "key": "v-0973e6c3",
    "path": "/en/docs/theme/font.html",
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Icons",
    "frontmatter": {},
    "regularPath": "/en/docs/theme/icons.html",
    "relativePath": "en/docs/theme/icons.md",
    "key": "v-4bfa7e72",
    "path": "/en/docs/theme/icons.html",
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Generate",
    "frontmatter": {},
    "regularPath": "/en/docs/theme/generate.html",
    "relativePath": "en/docs/theme/generate.md",
    "key": "v-43c19577",
    "path": "/en/docs/theme/generate.html",
    "headers": [
      {
        "level": 2,
        "title": "change default Colors",
        "slug": "change-default-colors"
      }
    ],
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Vuesax Ecosystem",
    "frontmatter": {},
    "regularPath": "/en/ecosystem/",
    "relativePath": "en/ecosystem/README.md",
    "key": "v-7bc93804",
    "path": "/en/ecosystem/",
    "headers": [
      {
        "level": 2,
        "title": "Discord",
        "slug": "discord"
      },
      {
        "level": 2,
        "title": "Github",
        "slug": "github"
      },
      {
        "level": 2,
        "title": "twitter",
        "slug": "twitter"
      },
      {
        "level": 2,
        "title": "Patreon",
        "slug": "patreon"
      }
    ],
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Getting Started",
    "frontmatter": {},
    "regularPath": "/en/examples/",
    "relativePath": "en/examples/README.md",
    "key": "v-af64cf04",
    "path": "/en/examples/",
    "headers": [
      {
        "level": 2,
        "title": "Quick-start CDN",
        "slug": "quick-start-cdn"
      },
      {
        "level": 2,
        "title": "Install in project via NPM or YARN",
        "slug": "install-in-project-via-npm-or-yarn"
      },
      {
        "level": 2,
        "title": "Use",
        "slug": "use"
      },
      {
        "level": 2,
        "title": "Or use individual components:",
        "slug": "or-use-individual-components"
      }
    ],
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "frontmatter": {
      "license": true,
      "header": {
        "title": "Licencia de <b>Vuesax</b>",
        "text": "Revisa las licencias para poder usar <b>vuesax</b> en tus proyectos",
        "button": "Ver mas"
      },
      "cards": {
        "title": "<b>Vuesax</b> Marco Licencias",
        "items": [
          {
            "title": "Código Abierto",
            "text": "Vuesax v4 en Open Source y tiene la licencia GPLv3 license, puedes usar vuesax en tus proyectos open source que tengan la misma licencia GPLv3",
            "button": "Iniciar"
          },
          {
            "title": "Proyecto Personal o Comercial",
            "text": "Si quieres usar vuesax en proyectos personales o comerciales que no sean (Saas / OEM) puedes hacerlo sin ningún problema, Si dirige un negocio y está utilizando Vuesax en un proyecto o pagina que genera ingresos, tiene sentido comercial Patrocinar el desarrollo de Vuesax",
            "button": "Iniciar"
          },
          {
            "title": "SaaS / OEM",
            "text": "Si desea incluir Vuesax en productos descargables o instalables como temas de Wordpress, plantillas HTML, como parte de un creador de interfaz comercial, SDK o kit de herramientas, elija la licencia OEM comercial. Las licencias OEM comerciales se personalizan para cada cliente.",
            "button": "Contáctenos",
            "contact": true
          }
        ]
      },
      "table": {
        "title": "Comparación de Licencias",
        "thead": [
          "Tipo de licencia",
          "Open Source",
          "Proyecto Comercial",
          "SaaS / OEM"
        ],
        "tbody": [
          [
            "Todos los Componentes",
            true,
            true,
            true
          ],
          [
            "Todas las funciones",
            true,
            true,
            true
          ],
          [
            "Soporte Discord",
            true,
            true,
            true
          ],
          [
            "Uso de la documentación",
            true,
            false,
            false
          ],
          [
            "Usar el nombre Vuesax",
            false,
            false,
            false
          ],
          [
            "Número de servidores y sitios.",
            "ilimitado",
            "ilimitado",
            "Contáctenos"
          ],
          [
            "Soporte premium.",
            false,
            false,
            "Contáctenos"
          ],
          [
            "Software descargable.",
            true,
            false,
            "Contáctenos"
          ],
          [
            "Derechos de distribución (SaaS / OEM).",
            false,
            false,
            "Contáctenos"
          ]
        ]
      },
      "faqs": [
        {
          "title": "Porque Cambio la licencia a GPLv3 license",
          "text": "Vuesax en un proyecto open source y tenia la licencia inicialmente MIT por motivos a un inconveniente con una empresa que uso nuestro nombre y componentes para ganar dinero a nuestra costa decidimos cambiar la licencia y los términos al usar vuesax para ese tipo de proyectos"
        },
        {
          "title": "Tengo un proyecto con vuesax v3",
          "text": "No hay problema vuesax v3 tiene la licencia MIT y puede usarme en cualquier proyecto, si quieres usar vuesax v4 o superior si apical las nuevas licencias"
        },
        {
          "title": "Tengo que pagar para usar vuesax",
          "text": "No, Vuesax puede usarse para todo tipo de proyecto 100% gratis, excepto para los proyectos (SaaS, OEM) que tendría que contactarnos para poder usar vuesax"
        },
        {
          "title": "Necesito soporte premium",
          "text": "No damos soporte premium a menos que patrocines a vuesax o contactes con nosotros para un acuerdo de soporte"
        },
        {
          "title": "Actualizaciones",
          "text": "Puedes tener acceso a todas las actualizaciones de Vuesax, con excepción de los proyectos (SaaS, OEM) que tendría que contactarnos para poder usar vuesax y sus actualizaciones futuras"
        },
        {
          "title": "Puedo usar los documentos de Vuesax",
          "text": "Si tu proyecto en open source puedes usar los documentos sin problema, contacta con nosotros para usar los documentos en proyectos comerciales o (SaaS, OEM)"
        },
        {
          "title": "Mi proyecto no en (SaaS, OEM)",
          "text": "Puedes usar vuesax en su totalidad sin problema y con toda confianza"
        },
        {
          "title": "Como puedo contactarme con vuesax",
          "text": "Puedes contactarnos por correo a <b>luisdanielrovira8@gmail.com</b> o por nuestra pagina web <a target=\"_blank\" href=\"https://lusaxweb.net/\">Lusaxweb</a>"
        },
        {
          "title": "Puedo usar el nombre Vuesax",
          "text": "No, el nombre vuesax esta reservado para nosotros y nuestros proyectos futuros"
        },
        {
          "title": "Como patrocino a Vuesax",
          "text": "Puedes patrocinar vuesax por medio de ya sea <a target=\"_blank\" href=\"https://www.patreon.com/luisdanielroviracontreras\">Patreon</a>, <a href=\"https://opencollective.com/vuesax\">Opencollective</a> o visita nuestra pagina de patrocinio para ver otras opciones como <b>Paypal</b> o <b>Btc</b> para patrocinio no recurrente"
        },
        {
          "title": "Quiero hacer un proyecto con los creadores de Vuesax",
          "text": "Vuesax esta creado por los hermanos <a target=\"_blank\" href=\"https://github.com/luisDanielRoviraContreras\">luis daniel rovira contreras</a> y <a target=\"_blank\" href=\"https://dribbble.com/ManuelRovira\">Manuel Rovira Contreras</a> co-fundadores de <a target=\"_blank\" href=\"https://lusaxweb.net/\">Lusaxweb</a> contacta con nosotros si necesitas hacer un proyecto personalizado"
        },
        {
          "title": "Puedo usar el código fuente de Vuesax",
          "text": "Si tu proyecto en open source y va a tener la misma licencia de vuesax puedes hacerlo pero si en un proyecto comercial o (SaaS / OEM) no puedes usar el código fuente de Vuesax"
        }
      ]
    },
    "regularPath": "/en/license/",
    "relativePath": "en/license/README.md",
    "key": "v-f84f9538",
    "path": "/en/license/",
    "lastUpdated": "10/2/2020 9:21:50"
  },
  {
    "title": "Vuesax with Nuxt",
    "frontmatter": {},
    "regularPath": "/en/examples/nuxt.html",
    "relativePath": "en/examples/nuxt.md",
    "key": "v-19f25d03",
    "path": "/en/examples/nuxt.html",
    "headers": [
      {
        "level": 2,
        "title": "Init Project",
        "slug": "init-project"
      },
      {
        "level": 2,
        "title": "Install Vuesax",
        "slug": "install-vuesax"
      }
    ],
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "Vuesax Pass",
    "frontmatter": {
      "passLayout": true
    },
    "regularPath": "/en/pass/",
    "relativePath": "en/pass/README.md",
    "key": "v-51030324",
    "path": "/en/pass/",
    "headers": [
      {
        "level": 2,
        "title": "prueba",
        "slug": "prueba"
      }
    ],
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "title": "API",
    "frontmatter": {},
    "regularPath": "/en/more/",
    "relativePath": "en/more/readme.md",
    "key": "v-84435434",
    "path": "/en/more/",
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "frontmatter": {
      "navbar": true
    },
    "regularPath": "/examples/navbar.html",
    "relativePath": "examples/navbar.md",
    "key": "v-0fff1067",
    "path": "/examples/navbar.html",
    "lastUpdated": "6/18/2020, 6:56:36 PM"
  },
  {
    "frontmatter": {
      "layout": "sidebar"
    },
    "regularPath": "/examples/sidebar.html",
    "relativePath": "examples/sidebar.md",
    "key": "v-6d9695b2",
    "path": "/examples/sidebar.html",
    "lastUpdated": "9/20/2020, 8:36:51 PM"
  },
  {
    "title": "Getting Started",
    "frontmatter": {},
    "regularPath": "/examples/",
    "relativePath": "examples/README.md",
    "key": "v-09f7d444",
    "path": "/examples/",
    "headers": [
      {
        "level": 2,
        "title": "Quick-start CDN",
        "slug": "quick-start-cdn"
      },
      {
        "level": 2,
        "title": "Install in project via NPM or YARN",
        "slug": "install-in-project-via-npm-or-yarn"
      },
      {
        "level": 2,
        "title": "Use",
        "slug": "use"
      },
      {
        "level": 2,
        "title": "Or use individual components:",
        "slug": "or-use-individual-components"
      }
    ],
    "lastUpdated": "11/7/2019, 10:56:15 AM"
  },
  {
    "title": "Introduction",
    "frontmatter": {},
    "regularPath": "/en/docs/guide/",
    "relativePath": "en/docs/guide/README.md",
    "key": "v-61cfa8c0",
    "path": "/en/docs/guide/",
    "headers": [
      {
        "level": 2,
        "title": "Whats is Vuesax?",
        "slug": "whats-is-vuesax"
      },
      {
        "level": 2,
        "title": "Why Vuesax?",
        "slug": "why-vuesax"
      },
      {
        "level": 2,
        "title": "How It Works",
        "slug": "how-it-works"
      },
      {
        "level": 2,
        "title": "Features",
        "slug": "features"
      }
    ],
    "lastUpdated": "13/1/2020 19:32:50"
  },
  // {
  //   "title": "Vuesax with Nuxt",
  //   "frontmatter": {},
  //   "regularPath": "/examples/nuxt.html",
  //   "relativePath": "examples/nuxt.md",
  //   "key": "v-162dfbf2",
  //   "path": "/examples/nuxt.html",
  //   "headers": [
  //     {
  //       "level": 2,
  //       "title": "Init Project",
  //       "slug": "init-project"
  //     },
  //     {
  //       "level": 2,
  //       "title": "Install Vuesax",
  //       "slug": "install-vuesax"
  //     }
  //   ],
  //   "lastUpdated": "11/7/2019, 10:56:15 AM"
  // },
  {
    "title": "API",
    "frontmatter": {},
    "regularPath": "/more/",
    "relativePath": "more/readme.md",
    "key": "v-eacf4278",
    "path": "/more/",
    "lastUpdated": "11/7/2019, 10:56:15 AM"
  },
  {
    "title": "Configuration",
    "frontmatter": {},
    "regularPath": "/en/docs/guide/configuration.html",
    "relativePath": "en/docs/guide/configuration.md",
    "key": "v-19132ba7",
    "path": "/en/docs/guide/configuration.html",
    "headers": [
      {
        "level": 2,
        "title": "Instance Config",
        "slug": "instance-config"
      }
    ],
    "lastUpdated": "13/1/2020 19:32:50"
  },
  {
    "frontmatter": {
      "license": true,
      "header": {
        "title": "License of <b>Vuesax</b>",
        "text": "Check the licenses to be able to use <b>vuesax</b> in your projects",
        "button": "See more"
      },
      "cards": {
        "title": "<b>Vuesax</b> Framework License",
        "items": [
          {
            "title": "Open Source",
            "text": "Vuesax v4 is Open Source and has the GPLv3 license, you can use vuesax in your open source projects that have the same GPLv3 license",
            "button": "Start"
          },
          {
            "title": "Personal or Commercial Project",
            "text": "If you want to use vuesax in personal or commercial projects other than (Saas / OEM) you can do it without any problem. If you run a business and you are using Vuesax in a project or page that generates income, it makes commercial sense to sponsor the development of Vuesax",
            "button": "Start"
          },
          {
            "title": "SaaS / OEM",
            "text": "If you want to include Vuesax in downloadable or installable products such as Wordpress themes, HTML templates, as part of a commercial interface creator, SDK or toolkit, choose the commercial OEM license. Commercial OEM licenses are customized for each customer.",
            "button": "Contact Us",
            "contact": true
          }
        ]
      },
      "table": {
        "title": "License Comparison",
        "thead": [
          "Type of license",
          "Open source",
          "Commercial Project",
          "SaaS / OEM"
        ],
        "tbody": [
          [
            "All Components",
            true,
            true,
            true
          ],
          [
            "All functions",
            true,
            true,
            true
          ],
          [
            "Discord support",
            true,
            true,
            true
          ],
          [
            "Use of documentation",
            true,
            false,
            false
          ],
          [
            "Use the name Vuesax",
            false,
            false,
            false
          ],
          [
            "Number of servers and sites.",
            "unlimited",
            "unlimited",
            "Contact Us"
          ],
          [
            "Premium support.",
            false,
            false,
            "Contact Us"
          ],
          [
            "Downloadable software.",
            true,
            false,
            "Contact Us"
          ],
          [
            "Distribution rights (SaaS / OEM).",
            false,
            false,
            "Contact Us"
          ]
        ]
      },
      "faqs": [
        {
          "title": "Why I change the license to GPLv3 license",
          "text": "Vuesax is an open source project and initially had the MIT license for reasons of inconvenience with a company that used our name and components to earn money at our expense we decided to change the license and terms when using vuesax for such projects"
        },
        {
          "title": "I have a project with vuesax v3",
          "text": "No problem vuesax v3 has the MIT license and can use me in any project, if you want to use vuesax v4 or higher if you apply the new licenses"
        },
        {
          "title": "I have to pay to use vuesax",
          "text": "No, Vuesax can be used for all types of 100% free projects, except for projects (SaaS, OEM) that you would have to contact us in order to use vuesax"
        },
        {
          "title": "I need premium support",
          "text": "We do not give premium support unless you sponsor vuesax or contact us for a support agreement"
        },
        {
          "title": "Updates",
          "text": "You can have access to all Vuesax updates, with the exception of the projects (SaaS, OEM) that you would have to contact us in order to use vuesax and its future updates"
        },
        {
          "title": "I can use Vuesax documents",
          "text": "If your project is open source you can use the documents without problem, contact us to use the documents in commercial projects or (SaaS, OEM)"
        },
        {
          "title": "My project is not (SaaS, OEM)",
          "text": "You can use vuesax in its entirety without problem and with complete confidence"
        },
        {
          "title": "How can I contact Vuesax?",
          "text": "You can contact us by mail at <b>luisdanielrovira8@gmail.com</b> or through our website <a target=\"_blank\" href=\"https://lusaxweb.net/\">Lusaxweb</a>"
        },
        {
          "title": "I can use the name Vuesax",
          "text": "No, the name Vuesax is reserved for us and our future projects."
        },
        {
          "title": "How do I sponsor Vuesax",
          "text": "You can sponsor vuesax through either <a target=\"_blank\" href=\"https://www.patreon.com/luisdanielroviracontreras\"> Patreon </a>, <a href=\"https://opencollective.com/vuesax\"> Opencollective</a> or visit our sponsorship page to see other options such as <b> Paypal </b> or <b> Btc </b> for non-recurring sponsorship"
        },
        {
          "title": "I want to make a project with the creators of Vuesax",
          "text": "Vuesax is created by the brothers <a target=\"_blank\" href=\"https://github.com/luisDanielRoviraContreras\"> luis daniel rovira contreras </a> and <a target=\"_blank\" href= \"https://dribbble.com/ManuelRovira\"> Manuel Rovira Contreras </a> co-founders of <a target=\"_blank\" href=\"https://lusaxweb.net/\"> Lusaxweb </a> contact us if you need to make a custom project"
        },
        {
          "title": "I can use the Vuesax source code",
          "text": "If your project is open source and you will have the same vuesax license you can do it but if it is a commercial project or (SaaS / OEM) you cannot use the Vuesax source code"
        }
      ]
    },
    "regularPath": "/license/",
    "relativePath": "license/README.md",
    "key": "v-02fdc110",
    "path": "/license/",
    "lastUpdated": "2/10/2020, 9:21:50 AM"
  },
  // {
  //   "title": "Vuesax Pass",
  //   "frontmatter": {
  //     "passLayout": true
  //   },
  //   "regularPath": "/pass/",
  //   "relativePath": "pass/README.md",
  //   "key": "v-66a7eb78",
  //   "path": "/pass/",
  //   "headers": [
  //     {
  //       "level": 2,
  //       "title": "prueba",
  //       "slug": "prueba"
  //     }
  //   ],
  //   "lastUpdated": "1/4/2020, 5:02:38 AM"
  // }
]

export default pages;

