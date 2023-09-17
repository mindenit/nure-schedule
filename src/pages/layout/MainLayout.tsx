import * as S from "./MainLayout.styles";

import { Logo } from "components/ui/Logo";

import { ImportContacts } from "@mui/icons-material";
import { Navbar } from "components/Navbar/Navbar";

import { Dialog } from "components/ui/Dialog";
import { List } from "components/ui/List";

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <S.MainLayoutContainer>
            <S.MainLayoutHeader>
                <Logo text="Розклад" />
            </S.MainLayoutHeader>
            <S.MainLayoutContent>{children}</S.MainLayoutContent>
            <S.MainLayoutFooter>
                <Navbar.Root>
                    <Navbar.Item isActive={true}>
                        <Navbar.Icon badgeCount={4}>
                            <ImportContacts />
                        </Navbar.Icon>
                        Label
                    </Navbar.Item>
                    <Navbar.Item>
                        <Navbar.Icon>
                            <ImportContacts />
                        </Navbar.Icon>
                        Label
                    </Navbar.Item>
                    <Navbar.Item>
                        <Navbar.Icon>
                            <ImportContacts />
                        </Navbar.Icon>
                        Label
                    </Navbar.Item>
                    <Navbar.Item>
                        <Navbar.Icon>
                            <ImportContacts />
                        </Navbar.Icon>
                        Label
                    </Navbar.Item>
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Navbar.Item>
                                <Navbar.Avatar src="https://i.pravatar.cc/80" />
                                User
                            </Navbar.Item>
                        </Dialog.Trigger>
                        <Dialog.Content>
                            <Dialog.Header title="sdsd" />
                            <List.Root>
                                <List.Item>
                                    <List.Header>Практичні роботи</List.Header>
                                </List.Item>
                            </List.Root>
                        </Dialog.Content>
                    </Dialog.Root>
                </Navbar.Root>
            </S.MainLayoutFooter>
        </S.MainLayoutContainer>
    );
};

export default MainLayout;
