import {
  AlertCircleIcon,
  ApertureIcon,
  AppsIcon,
  AppWindowIcon,
  BasketIcon,
  BorderAllIcon,
  BorderHorizontalIcon,
  BorderInnerIcon,
  BorderStyle2Icon,
  BorderTopIcon,
  BorderVerticalIcon,
  BoxAlignBottomIcon,
  BoxAlignLeftIcon,
  BoxIcon,
  BoxModelIcon,
  BrandTidalIcon,
  CalendarIcon,
  ChartArcsIcon,
  ChartAreaIcon,
  ChartCandleIcon,
  ChartDonut3Icon,
  ChartDotsIcon,
  ChartLineIcon,
  ChartRadarIcon,
  ColumnsIcon,
  CopyIcon,
  CurrencyDollarIcon,
  EditIcon,
  EyeTableIcon,
  FidgetSpinnerIcon,
  FileCheckIcon,
  FileDotsIcon,
  FilesIcon,
  FileTextIcon,
  FilterIcon,
  HelpIcon,
  JumpRopeIcon,
  LayoutDashboardIcon,
  LayoutKanbanIcon,
  LoginIcon,
  MailIcon,
  Message2Icon,
  MoodHappyIcon,
  PageBreakIcon,
  PhotoAiIcon,
  PointIcon,
  RotateIcon,
  RowInsertBottomIcon,
  SearchIcon,
  ServerIcon,
  SettingsIcon,
  ShoppingCartIcon,
  SocialIcon,
  SortAscendingIcon,
  TicketIcon,
  TypographyIcon,
  UserCircleIcon,
  UserPlusIcon,
  UserShieldIcon,
  ZoomCodeIcon,
} from "vue-tabler-icons";
export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
  external?: boolean;
}

const sidebarItem: menu[] = [
  { header: "Home" },
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    to: "/",
    external: false,
  },
  {
    title: "Modern",
    icon: ApertureIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/dashboards/modern",
    external: true,
  },
  {
    title: "eCommerce",
    icon: ShoppingCartIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/dashboards/ecommerce",
    external: true,
  },
  {
    title: "Front Pages",
    icon: AppWindowIcon,
    chip: "Pro",

    to: "/",
    children: [
      {
        title: "Homepage",
        chip: "Pro",

        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/front-pages/homepage",
        external: true,
      },
      {
        title: "About Us",
        chip: "Pro",

        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/front-pages/about-us",
        external: true,
      },
      {
        title: "Blog",
        chip: "Pro",

        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/front-pages/blog/posts",
        external: true,
      },
      {
        title: "Blog Details",
        chip: "Pro",

        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/front-pages/blog/early-black-friday-amazon-deals-cheap-tvs-headphones",
        external: true,
      },
      {
        title: "Contact Us",
        chip: "Pro",

        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/front-pages/contact-us",
        external: true,
      },
      {
        title: "Portfolio",
        chip: "Pro",

        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/front-pages/portfolio",
        external: true,
      },
      {
        title: "Pricing",
        chip: "Pro",

        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/front-pages/pricing",
        external: true,
      },
    ],
  },

  { header: "utilities" },
  {
    title: "Typography",
    icon: TypographyIcon,
    to: "/ui/typography",
    external: false,
  },
  {
    title: "Shadow",
    icon: CopyIcon,
    to: "/ui/shadow",
    external: false,
  },

  { header: "Apps" },
  {
    title: "Contact",
    icon: BoxIcon,
    to: "https://modernize-nuxt.adminmart.com/apps/contacts",
    chip: "Pro",

    external: true,
  },

  {
    title: "Blog",
    icon: ChartDonut3Icon,
    chip: "Pro",

    to: "/",
    children: [
      {
        title: "Posts",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/blog/posts",
        external: true,
      },
      {
        title: "Detail",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/blog/early-black-friday-amazon-deals-cheap-tvs-headphones",
        external: true,
      },
    ],
  },
  {
    title: "E-Commerce",
    icon: BasketIcon,
    to: "/ecommerce/",
    chip: "Pro",

    children: [
      {
        title: "Shop",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/ecommerce/products",
        external: true,
      },
      {
        title: "Detail",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/ecommerce/product/detail/1",
        external: true,
      },
      {
        title: "List",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/ecommerce/productlist",
        external: true,
      },
      {
        title: "Checkout",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/ecommerce/checkout",
        external: true,
      },
      {
        title: "Add Product",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/ecommerce/addproduct",
        external: true,
      },
      {
        title: "Edit Product",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/ecommerce/editproduct",
        external: true,
      },
    ],
  },
  {
    title: "User Profile",
    icon: UserCircleIcon,
    chip: "Pro",

    to: "/",
    children: [
      {
        title: "Profile",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/user/profile",
        external: true,
      },
      {
        title: "Followers",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/user/profile/followers",
        external: true,
      },
      {
        title: "Friends",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/user/profile/friends",
        external: true,
      },
      {
        title: "Gallery",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/user/profile/gallery",
        external: true,
      },
    ],
  },
  {
    title: "Invoice",
    icon: FileCheckIcon,
    chip: "Pro",

    to: "/",
    children: [
      {
        title: "List",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/invoice",
        external: true,
      },
      {
        title: "Details",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/invoice/details/102",
        external: true,
      },
      {
        title: "Create",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/invoice/create",
        external: true,
      },
      {
        title: "Edit",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/apps/invoice/edit/102",
        external: true,
      },
    ],
  },
  {
    title: "Chats",
    icon: Message2Icon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/apps/chats",
    external: true,
  },

  {
    title: "Notes",
    icon: FilesIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/apps/notes",
    external: true,
  },
  {
    title: "Calendar",
    icon: CalendarIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/apps/calendar",
    external: true,
  },
  {
    title: "Email",
    icon: MailIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/apps/email",
    external: true,
  },
  {
    title: "Tickets",
    icon: TicketIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/apps/tickets",
    external: true,
  },
  {
    title: "Kanban",
    icon: LayoutKanbanIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/apps/kanban",
    external: true,
  },

  { header: "Pages" },
  {
    title: "Pages",
    icon: ChartDonut3Icon,
    chip: "Pro",
    to: "/",
    children: [
      {
        title: "Pricing",
        chip: "Pro",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/theme-pages/pricing",
        external: true,
      },
      {
        title: "Account Setting",
        chip: "Pro",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/theme-pages/account-settings",
        external: true,
      },
      {
        title: "FAQ",
        chip: "Pro",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/theme-pages/faq",
        external: true,
      },
      {
        title: "Gallery Lightbox",
        chip: "Pro",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/theme-pages/gallery-lightbox",
        external: true,
      },
      {
        title: "Search Results",
        chip: "Pro",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/theme-pages/search-results",
        external: true,
      },
      {
        title: "Social Contacts",
        chip: "Pro",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/theme-pages/social-media-contacts",
        external: true,
      },
      {
        title: "Treeview",
        chip: "Pro",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/theme-pages/treeview",
        external: true,
      },
    ],
  },
  { header: "Widgets" },
  {
    title: "Widgets",
    icon: FidgetSpinnerIcon,
    to: "/widgets",
    children: [
      {
        title: "Cards",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/widgets/cards",
        chip: "Pro",
        external: true,
      },
      {
        title: "Banners",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/widgets/banners",
        chip: "Pro",
        external: true,
      },
      {
        title: "Charts",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/widgets/charts",
        chip: "Pro",
        external: true,
      },
    ],
  },

  { header: "Forms" },
  {
    title: "Form Elements",
    icon: AppsIcon,
    chip: "Pro",

    to: "/components/",
    children: [
      {
        title: "Autocomplete",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/autocomplete",
        external: true,
      },
      {
        title: "Combobox",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/combobox",
        external: true,
      },
      {
        title: "Button",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/button",
        external: true,
      },
      {
        title: "Checkbox",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/checkbox",
        external: true,
      },
      {
        title: "Custom Inputs",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/custominputs",
        external: true,
      },
      {
        title: "File Inputs",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/fileinputs",
        external: true,
      },
      {
        title: "Radio",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/radio",
        external: true,
      },
      {
        title: "Date Time",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/date-time",
        external: true,
      },
      {
        title: "Select",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/select",
        external: true,
      },
      {
        title: "Slider",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/slider",
        external: true,
      },
      {
        title: "Switch",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/switch",
        external: true,
      },
      {
        title: "Time Picker",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/timepicker",
        external: true,
      },
      {
        title: "Stepper",
        icon: PointIcon,
        chip: "Pro",

        to: "https://modernize-nuxt.adminmart.com/forms/form-elements/stepper",
        external: true,
      },
    ],
  },
  {
    title: "Form Layout",
    icon: FileTextIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/forms/form-layouts",
    external: true,
  },
  {
    title: "Form Horizontal",
    icon: BoxAlignBottomIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/forms/form-horizontal",
    external: true,
  },
  {
    title: "Form Vertical",
    icon: BoxAlignLeftIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/forms/form-vertical",
    external: true,
  },
  {
    title: "Form Custom",
    icon: FileDotsIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/forms/form-custom",
    external: true,
  },
  {
    title: "Form Validation",
    icon: FilesIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/forms/form-validation",
    external: true,
  },
  {
    title: "Editor",
    icon: EditIcon,
    chip: "Pro",

    to: "https://modernize-nuxt.adminmart.com/forms/editor",
    external: true,
  },

  { header: "Tables" },
  {
    title: "Basic Table",
    icon: BorderAllIcon,
    to: "https://modernize-nuxt.adminmart.com/tables/basic",
    chip: "Pro",

    external: true,
  },
  {
    title: "Dark Table",
    icon: BorderHorizontalIcon,
    to: "https://modernize-nuxt.adminmart.com/tables/dark",
    chip: "Pro",

    external: true,
  },
  {
    title: "Density Table",
    icon: BorderInnerIcon,
    to: "https://modernize-nuxt.adminmart.com/tables/density",
    chip: "Pro",

    external: true,
  },
  {
    title: "Fixed Header Table",
    icon: BorderTopIcon,
    to: "https://modernize-nuxt.adminmart.com/tables/fixed-header",
    chip: "Pro",

    external: true,
  },
  {
    title: "Height Table",
    icon: BorderVerticalIcon,
    to: "https://modernize-nuxt.adminmart.com/tables/height",
    chip: "Pro",

    external: true,
  },
  {
    title: "Editable Table",
    icon: BorderStyle2Icon,
    to: "https://modernize-nuxt.adminmart.com/tables/editable",
    chip: "Pro",

    external: true,
  },
  { header: "Data Tables" },
  {
    title: "Data Tables",
    icon: AppsIcon,
    chip: "Pro",

    to: "/tables/",
    children: [
      {
        title: "Basic Table",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/datatables/basic",
        chip: "Pro",

        external: true,
      },
      {
        title: "Header Table",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/datatables/header",
        chip: "Pro",

        external: true,
      },
      {
        title: "Selection Table",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/datatables/Selectable",
        chip: "Pro",

        external: true,
      },
      {
        title: "Sorting Table",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/datatables/sorting",
        chip: "Pro",

        external: true,
      },
      {
        title: "Pagination Table",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/datatables/pagination",
        chip: "Pro",

        external: true,
      },
      {
        title: "Filtering Table",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/datatables/filtering",
        chip: "Pro",

        external: true,
      },
      {
        title: "Grouping Table",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/datatables/grouping",
        chip: "Pro",

        external: true,
      },
      {
        title: "Table Slots",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/datatables/slots",
        chip: "Pro",

        external: true,
      },
      {
        title: "CRUD Table",
        icon: PointIcon,
        to: "https://modernize-nuxt.adminmart.com/datatables/crudtable",
        chip: "Pro",

        external: true,
      },
    ],
  },

  { header: "UI" },
  {
    title: "UI Components",
    icon: BoxIcon,
    chip: "Pro",

    to: "#",
    children: [
      {
        title: "Alert",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/ui-components/alert",
      },
      {
        title: "Accordion",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/ui-components/accordion",
      },
      {
        title: "Avatar",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/ui-components/avatar",
      },
      {
        title: "Chip",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/ui-components/chip",
      },
      {
        title: "Dialog",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/ui-components/dialogs",
      },
      {
        title: "List",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/ui-components/list",
      },
      {
        title: "Menus",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/ui-components/menus",
      },
      {
        title: "Rating",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/ui-components/rating",
      },
      {
        title: "Tabs",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/ui-components/tabs",
      },
      {
        title: "Tooltip",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/ui-components/tooltip",
      },
      {
        title: "Typography",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/ui-components/typography",
      },
    ],
  },

  { header: "Charts" },
  {
    title: "Line",
    icon: ChartLineIcon,
    to: "https://modernize-nuxt.adminmart.com/charts/line-chart",
    chip: "Pro",

    external: true,
  },
  {
    title: "Gredient",
    icon: ChartArcsIcon,
    to: "https://modernize-nuxt.adminmart.com/charts/gredient-chart",
    chip: "Pro",

    external: true,
  },
  {
    title: "Area",
    icon: ChartAreaIcon,
    to: "https://modernize-nuxt.adminmart.com/charts/area-chart",
    chip: "Pro",

    external: true,
  },
  {
    title: "Candlestick",
    icon: ChartCandleIcon,
    to: "https://modernize-nuxt.adminmart.com/charts/candlestick-chart",
    chip: "Pro",

    external: true,
  },
  {
    title: "Column",
    icon: ChartDotsIcon,
    to: "https://modernize-nuxt.adminmart.com/charts/column-chart",
    chip: "Pro",

    external: true,
  },
  {
    title: "Doughnut & Pie",
    icon: ChartDonut3Icon,
    to: "https://modernize-nuxt.adminmart.com/charts/doughnut-pie-chart",
    chip: "Pro",

    external: true,
  },
  {
    title: "Radialbar & Radar",
    icon: ChartRadarIcon,
    to: "https://modernize-nuxt.adminmart.com/charts/radialbar-chart",
    chip: "Pro",

    external: true,
  },

  { header: "auth" },
  {
    title: "Login",
    icon: LoginIcon,
    to: "/auth/login",
    external: false,
  },
  {
    title: "Register",
    icon: UserPlusIcon,
    to: "/auth/register",
    external: false,
  },
  {
    title: "Auth Pages",
    icon: UserShieldIcon,
    chip: "Pro",

    to: "#",
    children: [
      {
        title: "Side Login",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/auth/login",
      },
      {
        title: "Boxed Login",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/auth/login2",
      },
      {
        title: "Side Register",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/auth/register",
      },
      {
        title: "Boxed Register",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/auth/register2",
      },
      {
        title: "Side Forgot Password",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/auth/forgot-password",
      },
      {
        title: "Boxed Forgot Password",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/auth/forgot-password2",
      },
      {
        title: "Side Two Steps",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/auth/two-step",
      },
      {
        title: "Boxed Two Steps",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/auth/two-step2",
      },

      {
        title: "Error",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/auth/404",
      },
      {
        title: "Maintenance",
        icon: PointIcon,
        chip: "Pro",

        external: true,
        to: "https://modernize-nuxt.adminmart.com/auth/maintenance",
      },
    ],
  },
  { header: "Extra" },
  {
    title: "Icons",
    icon: MoodHappyIcon,
    to: "/icons",
    external: false,
  },
  {
    title: "Sample Page",
    icon: ApertureIcon,
    to: "/sample-page",
    external: false,
  },
];
export default sidebarItem;
