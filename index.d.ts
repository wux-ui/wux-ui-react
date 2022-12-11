import React from 'react';

type HeaderTypes =
    'fixed';

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

type HeaderOption = {
    title: string;
    link: string;
    bold: boolean | undefined;
}

type JumbotronBtn<T> = [
    string,
    JSX.Element,
    React.AllHTMLAttributes<T> | undefined,
]

type BlankslateBtn<T> = [
    JSX.Element,
    React.AllHTMLAttributes<T> | undefined,
]

interface HeaderProps<T> extends React.HTMLAttributes<T> {
    type?: HeaderTypes;
    /**a string as the title */
    title: string;
    /**a button for displaying options on the mobile terminal */
    small?: string | JSX.Element;
    /**an array and links each item of the array to the second item displayed on the right with the first item as the title */
    option: (HeaderOption | JSX.Element)[];
}

interface AlertProps {
    /**a string */
    type: AlertTypes;
}

interface ButtonProps<T> extends React.ButtonHTMLAttributes<T> {
    /**a string or an array to specify the type of the Button element */
    WuXType: ButtonTypes | ButtonTypes[];
    JSXType: JSX.Element;
}

interface ButtonGroupProps<T> extends React.HTMLAttributes<T> {
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

interface CardProps<T> extends React.HTMLAttributes<T> {
    /**a string */
    type: CardTypes;
    /**a JSX element */
    header: JSX.Element;
    /**a string or a JSX element */
    body: string | JSX.Element;
    /**a JSX element */
    footer: JSX.Element;
}

interface DialogProps<T> extends React.DialogHTMLAttributes<T> {
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

interface InputProps<T> extends React.InputHTMLAttributes<T> {
    /**a string to specify the size of the Input element */
    WuXSize: InputSizes;
}

interface RadioProps<T> extends React.InputHTMLAttributes<T> {
    /**a JSX element to specify the link between the each options of Radio element */
    suffix?: string | JSX.Element;
    /**an array of string to specify options for the Radio element */
    children: string[];
}

interface SelectProps<T> extends React.SelectHTMLAttributes<T> {
    /**a JSX element to specify the value value of the option for each Select element */
    value?: string;
    /**an array of string to specify options for the Select element */
    children: string[];
}

interface LoadingButtonProps<T> extends React.ButtonHTMLAttributes<T> {
    type: 'button';
}

interface LoadingSpanProps<T> extends React.HTMLAttributes<T> {
    type: 'span';
}

interface JumbotronProps<T> {
    /**a JSX element */
    before: JSX.Element;
    /**a string or a JSX element */
    title: string | JSX.Element;
    /**a string or a JSX element to specify a subtitle */
    subtitle?: string | JSX.Element;
    /**JSX elements to specify the button style of the Jumbotron element */
    btn?: JumbotronBtn<T>[];
    /**a string */
    align: JumbotronAlign;
    /**a JSX element */
    after: JSX.Element;
}

interface JumbotronTitleBlodProps<T> extends React.HTMLAttributes<T> {
    type: JSX.Element;
}

interface ListProps<T> extends React.HTMLAttributes<T> {
    /**an array with ListTypes or an array composed of ListTypes */
    type: ListTypes[] | ListTypes[][];
    /**the list text displayed by the List element */
    children: string[];
}

interface ProgressProps<T> extends React.ProgressHTMLAttributes<T> {
    value: string | number;
    max: string | number;
}

interface TooltipProps<T> extends React.ButtonHTMLAttributes<T> {
    /**a JSX element to specify the button style of the Tooltip element */
    btn?: JSX.Element;
    /**a string of ListTypes */
    WuXType: TooltipTypes;
    /**a string */
    text: string;
}

interface TableProps<T> extends React.TableHTMLAttributes<T> { }

interface TagProps<T> extends React.HTMLAttributes<T> {
    type: TagTypes | TagTypes[];
}

interface BadgeProps<T> extends React.HTMLAttributes<T> { }

interface TabProps<T, N = T[]> extends React.HTMLAttributes<T> {
    /**an array of strings, which is displayed as the tab name of the Tab element */
    names: N;
    /**an array of strings or an array of JSX element, displayed as the page under the corresponding tab */
    children: (string | number | JSX.Element)[];
    forEach: (name: T, index: number, names: N) => string | number | JSX.Element;
}

interface BlankslateProps<T> extends React.HTMLAttributes<T> {
    /**a JSX element to specify the icon the Blankslate element */
    icon?: JSX.Element;
    /**a string or a JSX element */
    WuXTitle: string | JSX.Element;
    /**a string or a JSX element to specify a subtitle */
    subtitle?: string | JSX.Element;
    /**JSX elements to specify the button style of the Blankslate element  */
    btn?: BlankslateBtn<T>[];
}

interface CollapseProps<T> extends React.HTMLAttributes<T> {
    /**a string, which is displayed as the summary of the Collapse element */
    summary: string;
    /**a string or a JSX element, displayed as the collapse of the Collapse element */
    collapse: JSX.Element | string;
}

declare const WuX: {
    /**Header fixed margin */
    HeaderMargin: (props: any) => JSX.Element;
    /**Header element  
     *   
     * The parameter `props` should be an object with `title`, `small` and `option` as properties  
     * `title` is a string as the title  
     * `small` is a button for displaying options on the mobile terminal  
     * `option` is an array with {@link HeaderOption}  
     *   
     * This is an example of a Header element :
     * ```js
     * <WuX.Header
     *     title='WuX-UI-React Debug Page'
     *     small='Menu'
     *     option={[
                { title: 'Github', link: 'https://github.com/wux-ui/wux-ui-react-docs' },
                { title: 'Offical Page', link: 'https://react.wux-ui.tk/', bold: true },
                <JsxElement />
            ]}
     * />
     * ```
     * 
     * @param {HeaderProps} props an object with `title`, `small` and `option` as properties
     */
    Header<T>(props: HeaderProps<T>): JSX.Element;
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
     * The parameter `props` should be an object with `WuXType` as property  
     * `WuXType` is a string or an array to specify the type of the Button element  
     *   
     * This is an example of a Button element :
     * ```js
     * <WuX.Button WuXType='primary'>Primary</WuX.Button>
     * ```
     * 
     * @param {ButtonProps} props an object with `WuXType` as property
     */
    Button<T>(props: ButtonProps<T>): JSX.Element;
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
    ButtonGroup<T>(props: ButtonGroupProps<T>): JSX.Element;
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
    Card<T>(props: CardProps<T>): JSX.Element;
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
    Dialog<T>(props: DialogProps<T>): JSX.Element;
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
     * The parameter `props` should be an object with `WuXSize` as property  
     * `WuXSize` is a string to specify the size of the Input element  
     *   
     * This is an example of a Input element :
     * ```js
     * <WuX.Input WuXSize='xs'>xs</WuX.Input>
     * ```
     * 
     * @param {InputProps} props an object with `WuXSize` as property
     */
    Input<T>(props: InputProps<T>): JSX.Element;
    /**Textarea element */
    Textarea<T>(props: React.TextareaHTMLAttributes<T>): JSX.Element;
    /**Check element */
    Check<T>(props: React.InputHTMLAttributes<T>): JSX.Element;
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
    Radio<T>(props: RadioProps<T>): JSX.Element;
    /**Range element */
    Range<T>(props: React.InputHTMLAttributes<T>): JSX.Element;
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
    Select<T>(props: SelectProps<T>): JSX.Element;
    /**Upload element */
    Upload<T>(props: React.InputHTMLAttributes<T>): JSX.Element;
    /**Loading element */
    Loading<T>(props: LoadingButtonProps<T> | LoadingSpanProps<T>): JSX.Element;
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
    Jumbotron<T>(props: JumbotronProps<T>): JSX.Element;
    /**JumbotronTitleBlod element */
    JumbotronTitleBlod<T>(props: JumbotronTitleBlodProps<T>): JSX.Element;
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
    List<T>(props: ListProps<T>): JSX.Element;
    /**Progress element */
    Progress<T>(props: ProgressProps<T>): JSX.Element;
    /**Tooltip element
     *   
     * The parameter `props` should be an object with `WuXType` and `text` as properties  
     * `text` is a string  
     * `WuXType` is a string of ListTypes  
     * You can use `btn` to specify the button style of the Tooltip element  
     *   
     * This is an example of a Tooltip element :
     * ```js
     * <WuX.Tooltip WuXType='top' text='This is a Tooltip.'>Top</WuX.Tooltip>
     * ```
     * 
     * @param {TooltipProps} props an object with `WuXType` and `text` as properties
     */
    Tooltip<T>(props: TooltipProps<T>): JSX.Element;
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
    Table<T>(props: TableProps<T>): JSX.Element;
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
    Tag<T>(props: TagProps<T>): JSX.Element;
    /**Badge element */
    Badge<T>(props: BadgeProps<T>): JSX.Element;
    /**Search element */
    Search<T>(props: React.InputHTMLAttributes<T>): JSX.Element;
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
    Tab<T>(props: TabProps<T>): JSX.Element;
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
    Blankslate<T>(props: BlankslateProps<T>): JSX.Element;
    /**Typo element */
    Typo<T>(props: React.HTMLAttributes<T>): JSX.Element;
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
    Collapse<T>(props: CollapseProps<T>): JSX.Element;
}

export default WuX;

export const supports: (component: string) => boolean;