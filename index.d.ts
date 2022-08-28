import React from 'react';

type AlertTypes =
    'primary' |
    'secondary' |
    'success' |
    'info' |
    'warning' |
    'error' |
    'light' |
    'icon' |
    'option-group';

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
    'block' |
    'active';

type ButtonGroupTypes =
    'xs' |
    'sm' |
    'md' |
    'lg' |
    'xl';

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

type ListTypes =
    'action' |
    'focus';

type TooltipTypes =
    'top' |
    'bottom' |
    'right' |
    'left';

type TagTypes =
    'warning' |
    'error' |
    'close';

type CardTypes =
    'hover' |
    'flat';

type JumbotronAlign =
    'left' |
    'center' |
    'right';

type HeaderOption = [
    string,
    string,
    boolean | undefined,
]

type JumbotronBtn = [
    string,
    JSX.Element,
    React.AllHTMLAttributes<T> | undefined,
]

type BlankslateBtn = [
    JSX.Element,
    React.AllHTMLAttributes<T> | undefined,
]

interface HeaderProps {
    /**a string as the title */
    title: string;
    /**a button for displaying options on the mobile terminal */
    small?: string | JSX.Element;
    /**an array and links each item of the array to the second item displayed on the right with the first item as the title */
    option: HeaderOption[];
}

interface AlertProps {
    /**a string */
    type: AlertTypes;
}

interface ButtonProps extends React.ButtonHTMLAttributes<T> {
    /**a string or an array to specify the type of the Button element */
    type: ButtonTypes | ButtonTypes[];
}

interface ButtonGroupProps extends React.HTMLAttributes<T> {
    /**a string */
    type: ButtonGroupTypes | ButtonGroupTypes[];
}

interface RowProps {
    size: RowSizes | RowSizes[];
    /**a string between 1 and 12 or an array of strings between 1 and 12 */
    number: RowNumbers | RowNumbers[];
}

interface BreadcrumbProps {
    /**a string or array */
    item: string | string[];
}

interface CardProps extends React.HTMLAttributes<T> {
    /**a string */
    type: CardTypes;
    /**a JSX element */
    header: JSX.Element;
    /**a string or a JSX element */
    body: string | JSX.Element;
    /**a JSX element */
    footer: JSX.Element;
}

interface DialogProps extends React.DialogHTMLAttributes<T> {
    /**a string */
    id: string;
    /**a string */
    header: string;
    /**a string or a JSX element */
    body: string | JSX.Element;
    /**a JSX element */
    cancel: JSX.Element;
    /**a JSX element */
    footer: JSX.Element;
    /**a JSX element to specify the button style of the Dialog element */
    btn?: JSX.Element;
}

interface DropdownProps {
    /**an array of string */
    menu: string[];
    /**a JSX element to specify the button style of the Dialog element */
    btn?: JSX.Element;
}

interface InputProps extends React.InputHTMLAttributes<T> {
    /**a string to specify the size of the Input element */
    size: InputSizes;
}

interface RadioProps extends React.InputHTMLAttributes<T> {
    /**a JSX element to specify the link between the each options of Radio element */
    suffix?: string | JSX.Element;
    /**an array of string to specify options for the Radio element */
    children: string[];
}

interface SelectProps extends React.SelectHTMLAttributes<T> {
    /**a JSX element to specify the value value of the option for each Select element */
    value?: string;
    /**an array of string to specify options for the Select element */
    children: string[];
}

interface LoadingButtonProps extends React.ButtonHTMLAttributes<T> {
    type: 'button';
}

interface LoadingSpanProps extends React.HTMLAttributes<T> {
    type: 'span';
}

interface JumbotronProps {
    /**a JSX element */
    before: JSX.Element;
    /**a string or a JSX element */
    title: string | JSX.Element;
    /**a string or a JSX element to specify a subtitle */
    subtitle?: string | JSX.Element;
    /**JSX elements to specify the button style of the Jumbotron element */
    btn?: JumbotronBtn[];
    /**a string */
    align: JumbotronAlign;
    /**a JSX element */
    after: JSX.Element;
}

interface JumbotronTitleBlodProps extends React.HTMLAttributes<T> {
    type: JSX.Element;
}

interface ListProps extends React.HTMLAttributes<T> {
    /**an array with ListTypes or an array composed of ListTypes */
    type: ListTypes[] | ListTypes[][];
    /**the list text displayed by the List element */
    children: string[];
}

interface ProgressProps extends React.ProgressHTMLAttributes<T> {
    value: string | number;
    max: string | number;
}

interface TooltipProps extends React.ButtonHTMLAttributes<T> {
    /**a JSX element to specify the button style of the Tooltip element */
    btn?: JSX.Element;
    /**a string of ListTypes */
    type: TooltipTypes;
    /**a string */
    text: string;
}

interface TableProps extends React.TableHTMLAttributes<T> {
    children: object;
}

interface TagProps extends React.HTMLAttributes<T> {
    type: TagTypes | TagTypes[];
}

interface BadgeProps extends React.HTMLAttributes<T> { }

interface TabProps extends React.HTMLAttributes<T> {
    /**an array of strings, which is displayed as the tab name of the Tab element */
    name: string[];
    /**an array of strings or an array of JSX element, displayed as the page under the corresponding tab */
    children: string[] | JSX.Element[];
}

interface BlankslateProps extends React.HTMLAttributes<T> {
    /**a JSX element to specify the icon the Blankslate element */
    icon?: JSX.Element;
    /**a string or a JSX element */
    title: string | JSX.Element;
    /**a string or a JSX element to specify a subtitle */
    subtitle?: string | JSX.Element;
    /**JSX elements to specify the button style of the Blankslate element  */
    btn?: BlankslateBtn[];
}

interface CollapseProps extends React.HTMLAttributes<T> {
    /**a string, which is displayed as the summary of the Collapse element */
    summary: string;
    /**a string or a JSX element, displayed as the collapse of the Collapse element */
    collapse: JSX.Element | string;
}

const WuX: {
    /**Header fixed margin */
    HeaderMargin: (props: any) => JSX.Element;
    /**Header element  
     *   
     * The parameter `props` should be an object with `title`, `small` and `option` as properties  
     * `title` is a string as the title  
     * `small` is a button for displaying options on the mobile terminal  
     * `option` is an array and links each item of the array to the second item displayed on the right with the first item as the title  
     *   
     * This is an example of a Header element :
     * ```js
     * <WuX.Header
     *     title='WuX-UI for React.js Debug Page'
     *     small='Menu'
     *     option={[
     *         ['Github', 'https://github.com/wux-ui/wux-ui-react'],
     *         ['Offical Page', 'https://wux-ui.tk/', true]
     *     ]}
     * />
     * ```
     * 
     * @param {HeaderProps} props an object with `title`, `small` and `option` as properties
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
     * `type` is a string or an array to specify the type of the Button element  
     *   
     * This is an example of a Button element :
     * ```js
     * <WuX.Button type='primary'>Primary</WuX.Button>
     * ```
     * 
     * @param {ButtonProps} props an object with `type` as property
     */
    Button: (props: ButtonProps) => JSX.Element;
    /**ButtonGroup element
     *   
     * The parameter `props` should be an object with `type` as property  
     * `type` is a string
     *   
     * This is an example of a ButtonGroup element :
     * ```js
     * <WuX.ButtonGroup type='xs'>
     *     <WuX.Button type='active'>1</WuX.Button>
     *     <WuX.Button>2</WuX.Button>
     *     <WuX.Button>3</WuX.Button>
     *     <WuX.Button>4</WuX.Button>
     * </WuX.ButtonGroup>
     * ```
     * 
     * @param {ButtonGroupProps} props an object with `type` as property 
     */
    ButtonGroup: (props: ButtonGroupProps) => JSX.Element;
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
    /**Card element
     *   
     * The parameter `props` should be an object with `header`, `body` and `footer` as properties  
     * `type` is a string
     * `header` and `footer` is a JSX element  
     * `body` is a string or a JSX element  
     *   
     * This is an example of a Card element :
     * ```js
     * <WuX.Card
     *     header={<img src="https://image.moeblog.gq/i/2022/07/16/nsdzkk.svg" alt='card img' />}
     *     body='Hello'
     *     footer={<>
     *         <WuX.Button type={['primary', 'text']}>Test</WuX.Button>
     *         <WuX.Button type={['secondary', 'text']}>Test</WuX.Button>
     *     </>}
     * />
     * ```
     * 
     * @param {CardProps} props an object with `header`, `body` and `footer` as properties
     */
    Card: (props: CardProps) => JSX.Element;
    /**Dialog element
     *   
     * The parameter `props` should be an object with `id`, `header`, `body`, `cancel` and `footer` as properties  
     * `id` and `header` is a string  
     * `body` is a string or a JSX element  
     * `cancel` and `footer` is a JSX element  
     * You can use `btn` to specify the button style of the Dialog element  
     *   
     * This is an example of a Dialog element :
     * ```js
     * <WuX.Dialog
     *     id='testDialog'
     *     header='Test!'
     *     body='Test!'
     *     cancel={<WuX.Button type={['secondary', 'text']}>Cancel</WuX.Button>}
     *     footer={<WuX.Button>Send</WuX.Button>}
     *     btn={<WuX.Button type='primary' />}
     * >OpenDialog</WuX.Dialog>
     * ```
     * 
     * @param {DialogProps} props an object with `id`, `header`, `body`, `cancel` and `footer` as properties
     */
    Dialog: (props: DialogProps) => JSX.Element;
    /**Dropdown element
     *   
     * The parameter `props` should be an object with `menu` as property  
     * `menu` is an array of string  
     * You can use `btn` to specify the button style of the Dropdown element  
     *   
     * These are two examples of a Dropdown element :
     * ```js
     * //normal
     * <WuX.Dropdown menu={['One', 'Two', 'Three']}>Dropdown!</WuX.Dropdown>
     * //with button type
     * <WuX.Dropdown
     *     menu={['One', 'Two', 'Three']}
     *     btn={<WuX.Button type='primary' />}
     * >Dropdown!</WuX.Dropdown>
     * ```
     * 
     * @param {DropdownProps} props an object with `menu` as property
     */
    Dropdown: (props: DropdownProps) => JSX.Element;
    /**Input element
     *   
     * The parameter `props` should be an object with `size` as property  
     * `size` is a string to specify the size of the Input element  
     *   
     * This is an example of a Input element :
     * ```js
     * <WuX.Input size='xs'>xs</WuX.Input>
     * ```
     * 
     * @param {InputProps} props an object with `size` as property
     */
    Input: (props: InputProps) => JSX.Element;
    /**Textarea element */
    Textarea: (props: React.TextareaHTMLAttributes<T>) => JSX.Element;
    /**Check element */
    Check: (props: React.InputHTMLAttributes<T>) => JSX.Element;
    /**Radio element
     *   
     * The parameter `props` should be an object with `children` as property  
     * `children` is an array of string to specify options for the Radio element  
     * You can use `suffix` to specify the link between the each options of Radio element  
     *   
     * These are two examples of a Radio element :
     * ```js
     * //normal
     * <WuX.Radio>{[' Test!', ' Test!']}</WuX.Radio>
     * //with the suffix
     * <WuX.Radio suffix={<br />}>{[' Test!', ' Test!']}</WuX.Radio>
     * ```
     * 
     * @param {RadioProps} props an object with `children` as property
     */
    Radio: (props: RadioProps) => JSX.Element;
    /**Range element */
    Range: (props: React.InputHTMLAttributes<T>) => JSX.Element;
    /**Select element
     *   
     * The parameter `props` should be an object with `children` as property  
     * `children` is an array of string to specify options for the Select element  
     * You can use `value` to specify the value value of the option for each Select element  
     *   
     * These are two examples of a Select element :
     * ```js
     * //normal
     * <WuX.Select>{['我是', '一个一个', 'Homo啊']}</WuX.Select>
     * //with the value
     * <WuX.Select value={['me', 'one', 'homo']}>{['我是', '一个一个', 'Homo啊']}</WuX.Select>
     * ```
     * 
     * @param {SelectProps} props an object with `children` as property
     */
    Select: (props: SelectProps) => JSX.Element;
    /**Upload element */
    Upload: (props: React.InputHTMLAttributes<T>) => JSX.Element;
    /**Loading element */
    Loading: (props: LoadingButtonProps | LoadingSpanProps) => JSX.Element;
    /**Jumbotron element
     *   
     * The parameter `props` should be an object with `title` as property  
     * `title` is a string or a JSX element  
     * Use `subtitle` to specify a subtitle, it is a string or a JSX element  
     * You can use `btn` to specify the button style of the Jumbotron element  
     * You can use `before` or `after` to specify the element that before or after the Jumbotron element  
     *   
     * This is an example of a Jumbotron element :
     * ```js
     * <WuX.Jumbotron
     *     title={<>
     *     <b className="wux-jumbotron-title-bold">WuX-UI</b>
     *     is a CSS Framework,
     *     <br />
     *     but more.
     *     </>}
     *     subtitle=' WuX-UI is a Modern CSS Framework. '
     *     btn={[
     *         ['https://wux-ui.tk/', <WuX.Button type='round'>Offical Website</WuX.Button>],
     *         ['https://github.com/wux-ui/wux-ui', <WuX.Button type={['secondary', 'text']}>Github</WuX.Button>]
     *     ]}
     * />
     * ```
     * 
     * @param {JumbotronProps} props an object with `title` as property
     */
    Jumbotron: (props: JumbotronProps) => JSX.Element;
    /**JumbotronTitleBlod element */
    JumbotronTitleBlod: (props: JumbotronTitleBlodProps) => JSX.Element;
    /**List element
     *   
     * The parameter `props` should be an object with `type` and `children` as properties  
     * `type` is an array with ListTypes or an array composed of ListTypes  
     * `children` is the list text displayed by the List element  
     *   
     * This is an example of a List element :
     * ```js
     * <WuX.List type={[
     *     'action',
     *     'action',
     *     'action',
     *     ['action', 'focus']
     * ]}>
     *     {[
     *         'Hello',
     *         'World',
     *         '你好，世界！',
     *         'Focus'
     *     ]}
     * </WuX.List>
     * ```
     * 
     * @param {ListProps} props an object with `type` and `children` as properties
     */
    List: (props: ListProps) => JSX.Element;
    /**Progress element */
    Progress: (props: ProgressProps) => JSX.Element;
    /**Tooltip element
     *   
     * The parameter `props` should be an object with `type` and `text` as properties  
     * `text` is a string  
     * `type` is a string of ListTypes  
     * You can use `btn` to specify the button style of the Tooltip element  
     *   
     * This is an example of a Tooltip element :
     * ```js
     * <WuX.Tooltip type='top' text='This is a Tooltip.'>Top</WuX.Tooltip>
     * ```
     * 
     * @param {TooltipProps} props an object with `type` and `text` as properties
     */
    Tooltip: (props: TooltipProps) => JSX.Element;
    /**Table element
     *   
     * This is an example of a Table element :
     * ```js
     * <WuX.Table>{{
    *     '#': ['1', '2', '3'],
    *     A: ['QwQ', 'QwQ', 'QwQ'],
    *     B: ['AwA', 'AwA', 'AwA'],
    *     C: ['OwO', 'OwO', 'OwO'],
    * }}</WuX.Table>
     * ```
     */
    Table: (props: TableProps) => JSX.Element;
    /**Tag element
     *   
     * These are some examples of Tag element :
     * ```js
     * <WuX.Tag>For</WuX.Tag>
     * <WuX.Tag type='error'>Me</WuX.Tag>
     * <WuX.Tag type='warning'>
     *     9999
     *     <WuX.Tag type='close'>X</WuX.Tag>
     * </WuX.Tag>
     * ```
     */
    Tag: (props: TagProps) => JSX.Element;
    /**Badge element */
    Badge: (props: BadgeProps) => JSX.Element;
    /**Search element */
    Search: (props: React.InputHTMLAttributes<T>) => JSX.Element;
    /**Tab element
     *    
     * The parameter `props` should be an object with `name` and `children` as properties  
     * `name` is an array of strings, which is displayed as the tab name of the Tab element  
     * `children` is an array of strings or an array of JSX element, displayed as the page under the corresponding tab
     *   
     * This is an example of a Tab element :
     * ```js
     * <WuX.Tab name={['1', '2', '3']}>{[
     *     'Test For #1',
     *     'Test For #2',
     *     'Test For #3',
     * ]}</WuX.Tab>
     * ```
     * 
     * @param {TabProps} props an object with `name` and `children` as properties
     */
    Tab: (props: TabProps) => JSX.Element;
    /**Blankslate element
     *   
     * The parameter `props` should be an object with `title` as property  
     * `title` is a string or a JSX element  
     * Use `subtitle` to specify a subtitle, it is a string or a JSX element  
     * You can use `icon` to specify the icon the Blankslate element, it is a JSX element  
     * You can use `btn` to specify the button style of the Blankslate element  
     *   
     * This is an example of a Blankslate element :
     * ```js
     * <WuX.Blankslate
     *     icon={<img src="https://react-dev.wux-ui.tk/icon.svg" className="wux-blankslate-icon" alt='icon' />}
     *     title='This is a Blankslate!'
     *     subtitle='Yeah, Blankslate!'
     *     btn={[
     *         [<WuX.Button>Great!</WuX.Button>],
     *         [<WuX.Button type='text'>Uhh...</WuX.Button>]
     *     ]}
     * />
     * ```
     * 
     * @param {BlankslateProps} props an object with `title` as property
     */
    Blankslate: (props: BlankslateProps) => JSX.Element;
    /**Typo element */
    Typo: (props: React.HTMLAttributes<T>) => JSX.Element;
    /**Collapse element
     *    
     * The parameter `props` should be an object with `summary` and `collapse` as properties  
     * `summary` is a string, which is displayed as the summary of the Collapse element  
     * `collapse` is a string or a JSX element, displayed as the collapse of the Collapse element
     *   
     * This is an example of a Collapse element :
     * ```js
     * ```
     * 
     * @param {CollapseProps} props an object with `summary` and `collapse` as properties
     */
    Collapse: (props: CollapseProps) => JSX.Element;
}

export default WuX;