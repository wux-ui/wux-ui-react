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

type RowSizes =
    'xs' |
    'sm' |
    'md' |
    'lg' |
    'xl';

type RowNumbers =
    '1' |
    '2' |
    '3' |
    '4' |
    '5' |
    '6' |
    '7' |
    '8' |
    '9' |
    '10' |
    '11' |
    '12';

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

interface RowProps {
    size: RowSizes | RowSizes[];
    number: RowNumbers | RowNumbers[];
}

interface BreadcrumbProps {
    item: string | string[];
}

interface CardProps {
    header: JSX.Element;
    body: string | JSX.Element;
    footer: JSX.Element;
}

interface DialogProps {
    id: string;
    header: string;
    body: string | JSX.Element;
    cancel: JSX.Element;
    footer: JSX.Element;
}

const WuX: {
    /**Header fixed margin */
    HeaderMargin: (props: any) => JSX.Element;
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
    Header: (props: HeaderProps) => JSX.Element;
    /**Container element */
    Container: (props: any) => JSX.Element;
    /**Row element */
    Row: (props: RowProps) => JSX.Element;
    /**Col element */
    Col: (props: any) => JSX.Element;
    /**Alert element */
    Alert: (props: AlertProps) => JSX.Element;
    /**Button element */
    Button: (props: ButtonProps) => JSX.Element;
    /**Breadcrumb element */
    Breadcrumb: (props: BreadcrumbProps) => JSX.Element;
    Button: (props: ButtonProps) => JSX.Element;
    /**Card element */
    Card: (props: CardProps) => JSX.Element;
    /**Dialog element */
    Dialog: (props: DialogProps) => JSX.Element;
}

export default WuX;