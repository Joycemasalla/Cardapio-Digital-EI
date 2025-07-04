import styled from 'styled-components';

// Shared Styles (Mantidos)
export const PageContainer = styled.div`
  padding-bottom: 2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text};
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-family: ${({ theme }) => theme.fonts.main};
  transition: ${({ theme }) => theme.transition};
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.backgroundCard};
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textDark};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: ${({ theme }) => theme.transition};
  width: 100%;
  
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.textDark};
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  background-color: rgba(255, 82, 82, 0.1);
  border: 1px solid rgba(255, 82, 82, 0.2);
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`;

// Menu Page Styles (Mantidos)
export const HeroSection = styled.div`
  height: 300px;
  background-image: url('https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 200px;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 80%;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.2rem;
  }
`;

// Admin Login Styles (Mantidos)
export const AdminContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem 0.5rem;
  }
`;

export const AdminForm = styled.form`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 100%;
  max-width: 400px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.5s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1.5rem;
    width: calc(100% - 2rem);
    max-width: 350px;
  }
`;

export const AdminTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0 2rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.3rem;
    margin: 0.8rem 0 1.5rem;
  }
`;

// Admin Dashboard Styles (Ajustados para responsividade da tabela)
export const AdminDashboardContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 72px);
`;

export const AdminSidebar = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 2rem 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 0.75rem 1rem;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
    
    &.active {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 60px;
    padding: 1rem 0;
    
    h3 {
      display: none;
    }
    
    li {
      text-align: center;
      padding: 0.75rem 0;
      font-size: 0.8rem;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const AdminContent = styled.div`
  flex: 1;
  padding: 2rem;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem;
  }
`;

export const AdminHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
    gap: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const AdminControls = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    justify-content: center;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

export const ProductsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  
  .actions {
    display: flex;
    gap: 0.5rem;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) { /* MUDADO: Breakpoint para aplicar o layout de lista compacta */
    display: block; /* Tabela como bloco */
    width: 100%; /* Ocupa a largura total */
    border: none; /* Remove bordas da tabela principal */
    overflow-x: hidden; /* Remove rolagem horizontal para o corpo da tabela */
    
    thead {
      display: none;
    }

    tbody {
      display: flex; /* Transforma tbody em flex container */
      flex-direction: column; /* Empilha os produtos verticalmente */
      gap: 0.8rem; /* Espaçamento entre os produtos (cards de lista) */
      width: 100%;
    }

    tr { /* Cada linha da tabela vira um card no estilo lista horizontal */
      display: flex;
      flex-direction: row; /* Layout horizontal para o produto */
      align-items: center; /* Alinha itens ao centro verticalmente */
      gap: 0.8rem; /* Espaçamento entre imagem e texto/ações */
      padding: 0.6rem; /* Padding interno do card reduzido */
      background-color: ${({ theme }) => theme.colors.backgroundCard};
      border-radius: ${({ theme }) => theme.borderRadius.medium};
      box-shadow: ${({ theme }) => theme.shadows.light};
      border: 1px solid rgba(255, 255, 255, 0.1);
      width: 100%; /* Ocupa a largura total */
      min-height: 70px; /* Altura mínima para o card na lista */
    }

    td { /* Células da tabela dentro do card de lista */
      display: flex;
      flex-direction: column; /* Conteúdo da célula empilhado */
      justify-content: center; /* Centraliza conteúdo verticalmente */
      padding: 0; /* REMOVIDO padding padrão para otimizar espaço */
      border: none;
      font-size: 0.8rem; /* Fonte menor */
      color: ${({ theme }) => theme.colors.text};
      white-space: normal; /* Permite quebra de linha */
      overflow: visible;
      text-overflow: clip;
      flex-shrink: 0; /* Impede que os itens internos da célula encolham muito */
      
      &::before { /* REMOVIDO: Labels não são mais necessários neste layout de lista */
        display: none;
      }

      &:nth-child(1) { /* Imagem */
        width: 50px; /* AJUSTADO: Largura da imagem */
        height: 50px; /* AJUSTADO: Altura da imagem */
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
      }

      &:nth-child(2) { /* Nome */
        flex-grow: 1; /* Permite que o nome cresça para ocupar espaço */
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
        font-size: 0.85rem; /* AJUSTADO: Fonte do nome */
        white-space: normal; /* AJUSTADO: Permite quebra de linha para o nome */
        overflow: hidden;
        text-overflow: ellipsis; /* Adiciona reticências se o nome for muito longo */
        padding-left: 0.4rem;
      }

      &:nth-child(3) { /* Categoria */
        display: none;
      }

      &:nth-child(4) { /* Preço/Variações */
        font-size: 0.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
        white-space: normal; /* AJUSTADO: Permite quebra de linha para o preço/variações */
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: auto;
        padding-right: 0.4rem;
      }

      &:last-child { /* Ações */
        flex-direction: row;
        justify-content: flex-end;
        padding: 0;
        border-top: none;
        margin-top: 0;
        gap: 0.4rem;
      }
    }
  }
  /* Responsivo para tablets */
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    
    thead, tbody, tr, th, td {
      white-space: nowrap;
    }
    
    th, td {
      padding: 0.8rem 0.5rem;
      font-size: 0.8rem;
    }
    
    th:nth-child(1), td:nth-child(1) { min-width: 70px; }
    th:nth-child(2), td:nth-child(2) { min-width: 120px; }
    th:nth-child(3), td:nth-child(3) { min-width: 90px; }
    th:nth-child(4), td:nth-child(4) { min-width: 90px; }
    th:nth-child(5), td:nth-child(5) { min-width: 80px; }
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
  font-size: 0.9rem;
  min-width: 80px;
  &:nth-child(1) { min-width: 80px; }
  &:nth-child(2) { min-width: 150px; }
  &:nth-child(3) { min-width: 120px; }
  &:nth-child(4) { min-width: 120px; }
  &:nth-child(5) { min-width: 100px; }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.8rem 0.5rem;
    font-size: 0.75rem;
    min-width: 60px;
    &:nth-child(1) { min-width: 70px; }
    &:nth-child(2) { min-width: 120px; }
    &:nth-child(3) { min-width: 90px; }
    &:nth-child(4) { min-width: 90px; }
    &:nth-child(5) { min-width: 80px; }
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.8rem 0.5rem;
    font-size: 0.75rem;
  }
`;

export const TableImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 40px;
    height: 40px;
  }
`;

export const ActionButton = styled.button`
  background-color: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.delete {
    color: ${({ theme }) => theme.colors.error};
    
    &:hover {
      background-color: rgba(255, 82, 82, 0.1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.3rem;
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const NoProducts = styled.div`
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  
  p {
    margin-bottom: 1.5rem;
  }
  
  button {
    margin: 0 auto;
  }
`;

export const ProductForm = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 90%;
  max-width: 500px;
  z-index: 1000;
  box-shadow: ${({ theme }) => theme.shadows.strong};
  max-height: 90vh;
  overflow-y: auto;
  
  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .form-select { /* Estilos para o select nativo (se ainda usado) */
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.text};
    padding: 0.75rem;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-family: ${({ theme }) => theme.fonts.main};
    transition: ${({ theme }) => theme.transition};
    
    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
    
    option {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
    }
  }
`;

export const FormTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const CloseFormButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

// Estilos para o editor de variações (Mantidos)
export const VariationsEditor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

export const VariationItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.03);
  padding: 0.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  .variation-input {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
    padding: 0.8rem;

    .variation-input {
      width: 100%;
    }

    ${ActionButton} {
      width: 100%;
      justify-content: center;
      margin-top: 0.5rem;
      padding: 0.6rem;
      font-size: 1rem;
    }
  }
`;

export const AddVariationButton = styled.button`
  background-color: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 1rem;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: #43a047;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
`;

// Estilos para o select customizado (copiados do CategoryQuickLinksStyles e exportados)
export const CustomSelectContainer = styled.div`
  width: 100%;
  max-width: 280px;
  position: relative;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 240px;
  }
`;

export const SelectLabel = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
  font-weight: 500;
  text-align: center;
`;

export const SelectButton = styled.button`
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.textDark};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 0.9rem 1rem;
  font-size: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadows.light};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}50;
  }

  &.open {
    border-color: ${({ theme }) => theme.colors.primary};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.95rem;
    padding: 0.7rem 0.9rem;
  }
`;

export const ChevronIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: rotate(0deg);

  &.rotated {
    transform: rotate(180deg);
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundCard};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-top: none;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.small};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
`;

export const DropdownItem = styled.li`
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.primaryLight};
  }

  &.selected {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.9rem;
    padding: 0.6rem 0.9rem;
  }
`;

// Estilos para o botão de abrir o Drawer (menu hambúrguer do admin)
export const AdminMenuToggleButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  cursor: pointer;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// Estilos para o Drawer lateral do admin (mobile)
export const AdminMobileDrawer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-300px')};
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
  transition: left 0.3s ease-in-out;
  z-index: 1100;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;

  ${AdminSidebar} {
    width: 100%;
    padding: 0;
    border: none;
  }

  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .drawer-title {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    font-weight: 600;
  }

  .drawer-close-button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.textSecondary};
    cursor: pointer;
    padding: 0.2rem;
    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .drawer-category-filter {
    margin-top: 1rem;
    margin-bottom: 2rem;
    ${CustomSelectContainer} {
      max-width: 100%;
    }
  }
`;

// Estilos para o overlay do drawer
export const AdminDrawerOverlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  transition: opacity 0.3s ease-in-out;
`;