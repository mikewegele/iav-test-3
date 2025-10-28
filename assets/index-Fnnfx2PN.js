import{j as e,T as r,m as S,r as Z,_ as s}from"./index-B2RxHsms.js";import{P as l,T as t,S as n,a as h,B as y,b as f,I as m,C as o,c as i,e as A,N as C,m as $,d as ee,R as te}from"./navigationMap-G0bzsCV3.js";const L=()=>{const a=[{key:"Category",title:"Category"},{key:"Value",title:"Value"}],c=[{Category:"Programming Language",Value:"JavaScript"},{Category:"Key dependencies",Value:"React 18, ReactDOM 18, Typescript 5, AWS Amplify 6"},{Category:"UI-Component libraries",Value:"PrimeReact, PrimeIcons"},{Category:"Requirements",Value:"At least npm version 8 and node version 16"}];return e.jsxs(l,{children:[e.jsx(r,{children:"Quick Overview"}),e.jsx(t,{children:"The IAV Frontend Framework enhances the development and maintenance of multiple frontend applications by centralizing key functionalities. It tackles common issues like maintainability and extendability, while minimizing the risk of errors through consistent, reusable components. Built with React, TypeScript, and AWS Amplify, it allows for rapid deployment of updates across projects. Key features include AWS Cognito authentication, internationalization, customizable themes, and the ability to integrate different corporate designs. By leveraging GitHub for version control and collaboration, developers benefit from streamlined workflows, centralized support, and reduced redundancy across projects."}),e.jsxs(t,{children:["This is the official documentation of the IAV frontend framework. The job of the framework is to make your life way ",e.jsx("strong",{children:"easier"}),". It achieves maintainability, extendability, a lower risk of faults, and a greater developer experience by generalization. You want to maximize the speed of your development process? Just have a look."]}),e.jsx(r,{children:"Overview"}),e.jsx(n,{children:"Technical Overview"}),e.jsx(h,{data:c,columns:a}),e.jsx(n,{children:"Key features"}),e.jsx(y,{bulletType:"bullet",items:["Standardized frontend layout (see more in the following general layout section)","Authentication service for AWS Cognito (other authentication services are possible)","Authorization with AWS","Default cookie banner","IAV corporate design","Internationalization (different languages can be configured)",'Navigation bar and "content bar" to navigate inside a navigation entry',"Individual coloring of components possible","Dark mode","Pre-created components for different use cases","Cookie banner for accepting the use of cookies"]}),e.jsx(n,{children:"Ongoing Maintenance and Support"}),e.jsxs(t,{children:["We manage bug reports and support requests through"," ",e.jsx(f,{to:"https://github.com/iavofficial/IAVFrontendFramework/issues",label:"GitHub Issues",target:"_blank"}),". For more details on how to contribute, please read our"," ",e.jsx(f,{to:"https://github.com/iavofficial/IAVFrontendFramework/blob/main/CONTRIBUTING.md",label:"Contributing Guidelines",target:"_blank"}),"."]}),e.jsx(n,{children:"Layout"}),e.jsx(m,{alt:"Login",src:"assets/index/login.png",fromGhPages:!0}),e.jsx(m,{alt:"Menu",src:"assets/index/menu.png",fromGhPages:!0})]})},oe=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),ne=S(()=>({wrapper:{position:"relative",paddingTop:"56.25%",height:0,overflow:"hidden"},frame:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}})),re=a=>{const{src:c}=a,{classes:d}=ne();return e.jsx("div",{className:d.wrapper,children:e.jsx("iframe",{className:d.frame,src:c,allowFullScreen:!0})})},_=()=>{const a=["Go to Project overview.","Click the drop-down Watch.","Select Custom.",'Tick "Release" and hit Apply.'];return e.jsxs(l,{children:[e.jsx(r,{children:"Important Information"}),e.jsx(n,{children:"Disclaimer"}),e.jsx(t,{children:"The Framework simplifies the development for the project using it. It does not substitute the basic knowledge of the large field of frontend development."}),e.jsx(n,{children:"Compatibility"}),e.jsx(t,{children:"Please ensure that you have at least installed Node version 16 and npm version 8."}),e.jsx(n,{children:"Subscribe to New Updates"}),e.jsx(t,{children:"Every time a new version is released, a GitHub release will be created. To receive an email notification for a new release, subscribe to the GitHub repository:"}),e.jsx(y,{items:a,bulletType:"bullet"}),e.jsx(n,{children:"TypeScript"}),e.jsx(t,{children:"The framework supports JavaScript and TypeScript. It is recommended to use TypeScript for type safety, which will greatly enhance your developer experience and development speed, especially for larger projects. One significant advantage of using TypeScript is the automatic checks for the definition of all mandatory properties of components."}),e.jsx(n,{children:"Imports"}),e.jsx(t,{children:"The framework uses ES6 import/export syntax. There are only named exports. The following snippet shows an example of an import using the framework:"}),e.jsx(o,{language:"javascript",children:'import { UILayer } from "@iavofficial/frontend-framework/uiLayer";'}),e.jsx(n,{children:"Modular structure"}),e.jsx(t,{children:"Since version 2.0.0 the Framework is divided into several modules. An example for such a module is the AWSAuthenticator. Over time different sub systems, for example the routing mechanism, will be turned into modules. The Framework provides default modules while you are able to implement custom ones. Read more about this in a following chapter."}),e.jsx(n,{children:"Cookies"}),e.jsx(t,{children:"The framework adds a banner for accepting the use of cookies out of the box. The banner is needed in web applications in order to be consistent with legal regulations. If the user accepts the use of cookies, the banner won't be rendered again."}),e.jsx(n,{children:"Layout of an application using the IAV frontend framework"}),e.jsx(t,{children:"The following image explains the terminology used in this documentation."}),e.jsx(m,{src:"assets/information/terminology-definition.png",fromGhPages:!0}),e.jsx(t,{children:"The following image show the appearance of the framework when the dark mode is activated."}),e.jsx(m,{src:"assets/information/iav-frontend-framework-darkmode.png",fromGhPages:!0}),e.jsx(n,{children:"Official IAV-Colors"}),e.jsx(t,{children:"The following image shows the standardized color spectrum of IAV."}),e.jsx(m,{src:"assets/information/styleguide.png",fromGhPages:!0}),e.jsx(n,{children:"Styleguide"}),e.jsx(t,{children:"The following figma shows the style guide which is based on the IAV corporate design colors and the extension."}),e.jsx(re,{src:"https://www.figma.com/embed?embed_host=figma&url=https://www.figma.com/design/wHOYRy2ljmUpIwqO5FyRyl/IAV-Frontend-Framework?node-id=0-1&t=ThUTlCUH0Zl2S39C-1"})]})},ae=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),P=()=>e.jsxs(l,{children:[e.jsx(r,{children:"Installation Guide"}),e.jsx(o,{title:"npm install",language:"bash",children:"npm install @iavofficial/frontend-framework"}),e.jsx(n,{children:"Add the framework to a new React application"}),e.jsx(t,{children:'If you want to add the framework by creating a new React app with "create-react-app" or using "vite", it works too. Just paste the following code snippets into the "App.tsx" file.'}),e.jsxs(t,{children:[e.jsx("strong",{children:"NOTE:"}),' If you use "vite" to create a new React app, the webview may look broken. After clearing the "index.css" file, the problem is solved.']}),e.jsx(o,{title:"Code Snippet App.tsx",language:"typescript",children:`import { GlobalDataLayer } from '@iavofficial/frontend-framework/globalDataLayer';
import { UILayer } from '@iavofficial/frontend-framework/uiLayer';
import {
  createModules,
  StoreBuilder,
} from "@iavofficial/frontend-framework/store";

export const modules = createModules();
export const store = new StoreBuilder(modules.storeModules).build();

const App: React.FC = () => {
    return (
        <GlobalDataLayer
            modules={modules}
            store={store}
        >
            <UILayer startingPoint="/" tabAndContentWrappers={[]}/>
        </GlobalDataLayer>
    );
}

export default App;
`})]}),ie=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),M=()=>e.jsxs(l,{children:[e.jsx(r,{children:"Programming interfaces"}),e.jsx(n,{children:"Main React Components"}),e.jsxs(t,{children:["The framework's main interfaces are the components"," ",e.jsx("code",{children:"GlobalDataLayer"})," and ",e.jsx("code",{children:"UILayer"}),"."," ",e.jsx("code",{children:"GlobalDataLayer"})," contains all React contexts of the framework to share special data across the whole component tree. The"," ",e.jsx("code",{children:"UILayer"})," component contains the components which actually render the UI."]}),e.jsxs(t,{children:["The reason for the separation into two layers can be understood by the following example: Imagine developing a React context which needs the information of a Framework's context X. The information of X is stored inside the ",e.jsx("code",{children:"GlobalDataLayer"}),". Where to put your React context's provider? To pass your context to the ",e.jsx("code",{children:"UILayer"})," and then rendering the Provider seems inappropriate. Instead, you put the Provider between the ",e.jsx("code",{children:"GlobalDataLayer"})," and"," ",e.jsx("code",{children:"UILayer"})," yourself. By doing this, your React context has access to all the framework's contexts, and the ",e.jsx("code",{children:"UILayer"})," ","additionally has access to your context."]}),e.jsx(n,{children:"An example for this situation"}),e.jsx(o,{language:"typescript",children:`return (
    <GlobalDataLayer ...properties...>
    // Your react contexts go here.
        <UILayer ...properties... />
    </GlobalDataLayer>
);
`}),e.jsx(r,{children:"Module System"}),e.jsxs(t,{children:["With version 2.0.0 we began modularizing the Framework. This means that several sub systems are getting outsourced into separate packages. These modules are simple objects ","(generally implemented with classes)"," and managed by a central module orchestration system. An important aspect of this system is the supply of a global state to which modules can add their own values. The global state is implemented using a Redux Store. Because we use Redux, a basic understanding of this library is necessary."]}),e.jsxs(t,{children:["To facilitate the use of the module system the Framework provides two main programming interfaces. The first one is the method"," ",e.jsx("i",{children:"createModules"}),". This method allows you to pass an object containing multiple modules to configure which modules should be used. The method takes your modules and adds the default modules if necessary. It returns a map which contains all relevant objects, meaning a union of your custom modules and default modules. If you just want to use the default implementation, just call ",e.jsx("i",{children:"createModules"})," without any parameters."]}),e.jsxs(t,{children:["The described object contains all your modules. These are modules which override default modules, but also custom user modules which have no default module counterpart. However, over time more sub systems will be created, resulting in more keys for default modules. Because of this a convention is necessary to prevent key collisions. It is required that keys for every custom user module have to begin with the prefix"," ",e.jsx("strong",{children:'"user"'}),"."]}),e.jsxs(t,{children:["The following code snippet shows an example for the use of"," ",e.jsx("i",{children:"createModule"}),"."]}),e.jsx(o,{language:"typescript",title:"Example for creating the modules map",children:`const customModules = {
  [MandatoryModuleNames.Authenticator]: new AWSAuthenticator({
    configureAmplify: configureAmplify,
    failOnNoLegalGroup: true,
    legalGroups: ["ADMIN", "SHOWCASE"],
  }),
  userModule: new UserModule({
    // ...
  })
};

const modules = createModules(customModules);`}),e.jsxs(t,{children:["After creating the module map you have to create the Redux Store. For this purpose the Framework provides the ",e.jsx("i",{children:"StoreBuilder"})," class. The"," ",e.jsx("i",{children:"StoreBuilder"})," class expects you to pass ",e.jsx("strong",{children:"all"})," ","necessary store modules and ",e.jsx("strong",{children:"all"})," user store modules inside the constructor. The required map is created by"," ",e.jsx("i",{children:"createModules"})," for you. The following example shows you the recommended way to pass the modules."]}),e.jsx(o,{language:"typescript",title:"Example for the use of StoreBuilder",children:"const store = new StoreBuilder(modules.storeModules).build();"}),e.jsxs(t,{children:["The StoreBuilder returns the Redux store which contains all state values of the modules. After creating the Redux store you will have to pass the store and ",e.jsx("strong",{children:"all"})," modules to the GlobalDataLayer component."]}),e.jsx(o,{language:"tsx",title:"Example for passing store and modules",children:`<GlobalDataLayer
      store={store}
      modules={modules.all}
      // ...
    >
      // ...
</GlobalDataLayer>`}),e.jsx(n,{children:"Best practice"}),e.jsxs(t,{children:["In most cases you will know which modules you want to use at compile time. Because of this you should not overcomplicate things. If you know which modules you want to use at compile time you sould create your module array and the store outside of any react component. It is recommended to create a ",e.jsx("i",{children:"store.ts"})," file which contains and exports all the described functionality.The following example shows such a store.ts with the given examples."]}),e.jsx(o,{language:"tsx",title:"Example for store.ts",children:`const customModules = {
  [MandatoryModuleNames.Authenticator]: new AWSAuthenticator({
    configureAmplify: configureAmplify,
    failOnNoLegalGroup: true,
    legalGroups: ["ADMIN", "SHOWCASE"],
  }),
  userModule: new UserModule({
    // ...
  })
};

export const modules = createModules(customModules);

export const store = new StoreBuilder(modules.storeModules).build();`}),e.jsx(n,{children:"useModuleContext and useModule"}),e.jsxs(t,{children:["If you want to access the modules, for example to get the translation function of the internationalization module, you have two options. Since you have all your modules statically in your store.ts file, you can just export these and import them where needed. This is the recommended way if your use case allows for static definition like described above. The second option is to use the ",e.jsx("i",{children:"ModuleContext"})," which is created by the Framework and used for sharing the modules across the whole application. However, since the ",e.jsx("i",{children:"ModuleContext"})," is created by the Framework itself the correct type of your modules is not known at creation time of the Context. To allow for correct typing the Framework provides some generic Hooks. The ",e.jsx("i",{children:"createModules"})," function creates correctly typed versions of these Hooks and returns them inside the returned object. If you want to use the ",e.jsx("i",{children:"ModuleContext"})," you should export them from your store.ts file. The following code snippet shows an example."]}),e.jsx(o,{language:"typescript",title:"Example for creating a typed useModuleContext Hook",children:`export const useModuleContextTyped = modules.useModuleContextTyped;
export const useModuleTyped = modules.useModuleTyped;`}),e.jsx(t,{children:"You can also create correctly typed versions of these Hooks yourself. The following code snippet shows you how to do this."}),e.jsx(o,{language:"typescript",children:`export const useModuleContextTyped = useModuleContext<typeof modules.all>;
export const useModuleTyped = createTypedUseModule<typeof modules.all>()`}),e.jsx(n,{children:"Important: Configuration of Modules"}),e.jsx(t,{children:"If you need to configure modules, you will have to create them as a custom module and pass it to the createModules function. This is especially the case for the default internationalizer module as you will want to provide translations. The following code snippet shows this for some provided modules which should be / have to be configured."}),e.jsx(o,{language:"typescript",children:`const customModules = {
  [MandatoryModuleNames.Authenticator]: new AwsAuthenticator({
    configureAmplify: configureAmplify,
    failOnNoLegalGroup: true,
    legalGroups: ["ADMIN", "SHOWCASE"],
  }),
  [MandatoryModuleNames.Internationalizer]: new I18NextInternationalizer({
    translationResources: translations,
  })
};

export const modules = createModules(customModules);`}),e.jsxs(t,{children:["We highly recommend to read the modules in depth chapter. Furthermore you can consult the ",e.jsx("strong",{children:"Modules"})," section of the documentation to get more information about the modules."]})]}),se=Object.freeze(Object.defineProperty({__proto__:null,default:M},Symbol.toStringTag,{value:"Module"})),O=()=>e.jsxs(l,{children:[e.jsx(r,{children:"GlobalDataLayer: Internationalization and Authentication system"}),e.jsx(n,{children:"Internationalization"}),e.jsx(t,{children:"The framework uses react-i18next for internationalization and provides a default initialization which automatically gets executed when the GlobalDataLayer component mounts. It also provides translations in english and german for texts of framework components. You are able to extend the translations for framework components with other languages by providing translations with the translation keys used by the framework's components."}),e.jsx(t,{children:"The GlobalDataLayer component provides the following interface for internationalization:"}),e.jsx(o,{title:"PageInterface PageGlobalDataLayer",language:"typescript",children:`interface Props {
  modules: FFAllMandatoryModules<TState> & Record<string, FFModule>;
  store: EnhancedStore<TState>;
  languageOptions?: GlobalDataLayerLanguageOptions;
  translations?: Translations;
  initI18Next?: () => void;
  colorSettings?: ColorProviderProps;
}`}),e.jsx(t,{children:"To define and use custom translations you have to define an object of the structure seen in the following code snippet. After defining the object you have to pass it to GlobalDataLayer."}),e.jsx(o,{title:"Internationalization Example",language:"typescript",children:`const translations = {
     en: {
         translation: importedJsonFileEnglish
    },
     de: {
         translation: importedJsonFileGerman
     }
}

...
return (
    ...
    <GlobalDataLayer
        modules={...}
        store={...}
        translations={translations}
    />
    ...
);`}),e.jsx(t,{children:"The .json files have to include simple key value pairs like this:"}),e.jsx(o,{title:"Language Object Example",language:"json",children:`{
    "optioName": "German",
    "greeting": "hello",
    "promoteProgramming": "Programming is fun!"
}`}),e.jsx(t,{children:"When defining a new language you should define the following translations as the following keys are used by the framework's components:"}),e.jsx(o,{title:"Mandatory keys",language:"json",children:`{
    "auth": {
        "invalidAccessConfiguration": "Invalid access configuration",
        "invalidUsernameOrPassword": "Invalid username or password",
        "passwordRequirementsNotMet": "Password did not meet the requirements",
        "serverError": "Server error"
    },
    "form": {
        "emailAddress": "Email address",
        "password": "Password",
        "newPassword": "New password",
        "replaceTemporaryPassword": "Please replace your temporary password with a new one. Your new password has to meet the following requirements:"
    },
    "passwordRequirements": {
        "atLeast8Characters": "At least 8 characters",
        "upperLowerCaseLetters": "Upper & lower cases letters",
        "atLeastOneSpecialCharacter": "At least one special character",
        "atLeastOneDigit": "At least one digit"
    },
    "cookieConsent": {
        "header": "This website uses cookies.",
        "disclaimer": "This website needs you to allow cookies for proper functionality.",
        "allowCookiesButton": "Allow cookies"
    },
    "company": {
        "date": "Date",
        "imprint": "Imprint",
        "germany": "Germany",
        "internet": "Internet",
        "headquarter": "Headquarter",
        "registerCourt": "Register court",
        "registrationNumber": "Registration number",
        "ustIdentNumber": "USt-Ident-Number",
        "managingDirectors": "Managing directors",
        "chairman": "Chairman",
        "chairmanSupervisoryBoard": "Chairman of the supervisory board"
    },
    "settings": {
        "language": "Language"
    }
}`}),e.jsx(t,{children:"To specify dialects like the german dialect in Switzerland use the following name schema for the translations object (underscore is important):"}),e.jsx(o,{language:"json",children:`Key for german: "de"
Key for the german dialect in Switzerland: "de_CH"`}),e.jsx(t,{children:"To get a translation by it's key you should use the useTranslator hook from .../iav-core/translators. This hook returns a function which generates the translation by passing the corresponding key. The hook returns a function in order to allow the user to translate text inside the whole component. If the hook itself generated the translation it would make things more complicated as hook calls have to be executed in the same order in every render. Translations in conditional renderings would be impossible. An example:"}),e.jsx(o,{title:"Example use case in a functional component",language:"typescript",children:`const t = useTranslator();
...
return (
   <div>Example translation: {t("company.imprint")}</div>
)`}),e.jsx(t,{children:"You can also use a HOC (higher order component) for translations in class components. The HOC will inject a translation function as a property. The following code snippet shows an example."}),e.jsx(o,{title:"Example use case in a class component",language:"typescript",children:`class FirstExampleComponentUnprocessed extends Component<AppliedTranslationProps, State> {
    // ...
    render() {
        return(
            <div>Translation: {t("company.imprint")}</div>
        );
    }
}

export const LayoutAndContextExampleComponent = applyTranslation(FirstExampleComponentUnprocessed);`}),e.jsx(t,{children:"You may have seen that the component has the interface AppliedTranslationProps as it's properties type. This interface id provided by the framework. It's mandatory to use this interface in order to ensure that your components takes the translation function t. However, the property's type could also be a type which extends AppliedTranslationProps. This is necessary if there are other properties which should be passed to your component."}),e.jsx(t,{children:"If you want to initialize i18next your own way (for example to specify an interpolation function) you can define an initialization function and pass it to the GlobalDataLayer component by using the initI18Next property. If the user hasn't accepted cookies, i18next will be initialized by the framework although this property is specified. The initI18Next function will be executed when the user accepts cookies. The following code snippet shows an example of a custom i18next initialization function:"}),e.jsx(o,{title:"Example configuration of the initFunction",language:"typescript",children:`const initFunction = () => {
    i18n
        .use(initReactI18next)
        .use(LanguageDetector)
        .init({
            debug: false,
            fallbackLng: "en",
            resources: resources,
            detection: {
                caches: ["cookie"],
                cookieMinutes: 525600
            }
        });
}`}),e.jsxs(t,{children:["You can find more information about I18next"," ",e.jsx(f,{to:"https://react.i18next.com/",label:"here",target:"_blank"}),"."]}),e.jsx(i,{children:"GlobalDataLayerLanguageOptions"}),e.jsx(o,{language:"typescript",children:`interface GlobalDataLayerLanguageOptions {
    fallbackLang?: string; // The key of the language which will be used for translations where no translation is defined. The default is en for english.
    initialLang?: string; // The key of the language which will be initially used if no language cookie is set yet. For example this option can be used to define the used language when the language selection is hidden.
}`}),e.jsx(n,{children:"Authentication System"}),e.jsx(t,{children:"The authentication system is separated into two parts: The so called Authenticators and Authentication Views. The Authentiatcors represent the authentication logic while the Authentication View gets rendered for authentication. Authenticators are part of the module system and thus can be replaced. For detailed information consult the modules section of this documentation."}),e.jsx(i,{children:"AuthenticationViews"}),e.jsxs(t,{children:["For basic authentication the Framework provides an Authentication View called ",e.jsx("i",{children:"BasicAuthenticationView"})," which gets used by default. In order to change the authentication view you have to pass it to the",e.jsx("em",{children:"UILayer"})," component using the ",e.jsx("em",{children:"authenticationView"})," ","property. You are also able to develop custom authentication views and pass it to UILayer using this property."]}),e.jsx(t,{children:"The following code snippet shows an example for the implementation of an authentication view. It uses the Thunks of the configured Authenticator module."}),e.jsx(o,{language:"typescript",children:`type BasicAuthenticatorAuthDispatch = ThunkDispatch<
  AuthState,
  unknown,
  Action<string>
>;
type BasicAuthenticatorStoreState = {
  [MandatoryModuleNames.Authenticator]: AuthState;
};

export const BasicAuthenticationView = (props: AuthenticationViewProps) => {
  const {modules} = useModuleContext();
  const authModule = modules[MandatoryModuleNames.Authenticator];

  const colorSettingsContext = useContext(ColorSettingsContext);

  const dispatch = useDispatch<BasicAuthenticatorAuthDispatch>();
  const useAuthSelector: TypedUseSelectorHook<BasicAuthenticatorStoreState> =
    useSelector;

  const isLoading = useAuthSelector(
    (state) => state[MandatoryModuleNames.Authenticator].isLoading,
  );

  const [triedToSubmit, setTriedToSubmit] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const langContext = useContext(LanguageContext);

  const t = useTranslator();

  const headerBackgroundColor =
    colorSettingsContext.currentColors.authenticationView.headerBackgroundColor;
  const fullScreenBackgroundColor =
    colorSettingsContext.currentColors.authenticationView
      .fullScreenBackgroundColor;
  const loginFormBackgroundColor =
    colorSettingsContext.currentColors.authenticationView
      .loginFormBackgroundColor;
  const inputFieldBackgroundColor =
    colorSettingsContext.currentColors.authenticationView
      .inputFieldBackgroundColor;
  const inputFieldTextColor =
    colorSettingsContext.currentColors.authenticationView.inputFieldTextColor;
  const legalNoticeIconColor =
    colorSettingsContext.currentColors.authenticationView.legalNoticeIconColor;
  const companyTextColor =
    colorSettingsContext.currentColors.authenticationView.companyTextColor;
  const themeTogglerColor =
    colorSettingsContext.currentColors.authenticationView.themeTogglerColor;
  const legalLinkColor =
    colorSettingsContext.currentColors.authenticationView.legalLinkColor;

  const {passwordErrorMessage} = props.authOptions?.errorMessages || {};

    const isAtLeastOneDocumentVisible = props.legalDocuments?.some(
    (document) => !document.isHidden,
  );
  // These two functions life on the class instance not on the prototype thanks to @babel/plugin-proposal-class-properties.
  const submit = (event: FormEvent<HTMLFormElement>) => {
    setTriedToSubmit(true);
    event.preventDefault();
    dispatch(
      authModule.login({credentials: {email: email, password: password}}),
    );
  };

  const companyLogoDefault = (props: AuthenticationViewProps) => (
    <div
      style={{
        display: props.headerOptions?.hideRight ? "none" : "flex",
        alignItems: "center",
        paddingRight: '{PADDING_GAB}px',
      }}
    >
      <CompanyLogo fill={colorSettingsContext?.darkmode ? BLUE3 : WHITE} />
    </div>
  );

  const header = (props: AuthenticationViewProps) => (
    <div
      className="flex justify-content-between"
      style={{
        backgroundColor: headerBackgroundColor,
        color: "white",
        alignItems: "center",
        height: "56px",
      }}
    >
      <div
        id="left-element-authentication"
        className="flex align-items-center default-app-logo-text-style"
      >
        {props.headerOptions?.reactElementLeft ? (
          props.headerOptions?.reactElementLeft
        ) : (
          <AppLogoPlaceholder
            appLogoPlaceholder={APPLICATION_LOGO_PLACEHOLDER}
          />
        )}
      </div>

      <div
        id="right-element-authentication"
        className="flex justify-content-end align-items-center"
      >
        {props.headerOptions?.reactElementRight
          ? props.headerOptions?.reactElementRight
          : companyLogoDefault(props)}
      </div>
    </div>
  );

  const identifier = generateHashOfLength(4);
  const identifierLegal = "a" + identifier;
  const identifierWithDot = "." + identifierLegal;

  return (
    <div
      className="flex"
      style={{
        height: "100%",
        position: "relative",
        backgroundColor: fullScreenBackgroundColor,
      }}
    >
      {colorSettingsContext?.colorOptions.authenticationView
        ?.fullScreenBackgroundColor ? (
        <></>
      ) : (
        <img
          style={{
            inset: "0px",
            position: "absolute",
            zIndex: "-100",
            height: "100vh",
            width: "100vw",
            objectFit: "cover",
          }}
          src={
            props.authOptions?.backgroundImage
              ? props.authOptions?.backgroundImage
              : colorSettingsContext?.darkmode
                ? loginBackgroundDarkMode
                : loginBackgroundLightMode
          }
        />
      )}

      <div
        className="flex flex-column shadow-6"
        style={{
          position: "relative",
          width: "620px",
          margin: "auto",
          backgroundColor: loginFormBackgroundColor,
        }}
      >
        <div>{header(props)}</div>
        <div
          className="flex flex-column justify-content-center align-items-center"
          style={{marginBottom: "30px"}}
        >
          <div
            style={{width: "100%", padding: "24px 24px 0px 0px"}}
            className="flex align-items-center justify-content-end"
          >
            {props.authOptions?.preventDarkmode === true ? (
              <React.Fragment />
            ) : (
              <>
                <i
                  onClick={() =>
                    colorSettingsContext?.setDarkmode(
                      !colorSettingsContext.darkmode,
                    )
                  }
                  style={{
                    color: themeTogglerColor,
                  }}
                  className={'switch-colormode-logos pi {
                    colorSettingsContext.darkmode ? "pi-moon" : "pi-sun"
                  }'}
                />
              </>
            )}

            {!props.hideLanguageSelection && (
              <Dropdown
                id="change-language-dropdown"
                style={{
                  width: "160px",
                  backgroundColor: inputFieldBackgroundColor,
                  color: inputFieldTextColor,
                }}
                placeholder={
                  langContext?.resources[langContext.activeLang].translation
                    .option_name
                }
                onChange={function (event: DropdownChangeEvent) {
                  langContext?.selectLanguage(event.value.key);
                }}
                options={parseLanguageResourcesIntoDropdownFormat(
                  langContext?.resources,
                )}
                optionLabel="label"
              />
            )}
          </div>

          <form
            style={{
              width: "100%",
              height: "100%",
            }}
            onSubmit={submit}
          >
            <div
              style={{margin: "40px 24px 0px 24px"}}
              className={"flex flex-column"}
            >
              <TextField
                style={{
                  marginBottom: "30px",
                  backgroundColor: inputFieldBackgroundColor,
                  color: inputFieldTextColor,
                }}
                label={t("Email_address")}
                id="email"
                name="email"
                required={true}
                autoFocus={true}
                value={email.valueOf()}
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                label={t("Password")}
                id="password"
                name="password"
                type="password"
                required={true}
                error={triedToSubmit && !isLoading}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                helperText={passwordErrorMessage || t("wrong_password")}
              />
              <div>
                <LoginButtonWithSpinner isLoading={isLoading} />
              </div>
            </div>
          </form>
        </div>

        {!props.hideLegalDocuments && (
          <Link
            style={{
              position: "absolute",
              bottom: "12px",
              left: '{PADDING_GAB}px',
              textDecoration: "none",
            }}
            to="/documents"
            target="_blank"
          >
            <span
              className={"pi pi-info-circle " + identifierLegal}
              style={{
                fontSize: "medium",
                fontWeight: "bold",
                color: legalNoticeIconColor,
              }}
            />
          </Link>
        )}

        <Tooltip
          content={t(
            props.authOptions?.documentsLabelKey
              ? props.authOptions?.documentsLabelKey
              : "Imprint",
          )}
          target={identifierWithDot}
          id="hover-image"
        />
        <span
          style={{
            alignSelf: "center",
            padding: "24px",
            fontSize: "11px",
            color: companyTextColor,
          }}
        >
          &copy;{" "}
          {props.authOptions?.companyText
            ? props.authOptions?.companyText
            : "Company 2025"}
        </span>

        {isAtLeastOneDocumentVisible && (
        <>
          <span style={{color: "var(--grey-2)"}}>|</span>
          <div
            className="flex"
            style={{
              alignItems: "center",
              gap: "5px",
            }}
          >
            {props.legalDocuments
              ?.filter((document) => !document.isHidden)
              .map((document) => (
                <Link
                  key={document.path}
                  className="legal-doc-link"
                  style={{color: legalLinkColor, fontSize: "12px"}}
                  to={document.path}
                  target="_blank"
                >
                  {t({key: document.titleTranslationKey})}
                </Link>
              ))}
          </div>
        </>
        )}
      </div>
    </div>
  );
};
`})]}),le=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),R=()=>e.jsxs(l,{children:[e.jsx(r,{children:"UILayer: Navigation and Content Area Elements"}),e.jsx(n,{children:"Introduction"}),e.jsx(t,{children:"The UILayer provides the UI components and some basic logic for the application. The UILayer has the following properties, some of them are explained later on:"}),e.jsx(o,{title:"PageInterface PageUiLayer",language:"typescript",children:`export interface Props {
    tabAndContentWrappers: TabAndContentWrapper[]; // Mandatory: Array of BasicContentWrappers and groups (or other wrappers) to provide in order to render tabs in the navigation bar and the associated component. This is explained in the following sections.
    initialPath: string; // Mandatory: This is the "entry URL" of your application. The user will be redirected to this URL after successful authentication.
    settingsMenuOptions?: SettingsMenuOptions; // Optional object to configure the settings menu. The object will be explained later in this chapter.
    userMenuOptions?: // Optional object to configure the user menu. The object will be explained later in this chapter.
    authenticationView?: React.ComponentType<AuthenticationViewProps & any>; // Optional property to set a custom authentication view.
    documentsComponent?: React.ComponentType<any>; // Optional property to replace the default imprint with a custom component. This allows you to display a customized list of legal documents.
    headerOptions?: HeaderOptions; // Optional property to customize the header of the main view and the authentication view. The object will be explained later in this chapter.
    authOptions?: AuthOptions;  // Optional property to customize the authentication view. The object will be explained later in this chapter.
    navbarOptions?: NavbarOptions; // Option to configure the navigation bar. This is explained later.
    disableCookieBanner?: boolean; // Option to disable / hide the provided cookie banner / disclaimer.
    disableLogin?: boolean; // Option to disable the login and logout.
    hideNavbar?: boolean; // Option to hide the navigation bar.
    legalDocuments?: LegalDocument[]; // Optional configuration for legal documents displayed in the AuthenticationView and navigation bar.
}`}),e.jsx(n,{children:"TabAndContentWrappers: Navigation tabs and content"}),e.jsx(t,{children:"A core feature of the framework is the navigation bar and the automatic rendering of content when a navigation tab is selected."}),e.jsx(t,{children:"The framework provides two tab components which can be rendered in the navigation bar. However, you are able to implement custom navigation tabs. All navigation tabs have to have the properties of the following interface:"}),e.jsx(o,{language:"typescript",children:`export interface NavbarTabProps<OptionType> {
    name: string | ((t: TranslateFunctionType) => string);
    disabled: boolean;
    frameworkInjectedOptions: OptionType; // These are options which are injected to a navigation tab component by the framework. You will understand how to use it by reading the following content of this section.
    hidden?: boolean; // Option to hide the navigation tab.
    icon?: ReactElement;
    collapsed?: boolean;
    active?: boolean;
}`}),e.jsx(t,{children:"The main navigation tab component provided by the framework is SimpleNavbarTab. This is the simplest and most used navigation tab component. It's properties are just the navbarTabProps interface. The second navigation tab component is the PrivilegedNavbarTab component. This component allows acces if the user belongs to the passed array of groups. The user's group is retrieved using the authentication provider. PrivilegedNavbarTab has the properties of navbarTabprops and extends them by the following interface:"}),e.jsx(o,{language:"typescript",children:`interface Props {
    permittedGroups: string[]; // Mandatory array of groups which should have access to the content associated with this navigation tab.
}`}),e.jsx(i,{children:"Implementing custom navigation tabs"}),e.jsx(t,{children:"To implement custom navigation tabs you should follow the structure of the following code snippet:"}),e.jsx(o,{title:"PrivilegedNavbarTab",language:"typescript",children:`export interface Props {
  permittedGroups: string[];
}

export const PrivilegedNavbarTab: GroupableNavbarTab<Props> = (
  props: NavbarTabProps<InjectedOptionsGroupableByWrapperToTab> & Props,
) => {
  const userData = useDefaultSelector(state => state.auth.userData);

  const userGroups = userData?.userGroups ?? [];

  const permitted = containsOneOrMoreGroups(
    userGroups,
    props.permittedGroups
  );

  return permitted ? (
    <SimpleNavbarTab
      icon={props.icon}
      disabled={props.disabled}
      name={props.name}
      frameworkInjectedOptions={props.frameworkInjectedOptions}
    />
  ) : (
    <></>
  );
};
`}),e.jsx(t,{children:"As you may have noticed PrivilegedNavbarTab is of type GroupableNavbarTab<Props>. The result of this is that PrivilegedNavbarTab has all the properties of the interface NavbarTabProps and additionally all properties of the interface Props. This is because the navbarTab type is defined as follows:"}),e.jsx(o,{title:"navbarTab interface",language:"typescript",children:`export type GroupableNavbarTab<additional = {}> = React.FunctionComponent<
    NavbarTabProps<InjectedOptionsGroupableByWrapperToTab> & additional
 >;`}),e.jsxs(t,{children:["Furthermore, you may have noticed that the SimpleNavbarTab component is reused and ",e.jsx("em",{children:"frameworkInjectedOptions"})," is passed to the component. If you implement your component in this way there is nothing more you have to do regarding ",e.jsx("em",{children:"frameworkInjectedOptions"}),". However, if you want to implement your component without using SimpleNavbarTab you should do research on the use of ",e.jsx("em",{children:"frameworkInjectedOptions"})," in SimpleNavbarTab. Additionally you will have to implement a factory for your navigation tab component. You will understand why in the following section. To implement such a factory you can examine the ones provided by the Framework."]}),e.jsx(i,{children:"Using navigation tab components"}),e.jsx(t,{children:"You've learned how to use existing navigation tabs and how to develop custom ones. But how do you pass navigation tabs to the framework and connect them to a specific component for the content area which should be rendered if the tab is selected?"}),e.jsxs(t,{children:["For this purpose the framework provides the wrapper class",e.jsx("em",{children:"BasicContentWrapper"}),". It wrapps a factory for the element which is rendered in the navigation bar (the navigation tab) and the component which is rendered in the content area. By wrapping these two elements inside an instance of BasicContentWrapper the framework is able to assign each navigation tab to a content area element. In order to specify all your navigation tabs and the corresponding content area elements you have to"," ",e.jsx("strong",{children:"create an array of instances of this BasicContentWrapper"}),". The class has the following parameters:"]}),e.jsx(o,{title:"BasicContentWrapper",language:"typescript",children:`constructor(
    protected _path: string,                                            // URL for which the content area element will be rendered -> dont use "/" as route!
    protected _navbarTab: ComponentTypeMinProps<
        InjectedOptionsObject<InjectedOptionsGroupableByWrapperToTab>
    >,                                                                   // Component of the navigation tab (you will have to generate it as shown later by using a factory).
    protected _component: React.ComponentType                           // The element which will be rendered inside the content area.
)`}),e.jsxs(t,{children:["Furthermore, the framework provides the ",e.jsx("em",{children:"Group"})," wrapper class. This class allows you to specify groups of navigation tabs with a specified label. To create a group you have to pass the corresponding array of BasicContentWrapper instances to the Group instance as a parameter. The Group class has the following parameters:"]}),e.jsx(o,{title:"GroupObject constructor",language:"typescript",children:`constructor(
    private _name: string | ((t: TranslateFunctionType) => string), // Mandatory property that defines the name of the tab.
    private _logo: ReactElement, // Property to set the icon. Ensure to fit the requirements described below.
    private _collapsible: boolean, // Property that defines if the group should be collapsible.
    private _contentWrappers: TabAndContentWrapper[] // Array which contains all BasicContentWrapper instances which are part of the group.
)`}),e.jsx(t,{children:"As you may have noticed the name attribute can be of type string or a function which takes a translation function and returns a string. The purpose of this is to let you translate group names as easy as possible. The following code snippet contains an example of this."}),e.jsx(t,{children:'Furthermore, you have to use svgs as icons so that the dark mode works. The "fill" property within the svg should be set to "current". The color of the svg will be set programatically.'}),e.jsx(t,{children:"The following code snippet shows an example for defining navigation tabs, a group and the corresponding content:"}),e.jsx(o,{title:"Example Navbartab Array",language:"typescript",children:`import { ReactComponent as InfoIcon } from './assets/infoIcon.svg'; // Import .svg icons as React Components -> For issues in combination with vite see the FAQ section

const views = [
    new BasicContentWrapper(
        "/example1/",
    // Pass a SimpleNavbarTab, PrivilegedNavbarTab or a custom NavbarTab element.
        simpleNavbarTabFactory({
            disabled: false,
            name: "Example without Translation"
        }),
        ExampleComponent1 // This component of your own will be rendered if the corresponding navigation tab is selected.
    ),

    new Group(
        (t: TranslateFunctionType) => t('Test_group_not_collapsible'),
        <InfoIcon />,
        false,
        [
            new BasicContentWrapper(
                "/group-example1/",
                simpleNavbarTabFactory({
                    name: (t: TranslateFunctionType) => t("example_component"),
                    disabled: false,
                    icon: <InfoIcon />
                }),
                ExampleComponent2
            )
        ]
    ),
];`}),e.jsx(t,{children:"You may have noticed the use of factories. The framework provides two factories: One for SimpleNavbarTab, one for PrivilegedNavbarTab. These are simpleNavbarTabFactory and privilegedNavbarTabFactory. You have to pass them the properties which will be passed to the navigation tab component (for example SimpleNavbarTab) itself."}),e.jsx(i,{children:"Icons"}),e.jsx(t,{children:'Please make sure that the .svg icons fit the following structure. The colors of the .svg icons are set programmatically from the framework. Because of this the property "fill", which represents the color has to be set to the value "current". The width and height of the icons should be set to 24px. The following code snippet shows an example svg element.'}),e.jsxs(t,{children:[e.jsx("strong",{children:"Hint 1:"}),' We recommend to use the UI/UX Tool Figma for Prototyping. Figma offers the functionality to export icons. The framework supports the exported figma icons after the setting of the "current" value in svg files.']}),e.jsxs(t,{children:[e.jsx("strong",{children:"Hint 2:"})," If you encounter issues to import SVGs as ReactComponents while using vite, see the FAQ section."]}),e.jsx(o,{title:"*Examplefile of an .svg",language:"typescript",children:`<svg id="info-icon" fill="current" data-name="info-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <rect id="Rechteck_308" data-name="Rechteck 308" width="24" height="24" fill="none"/>
    <path id="info_FILL0_wght300_GRAD0_opsz24" d="M11.25,16.75h1.5V11h-1.5ZM12,9.3a.757.757,0,0,0,.575-.238.82.82,0,0,0,.225-.587.792.792,0,0,0-.225-.563.816.816,0,0,0-1.15,0,.792.792,0,0,0-.225.563.82.82,0,0,0,.225.587A.757.757,0,0,0,12,9.3Zm0,12.2a9.263,9.263,0,0,1-3.712-.75A9.432,9.432,0,0,1,3.25,15.712a9.563,9.563,0,0,1,0-7.425A9.435,9.435,0,0,1,8.288,3.25a9.563,9.563,0,0,1,7.425,0A9.437,9.437,0,0,1,20.75,8.287a9.563,9.563,0,0,1,0,7.425,9.435,9.435,0,0,1-5.037,5.038A9.27,9.27,0,0,1,12,21.5ZM12,20a7.721,7.721,0,0,0,5.675-2.325A7.721,7.721,0,0,0,20,12a7.721,7.721,0,0,0-2.325-5.675A7.721,7.721,0,0,0,12,4,7.721,7.721,0,0,0,6.325,6.325,7.721,7.721,0,0,0,4,12a7.721,7.721,0,0,0,2.325,5.675A7.721,7.721,0,0,0,12,20ZM12,12Z" transform="translate(-0.5 0.5)" fill="current"/>
</svg>`}),e.jsx(n,{children:"Interfaces"}),e.jsx(i,{children:"SettingsMenuOptions: How to configure the settings menu?"}),e.jsx(t,{children:"These options (property of the UILayer component) allow you to configure the settings menu."}),e.jsx(o,{title:"SettingsMenuOptions",language:"typescript",children:`interface SettingsMenuOptions {
    additionalItems?: MenuItem[]; // Additional menu items (defined as desribed in the PrimeReact menu documentation) to be rendered inside the settings menu.
    hideLanguageSelection?: boolean; // Option to hide the selection of languages.
    hideColorThemeToggler?: boolean; // Option to hide the toggle component for changing the theme (light and dark mode).
}`}),e.jsx(i,{children:"UserMenuOptions: How to configure the user menu?"}),e.jsx(o,{language:"typescript",children:`export interface UserMenuOptions {
    hideLogoutButton?: boolean; // Option to hide the logout button.
    additionalItems?: MenuItem[]; // Additional user menu items (defined as desribed in the PrimeReact menu documentation) to be rendered inside the settings menu.
}`}),e.jsx(i,{children:"HeaderOptions: How to configure the header?"}),e.jsx(t,{children:"These options (property of the UILayer component) allow you to configure the header of the main view. Note, that since Version 12.0.2 there is no default IAV-Company-Logo set, due to legal requirements, as the IAV Frontend Framework will be Open Source."}),e.jsx(o,{title:"PageInterface HeaderOptions",language:"typescript",children:`interface HeaderOptions {
    reactElementRight?: ReactElement; // Using this option you can set a custom react element with your logo (200x56 pixels).
    reactElementLeft?: ReactElement;// Using this option you can set a custom react element with your logo (420x56 pixels).
    hideLeft?: boolean; // Using this option you can hide the left application logo.
    hideRight?: boolean; // Using this option you can hide the right company logo.
    hideUserIcon?: boolean; // Using this option you can hide the user icon inside the header.
    headerElements?: ReactElement[]; // User can add their own elements to the header
}`}),e.jsxs(t,{children:["If the user wants to add their own elements in the header, they can either use their own React elements or fall back on the",e.jsx("strong",{children:"HeaderMenuElement"})," for a menu or",e.jsx("strong",{children:"HeaderPanelElement"})," for an overlay panel provided by the IAV Frontend Framework."]}),e.jsx(i,{children:"AuthOptions: How to configure the authentication view?"}),e.jsx(t,{children:"These options (property of the UILayer component) allow you to configure the authentication view."}),e.jsx(o,{title:"PageInterface AuthOptions",language:"typescript",children:`interface AuthOptions {
    backgroundImage?: string; // Optional parameter to set the backgroundimag. Ensure to import images using ES6 syntax like this: import applogo from './assets/App-Logo.png';
    companyText?: string; // Optional parameter to set the company's name for the copyright at the front.  
    preventDarkmode?: boolean; // Optional parameter to hide the button for toggling between dark and light mode inside the authentication view.
}

export interface AuthenticationViewProps {
    authOptions?: {
        backgroundImage?: string;
        companyText?: string;
        preventDarkmode?: boolean;
        errorMessages?: {
          passwordErrorMessage?: string;
        };
    };
    headerOptions?: {
        reactElementLeft?: ReactElement;
        reactElementRight?: ReactElement;
        hideLeft?: boolean;
        hideRight?: boolean;
    };
    hideLanguageSelection?: boolean;
    legalDocuments?: LegalDocument[];
}`}),e.jsx(i,{children:"NavbarOptions: How to configure the navigation bar?"}),e.jsx(o,{language:"typescript",children:`export interface NavbarOptions {
    staticCollapsedState?: StaticCollapsedState; // Option to disable the feature to collapse the navigation bar. By setting a value of the StaticCollapsedState you set the navigation bar into a static state in which it is either collapsed or unfolded.
}

enum StaticCollapsedState {
    Collapsed,
    Unfolded
}`}),e.jsx(i,{children:"LegalDocuments: How to configure the legal documents?"}),e.jsx(o,{language:"typescript",children:`export interface LegalDocument {
      path: string; // Required property to configure the URL path of the legal document (e.g. "/imprint").
      titleTranslationKey: string; // Required property to set the title for the legal document's link which is placed in the authentication view and at the bottom of the navigation bar. You have to pass a string which is the key of corresponding translations in your translation files.
      component: React.ComponentType<any>; // Required property to set a custom authentication view.
      isHidden?: boolean; // Optional property to hide the legal document's link and disable the URL path associated with it.
}`}),e.jsx(t,{children:"The following example shows how to configure the legal documents"}),e.jsx(o,{language:"typescript",children:`  const legalDocuments: LegalDocument[] = [
    {
      path: '/imprint',
      titleTranslationKey: 'Imprint',
      component: ImprintDocument,
      isHidden: false,
    },
    {
      path: '/privacy-policy',
      titleTranslationKey: 'Privacy_Policy',
      component: PrivacyPolicyDocument,
      isHidden: false,
    },
  ];

    <UILayer
      // other options...
      legalDocuments={legalDocuments}
    />`})]}),ce=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),B=()=>e.jsxs(l,{children:[e.jsx(r,{children:"Content Area"}),e.jsx(n,{children:"Style, Layout and embedding the Content Bar"}),e.jsx(t,{children:"As shown in UILayer you are free to pass every component for the content area. However, the framework provides three higher order components for your content area components. Their purposes are styling (ContentStyle), layout (ContentLayout) and embedding the content bar (ContentWithBar). If you use ContentLayout, ContentStyle will be applied automatically. If you use ContentWithBar, ContentLayout (and because of this also ContentStyle) will be applied."}),e.jsx(i,{children:"The ContentStyle component"}),e.jsx(t,{children:"The ContentStyle components adds the current background color and other styles to your content area component. This allows you to easily embed a frame (in light mode it is grey, as shown in some screenshots in this documentation) for your content area component. ContentStyle has the following properties:"}),e.jsx(o,{language:"language",children:`export interface ContentStyleProps {
    appliedStyles?: StylesArray<typeof ContentStyleStyles>;
}`}),e.jsx(t,{children:"This means that you are able to pass an array of predefined styles to the component which should be activated. The predefined styles are the following:"}),e.jsx(o,{language:"language",children:`export const ContentStyleStyles = {
    WRAPPER_FULL_WIDTH: "WRAPPER_FULL_WIDTH",
    WRAPPER_FULL_HEIGHT: "WRAPPER_FULL_HEIGHT",
    SPACING: "SPACING",
    SET_SPACING_COLOR: "SET_SPACING_COLOR",
};`}),e.jsx(t,{children:"The framework also exports templates. These are just predefined arrays of styles. These are the following:"}),e.jsx(y,{bulletType:"bullet",items:["DEFAULT: This template should be used for simple content areas (for example it sets a colored gap).","CONTENT_CELLS: This template should be used if you want to use the ContentCell component."]}),e.jsx(o,{title:"First Example",language:"typescript",children:`<ContentStyle
    appliedStyles={[ContentStyleStyles.FULL_WIDTH, ContentStyleStyles.SPACING, ContentStyleStyles.SET_SPACING_COLOR]}
/>`}),e.jsx(o,{title:"Second Example",language:"typescript",children:`<ContentStyle
    appliedStyles={ContentStyleTemplates.DEFAULT}
/>`}),e.jsx(i,{children:"The ContentLayout component"}),e.jsx(t,{children:"Using the ContentLayout component you are able to specify a content layout for your content area component. Furthermore, the ContentLayout component uses the ContentStyle component. To use ContentStyle with ContentLayout you have to pass an object containing the appliedStyles array to ContentLayout."}),e.jsx(o,{language:"typescript",children:`interface Props {
    contentStyle?: ContentStyleProps; // An object of the following format: {appliedStyles: [...]}
    layoutBehaviour?: LayoutBehaviour; // Option to specify the layout which is one option of the following enum.
}`}),e.jsx(t,{children:"The LayoutBehaviour enum is defined like this:"}),e.jsx(o,{language:"typescript",children:`export enum LayoutBehaviour {
    // Parent div of content will have no specific layout class
    NONE = "",
    // Parent div will be PrimeFlex grid
    GRID = "grid grid-nogutter",
    // Parent will be  PrimeFlex flexbox
    FLEX = "flex",
    // Parent will be  PrimeFlex flexbox column
    FLEX_COL = "flex flex-column",
}`}),e.jsx(t,{children:"The following code block shows an example of using ContentLayout:"}),e.jsx(o,{language:"typescript",children:`import { CellPaddings, ContentCell } from '@iavofficial/frontend-framework/contentCell';
import { ContentLayout, LayoutBehaviour } from '@iavofficial/frontend-framework/contentLayout';

export const ExampleComponent = () => {
  return (
    <ContentLayout layoutBehaviour={LayoutBehaviour.GRID} contentStyle={appliedStyles: ContentStyleTemplates.CONTENT_CELLS}>
      <ContentCell colWidth={12} paddings={CellPaddings.FULL}>
        <h1>
          Example component
        </h1>
      </ContentCell>
    </ContentLayout>
  );
};`}),e.jsx(t,{children:"The ContentCell component will be explained later on."}),e.jsx(i,{children:"The ContentWithBar component"}),e.jsx(t,{children:'This HOC can be used for implementing a content area component containing a Content Bar. To embed the Content Bar you just have to pass a wrapper array containing your components to the ContentWithBar component using it`s "contentWrappers" property. The ContentWithBar component will render the Content Bar and underneath it will render your content area UI which is the child of this component.'}),e.jsx(t,{children:"To define the tabs for the Content Bar and the corresponding components which will be shown inside the content area, you have to define a wrapper object array similarly to the array for the navigation bar. This time you have to create an array of instances of the class BasicContentbarWrapper or CustomContentbarWrapper. BasicContentbarWrapper renders the simplest and mainly used content tab. CustomContentbarWrapper allows you to define a custom component which will be rendered inside the content bar. The array is then passed to the Content component using the contentWrappers property."}),e.jsx(t,{children:"Furthermore, the framework will render buttons for sliding to the left and right inside the content bar. While the navigation bar isn't collapsed, this will happen if there are more than 5 elements inside the content bar. If the navigation bar is collapsed, the buttons will render if there are more than 6 elements in the content bar."}),e.jsx(t,{children:"ContentWithBar uses ContentLayout and ContentStyle. Because of this the functionality of these components will be added by default. The following code snippet shows the properties of the Content component."}),e.jsx(o,{title:"PageInterface Content",language:"typescript",children:`export interface Props {
    contentStyle?: ContentStyleProps; // An object of the following format: {appliedStyles: [...]} 
    layoutBehaviour?: LayoutBehaviour; // Option to specify the layout which is one option of the following enum.
    contentWrappers: BasicContentbarWrapper[] | CustomContentbarWrapper[]; // Array of elements to show inside the content bar.
    selectedId: string; // The id of the currently selected content area component.
    addable?: boolean; // This optional property defines if the add button will be rendered.
    jumpToEndOfBar?: boolean; // Determines if the content bar should set a newly created tab to active.
    onClickAddButton?: () => any; // Using this optional property you can pass a function that will be triggerd if the add button is clicked.
    onClickLeftSlideButton?: () => any; // Using this property you cann pass a function that will be triggerd if the slide left Button is clicked.
    onClickRightSlideButton?: () => any;// Using this property you can pass a function that will be triggerd if the slide right Button is clicked.
}`}),e.jsx(t,{children:"The following code snippet shows the attributes of the BasicContentbarWrapper class:"}),e.jsx(o,{title:"Constructor BasicContentbarWrapper",language:"typescript",children:`constructor({
    id: string, // Identifier of the tab element.
    displayName: string | TranslationFunction, // Display name of the tab element.
    onClick: (id: string) => any, // Function to set the id of the clicked element.
    contentAreaElement: React.ReactElement // Defines which custom component should be connected with the content bar tab element.
    onClose?: (id: string) => void, // Optional function to handle the deletion of a content tab / contentbar wrapper.
    closable?: boolean, // Property to define if a closing icon will be rendered.
}) {}`}),e.jsx(t,{children:"The following code snippet shows the attributes of the CustomContentbarWrapper class:"}),e.jsx(o,{title:"Constructor CustomContentbarWrapper",language:"typescript",children:`constructor({
  id: string, // Identifier of the tab element
  renderElement: ReactElement, // The custom tab element that should be rendered within the content bar.
  contentAreaElement: React.ReactElement // Defines which custom component should be rendered when selecting a content bar tab.
}) {}`}),e.jsx(t,{children:"The following code snippet shows an example for creating a component containing a content bar:"}),e.jsx(o,{title:"Example Content Component Implementation",language:"typescript",children:`export const ExampleComponent1 = () => {
  const [selectedId, setSelectedId] = useState<string>(WrapperIds.Test1);

  // Array containing wrapper objects to bind elements to corresponding contentbar tabs.
  let exampleArray = [
    new BasicContentbarWrapper({
      id: WrapperIds.Test1,
      displayName: (t: TranslateFunctionType) => t("component", { count: 1 }),
      closable: false,
      onClick: setSelectedId,
      contentAreaElement: (
        <ContentbarExample
          exampleText={"your_component simple usecase "}
          backgroundColor={GREEN}
          identifierNumber="1"
        />
      ),
    }),
    new BasicContentbarWrapper({
      id: WrapperIds.Test2,
      displayName: (t: TranslateFunctionType) => t("component", { count: 2 }),
      closable: false,
      onClick: setSelectedId,
      contentAreaElement: (
        <ContentbarExample
          exampleText="your_component simple usecase "
          backgroundColor={RED}
          identifierNumber="2"
        />
      ),
    }),
    new BasicContentbarWrapper({
      id: WrapperIds.Test3,
      displayName: (t: TranslateFunctionType) => t("component", { count: 3 }),
      onClick: setSelectedId,
      closable: false,
      contentAreaElement: (
        <ContentbarExample
          exampleText={"your_component simple usecase "}
          backgroundColor={YELLOW}
          identifierNumber="3"
        />
      ),
    }),
  ];

  return (
    <ContentWithBar
      contentWrappers={exampleArray}
      selectedId={selectedId}
      layoutBehaviour={LayoutBehaviour.GRID}
      contentStyle={ContentStyleTemplates.CONTENT_CELLS}
    />
  );
};`}),e.jsxs(t,{children:[e.jsx("strong",{children:"Hint:"})," see further integration with different use cases and React State Management hooks in the Example-Project and TemplateProject"]}),e.jsx(n,{children:"ContentCell"}),e.jsx(t,{children:"The framework provides a grid system to structure the content area. For this purpose the framework provides the ContentCell component. The component has to be embedded inside ContentLayout (or ContentWithBar as it uses ContentLayout) with your desired content area layout. The following code snippet shows it's properties."}),e.jsx(o,{title:"PageInterface ContentCell and CellPaddings ENUM",language:"typescript",children:`export enum CellPaddings {
  FULL,
  VERT_RIGHT,
  BOT_HOR,
  BOT_RIGHT,
  NONE,
}

export interface Props {
  colWidth?: number; // Set the column width between 1-12 based on PrimeFlex (spacing of PrimeReact).
  clearStyle?: boolean; // Clears the background color of the contentcell.
  paddings: CellPaddings; // Definition of the element's padding.
}`}),e.jsx(t,{children:"The following code snippet shows an example implementation of a content area using the grid system."}),e.jsxs(t,{children:[e.jsx("strong",{children:"Important hint:"})," This component has to be embedded inside ContentLayout (or ContentWithBar) with the layout set to GRID."]}),e.jsx(o,{title:"Example implementation with the ContentCell components",language:"typescript",children:`import { ContentCell } from '@iavofficial/frontend-framework/contentCell';
import React from 'react';

export interface Props {
  exampleText: string;
}

export const ContentbarExampleWithText = (props: Props) => {
  return (
    <>
      <div className={'col-8 grid grid-nogutter'}>// the classnames are importend from primereact - feel free use your own styling library instead
        <ContentCell colWidth={6} paddings={CellPaddings.FULL}>
          <span>First row left</span>
          <h2>{props.exampleText}</h2>
          <h3>Contentbar with default tabelements</h3>
          <div></div>
        </ContentCell>
        <ContentCell colWidth={6} paddings={CellPaddings.VERT_RIGHT}>
          <span>First row center</span>
        </ContentCell>
        <ContentCell paddings={CellPaddings.BOT_HOR}>
          <span>Second row left</span>
        </ContentCell>
        <ContentCell paddings={CellPaddings.BOT_RIGHT}>
          <span>Second row center left</span>
        </ContentCell>
        <ContentCell paddings={CellPaddings.BOT_RIGHT}>
          <span>Second row center</span>
        </ContentCell>
        <ContentCell paddings={CellPaddings.BOT_RIGHT}>
          <span>Second row center right</span>
        </ContentCell>
        <ContentCell paddings={CellPaddings.BOT_RIGHT}>
          <span>Second row right</span>
        </ContentCell>
        <ContentCell colWidth={12} paddings={CellPaddings.BOT_HOR}>
          <span>Third row</span>
        </ContentCell>
      </div>
      <ContentCell
        paddings={CellPaddings.VERT_RIGHT}
        colWidth={4}
        clearStyle={true}
      >
        <span>Right with cleared style</span>
      </ContentCell>
    </>
  );
};`}),e.jsx(t,{children:"The resulting content area looks like this:"}),e.jsx(m,{src:"assets/content-area/content-area.png",fromGhPages:!0})]}),de=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),D=()=>e.jsxs(l,{children:[e.jsx(r,{children:"Color Settings and Dark Mode"}),e.jsx(n,{children:"Introduction"}),e.jsxs(t,{children:["Color and theme (dark / light mode) information is stored and provided by the React context called ",e.jsx("strong",{children:"ColorSettings"}),"context. The ColorSettings context`s provider component is embedded inside the ColorProvider component. The ColorProvider itself is contained in GlobalDataLayer. Your interface to the ColorProvider component is the colorSettings property of the GlobalDataLayer component. This property will be explained later on."]}),e.jsx(t,{children:"Using these options you are able to set custom colors (especially for framework components). Furthermore, the ColorSettings context provides you the information whether the dark mode is activated. This allows you to implement a dark mode four your components."}),e.jsx(t,{children:"All colors are exported by the framework's constants file. The following code snippet shows you how to import these colors:"}),e.jsx(o,{title:"Example exported color",language:"typescript",children:'import {BLUE0} from "@iavofficial/frontend-framework/constants";'}),e.jsx(r,{children:"Overwrite default colors"}),e.jsx(n,{children:"CSS"}),e.jsx(t,{children:"Besides providing the colors as JS constants, all colors are defined as CSS constants within the root and can be used within the css files of the project. The following code snippet shows you how to use these colors inside css files:"}),e.jsx(o,{title:"Example exported css constants and variables definition",language:"typescript",children:`// Example for exported color by the framework:
:root {
   --blue-0: #001a54;
}

.your-class {
   color: var(--blue-0);
}`}),e.jsx(t,{children:"The framework provides CSS classes for styling your components. This is inspired by PrimeReact. The classes are defined in the globalColors.css file and globally exported. The following code snippet illustrates the structure of these classe's names."}),e.jsx(o,{title:"Global CSS colors",language:"typescript",children:`/* BACKGROUND CLASSES*/
.bg-white-1{ // because of name conflicts with primereact this name is an execption
  background-color: var(--white);
}

.bg-blue-0{
  background-color: var(--blue-0);
}

/* COLOR CLASSES*/
.color-white{
  color: var(--white);
}

.color-blue-0{
  color: var(--blue-0);
}`}),e.jsx(n,{children:"colorSettings property of GlobalDataLayer"}),e.jsx(t,{children:"Using the colorSettings property you can pass an object of the following structure:"}),e.jsx(o,{language:"typescript",children:`export interface ColorProviderProps {
    colorOptions?: ColorOptions; // Options to overwrite the default framework component's default colors.
    disableCustomColorsForLightMode?: boolean; // Option to disable your color settings for the light mode.
    disableCustomColorsForDarkMode?: boolean; // Option to disable your color settings for the dark mode.
}`}),e.jsx(t,{children:"If you want to overwrite the colors of framework components you can do so using GlobalDataLayer's colorSettings property. The colors should be defined in HEX representation. The following code snippet shows the options object to overwrite the default colors. The specific interfaces are listed later on."}),e.jsx(o,{title:"PageInterface colorObject",language:"typescript",children:`export interface ColorOptions {
    header?: HeaderColorOptions;
    navbar?: NavbarColorOptions;
    contentArea?: ContentAreaColorOptions;
    contentbar?: ContentbarColorOptions;
    contentCell?: ContentCellColorOptions;
    authenticationView?: AuthenticationViewColorOptions;
}`}),e.jsx(t,{children:"The following interfaces show that most settings are divided by the state of the corresponding element: default, hovering and active."}),e.jsx(i,{children:"Color options of the header"}),e.jsx(t,{children:"Using these options you can define the colors of the main view's header."}),e.jsx(o,{title:"PageInterface HeaderColorType",language:"typescript",children:`export interface HeaderColorOptions {
    backgroundColor?: string;
    settingsIconColor?: string;
    userIconColor?: string;
}`}),e.jsx(i,{children:"Color options of the navigation bar (including the navigation tabs)"}),e.jsx(t,{children:"Using these options you can define the colors of the main view's navigation bar."}),e.jsx(o,{title:"PageInterface NavbarColorType",language:"typescript",children:`export interface NavbarColorOptions {
    backgroundColor?: string;
    navbarCollapseArrowColor?: string;
    legalDocumentsLinkColor?: string;
    scrollbarColor?: string;
    content?: TabColorOptionsOptional; // Color settings for the navigation tabs
}`}),e.jsx(o,{language:"typescript",children:`export interface TabColorOptionsOptional {
    insideActiveGroupColor?: string;
    default?: {
        tabBackgroundDefaultColor?: string;
        tabFontDefaultColor?: string;
        tabIconDefaultColor?: string;
        groupBackgroundDefaultColor?: string;
        groupFontDefaultColor?: string;
        groupIconDefaultColor?: string;
        groupArrowDefaultColor?: string;
    };
    hover?: {
        tabBackgroundHoverColor?: string;
        tabFontHoverColor?: string;
        tabIconHoverColor?: string;
        groupBackgroundHoverColor?: string;
        groupFontHoverColor?: string;
        groupIconHoverColor?: string;
        groupArrowHoverColor?: string;
    };
    active?: {
        tabBackgroundActiveColor?: string;
        tabFontActiveColor?: string;
        tabIconActiveColor?: string;
        groupBackgroundActiveColor?: string;
        groupFontActiveColor?: string;
        groupIconActiveColor?: string;
        groupArrowActiveColor?: string;
    };
}`}),e.jsx(i,{children:"Color options of the content area"}),e.jsx(t,{children:"Using these options you can set the colors of the content area:"}),e.jsx(o,{title:"ContentColorType",language:"typescript",children:`export interface ContentAreaColorOptions {
    backgroundColor?: string;
}`}),e.jsx(i,{children:"Color options of the content bar (including tabs)"}),e.jsx(t,{children:"Using these options you can set the colors of the tabs of the content bar:"}),e.jsx(o,{title:"ContentbarTabColorOptions",language:"typescript",children:`export interface ContentbarColorOptions {
    backgroundColor?: string;
    iconDefaultColor?: string;
    iconHoverColor?: string;
    buttonDefaultColor?: string;
    buttonHoverColor?: string;
    tabs?: ContentbarTabColorType; // Color settings of the tabs
}`}),e.jsx(o,{title:"ContentbarTabColorType",language:"typescript",children:`export interface ContentbarTabColorType {
    backgroundDefaultColor?: string;
    backgroundHoverColor?: string;
    backgroundActiveColor?: string;
    textDefaultColor?: string;
    textHoverColor?: string;
    textActiveColor?: string;
    iconDefaultColor?: string;
    iconHoverColor?: string;
    iconActiveColor?: string;
}`}),e.jsx(i,{children:"Color options for content cells"}),e.jsx(t,{children:"Using these options you can set the colors of content cells:"}),e.jsx(o,{language:"typescript",children:`export interface ContentCellColorOptions {
    backgroundColor?: string;
}`}),e.jsx(i,{children:"Color options for the authentication view"}),e.jsx(t,{children:"Using these options you can set the colors of the authentication view:"}),e.jsx(o,{title:"Interfaces ContentElements",language:"typescript",children:`export interface AuthenticationViewColorOptions {
    headerBackgroundColor?: string;
    loginButtonBackgroundColor?: string;
    loginButtonTextColor?: string;
    loginFormBackgroundColor?: string;
    fullScreenBackgroundColor?: string; // If fullscreenBackgroundcolor is defined, this color will replace the background image inside the authentication view.
    companyTextColor?: string;
    inputFieldDescriptionTextColor?: string;
    inputFieldBackgroundColor?: string;
    inputFieldTextColor?: string;
    passwortRequirementsTextColor?: string; // Defines the color of the text for the requirements to set a new password of the AWS authentication view.
    themeTogglerColor?: string;
    legalLinkColor?: string;
}
export interface AuthenticationColorType {
    headerBackgroundColor?: string;
    loginButtonBackgroundColor?: string;
    loginButtonTextColor?: string;
    legalNoticeIconColor?: string;
    loginFormBackgroundColor?: string;
    fullScreenBackgroundColor?: string;
    companyTextColor?: string;
    inputFieldDescriptionTextColor?: string;
    inputFieldBackgroundColor?: string;
    inputFieldTextColor?: string;
    passwortRequirementsTextColor?: string; // Defines the color of the text for the requirements to set a new password of the AWS authentication view.
}`}),e.jsx(r,{children:"Other color options"}),e.jsx(t,{children:"To change the color of the PrimeReact components DropDown and ContextMenu you have to overwrite the following css variables:"}),e.jsx(o,{title:"CSS Properties",language:"css",children:`:root {
    --contextmenubgmaincolor: ... // Background color of the contextsubmenu (settingsmenu and loginmenu).
    --highlightcolor: ... // Background color of the contextsubmenu if hovered or selected (settingsmenu and loginmenu).
    --textAndIconMainColor: ... // Main text and icon color.
    --textAndIconHighlightColor: ... // Text and icon color if hovered or selected.
    --dropdownBg: ... // Background of the DropDown component.
    --dropdownBgHighlight: ... // Color of the texts highlighting if hovered of selected.
}`}),e.jsx(r,{children:"Example for using custom colors"}),e.jsx(t,{children:"Using these options you can for example create a view like the following."}),e.jsx(m,{src:"assets/color-settings/custom-coloring.png",fromGhPages:!0}),e.jsx(r,{children:"How to implement a dark mode in custom components"}),e.jsx(n,{children:"Implement dark mode using the ColorSettings context"}),e.jsx(t,{children:"If you want to implement a component including a dark mode you will have to know whether the dark mode is activated at first. You are able to get this information by reading the darkmode attribute of the ColorSettings context. The following code snippet shows an example:"}),e.jsx(o,{title:"Interfaces ContentElements",language:"typescript",children:`import React, { useContext } from 'react';
import { ColorSettingsContext } from 'disa-framework/colorSettingsContext';
import '@iavofficial/frontend-framework/globalColors.css';

export const ExampleComponent = () => {
    const colorSettingsContext = useContext(ColorSettingsContext);

    return (
        <div style={{ width: '100%' }}
            className={colorSettingsContext?.darkmode ? 'color-white bg-black' : 'color-black bg-white'}>
            ExampleComponent
        </div>
    );
};`}),e.jsx(t,{children:"However, deciding which colors should be used regarding the theme inside your components is a bad practice. Instead you should maintain the currently used colors in a central place like the framework does. Consult the framework implementation (especially the ColorProvider component) for further details."}),e.jsx(i,{children:"Implement dark mode using the color-theme html attribute"}),e.jsx(t,{children:'If the user activates the dark mode the "color-theme" html attribute will be set (at html body). This enables you to style your components for the light and dark mode using CSS attribute selectors like so:'}),e.jsx(o,{language:"typescript",children:`.example {
    background-color: white;
}

[color-theme="dark"] .example {
    background-color: black;
}`}),e.jsx(t,{children:'This CSS will set a white background for the class "example" if the color-theme is not "dark" (light mode is activated). If the color-theme is set to "dark" (dark mode is activated) it will set the background to black.'}),e.jsx(r,{children:"How to disable the dark mode"}),e.jsxs(t,{children:["To disable the dark mode use the ",e.jsx("em",{children:"hideColorThemeToggler"})," option inside ",e.jsx("em",{children:"settingsMenuOptions"}),"of the UILayer component. This will prevent the user from changing the theme."]})]}),he=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),E=()=>e.jsxs(l,{children:[e.jsx(r,{children:"Starting the Development Project"}),e.jsx(t,{children:"The framework's repository contains a development project which is used to observe the effects of changes to the Framework during development. Since the Framework's repository is a monorepo using the Turborepo management tool, you can build the framework and start the development project by executing the following command inside the root folder of the repository."}),e.jsx(o,{language:"bash",children:"npm run dev"}),e.jsx(t,{children:"After a certain time which is required for building you can access the development application in your web browser. You can now change the development application or the Framework itself to build up deeper knowledge."})]}),ue=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),F=()=>e.jsxs(l,{children:[e.jsx(r,{children:"FAQ"}),e.jsx(t,{children:"This page lists common questions and problems and links corresponding issues."}),e.jsx(n,{children:"Problems using the SVG format as React Component with Vite"}),e.jsx(t,{children:"In a few scenarios, the framework requires the use of SVG Files (e.g., Icons). To be able to set the color of the SVG inside the Framework, the Icons must be imported as React Components."}),e.jsx(t,{children:"Use the following steps to solve issues regarding the SVG import as React Components:"}),e.jsxs(t,{children:['Install the vite-plugin-svgr with the command "npm i vite-plugin-svgr" and configure it as shown'," ",e.jsx(f,{label:"here",to:"https://www.npmjs.com/package/vite-plugin-svgr"}),". If this doesn’t help, further possible solutions can be found"," ",e.jsx(f,{to:"https://stackoverflow.com/questions/74720726/type-definition-for-vite-plugin-svgr",label:"here"}),"."]}),e.jsx(n,{children:"Can the IAV Frontend Framework be used with Angular?"}),e.jsx(t,{children:"No, the IAV Frontend Framework only supports React Components and is therefore only suitable for React-based projects."})]}),pe=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),x=a=>{const c=d=>e.jsx("div",{style:{color:"#041e96",marginBottom:"5px",fontSize:"1.2em"},children:e.jsx("strong",{children:d.text})});return e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"fit-content",marginBottom:"50px"},children:[e.jsxs("div",{children:[e.jsx(c,{text:"Key"})," ",a.moduleKey]}),e.jsxs("div",{children:[e.jsx(c,{text:"Default module"})," ",a.isDefaultModule?"Yes":"No"]}),a.installCmd&&e.jsxs("div",{children:[e.jsx(c,{text:"Install with"})," ",a.installCmd]}),e.jsxs("div",{children:[e.jsx(c,{text:"Description"})," ",a.shortDescription]})]})})},me=`The DummyAuthenticator module is a place holder for real
authentication. By using this default implementation you can begin developing
your application while you don't have to provide an authentication implementation
from the start. This is useful for presentations early in the project as the user
still has to authenticate and thus creating the impression of how the interaction
will be designed later on.`,N=()=>e.jsxs(l,{children:[e.jsx(r,{children:"DummyAuthenticator"}),e.jsx(x,{moduleKey:"auth",isDefaultModule:!0,shortDescription:me}),e.jsx(t,{children:"Hint: This module provides only the necessary state values and methods."})]}),ge=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),fe=[{key:"name",title:"Parameter Name"},{key:"type",title:"Type"},{key:"description",title:"Description"}],w=[{key:"name",title:"Variable Name"},{key:"type",title:"Type"},{key:"description",title:"Description"}],G=[{key:"name",title:"Method Name"},{key:"parameters",title:"Parameters"},{key:"return_type",title:"Return Type"},{key:"description",title:"Description"}],U=[{key:"name",title:"Method Name"},{key:"type",title:"Type"},{key:"description",title:"Description"}],ye=[{key:"name",title:"Method Name"},{key:"component_type",title:"Type of the Component"},{key:"description",title:"Description"}],xe="This module allows for authentication with AWS-Cognito.",H=()=>{const a=e.jsx(o,{language:"typescript",center:!0,children:"{url: string; token?: JWT; settings?: FetchSettings}"}),c=e.jsx(o,{language:"typescript",center:!0,children:"{newPassword: string}"}),d=e.jsx(o,{language:"typescript",center:!0,children:"{renderChildren: boolean}"});return e.jsxs(l,{children:[e.jsx(r,{children:"AwsAuthenticator"}),e.jsx(x,{isDefaultModule:!1,moduleKey:"auth",installCmd:"npm i @iavofficial/frontend-framework-aws-authenticator",shortDescription:xe}),e.jsx(n,{children:"Parameters"}),e.jsxs(t,{children:["The constructor of AwsAuthenticator has the following parameters. The parameters are contained inside a parameter object.",e.jsx(h,{columns:fe,data:[{name:"configureAmplify",type:"() => void",description:`You will have to configure amplify to use authentication
              with AWS Cognito. You have to encapsulate the logic inside a callback
              and pass it using this property.`},{name:"failOnNoLegalGroup?",type:"boolean",description:"Contains the username and all necessary tokens."},{name:"legalGroups?",type:"string[]",description:"Contains the username and all necessary tokens."}]})]}),e.jsx(n,{children:"Additional / overridden state"}),e.jsx(h,{columns:w,data:[{name:"userData",type:"AwsUserData | undefined",description:"Contains the username and all necessary tokens."},{name:"extras",type:"AwsAuthenticatorStateExtras",description:`Contains extra information for overriding the initial
            password and potential login errors.`}]}),e.jsx(n,{children:"Additional / overriden Thunks (methods)"}),e.jsx(h,{columns:G,data:[{name:"fetchAuthed",parameters:a,return_type:"Response (from fetch API)",description:"See general structure of authentication modules."},{name:"extras.checkIsAuthenticated",parameters:"void",return_type:"Response",description:`This method checks if the user is still authenticated
            and calls logout if not.`},{name:"extras.completePassword",parameters:c,return_type:"Response",description:"This method is used to override the initial password."},{name:"extras.refreshSession",parameters:"void",return_type:"Response",description:"This method is used to refresh the session."},{name:"useModuleLifecycle",parameters:"void",return_type:d,description:`This Hook is used by the Framework to integrate the
            module's React lifecycle.`}]}),e.jsx(n,{children:"AuthenticationView"}),e.jsx(t,{children:"The correct authentication view for AwsAuthenticator is awsAuthenticationView. It is highly recommended to use this authentication view an pass it to the UILayer component."}),e.jsx(n,{children:"Example usage"}),e.jsx(o,{language:"tsx",children:`const configureAmplify = () => {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: cognitoPool,
        userPoolClientId: cognitoAppId,
      },
    },
  });
  cognitoUserPoolsTokenProvider.setKeyValueStorage(
    new CookieStorage({
      domain: domain,
      path: "/",
      expires: 365,
      // @ts-ignore
      secure: domain !== "localhost",
      sameSite: "lax",
    })
  );
};

const customModules = {
  [MandatoryModuleNames.Authenticator]: new PageAwsAuthenticator({
    configureAmplify: configureAmplify,
    failOnNoLegalGroup: true,
    legalGroups: ["ADMIN", "SHOWCASE"],
  })
};

export const modules = createModules(customModules);

export const store = new StoreBuilder(modules.storeModules).build();

// Inside your React components
<GlobalDataLayer
    store={store}
    modules={modules.all}
    // ...
>
    <UILayer
        authenticationView={awsAuthenticationView}
        // ...
    />
    </GlobalDataLayer>
`})]})},be=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"})),W=()=>e.jsxs(l,{children:[e.jsx(r,{children:"ReactRouterRouter"}),e.jsx(x,{moduleKey:"router",isDefaultModule:!0,shortDescription:"This module provides routing functionality using React Router."}),e.jsx(t,{children:"Since this module is the default Router module it provides exactly the functionality described on the page for the general structure."})]}),we=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),V=()=>e.jsxs(l,{children:[e.jsx(r,{children:"Modules in Depth"}),e.jsx(t,{children:"This page describes advanced functionalities of the module orchestration system."}),e.jsx(n,{children:"The different kinds of modules and the method createModulesSeperately"}),e.jsx(t,{children:"For precise typing and other processing reasons the Framework splits the modules into framework modules and user modules. Furthermore, it splits all modules into so called store modules and non store modules. Store modules are modules that provide a Slice which should be included inside the Redux Store. Non store modules don't provide a Slice. By combining these two distinctions you get four types of modules:"}),e.jsx(y,{bulletType:"bullet",items:[`frameworkStoreModules: These are all modules which have default implementations
        and provide a Slice for the Redux store. You can override the default implementations
        with other existing modules (like AwsAuthenticator for authentication) or with custom
        ones.`,`userStoreModules: These modules are modules that don't have default implementations
        and because of this aren't relevant for the Framework itself. However, they are
        relevant for the store and because of that provide a Slice.`,`frameworkNonStoreModules: These are modules which have default implementations but
        aren't relevant for the store. Like with frameworkStoreModules you can override them.`,`userNonStoreModules: These are modules which don't have a default implementation and
        aren't relevant for the store.`]}),e.jsxs(t,{children:["For most use cases the ",e.jsx("i",{children:"createModules"})," method will do just fine. Because the framework works with the described distinctions of module types internally, ",e.jsx("i",{children:"createModules"})," splits up the provided modules object into the different types of modules. However, if you want to split them up by yourself you can use the method ",e.jsx("i",{children:"createModulesSeperately"})," ","which takes four different objects for the different types of modules. The following example shows the usage of this method."]}),e.jsx(o,{language:"typescript",title:"Example usage of createModulesSeperately",children:`const frameworkStoreModules = {
  [MandatoryModuleNames.Authenticator]: new AWSAuthenticator({
    configureAmplify: configureAmplify,
    failOnNoLegalGroup: true,
    legalGroups: ["ADMIN", "SHOWCASE"],
  }),
};

const userStoreModules = {
  userModule: new UserModule({
    // ...
  }),
};

const frameworkNonStoreModules = {
  // ...
};

const userNonStoreModules = {
  userTest: { text: "text"},
};

export const modules = createModulesSeperately({
  frameworkStoreModules,
  userStoreModules,
  frameworkNonStoreModules,
  userNonStoreModules,
});

export const store = new StoreBuilder(modules.storeModules).build();`}),e.jsx(n,{children:"StoreBuilder"}),e.jsx(t,{children:"The StoreBuilder allows you to adapt the way framework modules and user modules are processed for addition to the store. To modify this behaviour you can define so called processors and add them for specific modules. The following example shows you how to add a processor for a framework module."}),e.jsx(o,{language:"typescript",title:"Example for adding a processor for a framework module",children:`export const store = new StoreBuilder(modules.storeModules)
  .setFrameworkModuleProcessor(
    MandatoryModuleNames.Authenticator,
    (module, storeConfigBuilder) => {
      storeConfigBuilder.setReducer(
        MandatoryModuleNames.Authenticator,
        module.slice.reducer
      );
    }
  ).build();`}),e.jsxs(t,{children:["As you can see, a processor method gets two parameters. The first one is the specific module for the given key. This is the module you provide a processor for. The second parameter is an instance of StoreConfigBuilder. This instance gets passed to all processors and allows to add information which will later be added to the store. The method definitions of StoreConfigBuilder are included in a later section. You can add custom processors for user modules in the same way, but using the method"," ",e.jsx("i",{children:"setUserModuleProcessor"}),". However, in most use cases the default processing of modules will be sufficient."]}),e.jsx(t,{children:"Furthermore, you can adapt the way the store is build. You do this by defining a so called storeBuilder method. The storeBuilder method gets the StoreConfig which contains all information of the modules. Besides this, the method has to return an instance of a Redux Store which will be used as the global store. The following code snippet shows you an example."}),e.jsx(o,{language:"typescript",title:"Example for defining a custom storeBuilder method",children:`export const store = new StoreBuilder(modules.storeModules)
  .setStoreBuilder((storeConfig) => {
    const store = configureStore({
      reducer: storeConfig.reducers,
      middleware: (getDefaultMiddleware: Function) =>
        getDefaultMiddleware().concat(storeConfig.middleware),
      enhancers: (getDefaultEnhancers: Function) =>
        getDefaultEnhancers().concat(storeConfig.enhancers),
    });
    return store;
  })
  .build();`}),e.jsxs(t,{children:["If you want to add additional information to the later build StoreConfig in your processors you can add it using the ",e.jsx("i",{children:"setExtas"})," method of the StoreConfigBuilder instance. You can then process these extras inside a custom storeBuilder. You may also want to define an own storeBuilder when you want to use the Redux Store for other purposes then processing modules too."]}),e.jsx(i,{children:"Methods of StoreConfigBuilder"}),e.jsx(t,{children:"The following code snippet shows the method definitions of StoreConfigBuilder which you can use to incrementally add information for the store."}),e.jsx(o,{language:"typescript",title:"Method definitions of StoreConfigBuilder",children:`// Adds a reducer for a given key.
public setReducer<K extends keyof TModulesState>(key: K, reducer: Reducer<TModulesState[K]>)

// Overrides the middleware array.
public setMiddleware(middleware: Middleware[]): this

// Overrides the enhancers array.
public setEnhancers(enhancers: StoreEnhancer[]): this

// Sets value into the extras object for the given key.
public setExtras(key: string, value: unknown): this`}),e.jsx(n,{children:"The useModuleLifecycle Hook"}),e.jsxs(t,{children:["If you develop a custom module you may wonder how you can integrate the module into the applications lifecycle. For example this may be necessary to run some initialization logic. For this purpose modules can provide a Hook called ",e.jsx("i",{children:"useModuleLifecycle"})," as an attribute of the module object. The Framework will detect the Hook and run it. The Hook has to be of the following type."]}),e.jsx(o,{language:"typescript",children:"() => {renderChildren: boolean} & Record<string, unknown>"}),e.jsxs(t,{children:["You can see that ",e.jsx("i",{children:"useModuleLifecycle"})," has to return an object which contains an attribute called ",e.jsx("i",{children:"renderChildren"}),". By passing"," ",e.jsx("i",{children:"false"})," as it's value you can prevent that all other UI components get rendered. This may be necessary if you have to make sure that before rendering certain initialization logic has to be finished."]}),e.jsx(n,{children:"Framework module keys & default modules"}),e.jsx(t,{children:"The following table shows which module keys are defined by the Framework itself. The corresponding default modules are listed too. You can override the keys with other modules. However, you have to provide every state value and Thunk method which is provided by the default modules since the Framework relies on them."}),e.jsxs(t,{children:["The default modules are contained inside the ",e.jsx("i",{children:"shared"})," package of the Framework's monorepo at GitHub. For more detailed information consult this package."]}),e.jsx(h,{columns:[{key:"key",title:"Key"},{key:"type_of_module",title:"Type of module"},{key:"default_module",title:"Default module"},{key:"ts_type",title:"TS type",centerContent:!0}],data:[{key:"auth",type_of_module:"Framework Store Module",default_module:"DummyAuthenticator",ts_type:ve},{key:"router",type_of_module:"Framework Non Store Module",default_module:"ReactRouterRouter",ts_type:Ce},{key:"internationalizer",type_of_module:"Framework Store module",default_module:"I18nextInternationalizer",ts_type:je},{key:"cookiebanner",type_of_module:"Framework Non Store Module",default_module:"UICookieBanner",ts_type:Te}]}),e.jsx(n,{children:"Other relevant interfaces"}),e.jsx(t,{children:"The following interfaces describe the general structure of modules. FFModule describes the abstraction of a non store module. FFStoreModule extends FFModule and describes the required structure of a store module."}),e.jsx(o,{language:"typescript",children:`export type ModuleLifecycleHook = () => {renderChildren: boolean} & Record<string, unknown>;

export type FFModule = {
  useModuleLifecycle?: ModuleLifecycleHook;
};

export type FFStoreModule<TState> = {
  slice: Slice<TState>;
  middleware?: Middleware[];
  enhancers?: StoreEnhancer[];
  extras?: object;
} & FFModule;
`})]}),ve=e.jsx(o,{center:!0,language:"typescript",children:`export type AuthModule<TAuthState extends AuthState> = {
  fetchAuthed: AsyncThunk<Response, FetchAuthedFunctionArgs, any>;
  login: AsyncThunk<void, {credentials: Credentials}, any>;
  logout: AsyncThunk<void, {error?: unknown} | undefined, any>;
} & FFStoreModule<TAuthState>;`}),Ce=e.jsx(o,{center:!0,language:"typescript",children:`export type RouterModule = {
  UiLayerRouter: React.ComponentType<UILayerRouterProps>;
  MainViewRouter: React.ComponentType<MainViewRouterProps>;
  Link: React.ComponentType<LinkProps>;
  useLocation: useLocationType;
  useIsTabActive: useIsTabActiveType;
} & FFModule;
`}),je=e.jsx(o,{center:!0,language:"typescript",children:`export type InternationalizerModule<
  TIntState extends InternationalizerState = InternationalizerState,
> = {
  slice: Slice<TIntState>;
  fallbackLang: string;
  translationResources: LangResources;
  selectActiveLang: (lang: string) => void;
  useTranslation: UseTranslationHook;
} & FFStoreModule<TIntState>;`}),Te=e.jsx(o,{center:!0,language:"typescript",children:`export type CookieBannerModule = {
    UiLayerCookieBanner: React.ComponentType;
} & FFModule;;`}),ke=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),z=()=>{const a=e.jsx(o,{language:"typescript",center:!0,children:"{url: string; settings?: object}"}),c=e.jsx(o,{language:"typescript",center:!0,children:"{credentials: Credentials}"}),d=e.jsx(o,{language:"typescript",center:!0,children:"{error?: unknown} | undefined"});return e.jsxs(l,{children:[e.jsx(r,{children:"General structure of an authentication module"}),e.jsx(t,{children:"This page describes the general structure of an authentication module. Every authentication module has to provide the listed state values and methods."}),e.jsx(n,{children:"Necessary state"}),e.jsx(h,{columns:w,data:[{name:"hasAuthenticated",type:"boolean",description:"Defines whether the user is authenticated."},{name:"isLoading",type:"boolean",description:`Defines whether the authentication process is ongoing.
            (This is a dummy since no real authentication is done.)`},{name:"userData",type:"UserData | undefined",description:`Contains the user information (for this module only the
            user name) when signed in.`}]}),e.jsx(n,{children:"Necessary Thunks (methods)"}),e.jsx(h,{columns:G,data:[{name:"fetchAuthed",parameters:a,return_type:"Response (from fetch API)",description:`This method should execute a fetch and retry if it fails
            (for example because of a need for token refresh.)`},{name:"login",parameters:c,return_type:"void",description:`This method should execute a login process based on the
            passed credentials.`},{name:"logout",parameters:d,return_type:"void",description:"This method should execute the logout process."}]})]})},Se=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),q=()=>e.jsxs(l,{children:[e.jsx(r,{children:"General structure of a router module"}),e.jsx(t,{children:"This page describes the general structure of a router module. Since the default router module has no global state there is no necessary state."}),e.jsx(n,{children:"Necessary components"}),e.jsxs(t,{children:["A router module has to provide the following components. For more information consult the types and default implementation inside the"," ","package ",e.jsx("i",{children:"shared"}),"."]}),e.jsx(h,{columns:ye,data:[{name:"UiLayerRouter",component_type:Ie,description:`This component gets rendered inside the UILayer and has
          to implement the routing for the passed parameters.`},{name:"MainViewRouter",component_type:Ae,description:`This component gets rendered inside the MainView component
          and has to implement the routing for the passed routes.`},{name:"Link",component_type:Le,description:`This component has to trigger a "load" of the passed
          link. Optionally a target like "_blank" can be passed.`}]}),e.jsx(n,{children:"Necessary methods"}),e.jsx(h,{columns:U,data:[{name:"useLocation",type:_e,description:`This Hook has to return the current location as a string
          (inside an object).`},{name:"useIsTabActive",type:Pe,description:`This Hook has to return if the tab corresponding to the
          path is active (inside an object).`}]}),e.jsx(n,{children:"Other important types"}),e.jsx(o,{language:"typescript",children:`export type BasicRoute = {
  path: string;
  element: ReactElement;
  disabled?: boolean;
  key?: string;
} & Record<string, unknown>;`})]}),Ie=e.jsx(o,{language:"typescript",center:!0,children:`React.ComponentType<{
      routes: BasicRoute[];
      initialPath: string;
      disableLogin: boolean;
  }>`}),Ae=e.jsx(o,{language:"typescript",center:!0,children:`React.ComponentType<{
      routes: BasicRoute[];
  }>`}),Le=e.jsx(o,{language:"typescript",center:!0,children:`React.ComponentType<
      PropsWithChildren<
          {
              to: string;
              style: Record<string, unknown>;
              target?: string;
          } & Record<string, unknown>;
      >
  >`}),_e=e.jsx(o,{language:"typescript",center:!0,children:"() => {pathName: string}"}),Pe=e.jsx(o,{language:"typescript",center:!0,children:"(tabPath: string) => {isActive: boolean}"}),Me=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),Oe=S(()=>({groupTitle:{width:"100%",cursor:"pointer",padding:"8px 0",marginBottom:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",border:"none",position:"relative","&:hover":{backgroundColor:"#007bff",color:"#fff"},borderRadius:"8px"},groupList:{listStyle:"none",padding:0,margin:0},groupItem:{paddingLeft:"16px"},badge:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)"}})),Re=a=>{const{groups:c}=a,{classes:d}=Oe(),[p,b]=Z.useState([]),v=u=>{b(g=>g.includes(u)?g.filter(X=>X!==u):[...g,u])};return c.map(u=>{const g=p.includes(u.title);return e.jsxs("div",{children:[e.jsxs("button",{className:d.groupTitle,onClick:()=>v(u.title),children:[u.title,u.isNew&&e.jsx(A,{className:d.badge})]}),g&&e.jsx(C,{routes:u.routes})]},u.title)})},Y=()=>e.jsxs(l,{children:[e.jsx(r,{children:"I18nextInternationalizer"}),e.jsx(x,{moduleKey:"internationalizer",isDefaultModule:!0,shortDescription:"This module provides internationalization using I18Next."}),e.jsx(t,{children:"Since this module is the default internationalizer module it provides exactly the functionality described on the page for the general structure."})]}),Be=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),K=()=>e.jsxs(l,{children:[e.jsx(r,{children:"General structure of an internationalizer module"}),e.jsx(t,{children:"This page describes the general structure of an internationalizer module. Every internationalizer module has to provide the listed state values and methods."}),e.jsx(n,{children:"Necessary State"}),e.jsx(h,{columns:w,data:[{name:"activeLang",type:"string",description:"Defines the currently used language."}]}),e.jsx(n,{children:"Necessary attributes"}),e.jsx(t,{children:"The following table shows all attributes which have to statically exist on the module object."}),e.jsx(h,{columns:w,data:[{name:"fallbackLang",type:"string",description:"Defines the fallback language."},{name:"translationResources",type:"LangResources",description:"Has to contain all translations."}]}),e.jsx(n,{children:"Necessary methods and Hooks"}),e.jsx(h,{columns:U,data:[{name:"selectActiveLang",type:"(lang: string => void)",description:"This method is called to select a language."},{name:"useTranslation",type:"UseTranslationHook",description:`This Hook is called to get
            translations for a given key.`}]}),e.jsx(n,{children:"Relevant types"}),e.jsx(o,{language:"typescript",children:`export type InternationalizerState = {
  activeLang: string;
};

export type TranslationKeys = {
  option_name: string;
} & Record<string, string>;

export type Translation = {
  translation: TranslationKeys;
} & Record<string, string | object>;

export type LangResources = {
  [lang: string]: Translation;
};

export type TranslationFunctionParams = {
  key: string;
} & Record<string, any>;

export type TranslationFunction = (params: TranslationFunctionParams) => string;

export type TranslationWrapperFunction = (t: TranslationFunction) => string;

export type UseTranslationHook = () => TranslationFunction;`})]}),De=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),Ee=S(()=>({headerContainer:{display:"flex",alignItems:"center",justifyContent:"flex-start",marginTop:"30px"},badge:{marginLeft:"8px",padding:"4px 8px",backgroundColor:"red",color:"white",borderRadius:"12px",fontSize:"12px"}})),Fe=a=>{const{title:c,badgeText:d}=a,{classes:p}=Ee();return e.jsxs("div",{className:p.headerContainer,children:[e.jsx("h3",{children:c}),e.jsx(A,{})]})},J=()=>e.jsxs(l,{children:[e.jsx(r,{children:"General structure of a cookie banner module"}),e.jsx(t,{children:"The Cookie Banner module displays and manages user consent for cookies and tracking in your application. It is a Framework Non Store Module; this means it does not add state to the Redux store, but can be customized/replaced as needed."}),e.jsx(n,{children:"Necessary components"}),e.jsxs(t,{children:["A cookie banner module must provide the following components. For detailed types and the default implementation, consult the ",e.jsx("i",{children:"shared"})," package."]}),e.jsx(h,{columns:[{key:"name",title:"Name"},{key:"component_type",title:"Component Type"},{key:"description",title:"Description"}],data:[{name:"UiLayerCookieBanner",component_type:Ne,description:"This component is rendered in the UILayer and displays the cookie consent banner, handling user interaction."}]}),e.jsx(i,{children:"Customizing the Banner"}),e.jsxs(t,{children:["To override the default Cookie Banner, provide your own implementation of the ",e.jsx("i",{children:"UiLayerCookieBanner"})," React component. You may either:"]}),e.jsx(y,{bulletType:"bullet",items:["Extend the default module and override the UiLayerCookieBanner property.","Implement a new class or object matching the CookieBannerModule interface."]}),e.jsx(o,{language:"typescript",title:"Custom Cookie Banner Example",children:`class CustomCookieBanner implements CookieBannerModule {
      UiLayerCookieBanner = MySpecialCookieBanner;
      // Optionally, useModuleLifecycle if you need custom logic.
    }`}),e.jsxs(t,{children:["Then register your customized module under ",e.jsx("i",{children:"frameworkNonStoreModules"}),":"]}),e.jsx(o,{language:"typescript",title:"Registering custom module",children:`const frameworkNonStoreModules = {
      cookieBanner: new CustomCookieBanner(),
      // ...other non-store modules
    };
    
    export const modules = createModulesSeperately({
      // ...other module groups
      frameworkNonStoreModules,
    });`}),e.jsx(i,{children:"Tips & Best Practices"}),e.jsx(t,{children:"Most projects can use the default cookie banner out of the box. If you need branding or legal customization, use your own UiLayerCookieBanner, but preserve the interface."}),e.jsx(n,{children:"Optional Lifecycle Hook"}),e.jsxs(t,{children:["If initial consent must be handled before the application renders, provide a ",e.jsx("code",{children:"useModuleLifecycle"})," hook as described in the modules-in-depth page. This can be used to block app rendering until consent logic is finished."]}),e.jsx(o,{language:"typescript",children:"() => {renderChildren: boolean} & Record<string, unknown>"}),e.jsx(n,{children:"Other important types"}),e.jsx(o,{language:"typescript",children:`export interface UICookieBannerProps {
  header: React.ReactNode;
  message: React.ReactNode;
  visible: boolean;
  acceptButtonLabel: string;
  onAccept: () => void;
  styles?: Record<string, any>;
  darkMode: boolean;
};`}),e.jsx(o,{language:"typescript",children:`export type CookieBannerModule = {
  UiLayerCookieBanner: React.ComponentType<UICookieBannerProps>;
  useModuleLifecycle?: ModuleLifecycleHook;
} & FFModule;`})]}),Ne=e.jsx(o,{language:"typescript",center:!0,children:"React.ComponentType<UICookieBannerProps>"}),Ge=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),Q=()=>e.jsxs(l,{children:[e.jsx(r,{children:"UICookieBanner"}),e.jsx(x,{moduleKey:"cookieBanner",isDefaultModule:!0,shortDescription:"This module provides the default cookie consent banner following the required contract."}),e.jsxs(t,{children:["As the default Cookie Banner module, this implementation provides the required ",e.jsx("i",{children:"UiLayerCookieBanner"})," component as outlined on the general structure page."]})]}),Ue=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),I=Object.assign({"./pages/pageAwsAuthenticator.tsx":()=>s(()=>Promise.resolve().then(()=>be),void 0),"./pages/pageColorSettings.tsx":()=>s(()=>Promise.resolve().then(()=>he),void 0),"./pages/pageContentArea.tsx":()=>s(()=>Promise.resolve().then(()=>de),void 0),"./pages/pageDefaultCookieBanner.tsx":()=>s(()=>Promise.resolve().then(()=>Ue),void 0),"./pages/pageDevProject.tsx":()=>s(()=>Promise.resolve().then(()=>ue),void 0),"./pages/pageDummyAuthenticator.tsx":()=>s(()=>Promise.resolve().then(()=>ge),void 0),"./pages/pageFaq.tsx":()=>s(()=>Promise.resolve().then(()=>pe),void 0),"./pages/pageGeneralAuthModule.tsx":()=>s(()=>Promise.resolve().then(()=>Se),void 0),"./pages/pageGeneralCookieBannerModule.tsx":()=>s(()=>Promise.resolve().then(()=>Ge),void 0),"./pages/pageGeneralInternationalizerModule.tsx":()=>s(()=>Promise.resolve().then(()=>De),void 0),"./pages/pageGeneralRouterModule.tsx":()=>s(()=>Promise.resolve().then(()=>Me),void 0),"./pages/pageGlobalDataLayer.tsx":()=>s(()=>Promise.resolve().then(()=>le),void 0),"./pages/pageI18nextInternationalizer.tsx":()=>s(()=>Promise.resolve().then(()=>Be),void 0),"./pages/pageInformation.tsx":()=>s(()=>Promise.resolve().then(()=>ae),void 0),"./pages/pageInstallationGuide.tsx":()=>s(()=>Promise.resolve().then(()=>ie),void 0),"./pages/pageInterface.tsx":()=>s(()=>Promise.resolve().then(()=>se),void 0),"./pages/pageModulesInDepth.tsx":()=>s(()=>Promise.resolve().then(()=>ke),void 0),"./pages/pageOverview.tsx":()=>s(()=>Promise.resolve().then(()=>oe),void 0),"./pages/pageReactRouterRouter.tsx":()=>s(()=>Promise.resolve().then(()=>we),void 0),"./pages/pageUiLayer.tsx":()=>s(()=>Promise.resolve().then(()=>ce),void 0)}),He=async()=>{var d;const a=[],c=[...j,...k,...T.flatMap(p=>p.routes)];for(const p in I){const b=await I[p](),v=((d=c.find(u=>b.default.name===u.element.name))==null?void 0:d.path)||"";a.push({module:b.default,route:v})}return a},j=[{path:"overview",label:"Quick Overview",element:L},{path:"information",label:"01 - Important Information",element:_},{path:"installation-guide",label:"02 - Installation",element:P},{path:"interface",label:"03 - Interface",element:M,isNew:!0},{path:"globaldatalayer",label:"04 - PageGlobalDataLayer",element:O},{path:"uilayer",label:"05 - UiLayer",element:R},{path:"content-area",label:"06 - Content Area",element:B},{path:"color-settings-and-dark-mode",label:"07 - Color Settings and Dark Mode",element:D},{path:"modules-in-depth",label:"08 - Modules in depth",element:V,isNew:!0},{path:"dev-project",label:"09 - Development Project",element:E}],T=[{title:"Auth",routes:[{path:"general-auth-module",label:"General authentication module",element:z},{path:"dummy-authenticator",label:"DummyAuthenticator",element:N},{path:"aws-authenticator",label:"AwsAuthenticator",element:H}]},{title:"Router",routes:[{path:"general-router-module",label:"General router module",element:q},{path:"react-router-router",label:"ReactRouterRouter",element:W}]},{title:"Internationalizer",routes:[{path:"general-internationalization-module",label:"General internationalizer module",element:K},{path:"i18nextInternationalizer",label:"I18nextInternationalizer",element:Y}]},{title:"Cookie Banner",routes:[{path:"general-cookie-banner-module",label:"General cookie banner module",element:J},{path:"default-cookie-banner",label:"DefaultCookieBanner",element:Q}]}],k=[{path:"faq",label:"FAQ",element:F}],ze=()=>{const a=$(j,T,k);return e.jsxs(e.Fragment,{children:[e.jsxs(ee,{children:[e.jsx(C,{routes:j}),e.jsx("h3",{children:"Need help?"}),e.jsx(C,{routes:k}),e.jsx(Fe,{title:"Modules"}),e.jsx(Re,{groups:T})]}),e.jsx(te,{routes:a,getPages:He})]})};export{ze as default,He as getPages};
