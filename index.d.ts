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
    'solid' |
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

type InputSizes =
    'xs' |
    'sm' |
    'md' |
    'lg' |
    'xl';

interface HeaderOption {
    0: string;
    1: string;
    2: boolean;
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

interface DropdownProps {
    menu: string[];
}

interface InputProps {
    size: InputSizes;
    disabled?: boolean;
}

const WuX: {
    /**Header fixed margin */
    HeaderMargin: (props: any) => JSX.Element;
    /**Header element  
     *   
     * The parameter `props` should be an object with `title` and `option` as properties  
     * `title` is a string as the title  
     * `option` is an array and links each item of the array to the second item displayed on the right with the first item as the title  
     *   
     * This is an example of a Header element :
     * ```js
     * <Wux.Header
     *     title='WuX-UI Debug Page'
     *     option={[
     *         ['Offical Page', 'https://wux-ui.tk/'],
     *         ['Github', 'https://github.com/wux-ui/wux-ui']
     *     ]}
     * />
     * ```
     * 
     * @param {HeaderProps} props an object with `title` and `option` as properties
     */
    Header: (props: HeaderProps) => JSX.Element;
    /**Container element */
    Container: (props: any) => JSX.Element;
    /**Row element
     *   
     * The parameter `props` should be an object with `size` and `number` as properties  
     * `size` and `number` should be two strings or two arrays of the same length  
     * `number` must be a string between 1 and 12 or an array of strings between 1 and 12
     *   
     * These are two examples of the Row element :
     * ```js
     * //string
     * <WuX.Row size='md' number='2'></WuX.Row>
     * //array
     * <WuX.Row size={['md', 'sm']} number={['4', '2']}></WuX.Row>
     * ```
     * 
     * @param {RowProps} props an object with `size` and `number` as properties
     */
    Row: (props: RowProps) => JSX.Element;
    /**Col element */
    Col: (props: any) => JSX.Element;
    /**Alert element
     *   
     * The parameter `props` should be an object with `type` as property  
     * `type` is a string
     *   
     * This is an example of a Alert element :
     * ```js
     * <WuX.Alert type='primary'>Primary</WuX.Alert>
     * ```
     * 
     * @param {AlertProps} props an object with `type` as property
     */
    Alert: (props: AlertProps) => JSX.Element;
    /**Button element
     *   
     * The parameter `props` should be an object with `type` as property  
     * `type` is a string
     *   
     * This is an example of a Button element :
     * ```js
     * <WuX.Button type='primary'>Primary</WuX.Button>
     * ```
     * 
     * @param {ButtonProps} props an object with `type` as property
     */
    Button: (props: ButtonProps) => JSX.Element;
    /**Breadcrumb element
     *   
     * The parameter `props` should be an object with `item` as property  
     * `item` is a string or array
     *   
     * This is an example of a Breadcrumb element :
     * ```js
     * <WuX.Breadcrumb item={['Home', 'Explore', 'Download', 'About']} />
     * ```
     * 
     * @param {BreadcrumbProps} props an object with `item` as property
     */
    Breadcrumb: (props: BreadcrumbProps) => JSX.Element;
    /**Card element */
    Card: (props: CardProps) => JSX.Element;
    /**Dialog element */
    Dialog: (props: DialogProps) => JSX.Element;
    /**Dropdown element */
    Dropdown: (props: DropdownProps) => JSX.Element;
    /**Input element */
    Input: (props: InputProps) => JSX.Element;
}

export default WuX;