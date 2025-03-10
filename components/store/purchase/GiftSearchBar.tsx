import { useEffect, Dispatch, SetStateAction } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoIosCloseCircle } from 'react-icons/io';
import useSearchBar from 'hooks/useSearchBar';
import styles from 'styles/main/SearchBar.module.scss';

export default function GiftSearchBar({
  setRecipient,
}: {
  setRecipient: Dispatch<SetStateAction<string>>;
}) {
  const {
    keyword,
    setKeyword,
    keywordHandler,
    showDropDown,
    setShowDropDown,
    searchResult,
    searchBarRef,
    handleKeyDown,
  } = useSearchBar();

  useEffect(() => {
    if (keyword === '') {
      setRecipient('');
    }
  }, [keyword]);

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    intraId: string
  ) => {
    setKeyword(intraId);
    setRecipient(intraId);
    setShowDropDown(false);
  };

  return (
    <div id={styles.gift} className={styles.searchBar} ref={searchBarRef}>
      <input
        type='text'
        onChange={keywordHandler}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowDropDown(true)}
        placeholder='선물할 유저 검색하기'
        maxLength={15}
        value={keyword}
      />
      <div className={styles.icons}>
        {keyword ? (
          <span className={styles.reset} onClick={() => setKeyword('')}>
            <IoIosCloseCircle />
          </span>
        ) : (
          <span>
            <GoSearch />
          </span>
        )}
      </div>
      {showDropDown && keyword && (
        <div className={styles.dropdown}>
          {searchResult.length ? (
            searchResult.map((intraId: string) => (
              <div key={intraId} onClick={(e) => handleClick(e, intraId)}>
                {intraId}
              </div>
            ))
          ) : (
            <div>검색 결과가 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
}
