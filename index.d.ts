type AlertTypes =
    'primary' |
    'secondary' |
    'success' |
    'info' |
    'warning' |
    'error' |
    'light' |
    'icon';

type ButtonTypes =
    'primary' |
    'secondary' |
    'success' |
    'info' |
    'warning' |
    'error' |
    'light' |
    'outline' |
    'text' |
    'xs' |
    'sm' |
    'md' |
    'lg' |
    'xl' |
    'square' |
    'default' |
    'round' |
    'block';

interface HeaderOption {
    0: string
    1: string
}

interface HeaderProps {
    /**a string show as title  */
    title: string;
    /**an Array show as links at right  
     * `HeaderOption[0]` is the link title  
     * `HeaderOption[1]` is the link
     */
    option?: HeaderOption[];
}

interface AlertProps {
    type: AlertTypes;
}

interface ButtonProps {
    type: ButtonTypes | ButtonTypes[];
    disabled?: boolean;
}

const Wux: {
    /**Basic element */
    Basic: (props: any) => JSX.Element;
    /**Header element  
     *   
     * The param `props` should be an object with `title` and `option` as properties  
     * `title` is a string show as title  
     * `option` is an Array show as links at right  
     *   
     * This is a Header element template :
     * ```js
     * <Wux.Header
     *     title='WuX-UI Debug Page'
     *     option={[
     *         ['Offical Page', 'https://wux-ui.tk/'],
     *         ['Github', 'https://github.com/wux-ui/wux-ui']
     *     ]}
     * />
     * ```
     */
    Header: (props: HeaderProps) => JSX.Element,
    /**Col element */
    Col: (props: any) => JSX.Element;
    /**Alert element */
    Alert: (props: AlertProps) => JSX.Element;
    /**Button element */
    Button: (props: ButtonProps) => JSX.Element;
}

export default Wux;